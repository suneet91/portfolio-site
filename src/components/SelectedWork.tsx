import { Section } from "@/components/Section";
import { ArrowUpRightIcon } from "@/components/icons";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <Section id="work" title="Selected Work" tinted>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-base font-semibold text-slate-900">{project.name}</h3>
              <ArrowUpRightIcon className="size-4 text-slate-400 transition group-hover:text-blue-600" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
