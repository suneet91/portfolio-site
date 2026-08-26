import type { ReactNode } from "react";

export function Section({
  id,
  title,
  eyebrow,
  tinted = false,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  tinted?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${tinted ? "bg-slate-50" : "bg-white"}`}>
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            {eyebrow}
          </p>
        )}
        <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
