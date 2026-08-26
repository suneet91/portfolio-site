import { Section } from "@/components/Section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative pl-6">
            <span className="absolute left-0 top-1.5 size-2 rounded-full bg-blue-600" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-slate-900">
                {item.role} · {item.company}
              </h3>
              <span className="text-sm text-slate-500">
                {item.period} · {item.location}
              </span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
