Add-Type -AssemblyName System.Drawing

$dir = 'G:\bdm-web\public\images\news'
$files = @('tin-tuc-moi-1.png', 'tin-tuc-moi-2.png', 'tin-tuc-moi-3.png', 'tin-tuc-moi-4.png', 'tin-tuc-moi-5.png', 'tin-tuc-moi-6.png')
$targetRatio = 16.0 / 9.0

foreach ($name in $files) {
    $path = Join-Path $dir $name
    $img = [System.Drawing.Image]::FromFile($path)
    $w = $img.Width
    $h = $img.Height
    $ratio = $w / $h

    if ([math]::Abs($ratio - $targetRatio) -lt 0.01) {
        Write-Output "${name}: already 16/9, skip"
        $img.Dispose()
        continue
    }

    $bmp = New-Object System.Drawing.Bitmap $img
    if ($ratio -gt $targetRatio) {
        # image is wider than 16/9 -> extend height
        $newW = $w
        $newH = [int]([math]::Round($w / $targetRatio))
        $offX = 0
        $offY = [int][math]::Round(($newH - $h) / 2.0)
        # sample background colors from top row (middle) and bottom row (middle)
        $topColor = $bmp.GetPixel([int]($w / 2), 0)
        $botColor = $bmp.GetPixel([int]($w / 2), $h - 1)
    } else {
        # image is taller than 16/9 -> extend width
        $newH = $h
        $newW = [int]([math]::Round($h * $targetRatio))
        $offX = [int][math]::Round(($newW - $w) / 2.0)
        $offY = 0
        # sample left column and right column (middle height)
        $topColor = $bmp.GetPixel(0, [int]($h / 2))
        $botColor = $bmp.GetPixel($w - 1, [int]($h / 2))
    }

    $canvas = New-Object System.Drawing.Bitmap $newW, $newH
    $g = [System.Drawing.Graphics]::FromImage($canvas)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

    # fill with gradient from topColor -> botColor (or left->right)
    if ($ratio -gt $targetRatio) {
        $rectTop = New-Object System.Drawing.Rectangle 0, 0, $newW, $offY
        $rectBot = New-Object System.Drawing.Rectangle 0, ($offY + $h), $newW, ($newH - $offY - $h)
        $brushTop = New-Object System.Drawing.SolidBrush $topColor
        $brushBot = New-Object System.Drawing.SolidBrush $botColor
        $g.FillRectangle($brushTop, $rectTop)
        $g.FillRectangle($brushBot, $rectBot)
        $brushTop.Dispose(); $brushBot.Dispose()
    } else {
        $rectL = New-Object System.Drawing.Rectangle 0, 0, $offX, $newH
        $rectR = New-Object System.Drawing.Rectangle ($offX + $w), 0, ($newW - $offX - $w), $newH
        $brushL = New-Object System.Drawing.SolidBrush $topColor
        $brushR = New-Object System.Drawing.SolidBrush $botColor
        $g.FillRectangle($brushL, $rectL)
        $g.FillRectangle($brushR, $rectR)
        $brushL.Dispose(); $brushR.Dispose()
    }

    $g.DrawImage($bmp, $offX, $offY, $w, $h)
    $g.Dispose()

    $img.Dispose()
    $bmp.Dispose()

    $canvas.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $canvas.Dispose()

    Write-Output "${name}: ${w}x${h} -> ${newW}x${newH}"
}
