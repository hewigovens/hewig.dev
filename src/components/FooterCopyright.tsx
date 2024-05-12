type IFooterCopyrightProps = {
    site_name: string;
};

const FooterCopyright = (props: IFooterCopyrightProps) => (
    <div className="border-t border-gray-600 pt-5">
        <div className="text-sm text-gray-200">
            © Copyright {new Date().getFullYear()} {' '}
            <a
                className="text-cyan-400 hover:underline"
                href={props.site_name}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.site_name}
            </a>
            , All rights reserved. tweaked from <a className="text-cyan-400 hover:underline" target="_blank" href="https://github.com/ixartz/Astro-boilerplate">astro-boilerplate</a>.
        </div>
    </div>
);

export { FooterCopyright };
