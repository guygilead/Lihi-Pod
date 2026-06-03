import { navLinks } from "@/lib/nav";
import { siteConfig, socials, ctaPrimary } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Ltr } from "@/components/ui/Ltr";
import { MicGlyph } from "@/components/visuals/MicGlyph";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-editorial py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-charcoal-deep text-gold-soft ring-1 ring-line-dark">
                <MicGlyph className="w-4" strokeWidth={2.2} />
              </span>
              <span className="font-serif text-lg font-bold text-cream">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-light">
              {siteConfig.about}
            </p>
          </div>

          {/* nav */}
          <nav className="md:col-span-3" aria-label="ניווט תחתון">
            <h2 className="font-serif text-base font-bold text-cream">ניווט</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-light transition-colors hover:text-gold-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div className="md:col-span-4">
            <h2 className="font-serif text-base font-bold text-cream">
              יצירת קשר
            </h2>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="group inline-flex items-center gap-3 text-sm text-muted-light transition-colors hover:text-gold-soft"
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-charcoal-deep text-gold-soft ring-1 ring-line-dark transition-colors group-hover:ring-gold/40">
                        <Icon
                          name={s.icon}
                          className="h-4 w-4"
                          strokeWidth={1.7}
                          aria-hidden
                        />
                      </span>
                      <Ltr>{s.value}</Ltr>
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={ctaPrimary.href}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft hover:text-cream"
            >
              {ctaPrimary.label} ←
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line-dark pt-6 text-sm text-muted-light sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <Ltr>{year}</Ltr> {siteConfig.name}. כל הזכויות שמורות.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
