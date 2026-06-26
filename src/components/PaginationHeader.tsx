type IPaginationHeaderProps = {
  title: string;
  description: string;
};

const PaginationHeader = (props: IPaginationHeaderProps) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold text-ink">{props.title}</h1>

    <div className="mt-3 text-muted">{props.description}</div>
  </div>
);

export { PaginationHeader };
