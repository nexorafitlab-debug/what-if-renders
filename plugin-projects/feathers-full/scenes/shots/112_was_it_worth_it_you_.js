import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { schoolGate } from '../sets/school_gate.js';
import { drawFeather, featherPop, featherFall, featherAnchor, featherCount } from '../_feathers.js';
registerShot('s112', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  const kaiFig = { x: E.W * 0.62, y: 0, s: V(1.45, 1.55), facing: 1, outfit: CAST.KAI.outfit, pose: POSES.stand };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = schoolGate(g, t, info, {});
    const wlk = walkLocked(t, { x0: E.W * 0.10, stride: 52, stepDur: 0.5, facing: 1 });
    const stopX = E.W * 0.10 + (52 / 0.5) * 1.2;
    const walking = t < 1.2;
    kaiFig.x = walking ? wlk.x : stopX;
    kaiFig.pose = walking ? wlk.pose : breathe(posesAt(t, [[1.2, POSES.stand]]), t);
    kaiFig.y = GY;
    drawFigure(g, { ...kaiFig, expr: exprAt(t, [[0, 'determined'], [1.2, 'scared']]), talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, look: [0.3, -0.2], rim });
    drawFigure(g, { x: E.W * 0.74, y: GY, s: V(1.6, 1.7), facing: -1, outfit: CAST.COACH.outfit, pose: breathe(posesAt(t, [[0, POSES.stand], [0.8, POSES.point]]), t), expr: 'neutral', talk: 0, blink: (t % 3.7) < 0.12, look: [-0.4, 0] });
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
} });
