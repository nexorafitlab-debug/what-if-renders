import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function officeCoach(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#453626', '#2a1f14'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#3a2e22');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#221a12');
  floorLines(g, GY + 6, E.H);
  windowFrame(g, { x: E.W * 0.72, y: E.H * 0.10, w: 360, h: 300, mullions: [0.5, 0.5] }, (gg2) => {
    gg2.fillStyle = linGrad(gg2, 0, 0, 0, 300, ['#d8ecff', '#7ab0e0']);
    gg2.fillRect(0, 0, 360, 300);
    sun(gg2, 120, 240, 30, '#fff3d0', '#ffcf8a', 3);
  });
  rr(g, E.W * 0.06, 130, 420, 200, 8); g.fillStyle = '#24402e'; g.fill();
  g.strokeStyle = '#8a6a3a'; g.lineWidth = 8; g.stroke();
  text(g, 'COACH', E.W * 0.06 + 210, 210, { size: 40, color: '#fff6e0', font: FONTS.ui, weight: 900 });
  text(g, 'my office. now.', E.W * 0.06 + 210, 280, { size: 30, color: '#ff5a4a', font: FONTS.ui, weight: 900 });
  rr(g, E.W * 0.30, E.H * 0.60, 500, 34, 8); g.fillStyle = '#5a3a26'; g.fill();
  fillRect(g, E.W * 0.30 + 10, E.H * 0.60 + 34, 16, 120, '#4a2e1e');
  fillRect(g, E.W * 0.30 + 500 - 26, E.H * 0.60 + 34, 16, 120, '#4a2e1e');
  rr(g, E.W * 0.06, E.H * 0.42, 300, 260, 6); g.fillStyle = '#3a2a1a'; g.fill();
  fillRect(g, E.W * 0.06 + 14, E.H * 0.42 + 16, 34, 62, '#c94a3a');
  fillRect(g, E.W * 0.06 + 66, E.H * 0.42 + 16, 34, 62, '#e8b23a');
  fillRect(g, E.W * 0.06 + 118, E.H * 0.42 + 16, 34, 62, '#4a9a6a');
  fillRect(g, E.W * 0.06 + 170, E.H * 0.42 + 16, 34, 62, '#4a7ac9');
  fillRect(g, E.W * 0.06 + 222, E.H * 0.42 + 16, 34, 62, '#8a6ad0');
  fillRect(g, E.W * 0.06 + 274, E.H * 0.42 + 16, 34, 62, '#e07856');
  fillRect(g, E.W * 0.06 + 14, E.H * 0.42 + 96, 34, 62, '#c94a3a');
  fillRect(g, E.W * 0.06 + 66, E.H * 0.42 + 96, 34, 62, '#e8b23a');
  fillRect(g, E.W * 0.06 + 118, E.H * 0.42 + 96, 34, 62, '#4a9a6a');
  fillRect(g, E.W * 0.06 + 170, E.H * 0.42 + 96, 34, 62, '#4a7ac9');
  fillRect(g, E.W * 0.06 + 222, E.H * 0.42 + 96, 34, 62, '#8a6ad0');
  fillRect(g, E.W * 0.06 + 274, E.H * 0.42 + 96, 34, 62, '#e07856');
  fillRect(g, E.W * 0.06 + 14, E.H * 0.42 + 176, 34, 62, '#c94a3a');
  fillRect(g, E.W * 0.06 + 66, E.H * 0.42 + 176, 34, 62, '#e8b23a');
  fillRect(g, E.W * 0.06 + 118, E.H * 0.42 + 176, 34, 62, '#4a9a6a');
  fillRect(g, E.W * 0.06 + 170, E.H * 0.42 + 176, 34, 62, '#4a7ac9');
  fillRect(g, E.W * 0.06 + 222, E.H * 0.42 + 176, 34, 62, '#8a6ad0');
  fillRect(g, E.W * 0.06 + 274, E.H * 0.42 + 176, 34, 62, '#e07856');
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
