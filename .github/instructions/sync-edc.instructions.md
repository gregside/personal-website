---
applyTo: "**"
---

# Sync EDC Instructions

When the user wants to sync, update, or refresh dev-edc items, or asks what dev-edc items are available:

1. Fetch `table-of-contents.md` from `https://raw.githubusercontent.com/gregside/dev-edc/main/table-of-contents.md`
2. Scan the current project for dev-edc items (typically under `.claude/`)
3. Check ownership before syncing — only sync items that contain the dev-edc attribution line
4. List missing items as available but do not auto-install
5. To sync an item: `npx degit gregside/dev-edc/{path} {destination} --force`
