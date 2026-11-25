import { E, V, mood, backdrop, linGrad, alpha, veil, circle, rr, fillRect, seg, text, FONTS, glow } from '/engine/core.js';
import { sun, dust, windowFrame, floorLines, clock, clouds, stars } from '/engine/fx2d.js';

export function hallwayHome(g, t, info, params = {}) {
  const m = mood('interiorCool');
  const GY = E.H * 0.84, CX = E.W / 2;
  backdrop(g, ['#453626', '#241a10'], [-E.W, -E.H, E.W * 3, E.H * 3]);
  fillRect(g, -E.W, 0, E.W * 3, GY, '#4a3a2a');
  fillRect(g, -E.W, GY, E.W * 3, E.H, '#2a1f16');
  floorLines(g, GY + 6, E.H);
  rr(g, E.W * 0.08, 140, 180, 220, 6); g.fillStyle = '#f2ead8'; g.fill();
  text(g, 'HOME', E.W * 0.08 + 180 / 2, 140 + 220 * 0.42, { size: 30, color: '#2a2f42', font: FONTS.ui, weight: 900 });
  text(g, 'since 2010', E.W * 0.08 + 180 / 2, 140 + 220 * 0.72, { size: 24, color: '#c94a3a', font: FONTS.ui, weight: 700 });
  rr(g, E.W * 0.24, 140, 180, 220, 6); g.fillStyle = '#d8ecff'; g.fill();
  text(g, 'KAI', E.W * 0.24 + 180 / 2, 140 + 220 * 0.42, { size: 30, color: '#2a2f42', font: FONTS.ui, weight: 900 });
  text(g, 'age 6', E.W * 0.24 + 180 / 2, 140 + 220 * 0.72, { size: 24, color: '#c94a3a', font: FONTS.ui, weight: 700 });
  dust(g, t, { count: 10, seed: 41 });
  veil(g, '#000', 0.05);
  return { GY, CX, M: m };
}
