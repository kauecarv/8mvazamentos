"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DesignChannels() {
  return (
    <motion.section
      className="py-4 md:py-8 px-4 md:px-28 md:mb-16 justify-center items-center"
    >
      <div className="flex flex-col justify-between items-center gap-12 md:gap-8 md:flex-row">
        <motion.div
          className="w-[200px] sm:w-[250px] md:w-[442px]"
        >
          <Image
            src={"/assets/design_channels_banner.svg"}
            className="transition-all duration-300 hover:scale-105"
            alt="Discord Banner"
            width={442}
            height={442}
          />
        </motion.div>
        <motion.div
          className="flex flex-col w-full max-w-3xl text-center md:text-left"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-dmsans font-semibold text-white leading-tight mb-6"
          >
            Recursos <span className="text-[#63B8E3]">essenciais</span> para<br/> seu servidor
          </motion.h2>
          <motion.p
            className="text-base md:text-xl font-dmsans font-normal mb-8 max-w-2xl text-[#A3A3A3]"
          >
            Acesse uma biblioteca completa de recursos, tutoriais e ferramentas 
            para aprimorar seu servidor. Desde bots personalizados até guias 
            de configuração avançada.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
