import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function parkBench(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#7ab88a', '#4a8a5a'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#2a4a2e');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#1a2e1c');
  floorLines(g, GY + 6, E.H);
  rr(g, E.W * 0.30, E.H * 0.66, 420, 34, 8); g.fillStyle = '#6a4a2a'; g.fill();
  fillRect(g, E.W * 0.30 + 10, E.H * 0.66 + 34, 16, 120, '#4a2e1e');
  fillRect(g, E.W * 0.30 + 420 - 26, E.H * 0.66 + 34, 16, 120, '#4a2e1e');
  rr(g, E.W * 0.70, 130, 240, 150, 6); g.fillStyle = '#f2ead8'; g.fill();
  text(g, 'PARK', E.W * 0.70 + 240 / 2, 130 + 150 * 0.42, { size: 30, color: '#2a2f42', font: FONTS.ui, weight: 900 });
  text(g, 'quiet corner', E.W * 0.70 + 240 / 2, 130 + 150 * 0.72, { size: 24, color: '#c94a3a', font: FONTS.ui, weight: 700 });
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
