import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { hallwayHome } from '../sets/hallway_home.js';
registerShot('s004', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = hallwayHome(g, t, info, {});
    drawFigure(g, { x: E.W * 0.62, y: GY, s: V(2.1, 2.2), facing: 1, outfit: CAST.KAI.outfit, pose: breathe(posesAt(t, [[0, POSES.stand], [0.8, POSES.holdFront]]), t), expr: exprAt(t, [[0, 'sad'], [1.2, 'nervous']]), talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, look: [0.3, -0.2], rim });
  });
} });
