import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={waLink("Hi Shiv Shakti Hardware, I would like to enquire about your products.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-ink-foreground shadow-glow transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={`tel:${BUSINESS.phone}`}
        aria-label="Call Shiv Shakti Hardware"
        className="grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-glow transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
