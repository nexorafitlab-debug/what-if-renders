import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { schoolClassroom } from '../sets/school_classroom.js';
import { drawFeather, featherPop, featherFall, featherAnchor, featherCount } from '../_feathers.js';
registerShot('s034', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  const kaiFig = { x: E.W * 0.44, y: 0, s: V(2.1, 2.2), facing: 1, outfit: CAST.KAI.outfit, pose: POSES.stand };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = schoolClassroom(g, t, info, {});
    kaiFig.y = GY;
    kaiFig.pose = breathe(posesAt(t, [[0, POSES.stand], [0.8, POSES.holdFront]]), t);
    drawFigure(g, { ...kaiFig, expr: exprAt(t, [[0, 'nervous'], [1.2, 'determined']]), talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, look: [0.3, -0.2], rim });
    drawFigure(g, { x: E.W * 0.16, y: GY, s: V(1.5, 1.6), facing: 1, outfit: CAST.OKAFOR.outfit, pose: breathe(posesAt(t, [[0, POSES.stand], [0.8, POSES.point]]), t), expr: 'neutral', talk: 0, blink: (t % 3.7) < 0.12, look: [0.4, 0] });
    drawFigure(g, { x: E.W * 0.86, y: GY, s: V(1.4, 1.5), facing: -1, outfit: CAST.STU1.outfit, pose: breathe(posesAt(t, [[0, POSES.stand]]), t), expr: 'surprised', talk: 0, blink: (t % 3.7) < 0.12, look: [-0.4, 0] });
  });
  featherPop(g, kaiFig, 'collar', t, { at: 0.2, len: 75, color: 'white', rot: -1.0 });
  {
    const [ax, ay] = featherAnchor(kaiFig, 'wrist');
    drawFeather(g, ax, ay, 70, { color: 'white', rot: 0.1 });
  }
} });
