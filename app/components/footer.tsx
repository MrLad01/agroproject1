'use client';

import Link from 'next/link'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const footerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const footerColumnVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const footerItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.2
    }
  }
}

const socialIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "backOut"
    }
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.3,
      ease: "backOut"
    }
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.1
    }
  }
}

const titleVariants: Variants = {
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

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 0.2
    }
  }
}

const bottomBarVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 0.4
    }
  }
}

const socialContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="lg:max-w-7xl xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={footerColumnVariants}>
            <motion.h3 
              className="text-2xl font-bold mb-4"
              variants={titleVariants}
            >
              Agroterra
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-4"
              variants={descriptionVariants}
            >
              Experience luxury, recreation, and natural beauty at our premier resort destination 
              featuring world-class golf and sports facilities.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={socialContainerVariants}
            >
              <motion.div 
                className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="text-sm">f</span>
              </motion.div>
              <motion.div 
                className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="text-sm">t</span>
              </motion.div>
              <motion.div 
                className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="text-sm">i</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={footerColumnVariants}>
            <motion.h4 
              className="text-lg font-semibold mb-4"
              variants={titleVariants}
            >
              Resort
            </motion.h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Accommodations</Link>
              </motion.li>
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Dining</Link>
              </motion.li>
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Wellness</Link>
              </motion.li>
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Activities</Link>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div variants={footerColumnVariants}>
            <motion.h4 
              className="text-lg font-semibold mb-4"
              variants={titleVariants}
            >
              Facilities
            </motion.h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Golf Course</Link>
              </motion.li>
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Sports Academy</Link>
              </motion.li>
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Tennis Courts</Link>
              </motion.li>
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Athletics</Link>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div variants={footerColumnVariants}>
            <motion.h4 
              className="text-lg font-semibold mb-4"
              variants={titleVariants}
            >
              Support
            </motion.h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
              </motion.li>
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Reservations</Link>
              </motion.li>
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Group Events</Link>
              </motion.li>
              <motion.li variants={footerItemVariants} whileHover="hover">
                <Link href="#" className="hover:text-white transition-colors">Careers</Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 text-sm pt-8 text-center"
          variants={bottomBarVariants}
        >
          <p className="text-gray-400">
            © 2025 Agroterra Resort. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}