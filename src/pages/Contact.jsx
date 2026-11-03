import { useLanguage, TextSegments } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 scroll-mt-28">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="rounded-[32px] bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[#52C24E]">{t("contact.label")}</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            <TextSegments segments={t("contact.title")} />
          </h1>
          <p className="mt-6 text-base leading-8 font-medium">
            <TextSegments segments={t("contact.desc")} />
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-[32px] bg-white p-6 shadow-sm sm:p-10">
            <div className="space-y-6">
              <label className="block text-sm font-medium text-[#7B3FF2]">
                {t("contact.fullName")}
                <input
                  type="text"
                  className="mt-2 w-full rounded-3xl border border-violet-200 bg-violet-50/40 px-4 py-3 text-sm text-[#0B55B7] outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100 placeholder:text-[#7B3FF2]/60"
                  placeholder={t("contact.namePlaceholder")}
                />
              </label>
              <label className="block text-sm font-medium text-[#0B55B7]">
                {t("contact.email")}
                <input
                  type="email"
                  className="mt-2 w-full rounded-3xl border border-blue-200 bg-blue-50/40 px-4 py-3 text-sm text-[#0B55B7] outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100 placeholder:text-[#0B55B7]/60"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </label>
              <label className="block text-sm font-medium text-[#52C24E]">
                {t("contact.message")}
                <textarea
                  rows="5"
                  className="mt-2 w-full rounded-3xl border border-green-200 bg-green-50/40 px-4 py-3 text-sm text-[#52C24E] outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100 placeholder:text-[#52C24E]/60"
                  placeholder={t("contact.messagePlaceholder")}
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700"
              >
                {t("contact.send")}
              </button>
            </div>
          </form>

          <aside className="space-y-6 rounded-[32px] bg-gradient-to-br from-violet-600 to-emerald-500 p-6 text-white shadow-xl shadow-violet-500/20 sm:p-10">
            <div>
              <h2 className="text-2xl font-semibold">{t("contact.getInTouch")}</h2>
              <p className="mt-4 text-sm leading-7 text-white/90">
                {t("contact.aside")}
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-white/10 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/80">{t("contact.emailLabel")}</p>
                <p className="mt-2 font-semibold">themontessoricastle@gmail.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/80">{t("contact.phoneLabel")}</p>
                <p className="mt-2 font-semibold"><bdi dir="ltr">+966 51 124 7864</bdi></p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/80">{t("contact.locationLabel")}</p>
                <p className="mt-2 font-semibold">{t("contact.locationValue")}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
