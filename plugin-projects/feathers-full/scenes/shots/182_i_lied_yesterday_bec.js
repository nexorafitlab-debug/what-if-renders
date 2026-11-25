import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { schoolHallway } from '../sets/school_hallway.js';
registerShot('s182', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = schoolHallway(g, t, info, {});
    drawFigure(g, { x: E.W * 0.44, y: GY, s: V(1.7, 1.8), facing: 1, outfit: CAST.KAI.outfit, pose: breathe(posesAt(t, [[0, POSES.talk]]), t), expr: exprAt(t, [[0, 'happy'], [1.2, 'nervous']]), talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, look: [0.3, -0.2], rim });
    drawFigure(g, { x: E.W * 0.68, y: GY, s: V(1.5, 1.6), facing: -1, outfit: CAST.MAYA.outfit, pose: breathe(posesAt(t, [[0, POSES.stand], [1.0, POSES.talk]]), t), expr: 'smile', talk: 0, blink: (t % 3.7) < 0.12, look: [-0.4, 0] });
    drawFigure(g, { x: E.W * 0.88, y: GY, s: V(1.4, 1.5), facing: -1, outfit: CAST.STU2.outfit, pose: breathe(posesAt(t, [[0, POSES.stand]]), t), expr: 'neutral', talk: 0, blink: (t % 3.7) < 0.12, look: [-0.4, 0] });
  });
} });
