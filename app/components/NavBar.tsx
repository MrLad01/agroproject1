import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
      <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="flex items-center justify-between bg-green-50 px-6 py-3">
              <div className="flex-shrink-0">
                <h1 className="font-bold text-green-800 italic">Agroterra logo</h1>
              </div>
              <div className='flex items-center gap-2 text-xs'>
                <Link href="">1234 Resort Boulevard, Countryside Valley, State </Link>
                <p>|</p>
                <Link href="">info@agroterraresort.com</Link>
                <p>|</p>
                <Link href="">+23412345678</Link>
              </div>
            </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 lg:px-8">
          <div className="flex justify-center items-center">
            <div className="hidden md:flex text-[12px] items-center space-x-12 uppercase font-medium">
              <Link href="/" className="text-gray-700 hover:text-green-800 hover:border-b-2 border-green-700 py-2 transition-colors ">Home</Link>
              <Link href="/resort" className="text-gray-700 hover:text-green-800 hover:border-b-2 border-green-700 py-2 transition-colors">Resort</Link>
              <Link href="/golf" className="text-gray-700 hover:text-green-800 hover:border-b-2 border-green-700 py-2 transition-colors">Golf</Link>
              <Link href="/academy" className="text-gray-700 hover:text-green-800 hover:border-b-2 border-green-700 py-2 transition-colors">Sports Academy</Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-800 hover:border-b-2 border-green-700 py-2 transition-colors">Contact</Link>
              <button className="bg-green-800 text-white px-6 py-2 my-1.5 rounded-lg hover:bg-green-700 transition-colors font-semibold uppercase">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}
