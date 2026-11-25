import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function schoolyard(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#7ab0e0', '#4a7ab0'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#3a4a5a');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#2a3430');
  floorLines(g, GY + 6, E.H);
  windowFrame(g, { x: E.W * 0.68, y: E.H * 0.12, w: 380, h: 300, mullions: [0.5, 0.5] }, (gg2) => {
    gg2.fillStyle = linGrad(gg2, 0, 0, 0, 300, ['#d8ecff', '#7ab0e0']);
    gg2.fillRect(0, 0, 380, 300);
    sun(gg2, 120, 240, 30, '#fff3d0', '#ffcf8a', 3);
  });
  rr(g, E.W * 0.06, 130, 420, 200, 8); g.fillStyle = '#24402e'; g.fill();
  g.strokeStyle = '#8a6a3a'; g.lineWidth = 8; g.stroke();
  text(g, 'GYM', E.W * 0.06 + 210, 210, { size: 40, color: '#fff6e0', font: FONTS.ui, weight: 900 });
  text(g, 'window broken!', E.W * 0.06 + 210, 280, { size: 30, color: '#ff5a4a', font: FONTS.ui, weight: 900 });
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
