# BUILD REPORT — What If Every Lie You Tell Grows A Feather? (FULL video)

## STANDING RULE — READ FIRST
**Render on GitHub 10x ONLY, on the NEW public-repo setup (user decision
2026-11-25 — see "GitHub render" below). The OLD private workflow (repo
`nexorafitlab-debug/what-if-plugin-engine`) is DEAD: its artifact storage
quota is exhausted for November (blocked until Dec 1) and every dispatch fails
at artifact upload. NEVER dispatch on the old workflow again. NEVER render
video locally unless GitHub is proven broken AND the user has been told first.**
(Stills for helper checks are the only local renders: `node render.mjs --project
... --sheet` produces PNGs in `build/sheets/`, never video.)

## Status — BUILT, MIX VERIFIED, STILLS VERIFIED, RENDER-READY (NO RENDER YET)
- 196 hand-written shots, 28 fresh sets (23 used), story/shots.json + bible +
  feather-ledger, audio mixed and verified (see below), full 196-shot stills
  sheets eye-checked (196/196) with 5 defects found and FIXED + re-verified.
  **No video exists yet** — the full video is render-ready and waits for the
  GitHub dispatch below.
- Script: `~/workspace/what-if-sample/feathers-script-final.txt` (1,045 words,
  19 ellipses, 19 questions, no digits). Hero Kai, 16, burgundy hoodie #800020.
- Voiceover reused as-is from the 1-min sample (NOT re-recorded):
  `input/voiceover.wav` md5 d3ac64e52d6249e97734008839b797ce (408.50 s, 98.5%
  whisper match).

## Deliverable — NOT RENDERED YET (render-ready, awaiting GitHub dispatch)
- Planned: `out/final.mp4`, 1280×720, 60 fps, 408.50 s, 196 shots, 273 SFX
  cues (40.1/min), 28 sets.
- Mix (final, will NOT be rebuilt for the render):
  `build/mix_final.wav` md5 c8561dd97cd60324beb658c68a99ffa7
  (−14.33 LUFS / TP −1.48 / LRA 4.60, 408.50 s).
- **Repo audio is FLAC, not WAV:** GitHub's blob API rejects files whose
  base64 JSON exceeds ~50 MB (a 45 MB file fails; 35 MB passes). The 78 MB
  WAVs are therefore committed as LOSSLESS FLAC data under the same `.wav`
  filenames (mix 78 MB → 28.4 MB FLAC; voiceover 78 MB → 9.8 MB FLAC).
  FLAC is bit-identical to the WAV master (verified: −14.33 LUFS / TP
  −1.48). ffmpeg probes content, not extension, so the stitch job's
  `ffmpeg -i build/mix_final.wav` decodes the FLAC correctly (verified
  locally: ffprobe reports flac, 48 kHz stereo, 408.5 s). The 48 kHz WAV
  masters stay local only.

## Picture (built 2026-11-25)
- 196 hand-written shots (gen_full.py validates: contiguous 0–408.50 s, longest
  3.50 s, 28.8 cuts/min, 23 sets). Living face in every shot
  (breathe/talk/blink/exprAt), face swaps on cuts, one slow push-in only
  (endcard s194/s196).
- Hero Kai: black round head, gold rim light, **burgundy hoodie #800020**.
- Feather state machine (verified — FEATHER FINAL STATE empty []):
  wrist → collar → hand → neck = FOUR at lunch (count tile, top-left) →
  chest = FIVE in the mirror (tile, top-left) → shoulder BLACK huge in the
  crisis (len 190) → falls in the coach's office, turns white, floats away →
  back to FIVE white → final mirror: chest, neck, hand fall one by one,
  wrist + collar fall TOGETHER → ZERO at Maya's locker.
- 4 science infographics on void_science (DePaulo "1–2 LIES A DAY", brain
  "LIE = INVENT + REMEMBER", Pinocchio "DROPS A LITTLE", lie detectors
  "MEASURES STRESS, NOT LIES" — gold key line each).

## Stills check (196/196 eye-checked, 5 defects FIXED + re-verified)
1. kitchen_night banner overlapped the MIDNIGHT board (s008 "POP.",
   s016 "IN ONE SECOND" read as "MIDNIGHT POP.") — BANNER_Y kitchen_night
   0.16H → 88. Re-verified clean.
2. FOUR count tile (centred) covered the cafeteria_queue menu board's
   subtitle "pasta · salad · juice" (s050) — tile moved to top-left
   (x 0.15W, y 0.28H, size 76) to match the FIVE tile. Re-verified clean.
3. Endcard "LIKE + SUBSCRIBE" overlapped Kai's head (s194, s196) — moved to
   the bottom (E.H * 0.90), below the characters' feet. Re-verified clean.
4. Wrist + hand feathers shared one anchor (handPos) so only 3 distinct
   feathers showed when the count was FOUR — wrist now uses the back hand
   (backHandPos). 4 distinct feathers visible at lunch. Re-verified.
5. Count-tile label clipped ("WRIST…" / "…CHEST" spilled past the tile) —
   featherCount now adds letterSpacing to the measured label width. Both
   FOUR and FIVE tiles fully contain their labels. Re-verified.
- All other shots clean: no black holes, no "null", no banner/prop overlap,
  feather counts consistent (4 lunch / 5 total / 5 left / 0 at locker),
  4 infographics present and correct, crisis black feather dramatic.

## Sound (build_mix.py, verified 2026-11-25)
- 273 SFX cues (40.1/min). Residue peak-% check: **0 violations**
  (ding/shimmer/freeze ≤5% of voice peak, others 5–10%, none above
  −21.4 dBFS). hear.py sones: all cues 0.9–2.2 sones (quiet).
- Master: −14.33 LUFS / TP −1.48 / LRA 4.60 (two-pass loudnorm, target
  I=−13.0 → lands −14.33; single-pass loudnorm undershoots ~1 LUFS on this
  high-crest-factor mix, and the old gain+alimiter recipe boosted via
  alimiter auto-level to −12.37 LUFS / TP +0.54 — both fixed, see build_mix.py).
- Mix bugs fixed this build: STUDIO path in build_mix.py was one level short
  (`..` → `../..`); the --no-sfx run overwrote build/mix.wav so the master
  would have lost every SFX (now saves mix_full_norm.wav first).

## GitHub render (dispatch)
- Repo: `nexorafitlab-debug/what-if-renders` (PUBLIC, unlimited free minutes).
- Workflow: `render-plugin-episode.yml`.
- Dispatch: `gh workflow run render-plugin-episode.yml --repo
  nexorafitlab-debug/what-if-renders -f project=feathers-full -f chunks=10
  -f encode_ranges='[[0,408.5]]' -f fps=60`
- Final video downloads from the Release (tag `feathers-full-<run_number>`).
- Engine stays private inside `ghcr.io/nexorafitlab-debug/plugin-render`.

## Files in this folder (render inputs only)
- `config.json` (fps 60, duration 408.5, loudness −14), `input/voiceover.wav`,
  `input/script.txt`, `input/pauses.json` (4 chapter pauses).
- `scenes/` — `_feathers.js`, `_helpers.js`, `cast.js`, 28 sets, 196 shots.
- `story/` — `shots.json`, `bible.md`, `feather-ledger.md`.
- `timeline/` — `words.json`, `sentences.json`, `transcript.txt`.
- `build/mix_final.wav` — the committed final mix (muxed by the stitch job).
- Build scripts (`gen_full.py`, `build_mix.py`) live only in the local
  workspace, NOT in this repo.
