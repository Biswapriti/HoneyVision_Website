import {Cpu,ShieldCheck,Target,Users,Code2,} from "lucide-react";

const founders = [
  {
    name: "Mr. Rashmi Ranjan Sahoo",
    role: "CEO & Founder",
    desc: "Visionary entrepreneur leading Honey Vision's mission to build intelligent AI-powered surveillance and Made-in-India technologies.",
  },
  {
    name: "Mr. Abinash Acharya",
    role: "Co-Founder",
    desc: "Driving innovation, strategic planning, and business development while transforming ideas into scalable technology solutions.",
  },
  {
    name: "Mr. Ramesh Bisoi",
    role: "Mentor",
    desc: "Providing leadership guidance, industry expertise, and strategic direction for long-term growth.",
  },
  {
    name: "Miss Aparna Kumari",
    role: "Smart & Talented Specialist",
    desc: "Contributing technical expertise, innovation, and creative problem-solving across Honey Vision projects.",
  },
];

const developers = [
  {
    name: "Nirakar",
    role: "Core Developer",
  },
  {
    name: "Ayashkant",
    role: "Core Developer",
  },
  {
    name: "Omm Prasad",
    role: "Core Developer",
  },
];

const About = () => {
  return (
    <section className="bg-[#111015] text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center">
          <span className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            About Honey Vision
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Building India's Future Through
            <span className="text-[#F1CF45]"> Intelligent Technology</span>
          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-lg text-gray-300 leading-8">
            Honey Vision is an Indian technology company specializing in
            Artificial Intelligence, Computer Vision, Smart Surveillance,
            Audio-Visual Systems, Smart Agriculture, and Intelligent
            Automation.

            <br /><br />

            Our goal is to create innovative, affordable, and reliable
            technologies that improve security, productivity, and everyday
            life while proudly supporting the vision of a self-reliant India.
          </p>
        </div>

        {/* Company Highlights */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-[#1D416A] rounded-2xl p-8 border border-[#24A8E0]/20">
            <Cpu className="text-[#24A8E0]" size={45} />

            <h3 className="text-2xl font-bold mt-5">
              AI Innovation
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Developing intelligent surveillance and automation solutions
              powered by Artificial Intelligence.
            </p>

          </div>

          <div className="bg-[#1D416A] rounded-2xl p-8 border border-[#24A8E0]/20">
            <ShieldCheck className="text-[#F1CF45]" size={45} />

            <h3 className="text-2xl font-bold mt-5">
              Smart Security
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Reliable surveillance technologies that protect people,
              businesses, industries, and institutions.
            </p>

          </div>

          <div className="bg-[#1D416A] rounded-2xl p-8 border border-[#24A8E0]/20">
            <Target className="text-[#24A8E0]" size={45} />

            <h3 className="text-2xl font-bold mt-5">
              Made in India
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Designing and manufacturing next-generation technologies that
              represent India's innovation on the global stage.
            </p>

          </div>

        </div>

        {/* Leadership */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center">
            Founding Team
          </h2>

          <p className="text-center text-gray-400 mt-3">
            Visionaries leading Honey Vision towards innovation and excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            {founders.map((person, index) => (

              <div
                key={index}
                className="bg-[#1D416A] rounded-2xl p-8 border border-[#24A8E0]/20 hover:-translate-y-2 transition duration-300"
              >

                <div className="w-20 h-20 rounded-full bg-[#24A8E0]/20 flex items-center justify-center text-3xl">
                  <Users />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {person.name}
                </h3>

                <p className="text-[#F1CF45] font-semibold mt-2">
                  {person.role}
                </p>

                <p className="text-gray-300 mt-5 leading-7">
                  {person.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Development Core */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center">
            Development Core
          </h2>

          <p className="text-center text-gray-400 mt-3">
            The engineering team building Honey Vision's intelligent software
            and AI solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {developers.map((dev, index) => (

              <div
                key={index}
                className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20 hover:-translate-y-2 transition duration-300"
              >

                <div className="w-20 h-20 rounded-full bg-[#F1CF45]/20 flex items-center justify-center mx-auto">
                  <Code2 size={40} className="text-[#F1CF45]" />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {dev.name}
                </h3>

                <p className="text-[#24A8E0] mt-2 font-semibold">
                  {dev.role}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Closing Quote */}

        <div className="mt-24 bg-gradient-to-r from-[#1D416A] to-[#24A8E0] rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-bold">
            "Technology Built in India, Trusted Across the World."
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-100 leading-8">
            Honey Vision is committed to creating intelligent technologies
            that secure communities, empower businesses, modernize agriculture,
            and contribute to a smarter, safer, and more connected future.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;