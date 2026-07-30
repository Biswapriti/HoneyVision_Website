import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111015] border-t border-[#1D416A] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company */}
        <div>

          <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-90 transition">
            <img
              src={logo}
              alt="Honey Vision"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h2 className="text-2xl font-bold">
                Honey
                <span className="text-[#F1CF45]">Vision</span>
              </h2>

              <p className="text-sm text-[#24A8E0]">
                India Pvt. Ltd.
              </p>
            </div>
          </Link>

          <p className="text-gray-400 leading-7">
            Honey Vision delivers intelligent AI-powered surveillance,
            smart agriculture, professional audio-visual systems,
            automation, and innovative technology solutions proudly
            developed in India.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1D416A] p-3 rounded-full hover:bg-[#24A8E0] transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1D416A] p-3 rounded-full hover:bg-[#24A8E0] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1D416A] p-3 rounded-full hover:bg-[#24A8E0] transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1D416A] p-3 rounded-full hover:bg-[#24A8E0] transition"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold text-[#F1CF45] mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4">

            <li>
              <Link to="/" className="hover:text-[#24A8E0] transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/" className="hover:text-[#24A8E0] transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/solutions" className="hover:text-[#24A8E0] transition">
                Solutions
              </Link>
            </li>

            <li>
              <Link to="/technology" className="hover:text-[#24A8E0] transition">
                Technology
              </Link>
            </li>

            <li>
              <Link to="/service" className="hover:text-[#24A8E0] transition">
                Services
              </Link>
            </li>

            <li>
              <Link to="/cms" className="hover:text-[#24A8E0] transition">
                CMS Pages
              </Link>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#24A8E0] transition">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Solutions */}

        <div>

          <h3 className="text-xl font-semibold text-[#F1CF45] mb-6">
            Our Solutions
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li>
              <Link to="/solutions/ai-surveillance" className="hover:text-[#24A8E0] transition">
                AI Surveillance
              </Link>
            </li>

            <li>
              <Link to="/solutions/smartagriculture" className="hover:text-[#24A8E0] transition">
                Smart Agriculture
              </Link>
            </li>

            <li>
              <Link to="/solutions/audiovisuals" className="hover:text-[#24A8E0] transition">
                Audio Visual Systems
              </Link>
            </li>

            <li>
              <Link to="/solutions/computervision" className="hover:text-[#24A8E0] transition">
                Computer Vision
              </Link>
            </li>

            <li>
              <Link to="/solutions" className="hover:text-[#24A8E0] transition">
                Access Control
              </Link>
            </li>

            <li>
              <Link to="/technology" className="hover:text-[#24A8E0] transition">
                Cloud Monitoring
              </Link>
            </li>

            <li>
              <Link to="/solutions/smartcity" className="hover:text-[#24A8E0] transition">
                Smart Cities
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold text-[#F1CF45] mb-6">
            Contact Us
          </h3>

          <div className="space-y-5">

            <div className="flex gap-4">

              <FaMapMarkerAlt className="text-[#24A8E0] mt-1" />

              <a
                href="https://maps.google.com/?q=Honey+Vision+Technologies+Bhubaneswar+Odisha+India"
                target="_blank"
                rel="noreferrer"
                className="block text-gray-400 hover:text-[#24A8E0] transition"
              >
                3rd floor,Rukmani Plaza,Tamando,pincode-752054
                <br />
                Bhubaneswar,
                <br />
                Odisha, India
              </a>

            </div>

            <div className="flex gap-4">

              <FaPhoneAlt className="text-[#24A8E0] mt-1 shrink-0" style={{ fontSize: '1.25rem' }} />

              <a href="tel:+919876543210" className="block text-gray-400 hover:text-[#24A8E0] transition">
                +91 98765 43210
              </a>

            </div>

            <div className="flex gap-4">

              <FaEnvelope className="text-[#24A8E0] mt-1 shrink-0" style={{ fontSize: '1.25rem' }} />

              <a href="mailto:honeyvisionindiapvtltd@gmail.com" className="block text-gray-400 hover:text-[#24A8E0] transition">
                honeyvisionindiapvtltd@gmail.com
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Middle Banner */}

      <div className="bg-[#1D416A] py-8">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold">
            Innovating Today for a
            <span className="text-[#F1CF45]"> Smarter Tomorrow</span>
          </h2>

          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Our mission is to build intelligent technologies that empower
            businesses, secure communities, transform agriculture,
            and proudly represent Made-in-India innovation.
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-[#1D416A] py-6">

        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Honey Vision Technologies.
            All Rights Reserved.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">

            <Link
              to="/privacy-policy"
              className="hover:text-[#24A8E0] transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-[#24A8E0] transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;