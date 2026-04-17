<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

$rootDir = __DIR__;
$imageExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg', 'avif'];
$videoExtensions = ['mp4', 'webm', 'mov', 'm4v', 'ogg'];

$items = [];

$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($rootDir, FilesystemIterator::SKIP_DOTS)
);

foreach ($iterator as $fileInfo) {
    if (!$fileInfo->isFile()) {
        continue;
    }

    $fileName = $fileInfo->getFilename();
    $lowerName = strtolower($fileName);

    if ($lowerName === 'index.json' || $lowerName === 'index.php') {
        continue;
    }

    $extension = strtolower($fileInfo->getExtension());
    $type = '';

    if (in_array($extension, $imageExtensions, true)) {
        $type = 'image';
    } elseif (in_array($extension, $videoExtensions, true)) {
        $type = 'video';
    }

    if ($type === '') {
        continue;
    }

    $absolutePath = $fileInfo->getPathname();
    $relativePath = str_replace('\\', '/', substr($absolutePath, strlen($rootDir) + 1));

    $items[] = [
        'name' => $fileName,
        'src' => '../media/eventos/' . $relativePath,
        'type' => $type,
    ];
}

usort($items, static function (array $a, array $b): int {
    return strcasecmp($a['name'], $b['name']);
});

echo json_encode($items, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
