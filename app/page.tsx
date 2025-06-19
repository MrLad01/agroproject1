// pages/index.js
'use client'
import { motion, Variants, useInView  } from 'framer-motion';
import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'
import { useRef } from 'react';



const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const buttonContainerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      staggerChildren: 0.1
    }
  }
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  tap: {
    scale: 0.98
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 0.3
    }
  }
};

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const contentRowVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.3
    }
  }
};

const textContentVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1
    }
  }
};

const textContentRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1
    }
  }
};

const imageVariants1: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const gridItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// New animation variants for Golf and Sports sections
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2
    }
  }
};

const statsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeUpMotion : Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleUpMotion: Variants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageReveal: Variants = {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft : Variants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };


const inputVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

const contactInfoVariants: Variants = {
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
    x: 5,
    transition: {
      duration: 0.2
    }
  }
};

const cVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const formVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

    const sports = [
    { emoji: '🏊', title: 'Athletics', description: 'Olympic-standard training programs', color: 'blue' },
    { emoji: '⚽', title: 'Football', description: 'Professional soccer training programs', color: 'green' },
    { emoji: '🎾', title: 'Tennis', description: 'Professional tennis instruction on championship courts', color: 'red' },
    { emoji: '🏀', title: 'Basketball', description: 'Indoor courts with professional coaching', color: 'orange' }
  ];

  const programs = [
    { title: 'Youth Development Programs', description: 'Comprehensive training for young athletes aged 8-18' },
    { title: 'Adult Recreational Classes', description: 'Fun and engaging programs for adult learners' },
    { title: 'Elite Performance Training', description: 'Advanced programs for competitive athletes' }
  ];

  const facilities = [
    '8 Professional tennis courts',
    'Olympic-size swimming pool',
    'Full-size basketball courts',
    'Soccer fields with FIFA-approved turf',
    'Strength and conditioning center',
    'Sports medicine clinic',
    'Video analysis rooms',
    'Athlete lounge and study areas'
  ];

  
  return (
    
    <>
      <Head>
        <title>Agroterra Resort | Luxury Accommodation, Golf & Sports Academy</title>
        <meta name="description" content="Experience luxury at Agroterra Resort featuring world-class accommodation, championship golf course, and elite sports academy. Your perfect getaway awaits." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="home" className="pt-[52px] bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center">
        <div className="lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Welcome to <br /><span className="text-green-800">Agroterra</span> Resort
              </h1>
              <p className="text-base text-gray-600 mb-3 leading-relaxed">
                Nestled in the heart of pristine countryside, Agroterra Resort offers an unparalleled luxury experience 
                where nature meets sophistication. Our world-class facilities include premium accommodations, 
                a championship golf course, and an elite sports academy that caters to athletes of all levels.
              </p>
              <p className="text-base text-gray-600 mb-8">
                Whether you&apos;re seeking a peaceful retreat, an exciting golf adventure, or professional sports training, 
                Agroterra provides the perfect setting for your ultimate getaway. Experience the harmony of luxury, 
                recreation, and natural beauty in one extraordinary destination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-800 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                  Explore Our Resort
                </button>
                <button className="border-2 border-green-800 text-green-800 px-8 py-4 rounded-lg text-sm font-semibold hover:bg-green-800 hover:text-white transition-colors">
                  View Packages
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-200 rounded-2xl h-96 flex items-center justify-center">
                <p className="text-green-800 text-xl font-semibold">Resort Hero Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Section */}
        <section id="resort" className="py-[52px] bg-white">
      <div className="lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-1"
            variants={headerVariants}
          >
            Luxury Resort Experience
          </motion.h2>
          <motion.p 
            className="text-base text-gray-600 max-w-3xl mx-auto"
            variants={headerVariants}
          >
            Immerse yourself in unparalleled comfort and elegance at Agroterra Resort, where every detail 
            has been carefully crafted to exceed your expectations.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10"
          variants={contentRowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={textContentVariants}>
            <motion.h3 
              className="text-lg font-bold text-gray-900 mb-2"
              variants={listItemVariants}
            >
              Premium Accommodations
            </motion.h3>
            <motion.p 
              className="text-base text-gray-600 mb-3"
              variants={listItemVariants}
            >
              Our resort features elegantly appointed suites and villas, each designed with modern amenities 
              and breathtaking views of the surrounding landscape. From cozy deluxe rooms to expansive 
              presidential suites, every accommodation offers a sanctuary of comfort and style.
            </motion.p>
            <motion.p 
              className="text-base text-gray-600 mb-3"
              variants={listItemVariants}
            >
              Each room is equipped with state-of-the-art technology, premium bedding, spacious bathrooms 
              with luxury fixtures, and private balconies or patios. Our attention to detail ensures that 
              your stay is nothing short of extraordinary, whether you're here for business or leisure.
            </motion.p>
            <motion.ul 
              className="text-base text-gray-600 space-y-1"
              variants={sectionVariants}
            >
              <motion.li variants={listItemVariants}>• Deluxe rooms with garden or mountain views</motion.li>
              <motion.li variants={listItemVariants}>• Executive suites with separate living areas</motion.li>
              <motion.li variants={listItemVariants}>• Presidential villas with private pools</motion.li>
              <motion.li variants={listItemVariants}>• Family-friendly accommodations available</motion.li>
            </motion.ul>
          </motion.div>
          <motion.div 
            className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.02,
              rotateY: -2,
              transition: { duration: 0.3 }
            }}
          >
            <motion.p 
              className="text-blue-800 text-xl font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Resort Rooms Image
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={contentRowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="bg-amber-100 rounded-2xl h-80 flex items-center justify-center order-2 lg:order-1"
            variants={imageVariants1}
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
          >
            <motion.p 
              className="text-amber-800 text-xl font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Resort Amenities Image
            </motion.p>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2"
            variants={textContentRightVariants}
          >
            <motion.h3 
              className="text-lg font-bold text-gray-900 mb-3"
              variants={listItemVariants}
            >
              World-Class Amenities
            </motion.h3>
            <motion.p 
              className="text-base text-gray-600 mb-3"
              variants={listItemVariants}
            >
              Indulge in our comprehensive range of amenities designed to enhance your stay. From rejuvenating 
              spa treatments to gourmet dining experiences, every aspect of our resort is designed to provide 
              luxury and convenience at every turn.
            </motion.p>
            <motion.p 
              className="text-base text-gray-600 mb-3"
              variants={listItemVariants}
            >
              Our resort spa offers a full menu of therapeutic treatments using natural, locally-sourced 
              ingredients. Multiple dining venues provide everything from casual poolside snacks to fine 
              dining experiences featuring international and local cuisine prepared by award-winning chefs.
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-4 text-gray-600"
              variants={sectionVariants}
            >
              <motion.div variants={gridItemVariants}>
                <motion.h4 
                  className="font-semibold mb-2"
                  variants={listItemVariants}
                >
                  Wellness
                </motion.h4>
                <motion.ul 
                  className="space-y-1 text-sm"
                  variants={sectionVariants}
                >
                  <motion.li variants={listItemVariants}>• Fitness center</motion.li>
                </motion.ul>
              </motion.div>
              <motion.div variants={gridItemVariants}>
                <motion.h4 
                  className="font-semibold mb-2"
                  variants={listItemVariants}
                >
                  Dining & Recreation
                </motion.h4>
                <motion.ul 
                  className="space-y-1 text-sm"
                  variants={sectionVariants}
                >
                  <motion.li variants={listItemVariants}>• Fine dining restaurant</motion.li>
                  <motion.li variants={listItemVariants}>• Football field</motion.li>
                  <motion.li variants={listItemVariants}>• Swimming pools</motion.li>
                  <motion.li variants={listItemVariants}>• Tennis courts</motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* Golf Section */}
      <section id="golf" className="py-[52px] bg-green-50">
        <div className="lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-1"
              variants={headerVariants}
            >
              Championship Golf Course
            </motion.h2>
            <motion.p 
              className="text-base text-gray-600 max-w-3xl mx-auto"
              variants={headerVariants}
            >
              Experience golf at its finest on our meticulously designed 18-hole championship course, 
              where strategic play meets stunning natural beauty.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-2"
                variants={iconVariants}
                whileHover="hover"
              >
                <motion.span 
                  className="text-green-800 text-xl font-bold"
                  variants={iconVariants}
                >
                  18
                </motion.span>
              </motion.div>
              <motion.h3 
                className="text-lg font-bold text-gray-900 mb-2"
                variants={textVariants}
              >
                Championship Holes
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm"
                variants={textVariants}
              >
                Our 18-hole championship course offers a challenging yet enjoyable experience for golfers 
                of all skill levels, featuring strategic bunkers, water hazards, and undulating greens.
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2"
                variants={iconVariants}
                whileHover="hover"
              >
                <motion.span 
                  className="text-blue-800 font-bold"
                  variants={iconVariants}
                >
                  Pro
                </motion.span>
              </motion.div>
              <motion.h3 
                className="text-lg font-bold text-gray-900 mb-2"
                variants={textVariants}
              >
                Professional Instruction
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm"
                variants={textVariants}
              >
                Learn from PGA-certified professionals who offer personalized lessons, group clinics, 
                and advanced training programs to help improve your game.
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-6"
                variants={iconVariants}
                whileHover="hover"
              >
                <motion.span 
                  className="text-amber-800 font-bold"
                  variants={iconVariants}
                >
                  Pro
                </motion.span>
              </motion.div>
              <motion.h3 
                className="text-lg font-bold text-gray-900 mb-4"
                variants={textVariants}
              >
                Club House
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm"
                variants={textVariants}
              >
                Our fully-stocked club house offers the latest equipment and apparel, while our facilities 
                include a driving range, putting green, and short game practice area.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={contentRowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={textContentVariants}>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-2"
                variants={listItemVariants}
              >
                Course Design & Features
              </motion.h3>
              <motion.p 
                className="text-base text-gray-600 mb-3"
                variants={listItemVariants}
              >
                Designed by renowned golf course architect Robert Trent Jones Jr., our championship course 
                seamlessly integrates with the natural topography to create a challenging and visually 
                stunning golfing experience. The course measures 7,200 yards from the championship tees 
                and features five different tee positions to accommodate players of all abilities.
              </motion.p>
              <motion.p 
                className="text-base text-gray-600 mb-3"
                variants={listItemVariants}
              >
                Each hole presents unique strategic challenges, from the demanding par-5 signature hole 
                that plays around a pristine lake, to the elevated tees that offer panoramic views of 
                the surrounding mountains. The course conditions are maintained to the highest standards, 
                ensuring excellent playing conditions year-round.
              </motion.p>
              <motion.div 
                className="bg-green-100 p-4 rounded-lg"
                variants={statsVariants}
              >
                <motion.h4 
                  className="font-bold text-green-800 mb-2"
                  variants={listItemVariants}
                >
                  Course Statistics
                </motion.h4>
                <motion.div 
                  className="grid grid-cols-2 gap-1 text-sm"
                  variants={sectionVariants}
                >
                  <motion.div variants={listItemVariants}>Par: 72 | Yardage: 7,200</motion.div>
                  <motion.div variants={listItemVariants}>Slope Rating: 142</motion.div>
                  <motion.div variants={listItemVariants}>Course Rating: 74.5</motion.div>
                  <motion.div variants={listItemVariants}>Designed by: Robert Trent Jones Jr.</motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="bg-green-200 rounded-2xl h-96 flex items-center justify-center"
              variants={imageVariants1}
              whileHover={{ 
                scale: 1.02,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
            >
              <motion.p 
                className="text-green-800 text-xl font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Golf Course Image
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Sports Academy Section */}
      <section id="academy" className="py-[52px] bg-white" ref={ref}>
      <div className="lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-1"
            variants={fadeUpMotion}
          >
            Elite Sports Academy
          </motion.h2>
          <motion.p
            className="text-base text-gray-600 max-w-3xl mx-auto"
            variants={fadeUpMotion}
          >
            Elevate your athletic performance at our state-of-the-art sports academy, featuring 
            world-class facilities and expert coaching across multiple disciplines.
          </motion.p>
        </motion.div>

        {/* Sports Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          {sports.map((sport, index) => (
            <motion.div
              key={sport.title}
              className="text-center group cursor-pointer"
              variants={scaleUpMotion}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`bg-${sport.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                whileHover={{
                  rotate: [0, -10, 10, -5, 0],
                  transition: { duration: 0.5, ease: "easeInOut" }
                }}
              >
                <motion.span
                  className={`text-${sport.color}-800 text-2xl font-bold`}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  {sport.emoji}
                </motion.span>
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-gray-900"
                variants={fadeUpMotion}
              >
                {sport.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-sm"
                variants={fadeUpMotion}
              >
                {sport.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Training Programs Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div
            className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center overflow-hidden"
            variants={imageReveal}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            <motion.p
              className="text-blue-800 text-xl font-semibold"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Sports Facilities Image
            </motion.p>
          </motion.div>
          
          <motion.div variants={fadeUpMotion}>
            <motion.h3
              className="text-xl font-bold text-gray-900 mb-2"
              variants={fadeUpMotion}
            >
              Training Programs
            </motion.h3>
            <motion.p
              className="text-base text-gray-600 mb-4"
              variants={fadeUpMotion}
            >
              Our comprehensive training programs are designed to meet the needs of athletes at every level, 
              from recreational players to elite competitors. Each program is led by certified coaches with 
              extensive experience in their respective sports, ensuring that participants receive the highest 
              quality instruction and support.
            </motion.p>
            <motion.p
              className="text-base text-gray-600 mb-4"
              variants={fadeUpMotion}
            >
              We offer both individual and group training sessions, with personalized programs tailored to 
              each athlete&apos;s goals, skill level, and schedule. Our holistic approach includes technical 
              skill development, physical conditioning, mental preparation, and sports psychology support.
            </motion.p>
            
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
            >
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  className="flex items-start group"
                  variants={slideInLeft}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2, ease: "easeInOut" }
                  }}
                >
                  <motion.div
                    className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"
                    whileHover={{
                      scale: 1.5,
                      backgroundColor: "#10b981",
                      transition: { duration: 0.2 }
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                      {program.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {program.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Facilities Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpMotion}>
            <motion.h3
              className="text-xl font-bold text-gray-900 mb-2"
              variants={fadeUpMotion}
            >
              State-of-the-Art Facilities
            </motion.h3>
            <motion.p
              className="text-base text-gray-600 mb-4"
              variants={fadeUpMotion}
            >
              Our sports academy boasts world-class facilities that provide the perfect environment for 
              athletic development. Every facility is designed with the athlete&apos;s needs in mind, featuring 
              the latest equipment and technology to support optimal performance and safety.
            </motion.p>
            <motion.p
              className="text-base text-gray-600 mb-4"
              variants={fadeUpMotion}
            >
              From our climate-controlled indoor courts to our Olympic-standard swimming pool, every 
              detail has been carefully considered to create an environment where athletes can train, 
              compete, and excel. Our facilities meet international standards and are regularly maintained 
              to ensure they remain in pristine condition.
            </motion.p>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              variants={scaleUpMotion}
              whileHover={{
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
            >
              <motion.h4
                className="font-bold text-gray-900 mb-4"
                variants={fadeUpMotion}
              >
                Facility Highlights
              </motion.h4>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600"
                variants={staggerContainer}
              >
                <motion.ul className="space-y-2" variants={staggerContainer}>
                  {facilities.slice(0, 4).map((facility, index) => (
                    <motion.li
                      key={facility}
                      variants={slideInLeft}
                      whileHover={{
                        x: 5,
                        color: "#374151",
                        transition: { duration: 0.2 }
                      }}
                      className="cursor-pointer"
                    >
                      • {facility}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.ul className="space-y-2" variants={staggerContainer}>
                  {facilities.slice(4).map((facility, index) => (
                    <motion.li
                      key={facility}
                      variants={slideInLeft}
                      whileHover={{
                        x: 5,
                        color: "#374151",
                        transition: { duration: 0.2 }
                      }}
                      className="cursor-pointer"
                    >
                      • {facility}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="bg-red-100 rounded-2xl h-80 flex items-center justify-center overflow-hidden"
            variants={imageReveal}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            <motion.p
              className="text-red-800 text-xl font-semibold"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Academy Facilities Image
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* Contact Section */}
       <section id="contact" className="py-[58px] bg-gray-50">
      <div className="lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Plan Your Visit</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Ready to experience the luxury and excellence of Agroterra Resort? Contact us today to plan 
            your perfect getaway or to learn more about our programs and facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cVariants}
          >
            <motion.h3 
              className="text-xl font-bold text-gray-900 mb-2"
              variants={titleVariants}
            >
              Get in Touch
            </motion.h3>
            <div className="space-y-3">
              <motion.div 
                className="flex items-start"
                variants={contactInfoVariants}
                whileHover="hover"
              >
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <span className="text-green-800">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Address</h4>
                  <p className="text-gray-600 text-sm">1234 Resort Boulevard<br />Countryside Valley, State 12345</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start"
                variants={contactInfoVariants}
                whileHover="hover"
              >
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <span className="text-green-800">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Phone</h4>
                  <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start"
                variants={contactInfoVariants}
                whileHover="hover"
              >
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <span className="text-green-800">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                  <p className="text-gray-600 text-sm">info@agroterraresort.com</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-10"
              variants={contactInfoVariants}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h4>
              <div className="space-y-1.5 text-gray-600 text-[13px]">
                <div className="flex justify-between">
                  <span>Resort Reception:</span>
                  <span>24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Golf Course:</span>
                  <span>6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sports Academy:</span>
                  <span>6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Spa & Wellness:</span>
                  <span>8:00 AM - 9:00 PM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <form className="bg-white p-8 rounded-2xl shadow-lg">
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-4"
                variants={titleVariants}
              >
                Send us a Message
              </motion.h3>
              <motion.div 
                className="space-y-3 text-[12px]"
                variants={cVariants}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={inputVariants}>
                    <label className="block text-xs font-medium text-gray-700 mb-1">First Name</label>
                    <motion.input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-0"
                      whileFocus="focus"
                      variants={inputVariants}
                    />
                  </motion.div>
                  <motion.div variants={inputVariants}>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
                    <motion.input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-0"
                      whileFocus="focus"
                      variants={inputVariants}
                    />
                  </motion.div>
                </div>
                <motion.div variants={inputVariants}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                  <motion.input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-0"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </motion.div>
                <motion.div variants={inputVariants}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Interest</label>
                  <motion.select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-0"
                    whileFocus="focus"
                    variants={inputVariants}
                  >
                    <option>Resort Accommodation</option>
                    <option>Golf Course</option>
                    <option>Sports Academy</option>
                    <option>Event Planning</option>
                    <option>General Inquiry</option>
                  </motion.select>
                </motion.div>
                <motion.div variants={inputVariants}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                  <motion.textarea 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-0"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </motion.div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-green-800 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors outline-0"
                  variants={inputVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Footer */}
    
    </>
  )
}