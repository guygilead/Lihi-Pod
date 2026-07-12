import { Fragment } from "react";
import { trustItems } from "@/content/site";

/** Light capability strip (§6) — one row, gold dots, scrolls on mobile. */
export function TrustStrip() {
  return (
    <section aria-label="תחומי שירות" className="border-y border-line bg-paper">
      <div className="container-editorial overflow-x-auto">
        <ul className="flex min-w-max items-center justify-center gap-5 py-5 md:gap-8 md:py-6">
          {trustItems.map((item, i) => (
            <Fragment key={item}>
              {i > 0 && (
                <li aria-hidden>
                  <span className="block h-1.5 w-1.5 rounded-full bg-gold/70" />
                </li>
              )}
              <li className="text-base font-semibold whitespace-nowrap text-ink">
                {item}
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
