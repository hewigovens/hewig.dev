#!/usr/bin/env bash
# Generate the default 1200x630 social-share card (public/og-image.png) — just
# the avatar centered on the brand gradient, no text — and the apple-touch-icon.
# Requires ImageMagick 7 (`magick`). Re-run after changing the avatar.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
AVATAR="$ROOT/public/assets/images/avatar.png"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# --- Circular avatar (420x420) ---
magick -size 420x420 xc:none -fill white -draw "circle 210,210 210,2" "$TMP/mask.png"
magick "$AVATAR" -resize 420x420^ -gravity center -extent 420x420 "$TMP/av.png"
magick "$TMP/av.png" "$TMP/mask.png" -alpha off -compose CopyOpacity -composite "$TMP/avatar.png"

# --- Compose the card: avatar centered + cyan ring, no text ---
magick -size 1200x630 gradient:'#0b1120'-'#111c30' "$TMP/bg.png"
magick "$TMP/bg.png" "$TMP/avatar.png" -geometry +390+105 -composite \
  -fill none -stroke '#22d3ee' -strokewidth 6 -draw "circle 600,315 600,97" -stroke none \
  -depth 8 -strip \
  "$ROOT/public/og-image.png"

# --- Apple touch icon (180x180) ---
magick "$AVATAR" -resize 180x180^ -gravity center -extent 180x180 "$ROOT/public/apple-touch-icon.png"

echo "Wrote public/og-image.png and public/apple-touch-icon.png"
