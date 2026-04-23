import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/config/site";

export default function FloatingCTA() {
  return (
    <div className="float-cta">
      <a
        href={SITE.messenger}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Messenger"
        style={{ background: "#0084ff" }}
      >
        <MessageCircle size={20} fill="white" />
      </a>
      <a
        href={SITE.zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        style={{ background: "#0068ff" }}
      >
        <span className="font-bold text-[11px] md:text-[13px]">Zalo</span>
      </a>
      <a
        href={`tel:${SITE.hotlineRaw}`}
        aria-label="Gọi hotline"
        style={{ background: "var(--primary)" }}
      >
        <Phone size={18} />
      </a>
    </div>
  );
}
