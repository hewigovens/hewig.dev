import { FooterCopyright, Section } from '@/components';
import { AppConfig } from '@/utils/AppConfig';

const footerLinks = [
  { href: 'https://glance.hewig.dev', label: 'Glance' },
  { href: AppConfig.social.github, label: 'GitHub' },
  { href: '/rss.xml', label: 'RSS' },
];

const Footer = () => (
  <Section as="footer">
    <div className="flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
      <FooterCopyright site_name={AppConfig.site_name} />

      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
        {footerLinks.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-accent">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </Section>
);

export { Footer };
