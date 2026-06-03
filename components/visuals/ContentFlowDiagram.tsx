import { Fragment } from "react";
import { ArrowLeft, ArrowDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { whatIs } from "@/content/site";

export function ContentFlowDiagram() {
  const { flowInputs, flowOutputs } = whatIs;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-paper/70 p-6 shadow-soft md:p-8">
      {/* strategic pipeline */}
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        {flowInputs.map((n, i) => (
          <Fragment key={n.label}>
            <div className="flex w-full items-center gap-3 rounded-2xl bg-cream px-4 py-3 ring-1 ring-line sm:w-auto">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-tint text-gold-deep">
                <Icon
                  name={n.icon}
                  className="h-5 w-5"
                  strokeWidth={1.6}
                  aria-hidden
                />
              </span>
              <span className="font-semibold text-ink">{n.label}</span>
            </div>
            {i < flowInputs.length - 1 && (
              <>
                <ArrowDown
                  className="h-5 w-5 shrink-0 text-gold-deep sm:hidden"
                  aria-hidden
                />
                <ArrowLeft
                  className="hidden h-5 w-5 shrink-0 text-gold-deep sm:block"
                  aria-hidden
                />
              </>
            )}
          </Fragment>
        ))}
      </div>

      {/* fan-out */}
      <div className="my-6 flex flex-col items-center gap-2">
        <ArrowDown className="h-6 w-6 text-gold-deep" aria-hidden />
        <p className="text-sm font-medium text-muted">
          כל פרק הופך למגוון נכסי תוכן
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {flowOutputs.map((o, i) => (
          <Reveal key={o.label} delay={i * 60}>
            <div className="flex h-full items-center gap-2.5 rounded-xl bg-cream px-3 py-3 ring-1 ring-line">
              <Icon
                name={o.icon}
                className="h-5 w-5 shrink-0 text-gold-deep"
                strokeWidth={1.6}
                aria-hidden
              />
              <span className="text-sm font-medium text-ink">{o.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
