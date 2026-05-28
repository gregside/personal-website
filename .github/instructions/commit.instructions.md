---
applyTo: "**"
---

# Commit Instructions

Follow Conventional Commits when creating git commits.

## Process

1. Analyze changes: run `git status`, `git diff`, and `git diff --cached`
2. Group changes logically into separate, atomic commits by type, scope, and relatedness
3. For each logical group:
   - Stage relevant files with `git add <files>`
   - Commit using `git commit -m "{type}({scope}): {description}"`
   - Run `git status` to verify

## Rules

- Use standard Conventional Commits types: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, etc.
- Description: present tense, imperative, lowercase, no period, ≤50 chars
- Body: explain WHAT and WHY, wrap at 72 chars. Avoid using a body for simple commits.
- Breaking changes: add `!` after type (e.g. `feat!:`)
- Don't commit if no changes exist
