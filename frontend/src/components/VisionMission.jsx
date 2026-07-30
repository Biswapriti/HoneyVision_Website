import { Eye, Target, Lightbulb, Globe } from "lucide-react";

const VisionMission = () => {
  return (
    <section
      id="vision"
      className="py-24 bg-[#111015] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
            Our Purpose
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Vision &
            <span className="text-[#F1CF45]"> Mission</span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            Honey Vision is building intelligent technologies that protect
            communities, empower industries, transform agriculture and
            position India as a global leader in Artificial Intelligence
            and smart innovation.
          </p>

        </div>

        {/* Vision + Mission */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Vision */}

          <div className="bg-[#1D416A] rounded-3xl p-10 border border-[#24A8E0]/30 hover:-translate-y-2 transition duration-500">

            <div className="w-16 h-16 rounded-full bg-[#24A8E0]/20 flex items-center justify-center mb-8">

              <Eye size={34} className="text-[#24A8E0]" />

            </div>

            <h3 className="text-4xl font-bold text-white">
              Our Vision
            </h3>

            <p className="mt-8 text-gray-200 leading-8">

              To become India's most trusted Artificial Intelligence
              and intelligent technology company by developing
              world-class surveillance systems, agricultural AI,
              embedded technologies and smart automation solutions.

            </p>

            <p className="mt-6 text-gray-300 leading-8">

              We envision a future where every city, every farm,
              every business and every institution is powered by
              affordable, intelligent and proudly Made in India
              technology.

            </p>

            <p className="mt-6 text-[#F1CF45] font-semibold text-lg">

              "Innovating for India. Built for the World."

            </p>

          </div>

          {/* Mission */}

          <div className="bg-[#1D416A] rounded-3xl p-10 border border-[#24A8E0]/30 hover:-translate-y-2 transition duration-500">

            <div className="w-16 h-16 rounded-full bg-[#F1CF45]/20 flex items-center justify-center mb-8">

              <Target size={34} className="text-[#F1CF45]" />

            </div>

            <h3 className="text-4xl font-bold">
              Our Mission
            </h3>

            <p className="mt-8 text-gray-200 leading-8">

              We design and manufacture intelligent AI-powered
              surveillance, computer vision, drone and audio visual
              technologies that solve real-world challenges across
              security, agriculture, industries and smart cities.

            </p>

            <div className="mt-10 space-y-5">

              <div className="flex gap-4">

                <span className="text-[#F1CF45] text-xl">✔</span>

                <p>
                  Build next-generation AI surveillance systems.
                </p>

              </div>

              <div className="flex gap-4">

                <span className="text-[#F1CF45] text-xl">✔</span>

                <p>
                  Empower Indian agriculture through AI and drone innovation.
                </p>

              </div>

              <div className="flex gap-4">

                <span className="text-[#F1CF45] text-xl">✔</span>

                <p>
                  Deliver indigenous technology for industries and governments.
                </p>

              </div>

              <div className="flex gap-4">

                <span className="text-[#F1CF45] text-xl">✔</span>

                <p>
                  Invest continuously in research, AI and hardware innovation.
                </p>

              </div>

              <div className="flex gap-4">

                <span className="text-[#F1CF45] text-xl">✔</span>

                <p>
                  Inspire the next generation of Indian technology creators.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Core Pillars */}

        <div className="mt-24">

          <h3 className="text-4xl font-bold text-center mb-14">

            Our Core Pillars

          </h3>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-[#1D416A] rounded-2xl p-8 border border-[#24A8E0]/20 text-center hover:scale-105 transition">

              <Lightbulb className="mx-auto text-[#F1CF45]" size={40} />

              <h4 className="mt-5 text-2xl font-bold">

                Innovation

              </h4>

              <p className="mt-4 text-gray-300">

                Creating AI technologies that solve real-world problems.

              </p>

            </div>

            <div className="bg-[#1D416A] rounded-2xl p-8 border border-[#24A8E0]/20 text-center hover:scale-105 transition">

              <Target className="mx-auto text-[#24A8E0]" size={40} />

              <h4 className="mt-5 text-2xl font-bold">

                Excellence

              </h4>

              <p className="mt-4 text-gray-300">

                Delivering reliable and world-class technology solutions.

              </p>

            </div>

            <div className="bg-[#1D416A] rounded-2xl p-8 border border-[#24A8E0]/20 text-center hover:scale-105 transition">

              <Globe className="mx-auto text-[#F1CF45]" size={40} />

              <h4 className="mt-5 text-2xl font-bold">

                Global Vision

              </h4>

              <p className="mt-4 text-gray-300">

                Building technology in India for customers across the world.

              </p>

            </div>

            <div className="bg-[#1D416A] rounded-2xl p-8 border border-[#24A8E0]/20 text-center hover:scale-105 transition">

              🇮🇳

              <h4 className="mt-5 text-2xl font-bold">

                Made in India

              </h4>

              <p className="mt-4 text-gray-300">

                Proudly designing and manufacturing indigenous technologies.

              </p>

            </div>

          </div>

        </div>

        {/* Quote */}

        <div className="mt-24 bg-gradient-to-r from-[#1D416A] to-[#24A8E0] rounded-3xl p-14 text-center border border-[#24A8E0]">

          <h2 className="text-4xl font-bold">

            "Technology With Purpose."

          </h2>

          <p className="mt-6 text-xl text-gray-100 max-w-4xl mx-auto leading-9">

            Every innovation at Honey Vision is built with one purpose—
            to protect lives, empower industries, modernize agriculture,
            and establish India as a global leader in Artificial
            Intelligence and intelligent technology.

          </p>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;