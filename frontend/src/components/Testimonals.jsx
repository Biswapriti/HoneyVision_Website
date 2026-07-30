import {
  Star,
  Quote,
  Building2,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Industrial Manufacturing",
      icon: <Building2 className="text-[#24A8E0]" size={40} />,
      review:
        "Honey Vision completely transformed our factory's security infrastructure. Their AI-powered surveillance system has significantly improved monitoring efficiency and workplace safety.",
    },
    {
      name: "Priya Sharma",
      company: "Smart Agriculture",
      icon: <Sprout className="text-[#F1CF45]" size={40} />,
      review:
        "The intelligent monitoring solutions helped us optimize irrigation and crop management. Honey Vision's technology has become an essential part of our farming operations.",
    },
    {
      name: "Amit Verma",
      company: "Corporate Enterprise",
      icon: <ShieldCheck className="text-[#24A8E0]" size={40} />,
      review:
        "Professional installation, excellent support, and cutting-edge AI technology. Honey Vision delivers exactly what modern businesses need for intelligent security.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#111015] text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Trusted By
            <span className="text-[#F1CF45]"> Industry Leaders</span>
          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-lg text-gray-300 leading-8">
            At Honey Vision, our success is measured by the trust of our
            customers. We are proud to deliver intelligent technology
            solutions that improve security, productivity, and business
            performance across multiple industries.
          </p>

        </div>

        {/* Testimonial Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((client, index) => (

            <div
              key={index}
              className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20 hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl"
            >

              <Quote
                className="text-[#F1CF45] mb-6"
                size={45}
              />

              <p className="text-gray-300 leading-8 italic">
                "{client.review}"
              </p>

              <div className="flex mt-6">

                <Star className="fill-[#F1CF45] text-[#F1CF45]" size={20} />
                <Star className="fill-[#F1CF45] text-[#F1CF45]" size={20} />
                <Star className="fill-[#F1CF45] text-[#F1CF45]" size={20} />
                <Star className="fill-[#F1CF45] text-[#F1CF45]" size={20} />
                <Star className="fill-[#F1CF45] text-[#F1CF45]" size={20} />

              </div>

              <div className="flex items-center gap-4 mt-8">

                <div className="w-16 h-16 rounded-full bg-[#111015] flex items-center justify-center">
                  {client.icon}
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    {client.name}
                  </h3>

                  <p className="text-[#24A8E0]">
                    {client.company}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Company Highlights */}

        <div className="mt-24 grid md:grid-cols-4 gap-8">

          <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

            <h3 className="text-5xl font-bold text-[#F1CF45]">
              500+
            </h3>

            <p className="mt-3 text-gray-300">
              Successful Installations
            </p>

          </div>

          <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

            <h3 className="text-5xl font-bold text-[#24A8E0]">
              100+
            </h3>

            <p className="mt-3 text-gray-300">
              Enterprise Clients
            </p>

          </div>

          <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

            <h3 className="text-5xl font-bold text-[#F1CF45]">
              AI
            </h3>

            <p className="mt-3 text-gray-300">
              Intelligent Solutions
            </p>

          </div>

          <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

            <h3 className="text-5xl font-bold text-[#24A8E0]">
              24/7
            </h3>

            <p className="mt-3 text-gray-300">
              Technical Support
            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 bg-gradient-to-r from-[#1D416A] to-[#24A8E0] rounded-3xl p-14 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Join Our Growing Community
          </h2>

          <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-100 leading-8">
            Businesses, industries, educational institutions, and farmers
            across India trust Honey Vision for intelligent AI-powered
            surveillance, smart automation, and innovative technology
            solutions.
          </p>

          <button className="mt-10 bg-[#F1CF45] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition duration-300">
            Become Our Partner
          </button>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;