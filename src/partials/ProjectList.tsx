import { Project, Section } from '@/components';
import { projects, resolveLink } from '@/data/projects';

const recentNames = [
  'jayjay',
  'Hearvia',
  'hw-core',
  'Solana Primitives',
  'App Detective',
  'Inspect',
  'GhostTile',
  'Crypto Playground',
];

const recentProjects = recentNames
  .map((name) => projects.find((p) => p.name === name)!)
  .filter(Boolean);

const ProjectList = () => (
  <Section>
    <div className="mb-8">
      <div className="eyebrow">// recent work</div>
      <h2 className="mt-2 text-3xl font-semibold text-ink">
        Wallet libraries, developer tools and Apple apps
      </h2>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      {recentProjects.map((entry) => (
        <Project
          key={entry.name}
          name={entry.name}
          description={entry.description}
          link={resolveLink(entry)}
          img={entry.img}
          tags={entry.tags}
        />
      ))}
    </div>

    <div className="mt-8 text-center">
      <a
        className="inline-flex items-center gap-1 text-accent hover:text-accent-bright font-semibold"
        href="/projects/"
      >
        View all projects
        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  </Section>
);

export { ProjectList };
