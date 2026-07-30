import {
  Brain,
  ShieldCheck,
  Cpu,
  Sprout,
  Globe,
  Headphones,
  Award,
  Rocket,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Brain size={45} className="text-[#24A8E0]" />,
      title: "AI-Driven Innovation",
      description:
        "We develop intelligent AI-powered solutions that automate surveillance, analytics, and decision-making for businesses, institutions, and smart cities.",
    },
    {
      icon: <ShieldCheck size={45} className="text-[#F1CF45]" />,
      title: "Advanced Security",
      description:
        "Our surveillance technologies provide real-time monitoring, facial recognition, intrusion detection, and intelligent alerts for complete protection.",
    },
    {
      icon: <Cpu size={45} className="text-[#24A8E0]" />,
      title: "Made in India Technology",
      description:
        "Designed, developed, and manufactured in India to deliver world-class technology while supporting the nation's vision of self-reliance.",
    },
    {
      icon: <Sprout size={45} className="text-[#F1CF45]" />,
      title: "Smart Agriculture",
      description:
        "AI-powered monitoring, drones, and automation help farmers improve productivity, optimize resources, and make smarter decisions.",
    },
    {
      icon: <Globe size={45} className="text-[#24A8E0]" />,
      title: "Future-Ready Solutions",
      description:
        "Our technologies are built for smart cities, industries, healthcare, education, transportation, and enterprise applications.",
    },
    {
      icon: <Headphones size={45} className="text-[#F1CF45]" />,
      title: "Dedicated Support",
      description:
        "From consultation and installation to maintenance and technical support, our experts are committed to your long-term success.",
    },
  ];

  return (
    <section className="bg-[#111015] text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            Why Honey Vision
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Why
            <span className="text-[#F1CF45]"> Choose Us?</span>
          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-lg text-gray-300 leading-8">
            Honey Vision combines Artificial Intelligence, innovative
            engineering, and customer-focused solutions to build intelligent
            technologies that secure, connect, and empower businesses,
            agriculture, industries, and communities.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >
              {feature.icon}

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="mt-5 text-gray-300 leading-8">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

        {/* Why We Are Different */}

        <div className="mt-28 grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <h2 className="text-4xl font-bold">
              What Makes Honey Vision Different?
            </h2>

            <p className="mt-8 text-gray-300 leading-8">
              We don't just sell products—we create intelligent ecosystems
              powered by Artificial Intelligence, Computer Vision, IoT,
              Cloud Computing, and Smart Automation.
            </p>

            <p className="mt-6 text-gray-300 leading-8">
              Every solution is engineered to improve security, increase
              productivity, reduce operational costs, and prepare
              organizations for the future.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex gap-4">
                <Award className="text-[#F1CF45]" />
                <p>World-class engineering standards.</p>
              </div>

              <div className="flex gap-4">
                <Rocket className="text-[#24A8E0]" />
                <p>Continuous investment in AI research.</p>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="text-[#F1CF45]" />
                <p>Reliable, secure, and scalable solutions.</p>
              </div>

              <div className="flex gap-4">
                <Globe className="text-[#24A8E0]" />
                <p>Designed for India. Ready for the world.</p>
              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

              <h3 className="text-5xl font-bold text-[#F1CF45]">
                AI
              </h3>

              <p className="mt-4 text-gray-300">
                Intelligent Solutions
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

              <h3 className="text-5xl font-bold text-[#24A8E0]">
                24/7
              </h3>

              <p className="mt-4 text-gray-300">
                Technical Support
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

              <h3 className="text-5xl font-bold text-[#F1CF45]">
                100%
              </h3>

              <p className="mt-4 text-gray-300">
                Made in India Vision
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

              <h3 className="text-5xl font-bold text-[#24A8E0]">
                ∞
              </h3>

              <p className="mt-4 text-gray-300">
                Innovation & Growth
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 bg-gradient-to-r from-[#1D416A] to-[#24A8E0] rounded-3xl p-14 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Building India's Intelligent Future
          </h2>

          <p className="mt-6 text-lg text-gray-100 max-w-4xl mx-auto leading-8">
            Honey Vision is committed to creating innovative AI-powered
            technologies that protect people, empower industries, modernize
            agriculture, and establish India as a global leader in intelligent
            technology.
          </p>

          <button className="mt-10 bg-[#F1CF45] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition duration-300">
            Partner With Us
          </button>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;