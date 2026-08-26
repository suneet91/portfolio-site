import { Section } from "@/components/Section";
import { certifications, education } from "@/data/education";

export function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Education
          </h3>
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.program}>
                <p className="text-sm font-semibold text-slate-900">{item.program}</p>
                <p className="text-sm text-slate-600">
                  {item.institution} · {item.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Certifications
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
