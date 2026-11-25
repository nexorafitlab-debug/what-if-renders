import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function cafeteriaQueue(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#333848', '#1e2230'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#2c3040');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#1a1d29');
  floorLines(g, GY + 6, E.H);
  rr(g, E.W * 0.30, 110, 700, 180, 8); g.fillStyle = '#24402e'; g.fill();
  g.strokeStyle = '#8a6a3a'; g.lineWidth = 8; g.stroke();
  text(g, 'LUNCH TODAY', E.W * 0.30 + 350, 190, { size: 40, color: '#ffd76a', font: FONTS.ui, weight: 900 });
  text(g, 'pasta · salad · juice', E.W * 0.30 + 350, 250, { size: 30, color: '#cfe2ff', font: FONTS.ui, weight: 900 });
  rr(g, E.W * 0.10, E.H * 0.58, E.W * 0.80, 34, 8); g.fillStyle = '#4a3626'; g.fill();
  fillRect(g, E.W * 0.10 + 10, E.H * 0.58 + 34, 16, 120, '#4a2e1e');
  fillRect(g, E.W * 0.10 + E.W * 0.80 - 26, E.H * 0.58 + 34, 16, 120, '#4a2e1e');
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
