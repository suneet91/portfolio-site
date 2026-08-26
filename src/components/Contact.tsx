import { Section } from "@/components/Section";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact" title="Let's Connect" tinted>
      <p className="max-w-xl text-base text-slate-600">
        Open to conversations about RAG architecture, agentic AI systems, and data platform
        engineering. Reach out any time.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.links.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <MailIcon className="size-4" /> {profile.links.email}
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
        >
          <LinkedInIcon className="size-4" /> LinkedIn
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
        >
          <GitHubIcon className="size-4" /> GitHub
        </a>
      </div>
    </Section>
  );
}
