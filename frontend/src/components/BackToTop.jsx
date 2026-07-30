import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[9999]
      h-14 w-14 rounded-full
      bg-[#24A8E0] text-white
      shadow-xl shadow-black/30
      hover:bg-[#F1CF45]
      hover:text-[#111015]
      transition-all duration-300
      flex items-center justify-center
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
      aria-label="Back to Top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;