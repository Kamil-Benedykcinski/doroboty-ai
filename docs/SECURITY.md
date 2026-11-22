# Prototype data boundary

This static frontend has no trusted server or real authentication. Role-specific UI and local transition checks organize the scenario; anyone using the browser can inspect all stored data. Use synthetic data only.

No API keys, credentials, real CVs or private material belong in frontend source, JSON, localStorage or exports. Exports include private-in-the-UI source/recruiter notes. PostHog uses EU browser analytics with anonymized IPs; public interactions may be autocaptured, while profile data, CVs, application answers, employer editor content and recruiting records are marked `ph-no-capture` and excluded from Autocapture and Session Replay. Inputs are masked by the SDK and copied-text capture is disabled.

Render imported text through React text nodes, validate imports with shared Zod schemas, reject unsupported versions, duplicate IDs, broken references and oversized files. Never overwrite an unreadable save automatically.
