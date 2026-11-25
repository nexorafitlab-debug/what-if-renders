import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function officeWait(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#333850', '#20243a'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#2a2f42');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#191d2a');
  floorLines(g, GY + 6, E.H);
  rr(g, E.W * 0.44, 130, 300, 190, 6); g.fillStyle = '#f2ead8'; g.fill();
  text(g, 'COACH', E.W * 0.44 + 300 / 2, 130 + 190 * 0.42, { size: 30, color: '#2a2f42', font: FONTS.ui, weight: 900 });
  text(g, 'knock first', E.W * 0.44 + 300 / 2, 130 + 190 * 0.72, { size: 24, color: '#c94a3a', font: FONTS.ui, weight: 700 });
  rr(g, E.W * 0.80 + 0, E.H * 0.16, 120, 520, 6); g.fillStyle = '#3a4a6a'; g.fill();
  g.strokeStyle = 'rgba(0,0,0,0.35)'; g.lineWidth = 3; g.stroke();
  seg(g, [[E.W * 0.80 + 0 + 20, E.H * 0.16 + 40], [E.W * 0.80 + 0 + 60, E.H * 0.16 + 40]], 3, 'rgba(0,0,0,0.3)');
  seg(g, [[E.W * 0.80 + 0 + 20, E.H * 0.16 + 54], [E.W * 0.80 + 0 + 60, E.H * 0.16 + 54]], 3, 'rgba(0,0,0,0.3)');
  circle(g, E.W * 0.80 + 0 + 120 / 2, E.H * 0.16 + 520 * 0.75, 9, '#8a93a8');
  rr(g, E.W * 0.80 + 138, E.H * 0.16, 120, 520, 6); g.fillStyle = '#42527a'; g.fill();
  g.strokeStyle = 'rgba(0,0,0,0.35)'; g.lineWidth = 3; g.stroke();
  seg(g, [[E.W * 0.80 + 138 + 20, E.H * 0.16 + 40], [E.W * 0.80 + 138 + 60, E.H * 0.16 + 40]], 3, 'rgba(0,0,0,0.3)');
  seg(g, [[E.W * 0.80 + 138 + 20, E.H * 0.16 + 54], [E.W * 0.80 + 138 + 60, E.H * 0.16 + 54]], 3, 'rgba(0,0,0,0.3)');
  circle(g, E.W * 0.80 + 138 + 120 / 2, E.H * 0.16 + 520 * 0.75, 9, '#8a93a8');
  rr(g, E.W * 0.10, E.H * 0.66, 320, 34, 8); g.fillStyle = '#6a4a2a'; g.fill();
  fillRect(g, E.W * 0.10 + 10, E.H * 0.66 + 34, 16, 120, '#4a2e1e');
  fillRect(g, E.W * 0.10 + 320 - 26, E.H * 0.66 + 34, 16, 120, '#4a2e1e');
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
