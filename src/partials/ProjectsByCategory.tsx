import { Project, Section } from '@/components';
import {
  categoryLabels,
  categoryOrder,
  projects,
  resolveLink,
} from '@/data/projects';

const ProjectsByCategory = () => {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: projects.filter((p) => p.category === cat),
  }));

  return (
    <Section
      titleAs="h1"
      title="All projects"
    >
      <div className="flex flex-col gap-10">
        {grouped.map(({ category, label, items }) => (
          <div key={category}>
            <h2 className="text-lg font-semibold mb-4 text-muted">
              {label}
            </h2>
            <div className="flex flex-col gap-6">
              {items.map((entry) => (
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
          </div>
        ))}
      </div>
    </Section>
  );
};

export { ProjectsByCategory };
