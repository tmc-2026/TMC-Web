import logo from "../assets/logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/themontessoricastle_/";
const FACEBOOK_URL = "https://www.facebook.com/share/1QM6LmGPzz/?mibextid=wwXIfr";
const WHATSAPP_URL = "https://wa.me/966511247864";

const quickLinks = [
  { title: "Home", href: "#home" },
  { title: "About Us", href: "#about" },
  { title: "Courses", href: "#courses" },
  { title: "Workshops", href: "#workshops" },
  { title: "Why TMC", href: "#why" },
  { title: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      dir="ltr"
      lang="en"
      className="relative overflow-hidden bg-gradient-to-br from-[#FF8A00] via-[#FF7A00] to-[#F06A00] text-white"
    >
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="TMC Logo"
                className="h-14 w-14 rounded-2xl bg-white/95 object-contain p-1 shadow-md"
              />
              <h2
                className="text-xl font-bold leading-tight sm:text-2xl"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                The Montessori Castle
              </h2>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/90 sm:text-base">
              Empowering educators, parents, and caregivers through practical
              Montessori training, workshops, and recognized certification.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-[#FF8A00]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
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
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-[#FF8A00]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.6.4-1 1-1z" />
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-[#25D366]"
              >
                <svg viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M16.002 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.26.59 4.46 1.72 6.4L3.2 28.8l6.62-1.73a12.77 12.77 0 0 0 6.18 1.58h.01c7.06 0 12.8-5.73 12.8-12.79S23.062 3.2 16.002 3.2zm0 23.36c-1.9 0-3.76-.51-5.38-1.48l-.39-.23-3.93 1.03 1.05-3.83-.25-.4a10.5 10.5 0 0 1-1.61-5.56c0-5.8 4.73-10.52 10.53-10.52 5.8 0 10.52 4.72 10.52 10.52-.01 5.8-4.73 10.47-10.54 10.47zm5.77-7.87c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-.99 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.87-1.76-2.19-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.29 3.27c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/90 transition hover:text-white hover:underline sm:text-base"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/90 sm:text-base">
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Email
                </p>
                <a
                  href="mailto:themontessoricastle@gmail.com"
                  className="mt-1 block break-all font-medium transition hover:underline"
                >
                  themontessoricastle@gmail.com
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Phone
                </p>
                <a
                  href="tel:+966511247864"
                  className="mt-1 block font-medium transition hover:underline"
                >
                  +966 51 124 7864
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Location
                </p>
                <p className="mt-1 font-medium">ONLINE</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/25 pt-6 text-center text-sm text-white/85 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} The Montessori Castle. All rights reserved.</p>
          <p className="font-medium">Making the world a better place through education.</p>
        </div>
      </div>
    </footer>
  );
}
