"use client"

import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className="relative h-screen max-h-[90vh] mb-24 lg:mb-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 right-0 w-[600px] h-[600px] bg-[#63B8E3] blur-[180px] rounded-full"
      />
      
      <div className="container mx-auto px-8 md:px-20 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col max-w-3xl">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="bg-[#1E293B] inline-flex items-center gap-2 text-[#63B8E3] px-4 py-1 rounded-full text-sm font-dmsans">
                <BsStars/> 8M Vazamentos
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-dmsans font-semibold text-white leading-tight mb-8"
            >
              <span className="text-[#63B8E3]">Lorem ipsum</span>
              {" "}dolor sit amet consectetur.
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[#ACACAC] font-dmsans font-normal text-lg mb-8"
            >
              Aqui você aprende, compartilha experiências e encontra métodos, bots, 
              arquivos e ferramentas que fortalecem nossa comunidade.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Link href="#discord" className="flex items-center group gap-2 w-fit text-sm font-medium font-dmsans py-2 px-4 bg-transparent border border-[#63B8E3] text-white rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <FaDiscord className="text-xl" />
                Conheça nosso Discord
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative w-full md:w-[500px]"
          >
            <Image
              src="/assets/8m_logo.svg"
              width={500}
              height={500}
              alt="Logo 8M"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
