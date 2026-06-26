import type { ReactNode } from 'react';
import { AppConfig } from '@/utils/AppConfig';
type INewsletterProps = {
  title: ReactNode;
  description: ReactNode;
};

const Newsletter = (props: INewsletterProps) => (
  <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-panel p-8 sm:flex-row">
    <div className="sm:w-7/12">
      <div className="text-3xl font-bold text-ink">{props.title}</div>

      <p className="mt-3 text-muted">{props.description}</p>
    </div>

    <div className="w-full sm:w-5/12">
      <form action={AppConfig.social.newsletter} target="_blank" className="flex rounded-full border border-line bg-bg px-4 py-2 transition-colors focus-within:border-accent">
        <input className="w-full appearance-none bg-transparent text-ink placeholder:text-muted focus:outline-none" aria-label="Email address" placeholder="you@example.com" />

        <button
          className="btn btn-primary ml-2 shrink-0 rounded-full px-4 py-1 text-sm"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
);

export { Newsletter };
