import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function streetMorning(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#9cc8f0', '#6aa0d8'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#5a7aa0');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#3a4a3a');
  floorLines(g, GY + 6, E.H);
  windowFrame(g, { x: E.W * 0.06, y: E.H * 0.16, w: 300, h: 260, mullions: [0.5, 0.5] }, (gg2) => {
    gg2.fillStyle = linGrad(gg2, 0, 0, 0, 260, ['#ffe9b0', '#f7c98a']);
    gg2.fillRect(0, 0, 300, 260);
    sun(gg2, 120, 240, 30, '#fff3d0', '#ffcf8a', 3);
  });
  rr(g, E.W * 0.62, 130, 280, 160, 6); g.fillStyle = '#f2ead8'; g.fill();
  text(g, 'MAPLE ST', E.W * 0.62 + 280 / 2, 130 + 160 * 0.42, { size: 30, color: '#2a2f42', font: FONTS.ui, weight: 900 });
  text(g, 'morning', E.W * 0.62 + 280 / 2, 130 + 160 * 0.72, { size: 24, color: '#c94a3a', font: FONTS.ui, weight: 700 });
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
