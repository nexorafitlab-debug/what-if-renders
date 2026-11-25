import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { voidScience } from '../sets/void_science.js';
import { drawFeather, featherPop, featherFall, featherAnchor, featherCount } from '../_feathers.js';
registerShot('s129', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = voidScience(g, t, info, {});
  });
  text(g, 'BELLA DEPAULO STUDIED LYING', E.W / 2, E.H * 0.14, { size: V(40, 44), color: '#9fb4d8', font: FONTS.ui, weight: 800, spacing: 4 });
  text(g, 'LIES PER DAY', E.W / 2, E.H * 0.24, { size: V(30, 34), color: '#cfe2ff', font: FONTS.ui, weight: 700, spacing: 3 });
  rr(g, E.W * 0.20, E.H * 0.36, E.W * 0.10, 70, 10); g.fillStyle = '#5a6a8a'; g.fill();
  text(g, 'SOME DAYS: 0', E.W * 0.20 + 60, E.H * 0.36 + 100, { size: V(28, 32), color: '#cfe2ff', font: FONTS.ui, weight: 700 });
  rr(g, E.W * 0.20, E.H * 0.54, E.W * 0.55 * clamp(prog(t, 0.2, 1.2)), 70, 10); g.fillStyle = '#ffd76a'; g.fill();
  text(g, 'MOST DAYS', E.W * 0.20 + 60, E.H * 0.54 + 100, { size: V(28, 32), color: '#cfe2ff', font: FONTS.ui, weight: 700 });
  text(g, '1-2 LIES A DAY', E.W / 2, E.H * 0.74, { size: V(64, 72), color: '#ffd76a', font: FONTS.ui, weight: 900, spacing: 2, glow: 24, glowColor: 'rgba(255,215,106,0.55)', alpha: clamp(prog(t, 0.6, 1.0)) });
} });
