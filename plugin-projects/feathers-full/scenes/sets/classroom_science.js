import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function classroomScience(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#2a3a48', '#1a2836'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#22303a');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#16202a');
  floorLines(g, GY + 6, E.H);
  windowFrame(g, { x: E.W * 0.03, y: E.H * 0.10, w: 330, h: 300, mullions: [0.5, 0.5] }, (gg2) => {
    gg2.fillStyle = linGrad(gg2, 0, 0, 0, 300, ['#d8ecff', '#7ab0e0']);
    gg2.fillRect(0, 0, 330, 300);
    sun(gg2, 120, 240, 30, '#fff3d0', '#ffcf8a', 3);
  });
  rr(g, E.W * 0.28, 110, 820, 300, 8); g.fillStyle = '#24402e'; g.fill();
  g.strokeStyle = '#8a6a3a'; g.lineWidth = 8; g.stroke();
  text(g, 'BRAIN LAB', E.W * 0.28 + 410, 190, { size: 40, color: '#cfe2ff', font: FONTS.ui, weight: 900 });
  text(g, 'truth vs lie', E.W * 0.28 + 410, 270, { size: 30, color: '#9fd8ff', font: FONTS.ui, weight: 900 });
  rr(g, E.W * 0.30, E.H * 0.60, 380, 34, 8); g.fillStyle = '#3a5a6a'; g.fill();
  fillRect(g, E.W * 0.30 + 10, E.H * 0.60 + 34, 16, 120, '#4a2e1e');
  fillRect(g, E.W * 0.30 + 380 - 26, E.H * 0.60 + 34, 16, 120, '#4a2e1e');
  rr(g, E.W * 0.58, E.H * 0.60, 380, 34, 8); g.fillStyle = '#3a5a6a'; g.fill();
  fillRect(g, E.W * 0.58 + 10, E.H * 0.60 + 34, 16, 120, '#4a2e1e');
  fillRect(g, E.W * 0.58 + 380 - 26, E.H * 0.60 + 34, 16, 120, '#4a2e1e');
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
