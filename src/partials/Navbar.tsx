import { AppConfig } from '@/utils/AppConfig';

const links = [
  { href: '/projects/', label: 'Projects' },
  { href: '/posts/', label: 'Blog' },
  { href: '/about/', label: 'About' },
  { href: '/consulting/', label: 'Consulting' },
];

const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b border-line bg-[var(--nav-bg)] backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-wrap items-center justify-between px-5 sm:px-8">
      <a href="/" className="flex items-center gap-2 font-bold text-ink">
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

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-4 text-sm text-muted sm:gap-6">
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
          className="flex h-9 w-9 items-center justify-center rounded-lg text-base text-muted transition-colors hover:text-ink"
        >
          <span data-theme-icon aria-hidden="true">
            ☾
          </span>
        </button>
      </div>
    </div>
  </nav>
);

export { Navbar };
