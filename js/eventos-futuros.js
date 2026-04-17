const EVENTS_API_PATH = "../media/eventos/index.php";
const EVENTS_INDEX_PATH = "../media/eventos/index.json";

function resolveMediaSrc(rawSrc) {
  if (typeof rawSrc !== "string") return "";

  const normalized = rawSrc.trim().replace(/\\/g, "/");
  if (!normalized) return "";

  const hasKnownPrefix = /^(https?:|data:|blob:|\/|\.\/|\.\.\/)/i.test(normalized);
  return hasKnownPrefix ? normalized : `../${normalized}`;
}

function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const storageKey = "icr-theme";
  const themes = ["auto", "light", "dark"];

  const savedTheme = localStorage.getItem(storageKey);
  const initialTheme = themes.includes(savedTheme) ? savedTheme : "auto";
  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "auto";
    const currentIndex = themes.indexOf(current);
    const nextTheme = themes[(currentIndex + 1) % themes.length];

    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "light") {
      themeToggle.textContent = "Light";
      return;
    }

    if (theme === "dark") {
      themeToggle.textContent = "Dark";
      return;
    }

    themeToggle.textContent = "Auto";
  }
}

function setupMobileNav() {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupAutoReloadOnEnter() {
  let debounceTimer = null;

  const scheduleReload = () => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      loadAndRenderEvents();
    }, 120);
  };

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      scheduleReload();
    }
  });

  window.addEventListener("focus", scheduleReload);
}

function createMediaCard(item, onInvalidMedia) {
  const card = document.createElement("article");
  card.className = "events-card";

  const mediaSrc = resolveMediaSrc(item.src);

  if (!mediaSrc) {
    return null;
  }

  if (item.type === "video") {
    const video = document.createElement("video");
    video.className = "events-media";
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;
    video.src = mediaSrc;
    video.addEventListener("error", () => {
      onInvalidMedia(card);
    }, { once: true });
    card.appendChild(video);
  } else {
    const image = document.createElement("img");
    image.className = "events-media";
    image.loading = "lazy";
    image.decoding = "async";
    image.src = mediaSrc;
    image.alt = item.name || "Banner de evento";
    image.addEventListener("error", () => {
      onInvalidMedia(card);
    }, { once: true });
    card.appendChild(image);
  }

  return card;
}

function renderEmptyMessage(grid, message, isError = false) {
  grid.innerHTML = "";
  const emptyMessage = document.createElement("p");
  emptyMessage.className = `events-empty${isError ? " error" : ""}`;
  emptyMessage.textContent = message;
  grid.appendChild(emptyMessage);
}

async function loadAndRenderEvents() {
  const grid = document.getElementById("eventsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  try {
    const items = await fetchEventsList();
    const normalized = Array.isArray(items) ? items : [];

    if (!normalized.length) {
      renderEmptyMessage(grid, "Nenhum banner encontrado em media/eventos.");
      return;
    }

    const fragment = document.createDocumentFragment();
    const removeInvalidCard = (card) => {
      if (card && card.parentElement) {
        card.remove();
      }

      if (!grid.querySelector(".events-card")) {
        renderEmptyMessage(grid, "Nenhum banner valido encontrado em media/eventos.");
      }
    };

    normalized.forEach((item) => {
      if (!item || !item.src || !item.type) return;

      const card = createMediaCard(item, removeInvalidCard);
      if (!card) return;

      fragment.appendChild(card);
    });

    if (!fragment.childNodes.length) {
      renderEmptyMessage(grid, "Nenhum banner valido encontrado em media/eventos.");
      return;
    }

    grid.appendChild(fragment);
  } catch (error) {
    renderEmptyMessage(grid, "Nao foi possivel carregar os banners de eventos.", true);
  }
}

async function fetchEventsList() {
  const cacheBuster = `t=${Date.now()}`;
  const sources = [EVENTS_API_PATH, EVENTS_INDEX_PATH];

  for (const source of sources) {
    try {
      const response = await fetch(`${source}?${cacheBuster}`, { cache: "no-store" });

      if (!response.ok) {
        continue;
      }

      const payload = await response.json();
      if (Array.isArray(payload)) {
        return payload;
      }
    } catch (_error) {
      continue;
    }
  }

  throw new Error("Nenhuma fonte de eventos disponivel");
}

loadAndRenderEvents();
setupThemeToggle();
setupMobileNav();
setupAutoReloadOnEnter();
