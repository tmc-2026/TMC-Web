export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 scroll-mt-28">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="rounded-[32px] bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[#52C24E]">Contact Us</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            <span className="text-[#7B3FF2]">Let’s talk </span>
            <span className="text-[#0B55B7]">about your </span>
            <span className="text-[#52C24E]">Montessori </span>
            <span className="text-[#FF8A00]">journey.</span>
          </h1>
          <p className="mt-6 text-base leading-8 font-medium">
            <span className="text-[#7B3FF2]">Reach out to learn about training dates, </span>
            <span className="text-[#0B55B7]">course details, </span>
            <span className="text-[#52C24E]">and how we support teachers </span>
            <span className="text-[#FF8A00]">every step of the way.</span>
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-[32px] bg-white p-6 shadow-sm sm:p-10">
            <div className="space-y-6">
              <label className="block text-sm font-medium text-[#7B3FF2]">
                Full name
                <input
                  type="text"
                  className="mt-2 w-full rounded-3xl border border-violet-200 bg-violet-50/40 px-4 py-3 text-sm text-[#0B55B7] outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100 placeholder:text-[#7B3FF2]/60"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-medium text-[#0B55B7]">
                Email address
                <input
                  type="email"
                  className="mt-2 w-full rounded-3xl border border-blue-200 bg-blue-50/40 px-4 py-3 text-sm text-[#0B55B7] outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100 placeholder:text-[#0B55B7]/60"
                  placeholder="hello@domain.com"
                />
              </label>
              <label className="block text-sm font-medium text-[#52C24E]">
                Message
                <textarea
                  rows="5"
                  className="mt-2 w-full rounded-3xl border border-green-200 bg-green-50/40 px-4 py-3 text-sm text-[#52C24E] outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100 placeholder:text-[#52C24E]/60"
                  placeholder="Tell us about your training goals"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700"
              >
                Send message
              </button>
            </div>
          </form>

          <aside className="space-y-6 rounded-[32px] bg-gradient-to-br from-violet-600 to-emerald-500 p-6 text-white shadow-xl shadow-violet-500/20 sm:p-10">
            <div>
              <h2 className="text-2xl font-semibold">Get in touch</h2>
              <p className="mt-4 text-sm leading-7 text-white/90">
                We’re happy to answer questions about enrollment, course structure, and coaching for Montessori teachers.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-white/10 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/80">Email</p>
                <p className="mt-2 font-semibold">themontessoricastle@gmail.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/80">Phone</p>
                <p className="mt-2 font-semibold">+966 51 124 7864</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/80">Location</p>
                <p className="mt-2 font-semibold">ONLINE</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
