# Accessibility

Target: **WCAG 2.2 Level AA**. Audit and fixes: 14–15 November 2026. This is our own testing, not a certification.

The full audit (findings table, test evidence, legal background, the draft public accessibility information and the
release checklist) is kept with the ERPeace app in `DeewanEurope/team-hr`, folder `docs/accessibility/`.

## State of the erpeace.com
- Automated scan (axe-core 4.14, desktop and phone width): no WCAG A/AA problems after the fixes.
- Keyboard-only checks pass: skip link, menus and pop-ups (focus moves in, Escape closes, focus returns), forms.
- Not yet tested: screen readers (NVDA, VoiceOver, TalkBack) in English and Arabic; real phones; zoom to 400%.
- Third-party parts not tested: none.
- Open: none from the automated scan.

## Keep it working (every change)
- Tab through every changed page without a mouse: the first stop is "Skip to main content", every stop has a visible
  ring, Escape closes pop-ups and menus.
- New images need alt text in every language (or `alt=""` when decorative). New videos need real captions.
- Text colours at least 4.5:1 against their background (3:1 for large text and icons). Links in text are underlined.
- Nothing moves by itself (no autoplay sliders). Click targets at least 24 × 24 px.
- Keep the skip link and the `main` element in every page layout, and the focus and reduced-motion styles.
- Never add an "accessibility overlay" widget.
