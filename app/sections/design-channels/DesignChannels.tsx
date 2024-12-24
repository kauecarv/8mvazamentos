"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DesignChannels() {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-2 px-4 md:px-28 md:py-24 mb-10 justify-center items-center"
    >
      <div className="flex flex-col justify-between items-center md:flex-row">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col max-w-3xl"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl font-dmsans font-semibold text-white leading-tight mb-4"
          >
            Lorem ipsum <span className="text-[#63B8E3]">dolor</span>, sit amet.
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl font-dmsans font-normal max-w-2xl text-[#A3A3A3]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            egestas mauris ac odio rutrum gravida. Nullam vitae turpis semper,
            tincidunt sem quis, dignissim libero. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Donec
            tempus dolor mi, id scelerisque tortor lobortis eget.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
