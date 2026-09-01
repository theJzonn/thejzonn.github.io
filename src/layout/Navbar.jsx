import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const htmlHasDark = document.documentElement.classList.contains("dark");
    setIsDark(htmlHasDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark");
    setIsDark(htmlElement.classList.contains("dark"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2 md:p-4 font-mono select-none pointer-events-none">
      <div className="max-w-6xl mx-auto perspective-1000 pointer-events-auto">
        <div
          className={`relative w-full transition-transform duration-700 transform-style-3d ${
            isScrolled ? "rotate-x-180" : ""
          }`}
        >
          {/* ================= FACE AVANT : TOP STATUS BAR ================= */}
          <div 
            className={`w-full border px-4 py-2 flex justify-between items-center text-[10px] sm:text-xs tracking-widest uppercase backface-hidden shadow-sm transition-colors duration-300 ${
              isDark ? "bg-[#030706] border-[#00ff88]/40 text-[#00ff88]" : "bg-[#b8b29f] border-black/30 text-[#0f0f0f]"
            }`}
          >
            <div className="flex gap-2 items-center overflow-hidden whitespace-nowrap">
              <span className={`font-bold ${isDark ? "text-[#00ff88]" : "text-emerald-800"}`}>&gt;_</span>
              <span>STATUS: {isDark ? "TERMINAL_PHOSPHOR" : "AVAILABLE"}</span>
              <span className="opacity-40">|</span>
              <span className="hidden md:inline">LOC: ÉPINAY-SUR-SEINE, FR</span>
              <span className="hidden md:inline opacity-40">|</span>
              <span className="hidden sm:inline">SYS_VER: 1.0.4</span>
              <span className="hidden sm:inline opacity-40">|</span>
              <span className={`font-bold ${isDark ? "text-[#00ff88]" : "text-emerald-800"}`}>OPTIMIZED</span>
            </div>

            <div className="flex items-center gap-2 shrink-0 pl-2">
              <span className="text-[9px] opacity-70 hidden sm:inline">RAW DATA NODE</span>
              
              {/* BOUTON TOGGLE */}
              <div 
                onClick={toggleTheme}
                className={`w-8 h-4 rounded-full p-0.5 flex items-center cursor-pointer transition-all border ${
                  isDark ? "bg-black border-[#00ff88]/60 justify-end" : "bg-black/20 border-black/40 justify-start"
                }`}
              >
                {/* ROND DU BOUTON (Noir en mode clair, Vert néon en mode sombre) */}
                <div className={`w-3 h-3 rounded-full transition-all ${
                  isDark ? "bg-[#00ff88] shadow-[0_0_8px_#00ff88] animate-pulse" : "bg-black"
                }`} />
              </div>

            </div>
          </div>

          {/* ================= FACE ARRIÈRE : NAVBAR SCROLLÉE ================= */}
          <div 
            className={`absolute inset-0 w-full backdrop-blur-md border px-4 py-2 flex justify-between items-center rotate-x-180 backface-hidden shadow-lg transition-colors duration-300 ${
              isDark ? "bg-[#030706]/95 border-[#00ff88]/40 text-[#00ff88]" : "bg-[#b8b29f]/95 border-black/40 text-[#0f0f0f]"
            }`}
          >
            <a href="#" className="text-base sm:text-lg font-black tracking-tighter hover:opacity-70 transition-opacity flex items-center gap-1 uppercase">
              <span className={isDark ? "text-[#00ff88]" : "text-black"}>&gt;</span> JZ
              <span className={`w-2 h-2 inline-block ml-0.5 animate-pulse ${isDark ? "bg-[#00ff88]" : "bg-black"}`}></span>
            </a>

            <div className="hidden md:flex items-center gap-3 text-xs tracking-widest">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className={`px-3 py-1 border border-transparent transition-all uppercase ${
                    isDark ? "hover:border-[#00ff88]/50 hover:bg-[#00ff88]/10" : "hover:border-black/30 hover:bg-black/5"
                  }`}
                >
                  [{link.label}]
                </a>
              ))}
              <span className={`text-[10px] font-bold border px-2 py-0.5 ${
                isDark ? "text-[#00ff88] border-[#00ff88]/50" : "text-emerald-800 border-emerald/40"
              }`}>
                SYS_ONLINE
              </span>
            </div>

            <button
              className={`md:hidden p-1 cursor-pointer ${
                isDark ? "text-[#00ff88] hover:bg-[#00ff88]/20" : "text-[#0f0f0f] hover:bg-black/10"
              }`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ================= MENU MOBILE ================= */}
        {isMobileMenuOpen && (
          <div 
            className={`md:hidden mt-1 p-4 flex flex-col gap-2 font-mono text-xs uppercase shadow-xl border-x border-b ${
              isDark ? "bg-[#030706] border-[#00ff88]/40 text-[#00ff88]" : "bg-[#b8b29f] border-black/40 text-[#0f0f0f]"
            }`}
          >
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 border-b hover:pl-2 transition-all flex items-center justify-between ${
                  isDark ? "border-[#00ff88]/20" : "border-black/10"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[10px] opacity-50">&gt;_</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};