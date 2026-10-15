import type { ReactNode } from "react";
import { Container, Eyebrow } from "./primitives";

/** Plain, honest page for routes whose content is not ready yet. */
export function NoticePage({
  eyebrow,
  title,
  children,
  actions,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <main id="main" className="bg-white">
      <Container className="py-28 md:py-44">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-8 max-w-3xl text-5xl font-medium leading-[1] tracking-display md:text-7xl">
          {title}
        </h1>
        <div className="mt-8 max-w-xl text-lg leading-relaxed text-gray-600">
          {children}
        </div>
        {actions && <div className="mt-12 flex flex-wrap gap-3">{actions}</div>}
      </Container>
    </main>
  );
}
