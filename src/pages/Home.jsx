import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../assets/heroimage.png";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  Users,
  Globe2,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroSectionRef = useRef(null);
  const heroLeftRef = useRef(null);
  const heroRightRef = useRef(null);
  const introSectionRef = useRef(null);
  const introLeftRef = useRef(null);
  const introRightRef = useRef(null);

  const highlights = [
  {
    icon: GraduationCap,
    title: "Hands-on Montessori Training",
    color: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: BookOpen,
    title: "Flexible Learning for Parents & Teachers",
    color: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Guidance from Experienced Educators",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
];

  useEffect(() => {
    const slideIn = (section, left, right) => {
      if (!section || !left || !right) return;

      gsap.set(left, { x: -120, opacity: 0 });
      gsap.set(right, { x: 120, opacity: 0 });

      gsap.to(left, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "restart none restart none",
        },
      });

      gsap.to(right, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "restart none restart none",
        },
      });
    };

    const ctx = gsap.context(() => {
      slideIn(heroSectionRef.current, heroLeftRef.current, heroRightRef.current);
      slideIn(introSectionRef.current, introLeftRef.current, introRightRef.current);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">
     <section
  ref={heroSectionRef}
  id="home"
  className="relative -mt-px overflow-hidden bg-gradient-to-r from-[#FFF9EC] via-white to-[#EEF8FF] min-h-[calc(100vh-72px)] py-10 scroll-mt-24"
>
        <div className="absolute top-40 left-0 h-96 w-96 rounded-full bg-yellow-200/60 blur-[140px]" />
        <div className="absolute bottom-20 right-0 h-[500px] w-[500px] rounded-full bg-sky-200/60 blur-[180px]" />

        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {[...Array(70)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full opacity-70"
              style={{
                width: Math.random() * 8 + 4,
                height: Math.random() * 8 + 4,
                background: ["#FF8A65", "#7E57C2", "#4FC3F7", "#66BB6A", "#FFD54F"][Math.floor(Math.random() * 5)],
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div ref={heroLeftRef} className="flex flex-col items-start text-left">
              <h1 className="max-w-xl text-[28px] font-extrabold leading-[1.35] tracking-tight md:text-[34px] lg:text-[38px] headline-animate">
                <span className="text-[#52C24E]">Making the world a better place.</span>
                <br />
                <span className="text-[#FF8A00]">Start your educational journey at </span>
                <span className="text-[#7B3FF2]">The</span>{" "}
                <span className="text-[#0B55B7]">Montessori</span>{" "}
                <span className="text-[#52C24E]">Castle</span>
              </h1>

              <div className="mt-10 flex w-full flex-col gap-4 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start">
                <a
                  href="#courses"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-violet-700 sm:w-auto"
                >
                  Explore Courses
                  <ArrowRight size={20} />
                </a>

                <a
                  href="https://wa.me/966511247864?text=Hey%2C%20I%20want%20to%20talk%20to%20an%20advisor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-violet-300 px-8 py-4 text-center font-semibold text-violet-600 transition hover:bg-violet-50 sm:w-auto"
                >
                  Talk to an Advisor
                </a>
              </div>
            </div>



{/* RIGHT */}

<div ref={heroRightRef} className="relative mx-auto flex w-full max-w-[420px] justify-center lg:max-w-none">

  {/* Glow */}

  <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-violet-300/20 via-yellow-200/20 to-green-300/20 blur-3xl"></div>

  {/* Image Card */}

  <div className="relative w-full overflow-hidden rounded-[28px] bg-white p-2 shadow-2xl sm:rounded-[40px] sm:p-3">

    <img
      src={heroImage}
      alt="Montessori"
      className="h-auto w-full rounded-[22px] object-cover sm:rounded-[30px] lg:w-[470px]"
    />

  </div>

  {/* Badge 1 */}

  <div className="float absolute -top-3 left-2 rounded-2xl bg-white px-3 py-2 shadow-xl sm:-top-5 sm:-left-6 sm:px-5 sm:py-3">

    <div className="flex items-center gap-2 sm:gap-3">

      <GraduationCap
        className="text-violet-600"
        size={20}
      />

      <div>

        <h4 className="text-sm font-bold sm:text-[1.1rem]">
          Certified
        </h4>

        <p className="text-[0.7rem] text-gray-500 sm:text-[0.825rem]">
          Courses
        </p>

      </div>

    </div>

  </div>

  {/* Badge 2 */}

  <div
    className="float absolute top-6 right-1 rounded-2xl bg-white px-3 py-2 shadow-xl sm:top-10 sm:-right-8 sm:px-5 sm:py-3"
    style={{ animationDelay: ".6s" }}
  >

    <div className="flex items-center gap-2 sm:gap-3">

      <Users
        className="text-orange-500"
        size={20}
      />

      <div>

        <h4 className="text-sm font-bold sm:text-[1.1rem]">
          2500+
        </h4>

        <p className="text-[0.7rem] text-gray-500 sm:text-[0.825rem]">
          Teachers
        </p>

      </div>

    </div>

  </div>

  {/* Badge 3 */}

  <div
    className="float absolute bottom-6 left-1 rounded-2xl bg-white px-3 py-2 shadow-xl sm:bottom-8 sm:-left-8 sm:px-5 sm:py-3"
    style={{ animationDelay: "1.2s" }}
  >

    <div className="flex items-center gap-2 sm:gap-3">

      <BookOpen
        className="text-green-600"
        size={20}
      />

      <div>

        <h4 className="text-sm font-bold sm:text-[1.1rem]">
          Practical
        </h4>

        <p className="text-[0.7rem] text-gray-500 sm:text-[0.825rem]">
          Learning
        </p>

      </div>

    </div>

  </div>

  {/* Badge 4 */}

  <div
    className="float absolute -bottom-3 right-4 rounded-2xl bg-white px-3 py-2 shadow-xl sm:-bottom-6 sm:right-10 sm:px-5 sm:py-3"
    style={{ animationDelay: "1.8s" }}
  >

    <div className="flex items-center gap-2 sm:gap-3">

      <Globe2
        className="text-sky-500"
        size={20}
      />

      <div>

        <h4 className="text-sm font-bold sm:text-[1.1rem]">
          Global
        </h4>

        <p className="text-[0.7rem] text-gray-500 sm:text-[0.825rem]">
          Community
        </p>

      </div>

    </div>

  </div>

</div>

          </div>




        </div>



      </section>

      <section ref={introSectionRef} className="relative overflow-hidden py-24">

  <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E8] via-white to-[#EEF8FF]"></div>

  <div className="absolute -left-24 top-0 w-72 h-72 rounded-full bg-yellow-200/40 blur-3xl"></div>

  <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl"></div>

  <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

      <div ref={introLeftRef}>


<h2
  className="mt-6 text-3xl font-bold leading-tight sm:text-4xl"
>
  <span className="text-[#7B3FF2]">A calm, </span>
  <span className="text-[#0B55B7]">practical path</span>
  <br />
  <span className="text-[#FF8A00]">into </span>
  <span className="text-[#52C24E]">Montessori </span>
  <span className="text-[#7B3FF2]">learning.</span>
</h2>

    <TypeWriter />

      </div>

      <div ref={introRightRef} className="rounded-[32px] bg-white border border-violet-100 shadow-xl p-8">

        <ul className="space-y-5">

       {highlights.map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={index}
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
      }}
      className="flex items-center gap-5 rounded-2xl bg-gradient-to-r from-violet-50 via-yellow-50 to-green-50 p-5 shadow-sm"
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
      >
        <Icon size={28} className={item.iconColor} />
      </div>

      <span className="font-semibold leading-7 text-slate-700">
        {item.title}
      </span>
    </motion.div>
  );
})}

        </ul>

      </div>

    </div>

  </div>
  

</section>
    </div>




  );
 
};

function TypeWriter() {
  const segments = [
    { text: "We believe learning should be ", color: "text-[#7B3FF2]" },
    { text: "inspiring", color: "text-[#FF8A00]" },
    { text: ", ", color: "text-[#7B3FF2]" },
    { text: "practical", color: "text-[#0B55B7]" },
    { text: " and ", color: "text-[#7B3FF2]" },
    { text: "accessible", color: "text-[#52C24E]" },
    { text: ". Every course is designed to help ", color: "text-[#0B55B7]" },
    { text: "teachers", color: "text-[#7B3FF2]" },
    { text: ", ", color: "text-[#0B55B7]" },
    { text: "parents", color: "text-[#FF8A00]" },
    { text: " and ", color: "text-[#0B55B7]" },
    { text: "caregivers", color: "text-[#52C24E]" },
    { text: " build confidence through real-world ", color: "text-[#0B55B7]" },
    { text: "Montessori", color: "text-[#7B3FF2]" },
    { text: " knowledge.", color: "text-[#52C24E]" },
  ];

  const fullText = segments.map((s) => s.text).join("");
  const [charCount, setCharCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    let i = 0;

    const interval = setInterval(() => {
      i++;
      setCharCount(i);

      if (i >= fullText.length) {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [started, fullText.length]);

  let remaining = charCount;

  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setStarted(true)}
      className="mt-6 max-w-xl text-base sm:text-lg md:text-xl font-bold leading-7 sm:leading-8 tracking-wide"
      style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 700 }}
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
        <span className="animate-pulse text-[#7B3FF2]">|</span>
      )}
    </motion.p>
  );
}
export default Home;
