import type { Metadata } from "next";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/config";
import { ButtonLink, NoticePage } from "@/components/ui";

export const metadata: Metadata = { title: "Terms" };

export default function Terms() {
  return (
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
  );
}
