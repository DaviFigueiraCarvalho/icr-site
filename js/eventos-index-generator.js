const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const eventsDir = path.join(rootDir, "media", "eventos");
const outputFile = path.join(eventsDir, "index.json");
const shouldWatch = process.argv.includes("--watch") || process.argv.includes("-w");

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".avif"]);
const videoExtensions = new Set([".mp4", ".webm", ".mov", ".m4v", ".ogg"]);

function walkDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkDirectory(absolutePath));
      continue;
    }

    files.push(absolutePath);
  }

  return files;
}

function toPublicPath(absolutePath) {
  return path.relative(rootDir, absolutePath).split(path.sep).join("/");
}

function toEventsPagePath(absolutePath) {
  return `../${toPublicPath(absolutePath)}`;
}

function normalizeType(extension) {
  if (imageExtensions.has(extension)) return "image";
  if (videoExtensions.has(extension)) return "video";
  return "";
}

function buildEventsIndex() {
  if (!fs.existsSync(eventsDir)) {
    fs.mkdirSync(eventsDir, { recursive: true });
  }

  const allFiles = walkDirectory(eventsDir);

  const items = allFiles
    .filter((filePath) => path.basename(filePath).toLowerCase() !== "index.json")
    .map((filePath) => {
      const extension = path.extname(filePath).toLowerCase();
      const type = normalizeType(extension);

      if (!type) return null;

      return {
        name: path.basename(filePath),
        src: toEventsPagePath(filePath),
        type
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" }));

  fs.writeFileSync(outputFile, JSON.stringify(items, null, 2), "utf8");

  console.log(`Indice gerado com ${items.length} itens em: ${toPublicPath(outputFile)}`);
}

function startWatchMode() {
  if (!fs.existsSync(eventsDir)) {
    fs.mkdirSync(eventsDir, { recursive: true });
  }

  let debounceTimer = null;

  const rebuild = () => {
    try {
      buildEventsIndex();
    } catch (error) {
      console.error("Falha ao atualizar indice:", error.message);
    }
  };

  rebuild();
  console.log(`Monitorando alteracoes em: ${toPublicPath(eventsDir)}`);

  const watcher = fs.watch(eventsDir, { recursive: true }, (_eventType, filename) => {
    const changedFile = typeof filename === "string" ? filename : "";

    if (path.basename(changedFile).toLowerCase() === "index.json") {
      return;
    }

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(rebuild, 180);
  });

  process.on("SIGINT", () => {
    watcher.close();
    console.log("Watch finalizado.");
    process.exit(0);
  });
}

if (shouldWatch) {
  startWatchMode();
} else {
  buildEventsIndex();
}
