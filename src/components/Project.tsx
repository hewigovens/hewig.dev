import { Tags } from './Tags';

type IProjectProps = {
  img: {
    src: string;
    alt: string;
    /** Edge-to-edge artwork reads larger than the rest, so draw it smaller. */
    compact?: boolean;
  };
  name: string;
  description: string;
  link: string;
  tags: string[];
};

const Project = (props: IProjectProps) => (
  <div className="flex flex-col items-center gap-x-8 gap-y-4 rounded-xl border border-line bg-panel p-4 transition-colors hover:border-accent/40 md:flex-row">
    <a className="flex h-36 w-36 shrink-0 items-center justify-center" href={props.link}>
      <img
        className={`icon-tile ${props.img.compact ? 'h-[120px] w-[120px]' : 'h-36 w-36'}`}
        src={props.img.src}
        alt={props.img.alt}
        loading="lazy"
      />
    </a>

    <div className="w-full min-w-0">
      <a className="text-xl font-semibold text-ink hover:text-accent" href={props.link}>
        {props.name}
      </a>

      <div className="mt-1">
        <Tags items={props.tags} />
      </div>

      <p className="mt-3 text-muted">{props.description}</p>
    </div>
  </div>
);

export { Project };
