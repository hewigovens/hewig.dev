import type { ReactNode } from 'react';

type IGradientTextProps = {
    children: ReactNode;
};

const GradientText = (props: IGradientTextProps) => (
    <span className="gradient-text">{props.children}</span>
);

export { GradientText };
