# what-if-renders

Public render repo for the What If YouTube channel — workflows, helper scripts and
project files only. **No render-engine code lives here.**

## Why public

GitHub Actions on standard runners is free in public repositories
([GitHub Actions billing](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions)):
"The following usage remains free independently and does not reduce the included
compute usage: Standard GitHub-hosted runners in public repositories."

The old private render repo exhausted the account's free allowance in November
(2,497 of 2,000 minutes; artifact storage blocked until Dec 1 on accrued GB-Hours),
so renders moved here.

## What is public vs what stayed private

- **Public here:** the workflow (`.github/workflows/render-plugin-episode.yml`),
  the helper scripts (`.github/scripts/split-chunks.mjs`, `stitch.mjs`), and the
  project files (`plugin-projects/<name>/` — shots, scenes, voiceover, committed mix).
- **Private, never published:** the aiTrends render engine. It lives inside the
  Docker image `ghcr.io/nexorafitlab-debug/plugin-render` (private package), which
  the workflow only *pulls*. The private repo `what-if-plugin-engine` stays private.

## How a render flows

1. Dispatch **Render plugin episode** (Actions tab) with `project`, `chunks` (10),
   `encode_ranges`, `fps`.
2. 10 parallel chunk jobs render lossless (crf 0) chunks and save each one to the
   **Actions cache** (`chunks-<run_id>-<index>`) — never artifacts.
3. The stitch job restores all 10 chunk caches, re-encodes the exact `encode_ranges`
   (libx264, preset medium, crf 18, yuv420p, threads 6), concats, muxes the committed
   `build/mix_final.wav` to AAC 320k, verifies loudness (-14 LUFS, TP < -1.0).
4. The release job publishes `final.mp4` as a **GitHub Release** asset
   (tag `<project>-<run_number>`). Download the video from the Release.

## Image access

The private image is pulled with the built-in `GITHUB_TOKEN` once this repo is
granted access in the package settings ("Manage Actions access" → Add Repository),
or with a `read:packages` token stored as repo secret `GHCR_TOKEN` as fallback.
See `SETUP-REPORT.md` for the current method and status.
