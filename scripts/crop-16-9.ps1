Add-Type -AssemblyName System.Drawing

# Crop từng ảnh: bóc phần content chính (bỏ padding trắng cũ), sau đó crop top-bottom hoặc left-right
# để đạt 16/9 fill toàn khung.
#
# tin-tuc-moi-1.png: hiện 1774x998 — content chính 1774x887 ở center (padding top/bottom 55/56px).
#   Để ra 16/9 từ 1774x887: giữ height, crop width → target 1577x887.
# tin-tuc-moi-2/3.png: hiện 1820x1024 — content chính 1536x1024 ở center (padding 142px 2 bên).
#   Để ra 16/9 từ 1536x1024: giữ width, crop height → target 1536x864.

$dir = 'G:\bdm-web\public\images\news'
$targetRatio = 16.0 / 9.0

$jobs = @(
    @{ name = 'tin-tuc-moi-1.png'; contentW = 1774; contentH = 887 }, # horizontal padding (top/bot)
    @{ name = 'tin-tuc-moi-2.png'; contentW = 1536; contentH = 1024 }, # vertical padding (left/right)
    @{ name = 'tin-tuc-moi-3.png'; contentW = 1536; contentH = 1024 }
)

foreach ($j in $jobs) {
    $path = Join-Path $dir $j.name
    $img = [System.Drawing.Image]::FromFile($path)
    $curW = $img.Width
    $curH = $img.Height
    $img.Dispose()

    # Step 1: extract content chính (center crop về contentW x contentH)
    $srcX = [int](($curW - $j.contentW) / 2)
    $srcY = [int](($curH - $j.contentH) / 2)

    # Step 2: từ content, chọn vùng 16/9 center
    $ratio = $j.contentW / $j.contentH
    if ($ratio -gt $targetRatio) {
        # content rộng hơn 16/9 -> crop left/right
        $finalW = [int]([math]::Round($j.contentH * $targetRatio))
        $finalH = $j.contentH
        $cropX = $srcX + [int](($j.contentW - $finalW) / 2)
        $cropY = $srcY
    } else {
        # content cao hơn 16/9 -> crop top/bottom
        $finalW = $j.contentW
        $finalH = [int]([math]::Round($j.contentW / $targetRatio))
        $cropX = $srcX
        $cropY = $srcY + [int](($j.contentH - $finalH) / 2)
    }

    $src = [System.Drawing.Image]::FromFile($path)
    $dst = New-Object System.Drawing.Bitmap $finalW, $finalH
    $g = [System.Drawing.Graphics]::FromImage($dst)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    $srcRect = New-Object System.Drawing.Rectangle $cropX, $cropY, $finalW, $finalH
    $dstRect = New-Object System.Drawing.Rectangle 0, 0, $finalW, $finalH
    $g.DrawImage($src, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $src.Dispose()

    $dst.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $dst.Dispose()

    Write-Output "$($j.name): ${curW}x${curH} -> ${finalW}x${finalH}"
}
