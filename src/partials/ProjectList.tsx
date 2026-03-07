import { Project, Section, Tags } from '@/components';
import { GradientText } from '@/components/GradientText';
import {
  categoryLabels,
  categoryOrder,
  projects,
} from '@/data/projects';
import type { ProjectEntry } from '@/data/projects';

function resolveLink(entry: ProjectEntry): string {
  return entry.link.kind === 'internal' ? entry.link.path : entry.link.url;
}

const ProjectList = () => {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: projects.filter((p) => p.category === cat),
  }));

  return (
    <Section
      title={
        <>
          Recent <GradientText>Projects</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-10">
        {grouped.map(({ category, label, items }) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              {label.prefix}{' '}
              <GradientText>{label.highlight}</GradientText>
            </h3>
            <div className="flex flex-col gap-6">
              {items.map((entry) => (
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
          </div>
        ))}
      </div>
    </Section>
  );
};

export { ProjectList };
