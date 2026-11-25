import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { kitchenMorning } from '../sets/kitchen_morning.js';
registerShot('s001', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = kitchenMorning(g, t, info, {});
    drawFigure(g, { x: E.W * 0.3, y: GY, s: V(1.45, 1.55), facing: 1, outfit: CAST.KAI.outfit, pose: breathe(posesAt(t, [[0, POSES.stand], [1.0, POSES.talk]]), t), expr: exprAt(t, [[0, 'nervous'], [1.2, 'surprised']]), talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, look: [0.3, -0.2], rim });
    drawFigure(g, { x: E.W * 0.74, y: GY, s: V(1.5, 1.6), facing: -1, outfit: CAST.MOM.outfit, pose: breathe(posesAt(t, [[0, POSES.stand], [1.0, POSES.talk]]), t), expr: 'smile', talk: 0, blink: (t % 3.7) < 0.12, look: [-0.4, 0] });
  });
} });
