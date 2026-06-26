/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens (resolve to CSS vars; switch by [data-theme]).
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        'panel-2': 'var(--panel-2)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-bright': 'var(--accent-bright)',
        'on-accent': 'var(--on-accent)',
      },
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: 'var(--glow)',
      },
      maxWidth: {
        wrap: '1140px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
