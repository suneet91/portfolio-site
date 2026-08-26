import { Section } from "@/components/Section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" title="Skills" tinted>
      <div className="grid gap-8 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
