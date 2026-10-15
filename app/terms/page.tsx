import type { Metadata } from "next";
import { pageMetadata, breadcrumbNode, jsonLdString } from "@/lib/seo";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/config";
import { ButtonLink, NoticePage } from "@/components/ui";

// Placeholder content: keep out of the index until the real policy is published.
export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description: "Auren’s terms of use are being prepared. Zent-specific terms will be published on the Zent website.",
  path: "/terms",
  index: false,
});

const breadcrumbLd = { "@context": "https://schema.org", ...breadcrumbNode("Terms", "/terms") };

export default function Terms() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbLd) }} />
    <NoticePage eyebrow="Legal" title="Terms of use" actions={<ButtonLink href="/" variant="secondary">Back to Auren</ButtonLink>}>
      <p>
        Our terms are being prepared and will be published here. Product-specific
        terms for Zent will be published on the Zent website before it opens to
        customers.
      </p>
      <p className="mt-4">
        Questions in the meantime: <a className="underline underline-offset-4" href={`mailto:${CONTACT_MAILTO}`}>{CONTACT_EMAIL}</a>
      </p>
    </NoticePage>
    </>
  );
}
