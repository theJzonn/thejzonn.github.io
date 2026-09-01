import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub, 
  faCodepen, 
  faYoutube, 
  faInstagram, 
  faReddit, 
  faPinterest 
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { id: "01", name: "GitHub", url: "https://github.com/theJzonn", icon: faGithub },
  { id: "02", name: "Codepen", url: "https://codepen.io/jzonn/pens/public", icon: faCodepen },
  { id: "03", name: "Youtube", url: "https://www.youtube.com/@jzonnProd", icon: faYoutube },
  { id: "04", name: "Instagram", url: "https://www.instagram.com/__jzonn/", icon: faInstagram },
  { id: "05", name: "Reddit", url: "https://www.reddit.com/user/jz0nn/", icon: faReddit },
  { id: "06", name: "Pinterest", url: "none", icon: faPinterest },
];

export const Links = () => {
  return (
    <section className="min-h-screen w-full bg-[#b8b29f] text-[#0f0f0f] font-mono p-4 md:p-8 flex flex-col justify-between pt-24">
      
      {/* En-tête de page / Terminal Header */}
      <div className="max-w-xl w-full mx-auto mb-8">
        <div className="border-b border-black/30 pb-2 flex justify-between items-center text-[10px] tracking-widest uppercase opacity-70">
          <span>// DIRECTORY: /NET_LINKS</span>
          <span className="text-emerald-800 font-bold">STATUS: ACTIVE</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight uppercase mt-4 text-center">
          EXTERNAL NODES
        </h1>
        <p className="text-xs opacity-80 mt-1 uppercase text-center">
          Select target protocol to initialize connection.
        </p>
      </div>

      {/* Liste des liens style Terminal / Index avec effet Flip 3D smooth */}
      <div className="max-w-xl w-full mx-auto space-y-4 my-auto">
        {socialLinks.map((link) => {
          const isExternal = link.url !== "none";
          
          if (isExternal) {
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-black/30 bg-[#b8b29f] p-4 transition-all duration-200 hover:border-black hover:bg-[#ada692] cursor-pointer"
              >
                <div className="flex items-center gap-4 mx-auto">
                  <div className="w-5 flex items-center justify-center text-[#0f0f0f]">
                    <FontAwesomeIcon icon={link.icon} className="text-sm" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase group-hover:underline underline-offset-4">
                    {link.name}
                  </span>
                </div>
                <div className="text-sm opacity-60 group-hover:opacity-100 pl-2">
                  <span>↗</span>
                </div>
              </a>
            );
          }

          // Élément avec effet Flip 3D fluide et curseur pointer
          return (
            <div key={link.id} className="relative h-14 w-full [perspective:1000px]">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="absolute inset-0 w-full h-full duration-700 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] cursor-pointer block transition-transform ease-in-out"
              >
                {/* Face avant */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-between border border-black/30 bg-[#b8b29f] p-4 [backface-visibility:hidden]">
                  <div className="flex items-center gap-4 mx-auto">
                    <div className="w-5 flex items-center justify-center text-[#0f0f0f]">
                      <FontAwesomeIcon icon={link.icon} className="text-sm" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
                      {link.name}
                    </span>
                  </div>
                  <div className="text-sm opacity-60 pl-2">
                    <span>—</span>
                  </div>
                </div>

                {/* Face arrière (Signal Lost) */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center border border-red-900 bg-[#b8b29f] p-4 [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-red-900 animate-pulse uppercase">
                    // SIGNAL LOST
                  </span>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* Pied de page HUD */}
      <div className="max-w-xl w-full mx-auto border-t border-black/30 pt-4 mt-8 flex justify-between items-center text-[10px] tracking-widest opacity-70 uppercase">
        <span>SECURE_LINK // V1.0</span>
        <span>NODE_COUNT: 06</span>
      </div>

    </section>
  );
};