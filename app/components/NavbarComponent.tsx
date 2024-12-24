"use client"

import Image from "next/image";
import Link from "next/link";
import { PiListBold } from "react-icons/pi";
import { motion } from "framer-motion";

export default function NavbarComponent() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container mx-auto px-4 md:px-24 flex justify-between items-center py-8"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex items-center gap-2"
      >
        <Image src={'/assets/8m_logo.svg'} className="transition duration-300 hover:scale-105 hover:cursor-pointer" width={64} height={64} alt="Logo 8M" />
      </motion.div>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="md:hidden block"
      >
        <PiListBold className="text-2xl text-white" />
      </motion.button>
      
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <Link href={'#discord'} className="items-center group z-50 gap-2 text-sm font-medium font-dmsans py-2 px-4 bg-transparent border border-[#63B8E3] text-white rounded-2xl transition-all duration-300 hover:-translate-y-1 hidden md:inline-flex">
          Junte-se a Comunidade
        </Link>
      </motion.div>
    </motion.header>
  );
}
