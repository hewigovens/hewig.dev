import type { ReactNode } from 'react';

type IHeroAvatarProps = {
  tag?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  avatar: ReactNode;
  socialButtons: ReactNode;
};

const HeroAvatar = (props: IHeroAvatarProps) => (
  <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:gap-x-16">
    <div className="max-w-xl">
      {props.tag && <div className="mb-5">{props.tag}</div>}

      <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl">{props.title}</h1>

      <p className="mt-5 text-lg leading-relaxed text-muted">{props.description}</p>

      <div className="mt-7">{props.socialButtons}</div>
    </div>

    <div className="shrink-0">{props.avatar}</div>
  </div>
);

export { HeroAvatar };
