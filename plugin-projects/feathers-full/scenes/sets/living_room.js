import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function livingRoom(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#33261d', '#1c130c'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#3a2c22');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#241a12');
  floorLines(g, GY + 6, E.H);
  windowFrame(g, { x: E.W * 0.06, y: E.H * 0.10, w: 360, h: 300, mullions: [0.5, 0.5] }, (gg2) => {
    gg2.fillStyle = linGrad(gg2, 0, 0, 0, 300, ['#f7c98a', '#c96a5a']);
    gg2.fillRect(0, 0, 360, 300);
    sun(gg2, 120, 240, 30, '#fff3d0', '#ffcf8a', 3);
  });
  rr(g, E.W * 0.62, 120, 260, 150, 6); g.fillStyle = '#f2ead8'; g.fill();
  text(g, 'FAMILY', E.W * 0.62 + 260 / 2, 120 + 150 * 0.42, { size: 30, color: '#2a2f42', font: FONTS.ui, weight: 900 });
  text(g, 'photo wall', E.W * 0.62 + 260 / 2, 120 + 150 * 0.72, { size: 24, color: '#c94a3a', font: FONTS.ui, weight: 700 });
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
