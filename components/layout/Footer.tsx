import { navLinks } from "@/lib/nav";
import { siteConfig, socials } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Ltr } from "@/components/ui/Ltr";
import { MicGlyph } from "@/components/visuals/MicGlyph";

/** Minimal dark footer (§15) — real contact details only. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-editorial py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-charcoal-deep text-gold-soft ring-1 ring-line-dark">
                <MicGlyph className="w-4" strokeWidth={2.2} />
              </span>
              <span className="font-serif text-lg font-bold text-cream">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-muted-light">
              {siteConfig.about}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="ניווט תחתון">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-base text-muted-light transition-colors hover:text-gold-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Real contact links only (hidden while contactDetails is empty) */}
          {socials.length > 0 && (
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-3 text-base text-muted-light transition-colors hover:text-gold-soft"
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Icon
                      name={s.icon}
                      className="h-4 w-4"
                      strokeWidth={1.7}
                      aria-hidden
                    />
                    <Ltr>{s.value}</Ltr>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line-dark pt-6 text-base text-muted-light sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <Ltr>{year}</Ltr> {siteConfig.name}. כל הזכויות שמורות.
          </p>
          <a
            href="/privacy"
            className="transition-colors hover:text-gold-soft"
          >
            מדיניות פרטיות
          </a>
        </div>
      </div>
    </footer>
  );
}
