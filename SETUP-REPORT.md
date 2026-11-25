# Dual-repo render setup — SETUP REPORT

Date: 2026-11-25. Old private workflow is dead for November (storage quota exhausted
until Dec 1) — do NOT use it, do NOT retry it.

## 1. Docs verification (step 1 — PASSED)

Fetched live from docs.github.com — "GitHub Actions billing"
(https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions,
crawled 2026-11-25 06:18 UTC):

> "The following usage remains free independently and does not reduce the included
> compute usage:
> - Standard GitHub-hosted runners in public repositories. [...]
> - Self-hosted runners.
> Larger runners are billed for public repositories."

And:

> "The use of standard GitHub-hosted runners is free:
> - In public repositories
> - For GitHub Pages
> - For Dependabot"

So: **public repositories get unlimited free standard-runner minutes** (no minute
cap; only larger runners are ever billed on public repos). The workflow uses only
`ubuntu-latest` standard runners. The docs also confirm the storage model behind
the November failure: "Storage charges accumulate throughout the month based on
hourly usage" in GB-Hours, and "Cache storage: Actions cache storage is a separate
allowance of 10 GB per repository. Cache storage is not shared with artifacts or
GitHub Packages." — which is why chunks move to cache and the final video to a
Release (releases do not consume Actions artifact storage).

## 2. New public repo

- **Name:** `what-if-renders`
- **URL:** https://github.com/nexorafitlab-debug/what-if-renders
- **Visibility:** public. Created 2026-11-25 via `gh repo create` (repo id 1471356757).
- **Holds ONLY our work:** the workflow, the helper scripts, project files.
  NO aiTrends engine code. The private repo `nexorafitlab-debug/what-if-plugin-engine`
  was NOT made public. No second GitHub account, no payment method, no money spent.

## 3. Workflow changes (vs live private workflow)

File: `.github/workflows/render-plugin-episode.yml` ("Render plugin episode"),
based on the live private workflow fetched 2026-11-25.

- **Checkout:** checks out THIS repo (itself) for project files + scripts.
  Projects live under `plugin-projects/<name>/`, scripts under `.github/scripts/`
  (`split-chunks.mjs` + `stitch.mjs`, copied byte-identical from `what-if-studio`).
- **Chunks via Actions cache, not artifacts:** each render job saves its chunk with
  `actions/cache@v4` (key `chunks-<run_id>-<index>`, path `chunks/chunk_<index>.mp4`);
  the stitch job restores all 10 keys with 10 explicit `actions/cache/restore@v4`
  steps, one per index. NO `upload-artifact` / `download-artifact` for chunks anywhere.
- **Final video via GitHub Release, not an artifact:** the stitch job saves
  `build/final.mp4` to cache (key `final-<run_id>`); a separate host `release` job
  (no container, so `gh` is guaranteed present) restores it and runs
  `gh release create "<project>-<run_number>"` uploading `final.mp4` as the release
  asset. NO `final-video` artifact anywhere. Permissions: `contents: write`
  (releases) + `packages: read`.
- **Kept unchanged:** 10 parallel chunks; lossless crf 0 chunks (libx264, yuv420p,
  preset ultrafast, threads 6); stitch re-encodes the exact `encode_ranges` with the
  same settings (libx264, preset medium, crf 18, yuv420p, threads 6); committed
  `build/mix_final.wav` muxed to AAC 320k; -14 LUFS / TP < -1.0 verification in
  `stitch.mjs`. Same inputs: `project`, `chunks` (default 10), `encode_ranges`,
  `fps` (default 24 in this repo; 24 for 1-min samples, 60 for full videos).
- **Chunk retention:** effectively 1 day — cache keys are per-run and expire
  (7 days of non-use max, evicted sooner under the 10 GB per-repo cap); no
  long-lived caches added.

## 4. Image-access method

- **Tried first (path i): grant via package settings.** BLOCKED for automation:
  the Packages REST API has no add-repository endpoint (verified against the
  endpoint index at https://docs.github.com/rest/packages, 2026-11-25 — only
  get/list/delete/restore exist), and the CLI token lacks `read:packages` scope
  (`GET /users/nexorafitlab-debug/packages/container/plugin-render` → 403
  "You need at least read:packages scope"). The grant ("Manage Actions access" →
  Add Repository → `what-if-renders`) must be done once in the package-settings
  web UI, or path (ii) below must be used.
- **Fallback built into the workflow (path ii):** container credentials use
  `${{ secrets.GHCR_TOKEN || secrets.GITHUB_TOKEN }}` — a `read:packages` token
  stored as repo secret `GHCR_TOKEN` is used when present, otherwise the built-in
  token (which works once path (i) is granted).
- **STATUS: PENDING — image access not yet verified.** The workflow cannot be
  proven to pull the image until (i) the package-settings grant is clicked in the
  web UI, or (ii) a `read:packages` token is stored as `GHCR_TOKEN`. The dispatch
  below is ready to run the moment either is done.

## 5. What is public vs what stayed private

- **Public in `what-if-renders`:** workflow, `split-chunks.mjs`, `stitch.mjs`,
  `plugin-projects/feathers-1min/` (config, story/shots.json, scenes incl.
  `_feathers.js` + `cast.js`, `input/voiceover.wav`, `build/mix_final.wav`, timeline).
- **Private, never published:** the aiTrends engine inside
  `ghcr.io/nexorafitlab-debug/plugin-render` (private package); the private repo
  `what-if-plugin-engine` (still private). The image is only pulled by the workflow.

## 6. Feathers 1-min sample — project committed, render PENDING on image access

- Project: `plugin-projects/feathers-1min/` (copied from
  `~/workspace/what-if-studio/plugin-projects/feathers-1min/`, commit bd07718;
  md5s re-verified on copy — see §7).
- Dispatch command (run once image access is granted):
  `gh workflow run render-plugin-episode.yml --repo nexorafitlab-debug/what-if-renders -f project=feathers-1min -f chunks=10 -f encode_ranges='[[0,55.18]]' -f fps=24`
- Sample run number + verification results: PENDING (to be filled after dispatch).

## 7. Project verification (pre-render)

- `input/voiceover.wav`: md5 `3713535585c9df2efd86db5d2c447369`, 55.18 s, 152 words,
  4 chunks, 100% whisper match.
- `build/mix_final.wav`: md5 `0bb63d708e942a3510e9e1b0910c0923`, -14.12 LUFS / TP -1.38 /
  LRA 4.00, 31 SFX (33.7/min).
- 27 shots (29.4 cuts/min, longest 3.52 s), 6 fresh sets, config fps 24,
  duration 55.18, bars 40. Kai burgundy hex `#800020` locked (`scenes/cast.js` line 7).
- Stills: 27/27 shots clean by eye. No mp4 exists yet — the re-render produces it.

## 8. Full-video (60 fps) dispatch command (for the next worker)

`gh workflow run render-plugin-episode.yml --repo nexorafitlab-debug/what-if-renders -f project=feathers-full -f chunks=10 -f encode_ranges='[[0,<DURATION>]]' -f fps=60`
(replace `<DURATION>` with the full video's config.json duration; `project` must be
the full-video folder name under `plugin-projects/`.)
