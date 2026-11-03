import { useLanguage } from "../i18n/LanguageContext";

const WHATSAPP_URL = "https://wa.me/966511247864";

export default function WhatsAppFloat() {
  const { t, isRtl } = useLanguage();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp")}
      className={`group fixed bottom-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition duration-300 hover:scale-110 hover:bg-[#1ebe57] md:bottom-8 md:h-16 md:w-16 ${
        isRtl ? "left-6 md:left-8" : "right-6 md:right-8"
      }`}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="relative z-10 h-8 w-8 md:h-9 md:w-9"
        aria-hidden="true"
      >
        <path d="M16.002 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.26.59 4.46 1.72 6.4L3.2 28.8l6.62-1.73a12.77 12.77 0 0 0 6.18 1.58h.01c7.06 0 12.8-5.73 12.8-12.79S23.062 3.2 16.002 3.2zm0 23.36c-1.9 0-3.76-.51-5.38-1.48l-.39-.23-3.93 1.03 1.05-3.83-.25-.4a10.5 10.5 0 0 1-1.61-5.56c0-5.8 4.73-10.52 10.53-10.52 5.8 0 10.52 4.72 10.52 10.52-.01 5.8-4.73 10.47-10.54 10.47zm5.77-7.87c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-.99 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.87-1.76-2.19-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.29 3.27c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37z" />
      </svg>
    </a>
  );
}
