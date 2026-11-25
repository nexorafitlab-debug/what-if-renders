import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { voidScience } from '../sets/void_science.js';
import { drawFeather, featherPop, featherFall, featherAnchor, featherCount } from '../_feathers.js';
registerShot('s148', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = voidScience(g, t, info, {});
  });
  text(g, 'LIE DETECTORS', E.W / 2, E.H * 0.14, { size: V(40, 44), color: '#9fb4d8', font: FONTS.ui, weight: 800, spacing: 4 });
  circle(g, E.W * 0.5, E.H * 0.48, 170, 'rgba(20,32,54,0.92)');
  seg(g, [[E.W * 0.5, E.H * 0.48], [E.W * 0.5 + 130 * Math.sin(0.3), E.H * 0.48 - 130 * Math.cos(0.3)]], 6, '#ff5a4a');
  circle(g, E.W * 0.5, E.H * 0.48, 16, '#ffd76a');
  text(g, 'HEART FASTER', E.W * 0.24, E.H * 0.66, { size: V(30, 34), color: '#cfe2ff', font: FONTS.ui, weight: 800 });
  text(g, 'HANDS SWEAT', E.W * 0.76, E.H * 0.66, { size: V(30, 34), color: '#cfe2ff', font: FONTS.ui, weight: 800 });
} });
