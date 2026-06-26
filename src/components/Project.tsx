import type { ReactNode } from 'react';

type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link: string;
  category: ReactNode;
};

const Project = (props: IProjectProps) => (
  <div className="flex flex-col items-center gap-x-8 rounded-xl border border-line bg-panel p-4 transition-colors hover:border-accent/40 md:flex-row">
    <div className="shrink-0">
      <a href={props.link}>
        <img
          className="h-36 w-36 rounded-2xl bg-white ring-1 ring-line shadow-sm transition-transform hover:-translate-y-1 dark:bg-transparent dark:shadow-none"
          src={props.img.src}
          alt={props.img.alt}
          loading="lazy"
        />
      </a>
    </div>

    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <a className="text-ink hover:text-accent" href={props.link}>
          <div className="text-xl font-semibold">{props.name}</div>
        </a>

        <div className="ml-3 flex flex-wrap gap-2">{props.category}</div>
      </div>

      <p className="mt-3 text-muted">{props.description}</p>
    </div>
  </div>
);

export { Project };
