import { Section } from "@/components/Section";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-3xl text-base leading-relaxed text-slate-700">{profile.summary}</p>
    </Section>
  );
}
