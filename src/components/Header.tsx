import { profile } from "@/data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold text-slate-900">
          {profile.name}
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-blue-600">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
