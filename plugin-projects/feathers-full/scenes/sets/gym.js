import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function gym(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#54402c', '#33261a'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#4a3a26');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#2e2418');
  floorLines(g, GY + 6, E.H);
  rr(g, E.W * 0.36, 110, 500, 150, 8); g.fillStyle = '#24402e'; g.fill();
  g.strokeStyle = '#8a6a3a'; g.lineWidth = 8; g.stroke();
  text(g, 'SCORE 12 - 10', E.W * 0.36 + 250, 190, { size: 36, color: '#ffd76a', font: FONTS.ui, weight: 900 });
  rr(g, E.W * 0.08, E.H * 0.66, 320, 34, 8); g.fillStyle = '#6a4a2a'; g.fill();
  fillRect(g, E.W * 0.08 + 10, E.H * 0.66 + 34, 16, 120, '#4a2e1e');
  fillRect(g, E.W * 0.08 + 320 - 26, E.H * 0.66 + 34, 16, 120, '#4a2e1e');
  rr(g, E.W * 0.72, E.H * 0.66, 320, 34, 8); g.fillStyle = '#6a4a2a'; g.fill();
  fillRect(g, E.W * 0.72 + 10, E.H * 0.66 + 34, 16, 120, '#4a2e1e');
  fillRect(g, E.W * 0.72 + 320 - 26, E.H * 0.66 + 34, 16, 120, '#4a2e1e');
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
