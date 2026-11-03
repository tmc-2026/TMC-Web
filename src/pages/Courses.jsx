import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  BookOpen,
  Award,
  Clock3,
  BadgeDollarSign,
  Download,
  Laptop,
  UserCheck,
  Users,
  Baby,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import certificateWoman from "../assets/certificate-woman.png";
import { useLanguage, TextSegments } from "../i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const courseMeta = [
  {
    price: "SAR 1,000",
    color: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    icon: GraduationCap,
    titleColor: "text-[#7B3FF2]",
    textColor: "text-[#0B55B7]",
  },

  {
    price: "SAR 2,000",
    color: "from-orange-500 to-amber-500",
    bg: "from-orange-50 to-yellow-50",
    featured: true,
    icon: BookOpen,
    titleColor: "text-[#FF8A00]",
    textColor: "text-[#7B3FF2]",
  },

  {
    price: "SAR 3,000",
    color: "from-green-500 to-emerald-600",
    bg: "from-green-50 to-emerald-50",
    icon: Award,
    titleColor: "text-[#52C24E]",
    textColor: "text-[#0B55B7]",
  },
];

const flexMeta = [
  {
    icon: Clock3,
    color: "bg-violet-100",
    iconColor: "text-violet-600",
    titleColor: "text-[#7B3FF2]",
    descColor: "text-[#0B55B7]",
  },
  {
    icon: BookOpen,
    color: "bg-orange-100",
    iconColor: "text-orange-500",
    titleColor: "text-[#FF8A00]",
    descColor: "text-[#52C24E]",
  },
  {
    icon: Download,
    color: "bg-sky-100",
    iconColor: "text-sky-600",
    titleColor: "text-[#0B55B7]",
    descColor: "text-[#7B3FF2]",
  },
  {
    icon: Users,
    color: "bg-green-100",
    iconColor: "text-green-600",
    titleColor: "text-[#52C24E]",
    descColor: "text-[#FF8A00]",
  },
  {
    icon: GraduationCap,
    color: "bg-violet-100",
    iconColor: "text-violet-600",
    titleColor: "text-[#7B3FF2]",
    descColor: "text-[#0B55B7]",
  },
  {
    icon: Laptop,
    color: "bg-orange-100",
    iconColor: "text-orange-500",
    titleColor: "text-[#FF8A00]",
    descColor: "text-[#52C24E]",
  },
];

const whoMeta = [
  {
    icon: UserCheck,
    color: "bg-violet-100 text-violet-600",
    titleColor: "text-[#7B3FF2]",
  },
  {
    icon: Baby,
    color: "bg-orange-100 text-orange-500",
    titleColor: "text-[#FF8A00]",
  },
  {
    icon: Users,
    color: "bg-green-100 text-green-600",
    titleColor: "text-[#52C24E]",
  },
];

export default function Courses() {
  const { t, lang } = useLanguage();
  const courseTexts = t("courses.list");
  const courses = courseMeta.map((meta, i) => ({
    ...meta,
    ...courseTexts[i],
  }));
  const flexTexts = t("courses.flexCards");
  const whoItems = t("courses.whoItems");
  const flexCardsRef = useRef(null);
  const certTextRef = useRef(null);

  useEffect(() => {
    const grid = flexCardsRef.current;
    const certText = certTextRef.current;

    const ctx = gsap.context(() => {
      if (grid) {
        const cards = grid.querySelectorAll(".flex-learn-card");

        gsap.set(cards, {
          y: 40,
          opacity: 0,
          scale: 0.92,
          rotation: (i) => (i % 2 === 0 ? -8 : 8),
        });

        gsap.to(cards, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.14,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "restart none restart none",
          },
        });
      }

      if (certText) {
        const items = certText.querySelectorAll(".cert-animate");

        gsap.set(items, { x: -70, opacity: 0 });
        gsap.to(items, {
          x: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: certText,
            start: "top 80%",
            toggleActions: "restart none restart none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-gradient-to-b from-[#F8FBFF] via-white to-[#FFFDF7] py-24 scroll-mt-20"
    >
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-violet-200/30 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-6">
        {/* Heading */}





<motion.h2 className="text-4xl md:text-5xl font-bold flex flex-wrap justify-center gap-3">
  {t("courses.words").map((word, index) => (
    <motion.span
      key={index}
      initial={{
        opacity: 0,
        y: -70,
        rotate: -10,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.18,
        type: "spring",
        stiffness: 170,
        damping: 12,
      }}
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      className={`${word.color} inline-block`}
    >
      {word.text}
    </motion.span>
  ))}
</motion.h2>

<CoursesTypeWriter key={lang} />


        {/* Cards */}

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br ${course.bg} p-5 shadow-xl`}
              >
                {course.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                    {t("courses.mostPopular")}
                  </div>
                )}

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r ${course.color} text-white shadow-lg`}
                >
                  <Icon size={26} />
                </div>

                <h3 className={`mt-5 text-lg font-bold leading-6 ${course.titleColor}`}>
                  {course.title}
                </h3>

                {course.subtitle && (
                  <p className={`mt-1 text-sm font-medium ${course.textColor}`}>{course.subtitle}</p>
                )}

                <div className="mt-8 space-y-4">
                  <div className={`flex items-center gap-3 font-medium ${course.textColor}`}>
                    <Clock3 size={18} />

                    {course.duration}
                  </div>

               
                </div>

                <ul className="mt-8 space-y-3">
                  {course.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-center gap-3 font-medium ${course.textColor}`}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

                      {point}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${course.color} py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]`}
                >
                  {t("courses.enrollNow")}

                  <ArrowRight size={18} className="rtl:rotate-180" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Get Certified */}
        <div className="relative mt-24 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#FFF8E8] via-white to-[#EEF8FF] px-5 py-12 sm:rounded-[40px] sm:px-10 sm:py-16 lg:px-14">
          <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div ref={certTextRef} className="order-2 lg:order-1">
              <h3 className="cert-animate text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                <TextSegments segments={t("courses.getCertifiedTitle")} />
              </h3>

              <p
                className="cert-animate mt-5 max-w-xl text-base font-bold leading-7 tracking-wide sm:text-lg sm:leading-8"
                style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 700 }}
              >
                <TextSegments segments={t("courses.getCertifiedDesc")} />
              </p>

              <ul className="mt-8 space-y-4">
                {t("courses.certPoints").map((item) => (
                  <li key={item} className="cert-animate flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[#7B3FF2]">
                      <BadgeCheck size={16} />
                    </span>
                    <span className="font-semibold text-[#0B55B7]">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/966511247864?text=HI%20I%20WANT%20TO%20REGISTER%20TO%20TMC%20COURSE"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-animate mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-[1.02] sm:w-auto"
              >
                {t("courses.getCertificate")}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="order-1 flex justify-center lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-violet-300/30 via-yellow-200/25 to-green-300/30 blur-2xl" />
                <img
                  src={certificateWoman}
                  alt="Graduate holding a Montessori certificate"
                  className="relative z-10 mx-auto h-auto w-full max-w-[340px] object-contain drop-shadow-2xl sm:max-w-[400px]"
                />
              </div>
            </motion.div>
          </div>
        </div>

   {/* Flexible Online Learning */}

{/* Flexible Online Learning */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative mt-24 overflow-hidden rounded-[28px] sm:rounded-[42px] bg-gradient-to-br from-violet-50 via-white to-sky-50 p-5 sm:p-10 lg:p-14 shadow-[0_25px_80px_rgba(91,33,182,0.08)]"
>
  {/* Background Blobs */}

  <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl"></div>

  <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl"></div>

  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/20 blur-3xl"></div>

  {/* Heading */}

  <div className="relative z-10 text-center">

    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [0, 3, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-violet-600 via-blue-500 to-green-500 text-white shadow-2xl"
    >
      <Laptop size={36} />
    </motion.div>

    <h3 className="mt-6 text-3xl font-bold sm:text-4xl">
      <TextSegments segments={t("courses.flexibleTitle")} />
    </h3>

    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 font-semibold">
      <TextSegments segments={t("courses.flexibleDesc")} />
    </p>

  </div>

  {/* Cards */}

  <div ref={flexCardsRef} className="relative z-10 mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    {flexMeta.map((meta, index) => {

      const item = { ...meta, ...flexTexts[index] };
      const Icon = item.icon;

      return (

        <motion.div
          key={index}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
          }}
          className="flex-learn-card group rounded-[28px] border border-white bg-white/90 p-6 backdrop-blur shadow-lg hover:shadow-2xl hover:border-violet-200 transition-all duration-300"
        >

          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
          >
            <Icon
              size={30}
              className={item.iconColor}
            />
          </div>

          <h4 className={`mt-5 text-lg font-semibold ${item.titleColor}`}>
            {item.title}
          </h4>

          <p className={`mt-2 text-sm leading-6 font-medium ${item.descColor}`}>
            {item.desc}
          </p>

        </motion.div>

      );

    })}

  </div>

</motion.div>

        {/* Who Is It For */}

        <div className="relative mt-24 overflow-hidden rounded-[28px] sm:rounded-[40px] bg-gradient-to-br from-[#F7F3FF] via-[#FFFDF6] to-[#EEF9FF] px-5 py-12 sm:px-8 sm:py-16">
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl"></div>

<div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl"></div>

<div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/20 blur-3xl"></div>
        <h3 className="relative z-10 text-center text-3xl sm:text-4xl font-bold">
            <TextSegments segments={t("courses.whoTitle")} />
          </h3>


          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whoMeta.map((meta, index) => {
              const item = { ...meta, title: whoItems[index] };
              const Icon = item.icon;

              return (
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  key={index}
                  className="rounded-[30px] bg-white p-8 text-center shadow-lg"
                >
                  <div
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${item.color}`}
                  >
                    <Icon size={36} />
                  </div>

                  <h4 className={`mt-6 text-2xl font-bold ${item.titleColor}`}>
                    {item.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[28px] bg-gradient-to-r from-violet-600 via-indigo-600 to-orange-500 p-8 text-center text-white shadow-2xl sm:rounded-[40px] sm:p-12"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t("courses.ctaTitle")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            {t("courses.ctaDesc")}
          </p>

          <a
            href="https://wa.me/966511247864?text=HI%20I%20WANT%20TO%20REGISTER%20TO%20TMC%20COURSE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-10 py-4 font-semibold text-violet-700 transition hover:scale-105"
          >
            {t("courses.registerToday")}
          </a>
        </motion.div>
      </div>
    </section>
  );

}

function CoursesTypeWriter() {
  const { t } = useLanguage();
  const segments = t("courses.typewriter");

  const fullText = segments.map((s) => s.text).join("");
  const [charCount, setCharCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    let i = 0;

    const interval = setInterval(() => {
      i++;
      setCharCount(i);

      if (i >= fullText.length) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [started, fullText.length]);

  let remaining = charCount;

  return (
  <motion.p
  initial={{
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 0.8,
  }}
  viewport={{ once: true }}
  onViewportEnter={() => setStarted(true)}
  whileHover={{
    scale: 1.02,
  }}
  className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 font-medium transition-colors duration-300"
>
      {segments.map((segment, index) => {
        if (remaining <= 0) return null;

        const visible = segment.text.slice(0, remaining);
        remaining -= visible.length;

        return (
          <span key={index} className={segment.color}>
            {visible}
          </span>
        );
      })}
      {started && charCount < fullText.length && (
        <span className="ml-1 inline-block h-6 w-[3px] rounded-full bg-gradient-to-b from-violet-600 via-blue-500 to-green-500 animate-pulse align-middle"></span>
      )}
    </motion.p>
  );
}