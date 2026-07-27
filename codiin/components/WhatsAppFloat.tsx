import { whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const DEFAULT_MESSAGE =
  "Hi CODiiN! I'm interested in learning more about your programs.";

export default function WhatsAppFloat({
  message = DEFAULT_MESSAGE,
}: {
  message?: string;
}) {
  return (
    <a
      href={whatsappHref(message)}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
