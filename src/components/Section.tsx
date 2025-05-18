import type { ReactNode } from 'react';

type ISectionProps = {
  title?: ReactNode;
  children: ReactNode;
  id?: string;
};

const Section = (props: ISectionProps) => (
  <div id={props.id} className="mx-auto max-w-screen-lg px-3 py-6">
    {props.title && (
      <div className="mb-6 text-2xl font-bold">{props.title}</div>
    )}

    {props.children}
  </div>
);

export { Section };
