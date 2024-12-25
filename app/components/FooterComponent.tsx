"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BiHeart } from 'react-icons/bi'

export default function FooterComponent() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white py-4"
    >
      <div className="container mx-auto px-4 md:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4"
        >
          <Image
            src="/assets/8m_logo.svg"
            alt="8M Logo"
            width={40}
            height={40}
          />
          <p className="font-dmsans text-[#A3A3A3] text-sm md:text-md">
            © 2024 Todos os Direitos Reservados.
          </p>
        </motion.div>

        <motion.div className="flex items-center whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 font-dmsans font-normal text-[#A3A3A3] text-sm">
            Feito com <BiHeart className="text-red-500 text-xl"/> por 
            <Link
              href="https://spacefy.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#63B8E3] font-dmsans hover:-translate-y-1 transition-all duration-300 ml-1"
            >
              Spacefy
            </Link>
          </span>
        </motion.div>
      </div>
    </motion.footer>
  )
}
