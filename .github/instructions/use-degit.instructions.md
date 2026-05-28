---
applyTo: "**"
---

# Use Degit Instructions

When the user wants to install, pull, or copy resources from a GitHub repo:

Use `degit` to download a snapshot of a GitHub directory without git history.

## Commands

```sh
# Single skill
npx degit gregside/dev-edc/skills/{skill-name} .claude/skills/{skill-name}

# All skills
npx degit gregside/dev-edc/skills .claude/skills

# Overwrite existing (required if destination exists)
npx degit gregside/dev-edc/skills/{skill-name} .claude/skills/{skill-name} --force
```

The `--force` flag is required to overwrite existing files. Destination path is optional — if omitted, files copy to current directory.
