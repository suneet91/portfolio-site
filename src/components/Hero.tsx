import { profile } from "@/data/profile";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
          {profile.title}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Contact
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Resume <DownloadIcon />
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 text-slate-500">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-slate-900"
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-slate-900"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            aria-label="Email"
            className="transition hover:text-slate-900"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
