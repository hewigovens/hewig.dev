import { AppConfig } from '@/utils/AppConfig';

const links = [
  { href: '/projects/', label: 'Projects' },
  { href: '/posts/', label: 'Blog' },
  { href: '/zoeys-lab/', label: 'Lab' },
  { href: '/about/', label: 'About' },
  { href: '/consulting/', label: 'Consulting' },
];

const toggleIcon = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b border-line bg-[var(--nav-bg)] backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-wrap items-center justify-between px-5 sm:px-8">
      <a href="/" className="flex items-center gap-2 font-semibold text-ink">
        <svg
          className="h-7 w-7 stroke-accent"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="12" width="6" height="8" rx="1" />
          <rect x="9" y="8" width="6" height="12" rx="1" />
          <rect x="15" y="4" width="6" height="16" rx="1" />
          <path d="M4 20h14" />
        </svg>
        <span className="hidden sm:inline">{AppConfig.title}</span>
      </a>

      <div className="flex items-center gap-1 sm:gap-6">
        <div className="flex items-center gap-2 text-[13px] text-muted sm:gap-6 sm:text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          data-theme-toggle
          aria-label="Toggle dark mode"
          className="flex h-8 w-8 items-center justify-center rounded-lg sm:h-9 sm:w-9 text-base text-muted transition-colors hover:text-ink"
        >
          <svg className="h-[18px] w-[18px] dark:hidden" {...toggleIcon}>
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
          <svg className="hidden h-[18px] w-[18px] dark:block" {...toggleIcon}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
);

export { Navbar };
