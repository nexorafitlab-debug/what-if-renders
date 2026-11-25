import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { stairwell } from '../sets/stairwell.js';
import { drawFeather, featherPop, featherFall, featherAnchor, featherCount } from '../_feathers.js';
registerShot('s089', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  const kaiFig = { x: E.W * 0.3, y: 0, s: V(1.45, 1.55), facing: 1, outfit: CAST.KAI.outfit, pose: POSES.stand };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = stairwell(g, t, info, {});
    kaiFig.y = GY;
    kaiFig.pose = breathe(posesAt(t, [[0, POSES.stand], [1.0, POSES.point]]), t);
    drawFigure(g, { ...kaiFig, expr: exprAt(t, [[0, 'scared'], [1.2, 'shocked']]), talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, look: [0.3, -0.2], rim });
    drawFigure(g, { x: E.W * 0.7, y: GY, s: V(1.5, 1.6), facing: -1, outfit: CAST.DANNY.outfit, pose: breathe(posesAt(t, [[0, POSES.stand]]), t), expr: 'worried', talk: 0, blink: (t % 3.7) < 0.12, look: [-0.4, 0] });
    drawFigure(g, { x: E.W * 0.88, y: GY, s: V(1.6, 1.7), facing: -1, outfit: CAST.COACH.outfit, pose: breathe(posesAt(t, [[0, POSES.stand], [0.6, POSES.point]]), t), expr: 'angry', talk: 0, blink: (t % 3.7) < 0.12, look: [-0.5, 0] });
    drawFigure(g, { x: E.W * 0.16, y: GY, s: V(1.4, 1.5), facing: 1, outfit: CAST.STU1.outfit, pose: breathe(posesAt(t, [[0, POSES.stand]]), t), expr: 'shocked', talk: 0, blink: (t % 3.7) < 0.12, look: [0.5, 0] });
  });
  {
    const [ax, ay] = featherAnchor(kaiFig, 'wrist');
    drawFeather(g, ax, ay, 70, { color: 'white', rot: 0.1 });
  }
  {
    const [ax, ay] = featherAnchor(kaiFig, 'collar');
    drawFeather(g, ax, ay, 75, { color: 'white', rot: -1.0 });
  }
  {
    const [ax, ay] = featherAnchor(kaiFig, 'hand');
    drawFeather(g, ax, ay, 65, { color: 'white', rot: 0.15 });
  }
  {
    const [ax, ay] = featherAnchor(kaiFig, 'neck');
    drawFeather(g, ax, ay, 65, { color: 'white', rot: 0.2 });
  }
  {
    const [ax, ay] = featherAnchor(kaiFig, 'chest');
    drawFeather(g, ax, ay, 70, { color: 'white', rot: 0.0 });
  }
  {
    const [ax, ay] = featherAnchor(kaiFig, 'shoulder');
    drawFeather(g, ax, ay, 190, { color: 'black', rot: 0.25 });
  }
} });
