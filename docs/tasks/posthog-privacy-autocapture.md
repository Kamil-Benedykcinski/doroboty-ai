# Protect private surfaces in PostHog browser capture

## Intent and acceptance

Keep useful click and navigation analytics while preventing the prototype's private-in-the-UI scenario data from entering Autocapture or Session Replay.

The change is accepted when public interactions remain eligible for Autocapture, all native input values are masked in Session Replay, copied text is not captured, and profile, CV, application, employer-editor and recruiting-record surfaces are blocked with `ph-no-capture`.

## Change

Configured the PostHog browser SDK for the EU project with explicit Autocapture ignore selectors, input masking, personal URL property masking, copied-text capture disabled, console recording disabled and Session Replay enabled without network headers or bodies. Marked private React subtrees with `ph-no-capture`; public pages and controls remain available for click analysis.

The PostHog project already had Autocapture enabled, IP anonymization enabled and Session Replay enabled. No project setting mutation was needed.

## Verification

- Reviewed the PostHog project settings and confirmed Autocapture and Session Replay are enabled.
- Reviewed every profile, CV, application-answer, employer-editor and recruiting-record render path for a blocking marker.
- `npm run build`
- `git diff --check`
