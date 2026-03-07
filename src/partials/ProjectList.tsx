import { Project, Section, Tags } from '@/components';
import { GradientText } from '@/components/GradientText';
import { projects, resolveLink } from '@/data/projects';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {projects.map((entry) => (
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
  </Section>
);

export { ProjectList };
