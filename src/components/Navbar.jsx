import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useLanguage } from "../i18n/LanguageContext";

const INSTAGRAM_URL = "https://www.instagram.com/themontessoricastle_/";
const FACEBOOK_URL = "https://www.facebook.com/share/1QM6LmGPzz/?mibextid=wwXIfr";
const WHATSAPP_URL = "https://wa.me/966511247864";

const Navbar = () => {
  const { t, lang, setLang, isRtl } = useLanguage();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const navLinks = [
    { title: t("nav.home"), href: "#home" },
    { title: t("nav.about"), href: "#about" },
    { title: t("nav.courses"), href: "#courses" },
    { title: t("nav.workshops"), href: "#workshops" },
    { title: t("nav.why"), href: "#why" },
    { title: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScroll = window.scrollY;

      if (mobileMenu) {
        setHidden(false);
        lastScrollY = currentScroll;
        return;
      }

      if (hasClicked) {
        setHidden(false);
        setHasClicked(false);
        lastScrollY = currentScroll;
        return;
      }

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasClicked, mobileMenu]);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  const handleNavClick = () => {
    setHidden(true);
    setMobileMenu(false);
    setHasClicked(true);
  };

  const LangToggle = ({ className = "" }) => (
    <div
      className={`inline-flex items-center rounded-full border border-violet-200 bg-violet-50/80 p-0.5 text-[11px] font-bold sm:text-xs ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-2 py-1 transition sm:px-2.5 sm:py-1.5 ${
          lang === "en"
            ? "bg-violet-600 text-white shadow-sm"
            : "text-violet-700 hover:bg-white/70"
        }`}
      >
        {t("nav.langEn")}
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={`rounded-full px-2 py-1 transition sm:px-2.5 sm:py-1.5 ${
          lang === "ar"
            ? "bg-violet-600 text-white shadow-sm"
            : "text-violet-700 hover:bg-white/70"
        }`}
      >
        {t("nav.langAr")}
      </button>
    </div>
  );

  const BrandName = ({ className = "" }) => (
    <h2
      className={className}
      style={{ fontFamily: "'Baloo 2', cursive" }}
      dir="ltr"
      lang="en"
    >
      <span className="text-[#7B3FF2]">The</span>{" "}
      <span className="text-[#0B55B7]">Montessori</span>{" "}
      <span className="text-[#52C24E]">Castle</span>
    </h2>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt="TMC Logo"
              className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16"
            />
            <BrandName className="whitespace-nowrap text-[15px] font-semibold leading-tight sm:text-[20px] lg:text-[28px]" />
          </div>

          <nav className="ml-4 hidden items-center gap-2 xl:gap-6 lg:flex">
            {navLinks
              .filter((item) => item.href !== "#contact")
              .map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="whitespace-nowrap rounded-full px-3 py-2 font-semibold text-gray-600 transition-all duration-300 hover:bg-violet-50 hover:text-violet-600 xl:px-5 xl:py-3"
                >
                  {item.title}
                </a>
              ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LangToggle className="hidden lg:inline-flex" />

            <a
              href="#contact"
              onClick={handleNavClick}
              className="hidden rounded-full bg-gradient-to-r from-orange-500 to-red-400 px-6 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 lg:block xl:px-8"
            >
              {t("nav.contact")}
            </a>

            <button
              type="button"
              onClick={() => setMobileMenu(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[#7B3FF2] transition hover:bg-violet-50 lg:hidden"
              aria-label={t("nav.openMenu")}
              aria-expanded={mobileMenu}
            >
              <Menu size={28} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] bg-black/40 transition-opacity duration-300 lg:hidden ${
          mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenu(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 z-[80] flex h-full w-[min(86vw,320px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isRtl ? "right-0" : "left-0"
        } ${
          mobileMenu
            ? "translate-x-0"
            : isRtl
              ? "translate-x-full"
              : "-translate-x-full"
        }`}
        aria-hidden={!mobileMenu}
      >
        <div className="flex items-center justify-between border-b border-violet-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-10 w-10 object-contain" />
            <BrandName className="text-sm font-semibold leading-tight" />
          </div>
          <button
            type="button"
            onClick={() => setMobileMenu(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-violet-50 hover:text-violet-600"
            aria-label={t("nav.closeMenu")}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0B55B7] transition hover:bg-violet-50 hover:text-[#7B3FF2]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between rounded-2xl bg-violet-50 px-4 py-3 lg:hidden">
            <span className="text-sm font-semibold text-[#7B3FF2]">EN / ع</span>
            <LangToggle />
          </div>
        </nav>

        <div className="border-t border-violet-100 px-5 py-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#7B3FF2]">
            {t("nav.followUs")}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white shadow-md transition hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md transition hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px]" aria-hidden="true">
                <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition hover:scale-105"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M16.002 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.26.59 4.46 1.72 6.4L3.2 28.8l6.62-1.73a12.77 12.77 0 0 0 6.18 1.58h.01c7.06 0 12.8-5.73 12.8-12.79S23.062 3.2 16.002 3.2zm0 23.36c-1.9 0-3.76-.51-5.38-1.48l-.39-.23-3.93 1.03 1.05-3.83-.25-.4a10.5 10.5 0 0 1-1.61-5.56c0-5.8 4.73-10.52 10.53-10.52 5.8 0 10.52 4.72 10.52 10.52-.01 5.8-4.73 10.47-10.54 10.47zm5.77-7.87c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-.99 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.87-1.76-2.19-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.29 3.27c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
