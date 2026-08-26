import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
