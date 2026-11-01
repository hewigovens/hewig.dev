import QRCode from 'qrcode';

const BACKGROUND = '#2e3233';
const MODULE = '#ffffff';
const QUIET_ZONE = 4;
const FINDER_SIZE = 7;
/** Logo diameter as a share of the code's width. */
const LOGO_RATIO = 0.19;
/** Modules cleared around the logo so it doesn't touch the pattern. */
const LOGO_GAP = 0.7;

const cellPath = (x: number, y: number, isOn: (x: number, y: number) => boolean) => {
  const up = isOn(x, y - 1);
  const down = isOn(x, y + 1);
  const left = isOn(x - 1, y);
  const right = isOn(x + 1, y);
  // Round only the corners with no neighbour, so runs of modules merge into blobs.
  const r = 0.5;
  const tl = !up && !left ? r : 0;
  const tr = !up && !right ? r : 0;
  const br = !down && !right ? r : 0;
  const bl = !down && !left ? r : 0;
  const arc = (radius: number, dx: number, dy: number) =>
    radius ? `a${radius} ${radius} 0 0 1 ${dx} ${dy}` : '';

  return [
    `M${x + tl} ${y}`,
    `H${x + 1 - tr}`,
    arc(tr, tr, tr),
    `V${y + 1 - br}`,
    arc(br, -br, br),
    `H${x + bl}`,
    arc(bl, -bl, -bl),
    `V${y + tl}`,
    arc(tl, tl, -tl),
    'Z',
  ].join('');
};

/**
 * Renders a QR code at build time as an inline SVG: white rounded modules on a
 * dark tile, with ring finder patterns and a centred logo. Uses error
 * correction Q so the codewords hidden by the logo stay recoverable.
 */
export const renderQrSvg = (text: string, logoHref: string, label: string) => {
  const { modules } = QRCode.create(text, { errorCorrectionLevel: 'Q' });
  const { size } = modules;
  const center = size / 2;
  const logoRadius = (size * LOGO_RATIO) / 2;

  const inFinder = (x: number, y: number) =>
    (x < FINDER_SIZE && y < FINDER_SIZE) ||
    (x >= size - FINDER_SIZE && y < FINDER_SIZE) ||
    (x < FINDER_SIZE && y >= size - FINDER_SIZE);
  const inLogo = (x: number, y: number) =>
    Math.hypot(x + 0.5 - center, y + 0.5 - center) < logoRadius + LOGO_GAP;
  const isOn = (x: number, y: number) =>
    x >= 0 &&
    y >= 0 &&
    x < size &&
    y < size &&
    !inFinder(x, y) &&
    !inLogo(x, y) &&
    modules.get(y, x) === 1;

  let body = '';
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (isOn(x, y)) body += cellPath(x, y, isOn);
    }
  }

  const finders = [
    [FINDER_SIZE / 2, FINDER_SIZE / 2],
    [size - FINDER_SIZE / 2, FINDER_SIZE / 2],
    [FINDER_SIZE / 2, size - FINDER_SIZE / 2],
  ]
    .map(
      ([cx, cy]) =>
        `<circle cx="${cx}" cy="${cy}" r="3" fill="none" stroke="${MODULE}"/>` +
        `<circle cx="${cx}" cy="${cy}" r="1.5" fill="${MODULE}"/>`,
    )
    .join('');

  const total = size + QUIET_ZONE * 2;
  const logoSize = logoRadius * 2;
  // Inline SVGs share one id namespace, so key the clip to this code.
  const clipId = `qr-logo-${text.slice(-8)}`;

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-QUIET_ZONE} ${-QUIET_ZONE} ${total} ${total}" role="img" aria-label="${label}">` +
    `<rect x="${-QUIET_ZONE}" y="${-QUIET_ZONE}" width="${total}" height="${total}" rx="${total * 0.1}" fill="${BACKGROUND}"/>` +
    `<path d="${body}" fill="${MODULE}"/>${finders}` +
    `<clipPath id="${clipId}"><circle cx="${center}" cy="${center}" r="${logoRadius}"/></clipPath>` +
    `<image href="${logoHref}" x="${center - logoRadius}" y="${center - logoRadius}" width="${logoSize}" height="${logoSize}" clip-path="url(#${clipId})"/>` +
    `</svg>`
  );
};
