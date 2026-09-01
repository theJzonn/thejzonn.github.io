import React from "react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#b8b29f] text-[#0f0f0f] font-mono select-none overflow-hidden p-4 md:p-8 flex flex-col justify-between pt-20">
      
      {/* --- SIDE TEXT (VERTICAL LEFT) --- */}
      <div className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[9px] tracking-widest opacity-60 uppercase">
        &gt;_ RAW DATA NODE
      </div>

      {/* --- MAIN CONTENT HERO --- */}
      <div className="max-w-6xl w-full mx-auto my-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 pb-12">
        
        {/* COLONNE GAUCHE : TITRES & INFOS */}
        <div className="md:col-span-7 space-y-6 text-left order-2 md:order-1">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase">
            ARCHITECTING DIGITAL <br />
            SOLUTIONS{" "}
            <span className="text-xs sm:text-sm font-normal underline underline-offset-4 tracking-normal">
              DEV . CUT . LUX
            </span>
          </h1>

          <div className="text-xs sm:text-sm tracking-wider font-bold opacity-80 uppercase pt-2">
            WEB DEVELOPPER / VIDEO EDITOR / TECHNICAL LIGHT
          </div>
        </div>

        {/* COLONNE DROITE : PORTRAIT STYLE BLUEPRINT / BRIEFING */}
        <div className="md:col-span-5 flex justify-center relative order-1 md:order-2">
          
          {/* Conteneur principal avec repères de visée d'angle minimalistes */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            
            {/* Réticules d'angle type blueprint (croix de repérage) */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-black/60"></div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-black/60"></div>
            <div className="absolute top-1/2 -left-3 -translate-y-1/2 h-3 w-[1px] bg-black/60"></div>
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 h-3 w-[1px] bg-black/60"></div>

            {/* Cadre de visée géométrique fin */}
            <div className="absolute inset-0 border border-black/20 pointer-events-none"></div>
            <div className="absolute -top-2 -left-2 w-3 h-3 border-t border-l border-black"></div>
            <div className="absolute -top-2 -right-2 w-3 h-3 border-t border-r border-black"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b border-l border-black"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b border-r border-black"></div>

            {/* Coordonnées techniques discrètes ancrées */}
            <div className="absolute -top-6 left-0 text-[8px] tracking-widest opacity-60 uppercase">
              SYS.LOC // 48.95N 2.31E
            </div>
            <div className="absolute -bottom-6 right-0 text-[8px] tracking-widest opacity-60 uppercase">
              ID_REF: #849-JAS
            </div>

            {/* Photo Ronde Noir et Blanc avec effet blueprint */}
            <div className="w-60 h-60 sm:w-68 sm:h-68 rounded-full overflow-hidden border border-black/50 grayscale contrast-125 bg-black/10 relative shadow-md group transition-all duration-300">
              <img
                src="/profile.jpg"
                alt="Jason"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Lignes de scan très fines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.12)_50%)] bg-[length:100%_4px] pointer-events-none" />
              
              {/* Teinte subtilement bleutée/grise type plan technique au survol */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-emerald-900/10 transition-colors duration-300 pointer-events-none"></div>
            </div>

          </div>

        </div>

      </div>

      {/* --- SECTION COMPONENT TREE SKILLS (ARBORESCENCE) --- */}
      <div className="max-w-6xl w-full mx-auto border-t border-black/30 pt-4 pb-8">
        <div className="text-center font-bold text-sm tracking-widest uppercase mb-6">
          COMPONENT_TREE_SKILLS
        </div>

        {/* Arbre en 3 modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          
          {/* MODULE 1 */}
          <div className="border border-black/30 p-3 bg-black/5">
            <div className="font-bold border-b border-black/30 pb-1 mb-2 uppercase text-[11px]">
              MODULE 1: [DEV] SOFTWARE ENGINE
            </div>
            <ul className="space-y-1 opacity-90 pl-2">
              <li>├─ CORE
                <ul className="pl-4 opacity-75">
                  <li>├─ C (Language)</li>
                  <li>├─ JAVASCRIPT (jQuery, React)</li>
                  <li>└─ PHP (MySQL, Symfony)</li>
                </ul>
              </li>
              <li>└─ TOOLS
                <ul className="pl-4 opacity-75">
                  <li>├─ GIT BASH / VSCODE</li>
                  <li>└─ GITHUB ACTIONS</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* MODULE 2 */}
          <div className="border border-black/30 p-3 bg-black/5">
            <div className="font-bold border-b border-black/30 pb-1 mb-2 uppercase text-[11px]">
              MODULE 2: [CUT] VISUAL PIPELINE
            </div>
            <ul className="space-y-1 opacity-90 pl-2">
              <li>├─ EDITING
                <ul className="pl-4 opacity-75">
                  <li>└─ PREMIERE PRO</li>
                </ul>
              </li>
              <li>└─ MOTION & GRAPHICS
                <ul className="pl-4 opacity-75">
                  <li>├─ AFTER EFFECTS</li>
                  <li>└─ PHOTOSHOP</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* MODULE 3 */}
          <div className="border border-black/30 p-3 bg-black/5">
            <div className="font-bold border-b border-black/30 pb-1 mb-2 uppercase text-[11px]">
              MODULE 3: [LUX] LIGHT
            </div>
            <ul className="space-y-1 opacity-90 pl-2">
              <li>├─ FIXTURE
                <ul className="pl-4 opacity-75">
                  <li>├─ ASTERA</li>
                  <li>├─ CHAUVET</li>
                  <li>└─ ROBE</li>
                </ul>
              </li>
              <li>└─ CONSOLE
                <ul className="pl-4 opacity-75">
                  <li>├─ GRANDMA3</li>
                  <li>└─ MIKADO</li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* --- FOOTER HUD --- */}
      <div className="w-full border-t border-black/30 pt-2 flex justify-between items-center text-[10px] tracking-widest opacity-80 uppercase">
        <div>&gt;_ QUICK NAV</div>
        <div className="flex gap-4">
          <span>LIGHTHOUSE SCORE: <strong className="text-emerald-800">100/100</strong></span>
          <span>•</span>
          <span>LATENCY: <strong className="text-emerald-800">24ms</strong></span>
        </div>
      </div>

    </section>
  );
};