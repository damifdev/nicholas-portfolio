# download-assets.ps1
# Run this from the root of your nicholas-portfolio project
# (the same folder that contains the "client" folder)

$targetDir = "client\public\assets"

if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    Write-Host "Created folder: $targetDir"
}

$baseUrl = "https://nicholasux-gxz8p489.manus.space/manus-storage"

$files = @(
    "hero-portrait-dark_696c199f.webp",
    "portrait-real-2_45f9f0c1.webp",
    "osa-monogram_a2054be2.webp",
    "hero-texture_9b2bfce5.webp",
    "section-divider_12b73b02.png",
    "beyond-screen_d69848a5.png",
    "learning-direction_05f69280.webp",
    "cv-updated_84840555.pdf",
    "ai-creative-banner_5a38019b.png",
    "ai-exp-flyer_e1ec4f76.png",
    "ai-exp-landing_672885a2.png",
    "ai-exp-logo_b18a01b0.png",
    "ai-exp-ui_cc1c8506.png",
    "averae-home-desktop_c3e9b056.webp",
    "averae-shop-desktop_63342222.webp",
    "averae-product-desktop_fd128306.webp",
    "gameplay_initial_b85a3c21.webp",
    "gameplay_e4_0ddad981.webp",
    "gameplay_middlegame_8bc5b73b.webp",
    "board_modern_31dd4d2a.webp",
    "board_midnight_theme_5e13a1b2.webp",
    "piece_style_gallery_b5045939.webp",
    "player_desk_cb775a03.webp",
    "player_desk_quests_50ecfa80.webp",
    "chess_hero_0002023c.mp4",
    "jigsaw-puzzle_chooser_2161043e.webp",
    "jigsaw-gameplay_initial_207b45ce.webp",
    "jigsaw-gameplay_progress_3cd51132.webp",
    "jigsaw-gameplay_complete_8e332a14.webp",
    "jigsaw-settings_modal_c75eb1b2.webp",
    "asset-dashboard_7287d154.webp",
    "asset-list_0ba0ba37.webp",
    "asset-login_1da0ea41.webp",
    "gi-website-full_51ff9683.webp",
    "agent-welcome_c3622be8.webp",
    "agent-profile_84484459.webp",
    "mpos-payment_e49f4328.webp",
    "mpos-connect_9ace4053.webp",
    "mpos-scan_877049a5.webp",
    "bancassurance-agent-dashboard_2814b4d6.webp",
    "project-cgsul_d614551d.webp"
)

$total = $files.Count
$count = 0
$failed = @()

foreach ($file in $files) {
    $count++
    $url = "$baseUrl/$file"
    $outPath = Join-Path $targetDir $file
    Write-Host "[$count/$total] Downloading $file ..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $outPath -ErrorAction Stop
    } catch {
        Write-Host "  FAILED: $file" -ForegroundColor Red
        $failed += $file
    }
}

Write-Host ""
if ($failed.Count -eq 0) {
    Write-Host "All $total files downloaded successfully to $targetDir" -ForegroundColor Green
} else {
    Write-Host "$($failed.Count) file(s) failed to download:" -ForegroundColor Yellow
    $failed | ForEach-Object { Write-Host "  - $_" }
}
