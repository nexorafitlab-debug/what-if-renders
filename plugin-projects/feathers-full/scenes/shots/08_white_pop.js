import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { kitchenNight } from '../sets/kitchen_night.js';
import { drawFeather, featherPop, featherFall, featherAnchor, featherCount } from '../_feathers.js';
import { goldLine } from '../_helpers.js';
registerShot('s008', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  const kaiFig = { x: E.W * 0.62, y: 0, s: V(2.1, 2.2), facing: 1, outfit: CAST.KAI.outfit, pose: POSES.stand };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = kitchenNight(g, t, info, {});
    kaiFig.y = GY;
    kaiFig.pose = breathe(posesAt(t, [[0, POSES.talk]]), t);
    drawFigure(g, { ...kaiFig, expr: exprAt(t, [[0, 'sad'], [1.2, 'nervous']]), talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, look: [0.3, -0.2], rim });
    drawFigure(g, { x: E.W * 0.74, y: GY, s: V(1.5, 1.6), facing: -1, outfit: CAST.MOM.outfit, pose: breathe(posesAt(t, [[0, POSES.stand], [1.0, POSES.talk]]), t), expr: 'smile', talk: 0, blink: (t % 3.7) < 0.12, look: [-0.4, 0] });
  });
  {
    const [ax, ay] = featherAnchor(kaiFig, 'wrist');
    drawFeather(g, ax, ay, 70, { color: 'white', rot: 0.1 });
  }
  text(g, 'POP.', E.W / 2, 88, { size: V(46, 50), color: '#ffd76a', font: FONTS.ui, weight: 900, spacing: 4, glow: 18, glowColor: 'rgba(255,215,106,0.55)', alpha: clamp(prog(t, 0.2, 0.5)) * (1 - clamp(prog(t, 1.0999999999999996, 1.5999999999999996))) });
} });
