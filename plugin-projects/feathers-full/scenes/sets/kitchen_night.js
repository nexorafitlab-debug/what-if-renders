import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function kitchenNight(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#0a0716', '#120e28'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#14101f');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#0c0912');
  floorLines(g, GY + 6, E.H);
  windowFrame(g, { x: E.W * 0.74, y: E.H * 0.10, w: 420, h: 330, mullions: [0.5, 0.5] }, (gg2) => {
    gg2.fillStyle = linGrad(gg2, 0, 0, 0, 330, ['#1a2440', '#0e1526']);
    gg2.fillRect(0, 0, 420, 330);
    sun(gg2, 300, 90, 30, '#fff3d0', '#ffcf8a', 3);
  });
  rr(g, E.W * 0.28, 110, 500, 200, 8); g.fillStyle = '#24402e'; g.fill();
  g.strokeStyle = '#8a6a3a'; g.lineWidth = 8; g.stroke();
  text(g, 'MIDNIGHT', E.W * 0.28 + 250, 190, { size: 40, color: '#cfe2ff', font: FONTS.ui, weight: 900 });
  text(g, 'games till 12', E.W * 0.28 + 250, 260, { size: 30, color: '#9fb4d8', font: FONTS.ui, weight: 900 });
  rr(g, E.W * 0.16, E.H * 0.62, E.W * 0.60, 34, 8); g.fillStyle = '#6a4a2a'; g.fill();
  fillRect(g, E.W * 0.16 + 10, E.H * 0.62 + 34, 16, 120, '#4a2e1e');
  fillRect(g, E.W * 0.16 + E.W * 0.60 - 26, E.H * 0.62 + 34, 16, 120, '#4a2e1e');
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
