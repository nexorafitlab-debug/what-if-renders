import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function schoolGate(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#8ab8e8', '#5a8ac0'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#4a5a6a');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#2e3844');
  floorLines(g, GY + 6, E.H);
  rr(g, E.W * 0.40, 120, 340, 150, 6); g.fillStyle = '#f2ead8'; g.fill();
  text(g, 'SCHOOL', E.W * 0.40 + 340 / 2, 120 + 150 * 0.42, { size: 30, color: '#2a2f42', font: FONTS.ui, weight: 900 });
  text(g, 'gate closes 4pm', E.W * 0.40 + 340 / 2, 120 + 150 * 0.72, { size: 24, color: '#c94a3a', font: FONTS.ui, weight: 700 });
  windowFrame(g, { x: E.W * 0.06, y: E.H * 0.14, w: 300, h: 260, mullions: [0.5, 0.5] }, (gg2) => {
    gg2.fillStyle = linGrad(gg2, 0, 0, 0, 260, ['#d8ecff', '#7ab0e0']);
    gg2.fillRect(0, 0, 300, 260);
    sun(gg2, 120, 240, 30, '#fff3d0', '#ffcf8a', 3);
  });
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
