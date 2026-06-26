type IFooterCopyrightProps = {
    site_name: string;
};

const FooterCopyright = (props: IFooterCopyrightProps) => (
    <div className="text-sm text-muted">
        © {new Date().getFullYear()}{' '}
        <a
            className="text-accent hover:underline"
            href={`https://${props.site_name}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.site_name}
        </a>
        {' '}· Managed by{' '}
        <a
            className="text-accent hover:underline"
            href="https://shiorix.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            ShioriX 🔖
        </a>
    </div>
);

export { FooterCopyright };
