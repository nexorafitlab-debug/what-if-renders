import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function busStop(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#8ab8e8', '#5a8ac0'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#4a5a6a');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#2e3844');
  floorLines(g, GY + 6, E.H);
  rr(g, E.W * 0.08, 130, 260, 160, 6); g.fillStyle = '#1c5a3a'; g.fill();
  text(g, 'BUS 12', E.W * 0.08 + 260 / 2, 130 + 160 * 0.42, { size: 30, color: '#fff6e0', font: FONTS.ui, weight: 900 });
  text(g, 'every 15 min', E.W * 0.08 + 260 / 2, 130 + 160 * 0.72, { size: 24, color: '#c94a3a', font: FONTS.ui, weight: 700 });
  rr(g, E.W * 0.30, E.H * 0.66, 420, 34, 8); g.fillStyle = '#5a4a3a'; g.fill();
  fillRect(g, E.W * 0.30 + 10, E.H * 0.66 + 34, 16, 120, '#4a2e1e');
  fillRect(g, E.W * 0.30 + 420 - 26, E.H * 0.66 + 34, 16, 120, '#4a2e1e');
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
