import { Project, Section, Tags } from '@/components';
import { GradientText } from '@/components/GradientText';
import { projects, resolveLink } from '@/data/projects';

const recentNames = [
  'hw-core',
  'Solana Primitives',
  'Inspect',
  'App Detective',
  'Staged Launcher',
  'Miso',
  'Wallet Core',
  'GhostTile',
];

const recentProjects = recentNames
  .map((name) => projects.find((p) => p.name === name)!)
  .filter(Boolean);

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {recentProjects.map((entry) => (
        <Project
          key={entry.name}
          name={entry.name}
          description={entry.description}
          link={resolveLink(entry)}
          img={entry.img}
          category={
            <>
              {entry.tags.map((tag) => (
                <Tags key={tag.label} color={tag.color}>
                  {tag.label}
                </Tags>
              ))}
            </>
          }
        />
      ))}
    </div>

    <div className="mt-8 text-center">
      <a
        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold"
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
