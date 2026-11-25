import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function voidScience(g, t, info, params = {}) {
  const m = mood('dusk');
  const GY = E.H * 0.86, CX = E.W / 2;
  backdrop(g, ['#0a0716', '#120e28', '#060510'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  stars(g, t, { seed: 13, count: 170, area: [0, 0, E.W, E.H * 0.75], color: '#dfe8ff' });
  stars(g, t * 0.6, { seed: 47, count: 60, area: [0, E.H * 0.4, E.W, E.H * 0.6], color: '#ffd76a' });
  glow(g, CX, E.H * 1.02, 700, '#9fd8ff', 0.10);
  glow(g, CX, E.H * 1.02, 420, '#ffedb0', 0.10);
  veil(g, '#000', 0.06);
  return { GY, CX, M: m };
}
