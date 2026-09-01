import React from "react";
import { Code2, Video, Sun, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "[DEV] SOFTWARE ENGINE",
    description:
      "Architecting robust applications with React, TypeScript, PHP, and C.",
  },
  {
    icon: Video,
    title: "[CUT] VISUAL PIPELINE",
    description:
      "Crafting precise motion graphics, post-production, and editing workflows.",
  },
  {
    icon: Sun,
    title: "[LUX] TECHNICAL LIGHT",
    description:
      "Programming intelligent fixtures and lighting consoles like grandMA3 for live environments.",
  },
  {
    icon: Cpu,
    title: "[SYS] INFRASTRUCTURE",
    description:
      "Deploying scalable web solutions and optimizing systems for peak performance.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#b8b29f] text-[#0f0f0f] font-mono border-t border-black/30">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header ID */}
        <div className="mb-12">
          <span className="text-[10px] tracking-widest uppercase opacity-70 border-b border-black/30 pb-1">
            // 01. PROFILE_MANIFEST
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Bio & Narrative */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-none uppercase">
              BRIDGE BETWEEN <br />
              <span className="underline underline-offset-4 font-normal text-sm sm:text-base">
                CODE, CUT & LIGHT.
              </span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm opacity-90 leading-relaxed">
              <p>
                I operate at the intersection of software engineering, visual post-production, and technical lighting. My path has evolved into a multidisciplinary skill set designed to bridge digital code with physical and cinematic execution.
              </p>
              <p>
                Whether I am developing enterprise web solutions with React and Symfony, editing immersive visual sequences, or programming complex DMX fixtures on grandMA3, my approach relies on rigorous technical precision and systematic efficiency.
              </p>
              <p>
                Every project is treated as an integrated system—optimized for reliability, performance, and impact.
              </p>
            </div>

            {/* Tactical Quote Log */}
            <div className="border border-black/30 bg-black/5 p-4 relative">
              <div className="absolute -top-2.5 left-3 bg-[#b8b29f] px-2 text-[9px] font-bold uppercase tracking-widest">
                DIRECTIVE_LOG
              </div>
              <p className="text-xs font-bold tracking-wider italic opacity-90 pt-1">
                "System stability and creative clarity are not mutually exclusive. They form the baseline of proper execution."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="border border-black/30 bg-black/5 p-4 flex flex-col justify-between hover:border-black transition-colors"
              >
                <div>
                  <div className="w-8 h-8 border border-black/30 bg-black/10 flex items-center justify-center mb-3">
                    <item.icon className="w-4 h-4 text-[#0f0f0f]" />
                  </div>
                  <h3 className="text-xs font-bold mb-2 uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-[11px] opacity-80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};