import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { voidSet } from '../sets/void.js';
import { goldLine } from '../_helpers.js';
registerShot('s196', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  const cam = slowCam(t, 2.339999999999975, { type: 'pushIn', from: 1, to: 1.08, focus: [E.W * 0.5, E.H * 0.55] });
  layer(g, cam, 1, (g) => {
    const { GY } = voidSet(g, t, info, {});
    drawFigure(g, { x: E.W * 0.38, y: GY, s: V(1.5, 1.6), facing: 1, outfit: CAST.KAI.outfit, pose: breathe(posesAt(t, [[0, POSES.stand], [1.0, POSES.wave], [2.2, POSES.stand]]), t), expr: exprAt(t, [[0, 'smile'], [1.0, 'happy']]), talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, rim });
    drawFigure(g, { x: E.W * 0.64, y: GY, s: V(1.5, 1.6), facing: -1, outfit: CAST.MAYA.outfit, pose: breathe(posesAt(t, [[0, POSES.stand], [1.0, POSES.wave]]), t), expr: 'smile', talk: 0, blink: (t % 3.7) < 0.12 });
  });
  goldLine(g, 'HOW MANY WOULD YOU', E.H * 0.20, V(58, 64));
  goldLine(g, 'BE WEARING RIGHT NOW?', E.H * 0.32, V(58, 64));
  text(g, 'TELL US IN THE COMMENTS.', E.W / 2, E.H * 0.44, { size: V(40, 44), color: '#cfe2ff', font: FONTS.ui, weight: 800, spacing: 3, glow: 16, glowColor: 'rgba(207,226,255,0.4)' });
  text(g, 'LIKE + SUBSCRIBE', E.W / 2, E.H * 0.90, { size: V(32, 36), color: '#ffd76a', font: FONTS.ui, weight: 900, spacing: 4, glow: 18, glowColor: 'rgba(255,215,106,0.55)' });
} });
