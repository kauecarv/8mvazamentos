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
      <div className="container mx-auto px-24 flex items-center justify-between">
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
          <p className="font-dmsans text-[#A3A3A3] text-md">
            © 2024 Todos os Direitos Reservados.
          </p>
        </motion.div>

        <div className="flex items-center gap-6">
      

          <motion.div 
            className="flex items-center gap-1"
          >
            <span className="inline-flex items-center gap-1.5 font-dmsans font-normal text-[#A3A3A3] text-sm">Feito com <BiHeart className="text-red-500 text-xl"/> por </span>
            <Link
              href="https://spacefy.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#63B8E3] font-dmsans text-sm hover:-translate-y-1 transition-all duration-300"
            >
              Spacefy
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
