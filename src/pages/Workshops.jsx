import { motion } from "framer-motion";
import {
  CalendarDays,
  GraduationCap,
  Users,
  Sparkles,
  BookOpen,
  ArrowRight,
  Clock3,
  Globe2,
  BadgeCheck,
  Palette,
} from "lucide-react";

const workshops = [
  {
    title: "Montessori Classroom Setup",
    date: "15 July 2026",
    duration: "2 Days",
    mode: "Live Online",
    badge: "Popular",
    color: "from-violet-500 to-fuchsia-500",
    titleColor: "text-[#7B3FF2]",
  },
  {
    title: "Creative Learning Activities",
    date: "30 July 2026",
    duration: "1 Day",
    mode: "Interactive",
    badge: "New",
    color: "from-orange-500 to-amber-500",
    titleColor: "text-[#FF8A00]",
  },
  {
    title: "Child Observation Workshop",
    date: "18 August 2026",
    duration: "2 Days",
    mode: "Live Online",
    badge: "Featured",
    color: "from-green-500 to-emerald-500",
    titleColor: "text-[#52C24E]",
  },
];

const categories = [
  {
    title: "Montessori",
    icon: GraduationCap,
    color: "bg-violet-100 text-violet-600",
    titleColor: "text-[#7B3FF2]",
    descColor: "text-[#0B55B7]",
  },
  {
    title: "Creative Arts",
    icon: Palette,
    color: "bg-orange-100 text-orange-500",
    titleColor: "text-[#FF8A00]",
    descColor: "text-[#52C24E]",
  },
  {
    title: "Child Development",
    icon: Users,
    color: "bg-sky-100 text-sky-600",
    titleColor: "text-[#0B55B7]",
    descColor: "text-[#7B3FF2]",
  },
  {
    title: "Teaching Skills",
    icon: BookOpen,
    color: "bg-green-100 text-green-600",
    titleColor: "text-[#52C24E]",
    descColor: "text-[#FF8A00]",
  },
];

export default function Workshops() {
  return (
    <section
      id="workshops"
      className="relative overflow-hidden scroll-mt-24 py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7E8] via-white to-[#EEF8FF]" />

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-sky-200/30 blur-3xl" />

      <div className="absolute left-1/2 top-48 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: .8 }}
          >
            <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg sm:px-5">

              <Sparkles className="shrink-0 text-orange-500" size={18} />

              <span className="text-sm font-semibold text-[#7B3FF2] sm:text-base">
                Interactive Montessori Workshops
              </span>

            </div>

            <h2 className="mt-8 text-4xl font-black leading-tight sm:text-5xl">

              <span className="text-violet-600">
                Learn.
              </span>

              <br />

              <span className="text-orange-500">
                Practice.
              </span>

              <br />

              <span className="text-green-500">
                Inspire.
              </span>

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 font-medium">

              <span className="text-[#7B3FF2]">Join our engaging Montessori workshops designed </span>
              <span className="text-[#0B55B7]">for teachers, assistants, parents and caregivers. </span>
              <span className="text-[#52C24E]">Learn through practical demonstrations, live activities </span>
              <span className="text-[#FF8A00]">and interactive discussions.</span>

            </p>

            <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">

              <a
                href="#upcoming"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105 sm:w-auto"
              >
                Upcoming Workshops

                <ArrowRight size={20} />

              </a>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-violet-300 px-8 py-4 font-semibold text-violet-600 transition hover:bg-violet-50 sm:w-auto"
              >
                Reserve Your Seat
              </a>

            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: .9 }}
            className="relative w-full min-w-0"
          >
            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="w-full rounded-[28px] bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,.12)] sm:rounded-[36px] sm:p-8"
            >
              <div className="inline-flex rounded-full bg-violet-100 px-4 py-2 font-semibold text-violet-700">

                Featured Workshop

              </div>

              <h3 className="mt-6 text-3xl font-bold">

                <span className="text-[#7B3FF2]">Montessori </span>
                <span className="text-[#0B55B7]">Classroom </span>
                <span className="text-[#52C24E]">Setup</span>

              </h3>

              <div className="mt-8 space-y-4">

                <div className="flex items-center justify-between rounded-2xl bg-orange-50 p-4">

                  <span className="flex items-center gap-2 font-medium text-[#FF8A00]">

                    <CalendarDays size={18} />

                    Date

                  </span>

                  <strong className="text-[#7B3FF2]">

                    15 July

                  </strong>

                </div>

                <div className="flex items-center justify-between rounded-2xl bg-sky-50 p-4">

                  <span className="flex items-center gap-2 font-medium text-[#0B55B7]">

                    <Clock3 size={18} />

                    Duration

                  </span>

                  <strong className="text-[#52C24E]">

                    2 Days

                  </strong>

                </div>

                <div className="flex items-center justify-between rounded-2xl bg-green-50 p-4">

                  <span className="flex items-center gap-2 font-medium text-[#52C24E]">

                    <Globe2 size={18} />

                    Mode

                  </span>

                  <strong className="text-[#0B55B7]">

                    Live Online

                  </strong>

                </div>

                <div className="flex items-center justify-between rounded-2xl bg-violet-50 p-4">

                  <span className="flex items-center gap-2 font-medium text-[#7B3FF2]">

                    <BadgeCheck size={18} />

                    Certificate

                  </span>

                  <strong className="text-[#FF8A00]">

                    Included

                  </strong>

                </div>

              </div>

            </motion.div>
          </motion.div>
        </div>

        {/* Categories */}

        <div className="mt-24">

          <motion.h3
            initial={{ opacity:0,y:40 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            className="text-center text-3xl font-bold sm:text-4xl"
          >
            <span className="text-[#7B3FF2]">Explore </span>
            <span className="text-[#0B55B7]">Workshop </span>
            <span className="text-[#52C24E]">Categories</span>
          </motion.h3>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((item,index)=>{

              const Icon=item.icon;

              return(

                <motion.div
                  key={index}
                  whileHover={{
                    y:-8,
                    scale:1.04,
                    rotate:-2
                  }}
                  className="rounded-[30px] bg-white p-8 shadow-xl"
                >

                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}>

                    <Icon size={30}/>

                  </div>

                  <h4 className={`mt-6 text-xl font-bold ${item.titleColor}`}>

                    {item.title}

                  </h4>

                  <p className={`mt-3 leading-7 font-medium ${item.descColor}`}>

                    Interactive workshops designed
                    around real classroom experience.

                  </p>

                </motion.div>

              )

            })}

          </div>

        </div>
                {/* Upcoming Workshops */}

        <div id="upcoming" className="mt-28">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <p className="font-semibold tracking-[0.25em] uppercase text-violet-600">
              Upcoming Workshops
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              <span className="text-[#7B3FF2]">Learn with our </span>
              <span className="text-[#0B55B7]">live interactive </span>
              <span className="text-[#FF8A00]">sessions</span>
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 font-medium">
              <span className="text-[#7B3FF2]">Every workshop combines practical activities, </span>
              <span className="text-[#0B55B7]">discussion, demonstrations </span>
              <span className="text-[#52C24E]">and live interaction to help you confidently </span>
              <span className="text-[#FF8A00]">implement Montessori principles.</span>
            </p>

          </motion.div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">

            {workshops.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .15 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group overflow-hidden rounded-[34px] bg-white shadow-xl"
              >

                <div
                  className={`h-3 bg-gradient-to-r ${item.color}`}
                ></div>

                <div className="p-8">

                  <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">

                    {item.badge}

                  </span>

                  <h4 className={`mt-6 text-2xl font-bold ${item.titleColor}`}>

                    {item.title}

                  </h4>

                  <div className="mt-8 space-y-4">

                    <div className="flex items-center justify-between">

                      <span className="text-[#7B3FF2] font-medium">

                        Date

                      </span>

                      <strong className="text-[#0B55B7]">

                        {item.date}

                      </strong>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-[#FF8A00] font-medium">

                        Duration

                      </span>

                      <strong className="text-[#52C24E]">

                        {item.duration}

                      </strong>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-[#0B55B7] font-medium">

                        Mode

                      </span>

                      <strong className="text-[#7B3FF2]">

                        {item.mode}

                      </strong>

                    </div>

                  </div>

                  <button className="mt-10 w-full rounded-full bg-violet-600 py-4 font-semibold text-white transition group-hover:bg-[#0B55B7]">

                    Register Now

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>





        {/* Why Attend */}

        <div className="mt-28 rounded-[28px] bg-gradient-to-r from-violet-600 via-blue-600 to-green-500 p-8 text-white sm:rounded-[40px] sm:p-12">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold sm:text-4xl"
              >

                Why Attend Our Workshops?

              </motion.h3>

              <p className="mt-6 text-lg leading-8 text-white/90">

                Learn directly from experienced Montessori educators through
                practical demonstrations, interactive activities and real
                classroom discussions.

              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                "Live Q&A Sessions",
                "Hands-on Activities",
                "Certificate Included",
                "Interactive Learning",
              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    rotate: -1,
                  }}
                  className="rounded-3xl bg-white/10 p-6 backdrop-blur"
                >

                  <div className="text-4xl">

                    ✨

                  </div>

                  <h4 className="mt-4 text-lg font-semibold">

                    {item}

                  </h4>

                </motion.div>

              ))}

            </div>

          </div>

        </div>





        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">

            <span className="text-[#7B3FF2]">Ready to Join </span>
            <span className="text-[#0B55B7]">Our Next </span>
            <span className="text-[#52C24E]">Workshop?</span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 font-medium">

            <span className="text-[#7B3FF2]">Reserve your seat today </span>
            <span className="text-[#0B55B7]">and become part of a growing community </span>
            <span className="text-[#FF8A00]">of Montessori educators.</span>

          </p>

          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: .95,
            }}
            className="mt-10 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 px-10 py-5 text-lg font-semibold text-white shadow-2xl"
          >

            Reserve Your Seat

          </motion.button>

        </motion.div>

      </div>

    </section>

  );
}