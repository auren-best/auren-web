import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/config";
import { ButtonLink, NoticePage } from "@/components/ui";

export const metadata: Metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <NoticePage eyebrow="Legal" title="Privacy policy" actions={<ButtonLink href="/" variant="secondary">Back to Auren</ButtonLink>}>
      <p>
        Our full privacy policy is being prepared and will be published here
        before Auren collects personal data beyond standard server logs. This
        site sets no advertising or analytics cookies.
      </p>
      <p className="mt-4">
        Questions in the meantime: <a className="underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </NoticePage>
  );
}
