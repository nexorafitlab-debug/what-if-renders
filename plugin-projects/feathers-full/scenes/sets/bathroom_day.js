import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function bathroomDay(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#cfe4f5', '#9dbfdd'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#b8d4e8');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#7a9ab5');
  floorLines(g, GY + 6, E.H);
  windowFrame(g, { x: E.W * 0.80, y: E.H * 0.08, w: 280, h: 240, mullions: [0.5, 0.5] }, (gg2) => {
    gg2.fillStyle = linGrad(gg2, 0, 0, 0, 240, ['#d8ecff', '#7ab0e0']);
    gg2.fillRect(0, 0, 280, 240);
    sun(gg2, 120, 240, 30, '#fff3d0', '#ffcf8a', 3);
  });
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
