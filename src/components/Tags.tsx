type ITagsProps = {
  items: string[];
};

const Tags = (props: ITagsProps) => (
  <p className="font-mono text-xs text-muted">{props.items.join(' · ')}</p>
);

export { Tags };
