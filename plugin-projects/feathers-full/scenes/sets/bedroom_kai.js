import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function bedroomKai(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#241c33', '#17101f'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#2a2138');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#191223');
  floorLines(g, GY + 6, E.H);
  windowFrame(g, { x: E.W * 0.70, y: E.H * 0.10, w: 380, h: 300, mullions: [0.5, 0.5] }, (gg2) => {
    gg2.fillStyle = linGrad(gg2, 0, 0, 0, 300, ['#d8ecff', '#7ab0e0']);
    gg2.fillRect(0, 0, 380, 300);
    sun(gg2, 120, 240, 30, '#fff3d0', '#ffcf8a', 3);
  });
  rr(g, E.W * 0.06, 130, 200, 240, 6); g.fillStyle = '#800020'; g.fill();
  text(g, 'GAMES', E.W * 0.06 + 200 / 2, 130 + 240 * 0.42, { size: 30, color: '#fff6e0', font: FONTS.ui, weight: 900 });
  text(g, 'level up', E.W * 0.06 + 200 / 2, 130 + 240 * 0.72, { size: 24, color: '#c94a3a', font: FONTS.ui, weight: 700 });
  rr(g, E.W * 0.20, 130, 200, 240, 6); g.fillStyle = '#1c5a3a'; g.fill();
  text(g, 'FOOTBALL', E.W * 0.20 + 200 / 2, 130 + 240 * 0.42, { size: 30, color: '#fff6e0', font: FONTS.ui, weight: 900 });
  text(g, 'final soon', E.W * 0.20 + 200 / 2, 130 + 240 * 0.72, { size: 24, color: '#c94a3a', font: FONTS.ui, weight: 700 });
  rr(g, E.W * 0.44, E.H * 0.30, 340, 260, 6); g.fillStyle = '#3a2a1a'; g.fill();
  fillRect(g, E.W * 0.44 + 14, E.H * 0.30 + 16, 34, 62, '#c94a3a');
  fillRect(g, E.W * 0.44 + 66, E.H * 0.30 + 16, 34, 62, '#e8b23a');
  fillRect(g, E.W * 0.44 + 118, E.H * 0.30 + 16, 34, 62, '#4a9a6a');
  fillRect(g, E.W * 0.44 + 170, E.H * 0.30 + 16, 34, 62, '#4a7ac9');
  fillRect(g, E.W * 0.44 + 222, E.H * 0.30 + 16, 34, 62, '#8a6ad0');
  fillRect(g, E.W * 0.44 + 274, E.H * 0.30 + 16, 34, 62, '#e07856');
  fillRect(g, E.W * 0.44 + 14, E.H * 0.30 + 96, 34, 62, '#c94a3a');
  fillRect(g, E.W * 0.44 + 66, E.H * 0.30 + 96, 34, 62, '#e8b23a');
  fillRect(g, E.W * 0.44 + 118, E.H * 0.30 + 96, 34, 62, '#4a9a6a');
  fillRect(g, E.W * 0.44 + 170, E.H * 0.30 + 96, 34, 62, '#4a7ac9');
  fillRect(g, E.W * 0.44 + 222, E.H * 0.30 + 96, 34, 62, '#8a6ad0');
  fillRect(g, E.W * 0.44 + 274, E.H * 0.30 + 96, 34, 62, '#e07856');
  fillRect(g, E.W * 0.44 + 14, E.H * 0.30 + 176, 34, 62, '#c94a3a');
  fillRect(g, E.W * 0.44 + 66, E.H * 0.30 + 176, 34, 62, '#e8b23a');
  fillRect(g, E.W * 0.44 + 118, E.H * 0.30 + 176, 34, 62, '#4a9a6a');
  fillRect(g, E.W * 0.44 + 170, E.H * 0.30 + 176, 34, 62, '#4a7ac9');
  fillRect(g, E.W * 0.44 + 222, E.H * 0.30 + 176, 34, 62, '#8a6ad0');
  fillRect(g, E.W * 0.44 + 274, E.H * 0.30 + 176, 34, 62, '#e07856');
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
