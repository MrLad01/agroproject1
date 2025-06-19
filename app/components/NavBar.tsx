'use client';

import Link from 'next/link'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const navBarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const topBarVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const logoVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
}

const contactInfoVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1
    }
  }
}

const contactItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  },
  hover: {
    y: -2,
    transition: {
      duration: 0.2
    }
  }
}

const navLinksVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
}

const navLinkVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  hover: {
    y: -3,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
}

export default function NavBar() {
  return (
    <motion.nav 
      className="bg-white shadow-lg fixed w-full z-50"
      initial="hidden"
      animate="visible"
      variants={navBarVariants}
    >
      <motion.div 
        className="flex items-center justify-between bg-green-50 px-6 py-3"
        variants={topBarVariants}
      >
        <motion.div 
          className="flex-shrink-0"
          variants={logoVariants}
          whileHover="hover"
        >
          <h1 className="font-bold text-green-800 italic cursor-pointer">Agroterra logo</h1>
        </motion.div>
        <motion.div 
          className='flex items-center gap-2 text-xs'
          variants={contactInfoVariants}
        >
          <motion.div variants={contactItemVariants} whileHover="hover">
            <Link href="">1234 Resort Boulevard, Countryside Valley, State</Link>
          </motion.div>
          <motion.p variants={contactItemVariants}>|</motion.p>
          <motion.div variants={contactItemVariants} whileHover="hover">
            <Link href="">info@agroterraresort.com</Link>
          </motion.div>
          <motion.p variants={contactItemVariants}>|</motion.p>
          <motion.div variants={contactItemVariants} whileHover="hover">
            <Link href="">+23412345678</Link>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 lg:px-8">
        <div className="flex justify-center items-center">
          <motion.div 
            className="hidden md:flex text-[12px] items-center space-x-12 uppercase font-medium"
            variants={navLinksVariants}
          >
            <motion.div variants={navLinkVariants} whileHover="hover">
              <Link href="/" className="text-gray-700 hover:text-green-800 hover:border-b-2 border-green-700 py-2 transition-colors">
                Home
              </Link>
            </motion.div>
            <motion.div variants={navLinkVariants} whileHover="hover">
              <Link href="/resort" className="text-gray-700 hover:text-green-800 hover:border-b-2 border-green-700 py-2 transition-colors">
                Resort
              </Link>
            </motion.div>
            <motion.div variants={navLinkVariants} whileHover="hover">
              <Link href="/golf" className="text-gray-700 hover:text-green-800 hover:border-b-2 border-green-700 py-2 transition-colors">
                Golf
              </Link>
            </motion.div>
            <motion.div variants={navLinkVariants} whileHover="hover">
              <Link href="/academy" className="text-gray-700 hover:text-green-800 hover:border-b-2 border-green-700 py-2 transition-colors">
                Sports Academy
              </Link>
            </motion.div>
            <motion.div variants={navLinkVariants} whileHover="hover">
              <Link href="/contact" className="text-gray-700 hover:text-green-800 hover:border-b-2 border-green-700 py-2 transition-colors">
                Contact
              </Link>
            </motion.div>
            <motion.button 
              className="bg-green-800 text-white px-6 py-2 my-1.5 rounded-lg hover:bg-green-700 transition-colors font-semibold uppercase"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}