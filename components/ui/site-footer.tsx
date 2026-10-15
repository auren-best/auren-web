import type { ReactNode } from "react";
import { Container, SmartLink } from "./primitives";
import type { NavLink } from "./site-header";

export type FooterColumn = { title: string; links: NavLink[] };

export function SiteFooter({
  brand,
  blurb,
  columns,
  legal,
}: {
  brand: ReactNode;
  blurb: ReactNode;
  columns: FooterColumn[];
  legal: ReactNode;
}) {
  return (
    <footer
      data-tone="inverted"
      className="border-t border-gray-800 bg-black text-white"
    >
      <Container className="py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            {brand}
            <div className="mt-6 max-w-sm text-sm leading-relaxed text-gray-500">
              {blurb}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-gray-500">
                  {col.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <SmartLink
                        href={l.href}
                        className="text-sm text-white/90 transition-colors hover:text-gray-500"
                      >
                        {l.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-3 border-t border-gray-800 pt-8 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          {legal}
        </div>
      </Container>
    </footer>
  );
}
