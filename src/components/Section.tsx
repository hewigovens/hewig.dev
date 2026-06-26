import type { ElementType, ReactNode } from 'react';

type ISectionProps = {
  title?: ReactNode;
  children: ReactNode;
  id?: string;
  /** Semantic wrapper element. Defaults to a plain <div>. */
  as?: ElementType;
  /** Heading level for the section title. Defaults to a non-heading <div>. */
  titleAs?: ElementType;
};

const Section = (props: ISectionProps) => {
  const Wrapper = props.as ?? 'div';
  const Title = props.titleAs ?? 'div';

  return (
    <Wrapper id={props.id} className="mx-auto max-w-wrap px-5 py-8 sm:px-8">
      {props.title && (
        <Title className="mb-6 text-2xl font-bold text-ink">{props.title}</Title>
      )}

      {props.children}
    </Wrapper>
  );
};

export { Section };
