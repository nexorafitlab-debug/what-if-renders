import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { bathroomDay } from '../sets/bathroom_day.js';
import { drawFeather, featherPop, featherFall, featherAnchor, featherCount } from '../_feathers.js';
registerShot('s162', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  const kaiFig = { x: E.W * 0.22, y: 0, s: V(1.7, 1.8), facing: 1, outfit: CAST.KAI.outfit, pose: POSES.stand };
  const reflFig = { x: E.W * 0.55, y: 0, s: V(1.25, 1.35), facing: -1, outfit: CAST.KAI.outfit, pose: POSES.stand };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = bathroomDay(g, t, info, {});
    kaiFig.y = GY; reflFig.y = GY;
    kaiFig.pose = breathe(posesAt(t, [[0, POSES.stand], [0.6, POSES.sad]]), t);
    reflFig.pose = kaiFig.pose;
    drawFigure(g, { ...kaiFig, expr: exprAt(t, [[0, 'smile'], [1.2, 'sad']]), talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, look: [0.4, 0], rim });
    drawFigure(g, { ...reflFig, expr: exprAt(t, [[0, 'smile'], [1.2, 'sad']]), talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, look: [-0.3, 0], rim });
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
    const [ax, ay] = featherAnchor(reflFig, 'wrist');
    drawFeather(g, ax, ay, 56, { color: 'white', rot: 0.1 });
  }
  {
    const [ax, ay] = featherAnchor(reflFig, 'collar');
    drawFeather(g, ax, ay, 60, { color: 'white', rot: -1.0 });
  }
  {
    const [ax, ay] = featherAnchor(reflFig, 'hand');
    drawFeather(g, ax, ay, 52, { color: 'white', rot: 0.15 });
  }
  {
    const [ax, ay] = featherAnchor(reflFig, 'neck');
    drawFeather(g, ax, ay, 52, { color: 'white', rot: 0.2 });
  }
  {
    const [ax, ay] = featherAnchor(reflFig, 'chest');
    drawFeather(g, ax, ay, 56, { color: 'white', rot: 0.0 });
  }
} });
