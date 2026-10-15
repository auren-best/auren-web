import { CONTACT_EMAIL, CONTACT_MAILTO, ZENT_URL } from "@/lib/config";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Reveal,
  Section,
  Tag,
  TextLink,
  ZentLogo,
} from "@/components/ui";
import { HeroArt } from "@/components/hero-art";
import { MiniDashboard } from "@/components/mini-dashboard";

const principles = [
  {
    title: "Reliability first",
    body: "Build products people can depend on.",
  },
  {
    title: "Clarity over complexity",
    body: "Make powerful technology easier to understand and use.",
  },
  {
    title: "Thoughtful engineering",
    body: "Prioritize quality, performance, and long-term maintainability.",
  },
];

const capabilities = [
  "Server health monitoring",
  "Website and API uptime checks",
  "Response-time tracking",
  "Resource utilization monitoring",
  "Incident history",
  "Configurable alerts",
  "Service status overview",
];

export default function Home() {
  return (
    <main id="main">
      {/* Hero */}
      <section aria-labelledby="hero-title" className="bg-white">
        <Container className="grid items-center gap-16 pb-24 pt-20 md:pb-32 md:pt-28 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow>Independent software company</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                id="hero-title"
                className="mt-8 text-[clamp(3rem,8.4vw,7.5rem)] font-medium leading-[0.94] tracking-display"
              >
                We build software that keeps things running.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
                Auren creates thoughtful, reliable software products for
                developers and modern digital businesses.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-12 flex flex-wrap gap-3">
                <ButtonLink href="#products">Explore our products</ButtonLink>
                <ButtonLink href="#about" variant="secondary">
                  Meet Auren
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <HeroArt />
            </Reveal>
          </div>
        </Container>
        <div className="border-t border-gray-200">
          <Container className="grid divide-gray-200 text-sm md:grid-cols-3 md:divide-x">
            {[
              ["Company", "Auren"],
              ["Flagship product", "Zent — Server Monitoring"],
              ["Focus", "Reliable software infrastructure"],
            ].map(([k, v]) => (
              <div key={k} className="py-6 md:px-8 md:first:pl-0 md:last:pr-0">
                <div className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-gray-600">
                  {k}
                </div>
                <div className="mt-1.5 font-medium tracking-[-0.01em]">{v}</div>
              </div>
            ))}
          </Container>
        </div>
      </section>

      {/* Philosophy */}
      <Section id="philosophy" index="01" label="Philosophy" labelledBy="philosophy-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2
              id="philosophy-title"
              className="text-4xl font-medium leading-[1] tracking-display md:text-6xl lg:text-7xl"
            >
              Built with intention. Designed to last.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-gray-600">
              We believe great software should be useful, dependable, and
              beautifully simple. At Auren, we focus on solving real problems
              through carefully designed technology.
            </p>
          </Reveal>
        </div>
        <ol className="mt-20 grid border-t border-gray-200 md:mt-28 md:grid-cols-3 md:divide-x md:divide-gray-200">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className="border-b border-gray-200 py-10 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <Reveal delay={i * 0.08}>
                <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-gray-500">
                  0{i + 1}
                </span>
                <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-xs leading-relaxed text-gray-600">
                  {p.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* Products */}
      <Section
        id="products"
        index="02"
        label="Products"
        tone="inverted"
        labelledBy="products-title"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2
              id="products-title"
              className="text-4xl font-medium leading-[1] tracking-display md:text-6xl lg:text-7xl"
            >
              Products by Auren.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-gray-500">
              Purpose-built software designed to make modern digital
              infrastructure easier to manage.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-14 border border-gray-800 p-6 md:p-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-wrap items-center gap-4">
              <ZentLogo size={30} className="[&>span]:text-3xl" />
              <Tag className="text-gray-500">A product by Auren</Tag>
            </div>
            <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-gray-500">
              Zent — Server Monitoring
            </p>
            <p className="mt-4 text-2xl font-medium leading-snug tracking-[-0.03em] md:text-3xl">
              Know when something breaks. Understand why. Keep your services
              running.
            </p>

            <h3 className="mt-10 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-gray-500">
              Intended capabilities
            </h3>
            <ul className="mt-4 divide-y divide-gray-800 border-y border-gray-800 text-sm">
              {capabilities.map((c) => (
                <li key={c} className="py-3">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              These describe Zent&rsquo;s intended scope. Capabilities are
              labelled individually as availability is confirmed.
            </p>

            <div className="mt-10">
              <TextLink href={ZENT_URL}>Explore Zent</TextLink>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-7">
            <MiniDashboard />
            <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-gray-500">
              Illustration · demo data, not live product data
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Story */}
      <Section id="about" index="03" label="About Auren" labelledBy="about-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <h2
              id="about-title"
              className="text-4xl font-medium leading-[1] tracking-display md:text-6xl lg:text-8xl"
            >
              Small details. Serious software.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="text-xl leading-relaxed text-gray-600 md:text-2xl md:leading-relaxed">
              Auren exists to build focused software products that solve
              meaningful problems. We value clear interfaces, dependable
              systems, and technology that earns trust through its quality.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="inverted" labelledBy="cta-title">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <h2
              id="cta-title"
              className="text-4xl font-medium leading-[1] tracking-display md:text-6xl lg:text-8xl"
            >
              Discover what we&rsquo;re building.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-gray-500">
              Explore Zent, our server-monitoring product built to help teams
              understand and maintain their infrastructure.
            </p>
            <div className="mt-10">
              <ButtonLink href={ZENT_URL}>Explore Zent</ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Contact */}
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="border-t border-gray-200 bg-white"
      >
        <Container className="grid items-center gap-8 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <Eyebrow>Contact</Eyebrow>
            <h2
              id="contact-title"
              className="mt-4 text-3xl font-medium tracking-display md:text-4xl"
            >
              Say hello.
            </h2>
          </div>
          <div className="md:col-span-6 md:text-right">
            <a
              href={`mailto:${CONTACT_MAILTO}`}
              className="inline-block border-b border-black pb-1 text-xl tracking-[-0.02em] md:text-2xl"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
