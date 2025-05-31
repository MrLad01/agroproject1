import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 lg:px-8">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="font-bold text-green-800 italic">Agroterra logo</h1>
              </div>
            </div>
            <div className="hidden md:flex text-[12px] items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-green-800 transition-colors">Home</Link>
              <Link href="#resort" className="text-gray-700 hover:text-green-800 transition-colors">Resort</Link>
              <Link href="#golf" className="text-gray-700 hover:text-green-800 transition-colors">Golf</Link>
              <Link href="#academy" className="text-gray-700 hover:text-green-800 transition-colors">Sports Academy</Link>
              <Link href="#contact" className="text-gray-700 hover:text-green-800 transition-colors">Contact</Link>
              <button className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}
