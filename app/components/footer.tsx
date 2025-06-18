import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
  <footer className="bg-gray-900 text-white py-16">
        <div className="lg:max-w-7xl xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Agroterra</h3>
              <p className="text-gray-400 mb-4">
                Experience luxury, recreation, and natural beauty at our premier resort destination 
                featuring world-class golf and sports facilities.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">i</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resort</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Accommodations</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Dining</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Wellness</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Activities</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Facilities</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Golf Course</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Sports Academy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Tennis Courts</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Athletics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Reservations</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Group Events</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 text-sm pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Agroterra Resort. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
        )
}
