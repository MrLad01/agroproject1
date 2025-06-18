"use client"
import React, { useState } from 'react'

const page = () => {
  const [activeTab, SetActiveTab] = useState("");
  
  return (
    <div className='pt-[140px] pb-18'>
      <div className="lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Our Sports Academy</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Elevate your athletic performance at our state-of-the-art sports academy, featuring 
              world-class facilities and expert coaching across multiple disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div onClick={() => SetActiveTab("athletic")} className="text-center cursor-pointer hover:scale-110">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 text-2xl font-bold">🏊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Athletics</h3>
              <p className="text-gray-600 text-sm">Olympic-standard training programs</p>
            </div>
            <div onClick={() => SetActiveTab("football")} className="text-center hover:scale-110 cursor-pointer">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-800 text-2xl font-bold">⚽</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Football</h3>
              <p className="text-gray-600 text-sm">Professional soccer training programs</p>
            </div>
            <div onClick={() => SetActiveTab("tennis")} className="text-center hover:scale-110 cursor-pointer">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-800 text-2xl font-bold">🎾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Tennis</h3>
              <p className="text-gray-600 text-sm">Professional tennis instruction on championship courts</p>
            </div>
            <div onClick={() => SetActiveTab("basketball")} className="text-center hover:scale-110 cursor-pointer">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-800 text-2xl font-bold">🏀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Basketball</h3>
              <p className="text-gray-600 text-sm">Indoor courts with professional coaching</p>
            </div>
          </div>
          
          {activeTab === "athletic" && (
            <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center">
              <p className="text-blue-800 text-xl font-semibold">Athletes Images</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Athletic Programs</h3>
              <p className="text-base text-gray-600 mb-4">
                Our comprehensive training programs are designed to meet the needs of athletes at every level, 
                from recreational players to elite competitors. Each program is led by certified coaches with 
                extensive experience in their respective sports, ensuring that participants receive the highest 
                quality instruction and support.
              </p>
            </div>
          </div>
            </>
          )}

          {activeTab === "football" && (
            <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Football Training Programs</h3>
              <p className="text-base text-gray-600 mb-4">
                Our comprehensive training programs are designed to meet the needs of athletes at every level, 
                from recreational players to elite competitors. Each program is led by certified coaches with 
                extensive experience in their respective sports, ensuring that participants receive the highest 
                quality instruction and support.
              </p>
            </div>
            <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center">
              <p className="text-blue-800 text-xl font-semibold">Football Images</p>
            </div>
          </div>
            </>
          )}

          {activeTab === "tennis" && (
            <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center">
              <p className="text-blue-800 text-xl font-semibold">Athletes Images</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Athletic Programs</h3>
              <p className="text-base text-gray-600 mb-4">
                Our comprehensive training programs are designed to meet the needs of athletes at every level, 
                from recreational players to elite competitors. Each program is led by certified coaches with 
                extensive experience in their respective sports, ensuring that participants receive the highest 
                quality instruction and support.
              </p>
            </div>
          </div>
            </>
          )}

          {activeTab === "basketball" && (
            <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Athletic Programs</h3>
              <p className="text-base text-gray-600 mb-4">
                Our comprehensive training programs are designed to meet the needs of athletes at every level, 
                from recreational players to elite competitors. Each program is led by certified coaches with 
                extensive experience in their respective sports, ensuring that participants receive the highest 
                quality instruction and support.
              </p>
            </div>
            <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center">
              <p className="text-blue-800 text-xl font-semibold">Athletes Images</p>
            </div>
          </div>
            </>
          )}

          <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Training Programs</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center">
              <p className="text-blue-800 text-xl font-semibold">Sports Facilities Image</p>
            </div>
            <div>
              <p className="text-base text-gray-600 mb-4">
                Our comprehensive training programs are designed to meet the needs of athletes at every level, 
                from recreational players to elite competitors. Each program is led by certified coaches with 
                extensive experience in their respective sports, ensuring that participants receive the highest 
                quality instruction and support.
              </p>
              <p className="text-base text-gray-600 mb-4">
                We offer both individual and group training sessions, with personalized programs tailored to 
                each athlete`&apos;`s goals, skill level, and schedule. Our holistic approach includes technical 
                skill development, physical conditioning, mental preparation, and sports psychology support.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Youth Development Programs</h4>
                    <p className="text-gray-600 text-sm">Comprehensive training for young athletes aged 8-18</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adult Recreational Classes</h4>
                    <p className="text-gray-600 text-sm">Fun and engaging programs for adult learners</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Elite Performance Training</h4>
                    <p className="text-gray-600 text-sm">Advanced programs for competitive athletes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-center text-gray-900 mb-2">State-of-the-Art Facilities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-base text-gray-600 mb-4">
                Our sports academy boasts world-class facilities that provide the perfect environment for 
                athletic development. Every facility is designed with the athlete`&apos;`s needs in mind, featuring 
                the latest equipment and technology to support optimal performance and safety.
              </p>
              <p className="text-base text-gray-600 mb-4">
                From our climate-controlled indoor courts to our Olympic-standard swimming pool, every 
                detail has been carefully considered to create an environment where athletes can train, 
                compete, and excel. Our facilities meet international standards and are regularly maintained 
                to ensure they remain in pristine condition.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">Facility Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <ul className="space-y-2">
                    <li>• 8 Professional tennis courts</li>
                    <li>• Olympic-size swimming pool</li>
                    <li>• Full-size basketball courts</li>
                    <li>• Soccer fields with FIFA-approved turf</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Strength and conditioning center</li>
                    <li>• Sports medicine clinic</li>
                    <li>• Video analysis rooms</li>
                    <li>• Athlete lounge and study areas</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-red-100 rounded-2xl h-80 flex items-center justify-center">
              <p className="text-red-800 text-xl font-semibold">Academy Facilities Image</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page