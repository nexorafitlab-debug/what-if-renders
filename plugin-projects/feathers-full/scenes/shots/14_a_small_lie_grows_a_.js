import { E, V, registerShot, layer, talkAmount, prog, ease, lerp, clamp, text, FONTS, slowCam, circle, seg, rr, poly, alpha, glow, ring, measure } from '/engine/core.js';
import { drawFigure, POSES, posesAt, breathe, walkPose, walkLocked, headPos, exprAt } from '/engine/rig2d.js';
import { CAST } from '../cast.js';
import { voidSet } from '../sets/void.js';
import { drawFeather, featherPop, featherFall, featherAnchor, featherCount } from '../_feathers.js';
import { goldLine } from '../_helpers.js';
registerShot('s014', { draw(g, t, info) {
  const rim = { color: '#ffd76a', dir: [-1, -1], w: 4 };
  const kaiFig = { x: E.W * 0.5, y: 0, s: V(1.2, 1.3), facing: 1, outfit: CAST.KAI.outfit, pose: POSES.stand };
  layer(g, { z: 1 }, 1, (g) => {
    const { GY } = voidSet(g, t, info, {});
    kaiFig.y = GY;
    kaiFig.pose = breathe(posesAt(t, [[0, POSES.stand]]), t);
    drawFigure(g, { ...kaiFig, expr: 'determined', talk: talkAmount(info.globalT), blink: (t % 3.7) < 0.12, look: [0, -0.6], rim });
  });
  drawFeather(g, E.W * 0.20, E.H * 0.46, 95, { color: 'white', rot: Math.sin(t * 1.2) * 0.12, glow: 0.25 });
  text(g, 'THE RULE', E.W / 2, E.H * 0.18, { size: V(36, 40), color: '#9fb4d8', font: FONTS.ui, weight: 800, spacing: 6 });
  goldLine(g, 'SMALL LIE = SMALL', E.H * 0.32, V(64, 72));
  goldLine(g, 'WHITE FEATHER', E.H * 0.46, V(64, 72));
  {
    const [ax, ay] = featherAnchor(kaiFig, 'wrist');
    drawFeather(g, ax, ay, 70, { color: 'white', rot: 0.1 });
  }
} });
