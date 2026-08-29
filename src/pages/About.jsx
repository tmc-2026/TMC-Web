import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  GraduationCap,
  Globe2,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutGridRef = useRef(null);
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const featuresRef = useRef(null);
  const features = [
    {
      icon: GraduationCap,
      title: "Certified Programs",
      desc: "Professional Montessori teacher training and internationally recognized certification courses.",
      color: "from-violet-500 to-violet-600",
      titleColor: "text-[#7B3FF2]",
      descColor: "text-[#0B55B7]",
    },
    {
      icon: HeartHandshake,
      title: "Practical Learning",
      desc: "Hands-on workshops and real classroom strategies designed for modern educators.",
      color: "from-orange-400 to-orange-500",
      titleColor: "text-[#FF8A00]",
      descColor: "text-[#52C24E]",
    },
    {
      icon: Globe2,
      title: "Global Community",
      desc: "Supporting teachers, schools, parents and caregivers across different countries.",
      color: "from-green-500 to-emerald-500",
      titleColor: "text-[#52C24E]",
      descColor: "text-[#7B3FF2]",
    },
  ];

  useEffect(() => {
    const grid = aboutGridRef.current;
    const left = aboutLeftRef.current;
    const right = aboutRightRef.current;
    const features = featuresRef.current;

    const ctx = gsap.context(() => {
      if (grid && left && right) {
        gsap.set(left, { x: -120, opacity: 0 });
        gsap.set(right, { x: 120, opacity: 0 });

        gsap.to(left, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
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
            trigger: grid,
            start: "top 75%",
            toggleActions: "restart none restart none",
          },
        });
      }

      if (features) {
        const cards = features.querySelectorAll(".about-feature-card");

        gsap.set(cards, { y: -90, opacity: 0 });
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.16,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: features,
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
      id="about"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#FFF8E8] via-white to-[#EEF8FF] pt-6"
    >
      {/* Background Blobs */}

      <div className="absolute -top-28 -left-24 w-72 h-72 rounded-full bg-yellow-200/40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-20">


          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">

            <span className="text-[#FF8A00]">The Heart Behind </span>

            <span className="text-[#7B3FF2]">
              The
            </span>{" "}

            <span className="text-[#0B55B7]">
               Montessori
            </span>{" "}

            <span className="text-[#52C24E]">
              Castle
            </span>

          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 font-medium fade-up" style={{ animationDelay: '0.15s' }}>
            <span className="text-[#7B3FF2]">We are passionate about empowering aspiring and professional educators </span>
            <span className="text-[#0B55B7]">through high-quality Montessori teacher training, </span>
            <span className="text-[#52C24E]">internationally recognized certification programs, </span>
            <span className="text-[#FF8A00]">and practical learning experiences.</span>
          </p>

        </div>

        {/* Main Grid */}

        <div ref={aboutGridRef} className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div ref={aboutLeftRef}>


            <h3 className="mt-4 text-3xl font-bold leading-tight">
              <span className="text-[#7B3FF2]">Inspiring educators </span>
              <span className="text-[#0B55B7]">to create </span>
              <span className="text-[#52C24E]">brighter childhoods.</span>
            </h3>

            <p className="mt-6 leading-8 font-medium">
              <span className="text-[#7B3FF2]">The Montessori Castle </span>
              <span className="text-[#0B55B7]">is a training institute where we empower teachers, parents, and caregivers </span>
              <span className="text-[#52C24E]">with practical Montessori education, child development knowledge, </span>
              <span className="text-[#FF8A00]">and compassionate guidance. </span>
              <span className="text-[#7B3FF2]">Through our courses, workshops, and supportive community, </span>
              <span className="text-[#0B55B7]">we help adults create nurturing environments where every child can grow </span>
              <span className="text-[#52C24E]">with confidence, independence, curiosity, </span>
              <span className="text-[#FF8A00]">and a lifelong love of learning.</span>
            </p>

            <p className="mt-5 leading-8 font-medium">
              <span className="text-[#FF8A00]">What started as a small educational initiative </span>
              <span className="text-[#7B3FF2]">has grown into a trusted learning community </span>
              <span className="text-[#0B55B7]">that provides online courses, workshops, certifications, </span>
              <span className="text-[#52C24E]">and valuable teaching resources for educators around the world.</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="bg-violet-600 hover:bg-violet-700 transition text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">

                Learn More

                <ArrowRight size={18} />

              </button>

              <button className="border-2 border-violet-200 hover:bg-violet-50 transition text-violet-700 px-7 py-3 rounded-full font-semibold">
                Our Courses
              </button>

            </div>

          </div>

          {/* Right Card */}

          <div ref={aboutRightRef} className="relative">

            <div className="absolute -top-5 -left-5 w-full h-full rounded-[35px] bg-gradient-to-r from-violet-300/20 via-yellow-200/20 to-green-300/20 blur-xl"></div>

            <div className="relative bg-white rounded-[35px] shadow-2xl border border-gray-100 p-10">

              <div className="w-24 h-24 rounded-full bg-violet-100 flex items-center justify-center mx-auto">

                <BookOpen
                  size={42}
                  className="text-violet-600"
                />

              </div>

              <h3 className="mt-8 text-center text-3xl font-bold">
                <span className="text-[#7B3FF2]">Our </span>
                <span className="text-[#0B55B7]">Mission</span>
              </h3>

              <p className="mt-5 text-center leading-8 font-medium">
                <span className="text-[#7B3FF2]">To empower educators with practical Montessori knowledge, </span>
                <span className="text-[#0B55B7]">internationally recognized certification programs, </span>
                <span className="text-[#52C24E]">and continuous professional development </span>
                <span className="text-[#FF8A00]">that positively impacts children, families, and communities.</span>
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="rounded-2xl bg-violet-50 p-5 text-center">
                  <h4 className="text-3xl font-bold text-[#7B3FF2]">
                    2500+
                  </h4>
                  <p className="mt-2 text-sm font-medium text-[#0B55B7]">
                    Teachers Trained
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-5 text-center">
                  <h4 className="text-3xl font-bold text-[#52C24E]">
                    15+
                  </h4>
                  <p className="mt-2 text-sm font-medium text-[#FF8A00]">
                    Years Experience
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

                {/* Features */}

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="about-feature-card group bg-white rounded-[30px] p-8 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-500"
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className={`mt-6 text-2xl font-bold ${item.titleColor}`}>
                  {item.title}
                </h3>

                <p className={`mt-4 leading-8 font-medium ${item.descColor}`}>
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

        {/* CTA */}

       

      </div>

    </section>
  );
}
