"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

export default function DiscordSection() {
  return (
    <motion.section 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-4 mt-72 md:mt-0 md:py-8 px-4 md:px-28 md:mb-16 justify-center items-center"
    >
      <div className="flex flex-col justify-between items-center gap-12 md:gap-8 md:flex-row">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col w-full max-w-3xl text-center md:text-left"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-dmsans font-semibold text-white leading-tight mb-6"
          >
            Lorem <span className="text-[#63B8E3]">ipsum dolor</span> sit amet.
          </motion.h2>
          
          <motion.p
            className="text-base md:text-xl font-dmsans font-normal mb-8 max-w-2xl text-[#A3A3A3]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            egestas mauris ac odio rutrum gravida. Nullam vitae turpis semper,
            tincidunt sem quis, dignissim libero. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Donec
            tempus dolor mi, id scelerisque tortor lobortis eget.
          </motion.p>
         
          <motion.div className="flex justify-center md:justify-start">
            <Link href="#discord" className="flex items-center group gap-2 w-fit text-sm font-medium font-dmsans py-2 px-4 bg-transparent border border-[#63B8E3] text-white rounded-2xl transition-all duration-300 hover:-translate-y-1">
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
          className="w-[200px] sm:w-[250px] md:w-[316px]"
        >
          <Image
            src={"/assets/leak_channels_banner.svg"}
            className="transition-all duration-300 hover:scale-105 w-full h-auto"
            alt="Discord Banner"
            width={316}
            height={316}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
