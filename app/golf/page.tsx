import React from 'react'

import golfHero from '@/public/ag2.jpg';
import Image from 'next/image';

const page = () => {
  return (
    <div className='pt-[140px] pb-18'>
         <div className="lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Agroterra Golf Course</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Experience golf at its finest on our meticulously designed 18-hole championship course, 
              where strategic play meets stunning natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-110">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="text-green-800 text-xl font-bold">18</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Championship Holes</h3>
              <p className="text-gray-600 text-sm">
                Our 18-hole championship course offers a challenging yet enjoyable experience for golfers 
                of all skill levels, featuring strategic bunkers, water hazards, and undulating greens.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-110">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-800 font-bold">Pro</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Instruction</h3>
              <p className="text-gray-600 text-sm">
                Learn from PGA-certified professionals who offer personalized lessons, group clinics, 
                and advanced training programs to help improve your game.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-110">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-amber-800 font-bold">Pro</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Club House</h3>
              <p className="text-gray-600 text-sm">
                Our fully-stocked club house offers the latest equipment and apparel, while our facilities 
                include a driving range, putting green, and short game practice area.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Course Design & Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-base text-gray-600 mb-3">
                Designed by renowned golf course architect Robert Trent Jones Jr., our championship course 
                seamlessly integrates with the natural topography to create a challenging and visually 
                stunning golfing experience. The course measures 7,200 yards from the championship tees 
                and features five different tee positions to accommodate players of all abilities.
              </p>
              <p className="text-base text-gray-600 mb-3">
                Each hole presents unique strategic challenges, from the demanding par-5 signature hole 
                that plays around a pristine lake, to the elevated tees that offer panoramic views of 
                the surrounding mountains. The course conditions are maintained to the highest standards, 
                ensuring excellent playing conditions year-round.
              </p>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Course Statistics</h4>
                <div className="grid grid-cols-2 gap-1 text-sm">
                  <div>Par: 72 | Yardage: 7,200</div>
                  <div>Slope Rating: 142</div>
                  <div>Course Rating: 74.5</div>
                  <div>Designed by: Robert Trent Jones Jr.</div>
                </div>
              </div>
            </div>
            <div className="bg-green-200 rounded-2xl h-96 flex items-center justify-center">
              {/* <p className="text-green-800 text-xl font-semibold">Golf Course Image</p>
               */}
              <Image src={golfHero} alt='' className='object-cover w-full h-full rounded-2xl'></Image>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page