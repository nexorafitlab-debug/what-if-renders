import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { voidSet } from '../sets/void.js';
import { drawFeather, featherPop, featherFall, featherAnchor, featherCount } from '../_feathers.js';
import { goldLine } from '../_helpers.js';
registerShot('s027', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  const kaiFig = { x: E.W * 0.5, y: 0, s: V(1.5, 1.6), facing: 1, outfit: CAST.KAI.outfit, pose: POSES.stand };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = voidSet(g, t, info, {});
    kaiFig.y = GY;
    kaiFig.pose = breathe(posesAt(t, [[0, POSES.stand], [1.0, POSES.wave], [2.2, POSES.stand]]), t);
    drawFigure(g, { ...kaiFig, expr: exprAt(t, [[0, 'smile'], [1.0, 'happy']]), talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, rim });
  });
  goldLine(g, 'WHAT IF EVERY LIE', E.H * 0.22, V(58, 64));
  goldLine(g, 'YOU TELL GROWS A FEATHER?', E.H * 0.34, V(58, 64));
  {
    const [ax, ay] = featherAnchor(kaiFig, 'wrist');
    drawFeather(g, ax, ay, 70, { color: 'white', rot: 0.1 });
  }
} });
