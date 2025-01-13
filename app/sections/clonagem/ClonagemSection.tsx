"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa6";

export default function ClonagemSection() {
  return (
    <motion.section 
      className="py-4 md:py-24 px-4 md:px-28 mb-16 justify-center items-center"
    >
      <div className="flex flex-col justify-between items-center gap-12 md:gap-8 md:flex-row">
        <motion.div 
          className="flex flex-col w-full max-w-3xl text-center md:text-left"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-dmsans font-semibold text-white leading-tight mb-6"
          >
            Evolua seu <span className="text-[#63B8E3]">servidor</span> conosco
          </motion.h2>
          <motion.p
            className="text-base md:text-xl font-dmsans font-normal mb-8 max-w-2xl text-[#A3A3A3]"
          >
            Descubra as melhores práticas e estratégias para crescimento. 
            Nossa comunidade oferece suporte e recursos exclusivos para 
            transformar seu servidor em um ambiente mais engajado e profissional.
          </motion.p>

          <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Link href="https://discord.gg/tEeEgeXjcV" className="flex mx-auto md:mx-0 items-center group gap-2 w-fit text-sm font-medium font-dmsans py-2 px-4 bg-transparent border border-[#63B8E3] text-white rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <FaDiscord className="text-xl" />
                Conheça nosso Discord
              </Link>
            </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Image
            src={"/assets/clone_banner.svg"}
            className="transition-all duration-300 hover:scale-105"

            alt="Discord Banner"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
