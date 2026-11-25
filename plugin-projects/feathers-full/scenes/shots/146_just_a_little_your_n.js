import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { voidScience } from '../sets/void_science.js';
import { drawFeather, featherPop, featherFall, featherAnchor, featherCount } from '../_feathers.js';
registerShot('s146', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = voidScience(g, t, info, {});
  });
  text(g, 'THE PINOCCHIO EFFECT', E.W / 2, E.H * 0.14, { size: V(40, 44), color: '#9fb4d8', font: FONTS.ui, weight: 800, spacing: 4 });
  circle(g, E.W * 0.34, E.H * 0.44, 150, '#2a3a55');
  poly(g, [[E.W * 0.34 + 120, E.H * 0.44], [E.W * 0.34 + 260, E.H * 0.47], [E.W * 0.34 + 120, E.H * 0.50]], '#e8b23a');
  circle(g, E.W * 0.30, E.H * 0.40, 14, '#fff6e0'); circle(g, E.W * 0.38, E.H * 0.40, 14, '#fff6e0');
  text(g, 'NOSE', E.W * 0.34, E.H * 0.68, { size: V(32, 36), color: '#cfe2ff', font: FONTS.ui, weight: 800 });
  rr(g, E.W * 0.66, E.H * 0.26, 60, 300, 30); g.fillStyle = 'rgba(20,32,54,0.92)'; g.fill(); g.strokeStyle = '#9fd8ff'; g.lineWidth = 3; g.stroke();
  rr(g, E.W * 0.66 + 10, E.H * 0.26 + 300 * (1 - lerp(0.72, 0.58, clamp(prog(t, 0.3, 1.6)))), 40, 300 * lerp(0.72, 0.58, clamp(prog(t, 0.3, 1.6))), 16); g.fillStyle = '#ff5a4a'; g.fill();
  circle(g, E.W * 0.66 + 30, E.H * 0.26 + 300, 42, '#ff5a4a');
  text(g, 'TEMPERATURE', E.W * 0.69, E.H * 0.68, { size: V(30, 34), color: '#cfe2ff', font: FONTS.ui, weight: 800 });
  text(g, 'DROPS A LITTLE', E.W / 2, E.H * 0.80, { size: V(56, 62), color: '#ffd76a', font: FONTS.ui, weight: 900, glow: 24, glowColor: 'rgba(255,215,106,0.55)', alpha: clamp(prog(t, 0.4, 0.8)) });
} });
