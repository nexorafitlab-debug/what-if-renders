import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { voidScience } from '../sets/void_science.js';
import { drawFeather, featherPop, featherFall, featherAnchor, featherCount } from '../_feathers.js';
registerShot('s135', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = voidScience(g, t, info, {});
  });
  text(g, 'LYING IS HARD WORK FOR YOUR BRAIN', E.W / 2, E.H * 0.14, { size: V(38, 42), color: '#9fb4d8', font: FONTS.ui, weight: 800, spacing: 3 });
  rr(g, E.W * 0.10, E.H * 0.28, E.W * 0.34, 300, 16); g.fillStyle = 'rgba(20,32,54,0.92)'; g.fill(); g.strokeStyle = 'rgba(159,216,255,0.8)'; g.lineWidth = 3; g.stroke();
  text(g, 'TRUTH', E.W * 0.27, E.H * 0.34, { size: V(44, 48), color: '#9fd8ff', font: FONTS.ui, weight: 900 });
  text(g, 'REMEMBER', E.W * 0.27, E.H * 0.46, { size: V(36, 40), color: '#cfe2ff', font: FONTS.ui, weight: 800 });
  rr(g, E.W * 0.56, E.H * 0.28, E.W * 0.34, 300, 16); g.fillStyle = 'rgba(40,20,30,0.92)'; g.fill(); g.strokeStyle = 'rgba(255,215,106,0.8)'; g.lineWidth = 3; g.stroke();
  text(g, 'LIE', E.W * 0.73, E.H * 0.34, { size: V(44, 48), color: '#ffd76a', font: FONTS.ui, weight: 900 });
  text(g, 'INVENT', E.W * 0.73, E.H * 0.42, { size: V(32, 36), color: '#ffd76a', font: FONTS.ui, weight: 800, alpha: clamp(prog(t, 0.2, 0.5)) });
  text(g, 'REMEMBER', E.W * 0.73, E.H * 0.48, { size: V(32, 36), color: '#ffd76a', font: FONTS.ui, weight: 800, alpha: clamp(prog(t, 0.6000000000000001, 0.9)) });
  text(g, 'HIDE IT', E.W * 0.73, E.H * 0.54, { size: V(32, 36), color: '#ffd76a', font: FONTS.ui, weight: 800, alpha: clamp(prog(t, 1.0, 1.3)) });
  circle(g, E.W * 0.6, E.H * 0.58, 12, 'rgba(255,215,106,' + (0.4 + 0.6 * Math.abs(Math.sin(t * 2 + 0))) + ')');
  circle(g, E.W * 0.6599999999999999, E.H * 0.58, 12, 'rgba(255,215,106,' + (0.4 + 0.6 * Math.abs(Math.sin(t * 2 + 1))) + ')');
  circle(g, E.W * 0.72, E.H * 0.58, 12, 'rgba(255,215,106,' + (0.4 + 0.6 * Math.abs(Math.sin(t * 2 + 2))) + ')');
  circle(g, E.W * 0.6, E.H * 0.63, 12, 'rgba(255,215,106,' + (0.4 + 0.6 * Math.abs(Math.sin(t * 2 + 3))) + ')');
  circle(g, E.W * 0.6599999999999999, E.H * 0.63, 12, 'rgba(255,215,106,' + (0.4 + 0.6 * Math.abs(Math.sin(t * 2 + 4))) + ')');
  circle(g, E.W * 0.72, E.H * 0.63, 12, 'rgba(255,215,106,' + (0.4 + 0.6 * Math.abs(Math.sin(t * 2 + 5))) + ')');
} });
