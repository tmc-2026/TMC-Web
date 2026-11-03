import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Users,
  Globe2,
  ArrowRight,
} from "lucide-react";

import TmcVid from "../assets/TmcVid.mp4";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Montessori Trainers",
    description:
      "Learn directly from passionate educators with years of Montessori classroom experience.",
    bg: "bg-violet-100",
    iconColor: "text-violet-600",
    titleColor: "text-[#7B3FF2]",
    descColor: "text-[#0B55B7]",
  },

  {
    icon: Globe2,
    title: "Flexible Online Learning",
    description:
      "Study from anywhere in the world at your own pace with complete flexibility.",
    bg: "bg-sky-100",
    iconColor: "text-sky-600",
    titleColor: "text-[#0B55B7]",
    descColor: "text-[#52C24E]",
  },

  {
    icon: Award,
    title: "Professional Certification",
    description:
      "Receive recognized certificates that strengthen your teaching career.",
    bg: "bg-green-100",
    iconColor: "text-green-600",
    titleColor: "text-[#52C24E]",
    descColor: "text-[#FF8A00]",
  },

  {
    icon: Users,
    title: "Supportive Learning Community",
    description:
      "Become part of a growing community of educators, parents and future teachers.",
    bg: "bg-orange-100",
    iconColor: "text-orange-500",
    titleColor: "text-[#FF8A00]",
    descColor: "text-[#7B3FF2]",
  },
];

const WhyTMC = () => {
  return (
  <section
  id="why"
  className="relative overflow-hidden bg-[#FFF8EF] py-16 scroll-mt-[85px]"
>
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-200/30 blur-[120px]" />

<div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-200/30 blur-[140px]" />

<div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-100/30 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}

          <div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .8,
              }}
              viewport={{
                once: true,
              }}
              className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >

         <span className="text-violet-600">
Why Educators
</span>

<br/>

<span className="text-[#0B55B7]">
Choose
</span>{" "}

<span className="text-[#52C24E]">
TMC
</span>

            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .2,
                duration: .8,
              }}
              viewport={{
                once: true,
              }}
              className="mt-8 max-w-xl text-lg leading-8 font-medium"
            >
              <span className="text-[#7B3FF2]">At The Montessori Castle, </span>
              <span className="text-[#0B55B7]">we believe every educator deserves practical, engaging </span>
              <span className="text-[#52C24E]">and internationally inspired Montessori training. </span>
              <span className="text-[#FF8A00]">Our programs empower teachers, assistants and parents </span>
              <span className="text-[#7B3FF2]">with the confidence to create meaningful learning experiences </span>
              <span className="text-[#0B55B7]">for every child.</span>
            </motion.p>

            {/* Cards */}

            <div className="mt-12 space-y-6">

              {features.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -60,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * .15,
                      duration: .6,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                    }}
                    className="group flex gap-5 rounded-[24px] border border-orange-100 bg-white p-5 shadow-lg transition-all"
                  >

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                    >

                      <Icon
                        size={26}
                        className={`${item.iconColor} transition duration-300 group-hover:rotate-12 group-hover:scale-110`}
                      />

                    </div>

                    <div>

                      <h3 className={`text-xl font-bold ${item.titleColor}`}>
                        {item.title}
                      </h3>

                      <p className={`mt-2 leading-7 font-medium ${item.descColor}`}>
                        {item.description}
                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .95,
              }}
              className="mt-10 flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl"
            >

              Start Learning Today

              <ArrowRight size={20} />

            </motion.button>

          </div>

          {/* ========================= */}
          {/* RIGHT SIDE STARTS HERE */}
          {/* Part 2 yahan se start hogi */}
          {/* RIGHT SIDE */}

<div className="relative flex justify-center">

  {/* Glow */}

  <div className="absolute h-[520px] w-[360px] rounded-[60px] bg-gradient-to-b from-violet-300/30 via-sky-300/20 to-green-300/30 blur-[90px]"></div>

  {/* Video Container */}

  <motion.div
    initial={{
      opacity: 0,
      y: 40,
      scale: .96,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: .9,
      delay: .25,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    whileHover={{
      scale: 1.02,
    }}
    className="relative w-full max-w-[320px] overflow-hidden rounded-[30px] border border-orange-100 bg-white p-2 shadow-2xl"
  >

    <video
      src={TmcVid}
      autoPlay
      muted
      loop
      playsInline
     className="h-auto max-h-[500px] w-full rounded-[24px] object-cover"
    />

  </motion.div>




</div>
        </div>
      </div>

      {/* Bottom CTA */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .8,
          delay: .2,
        }}
        viewport={{
          once: true,
        }}
        className="relative z-10 mx-auto mt-24 max-w-6xl px-6"
      >

        <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 p-8 shadow-[0_30px_80px_rgba(59,130,246,.25)] sm:rounded-[40px] sm:p-12">

          {/* Floating Glow */}

          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 text-center">

            <motion.h2
              initial={{
                opacity: 0,
                scale: .9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: .8,
              }}
              viewport={{
                once: true,
              }}
              className="text-3xl font-bold text-white sm:text-4xl"
            >

              Your Montessori Journey Starts Here.

            </motion.h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">

              Join aspiring teachers, assistants and parents who are
              transforming early childhood education through practical
              Montessori learning.

            </p>

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: .95,
              }}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-orange-600 shadow-xl transition"

            >

              Explore Our Courses

              <ArrowRight size={20} />

            </motion.button>

          </div>

        </div>

      </motion.div>

    </section>

  );
};

export default WhyTMC;