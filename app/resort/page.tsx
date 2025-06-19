import React from 'react'

const page = () => {
  return (
    <div className='pt-[140px] pb-16'>
        <div className="lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Agroterra Resort Experience</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in unparalleled comfort and elegance at Agroterra Resort, where every detail 
              has been carefully crafted to exceed your expectations.
            </p>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Premium Accommodations</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-base text-gray-600 mb-3">
                Our resort features elegantly appointed suites and villas, each designed with modern amenities 
                and breathtaking views of the surrounding landscape. From cozy deluxe rooms to expansive 
                presidential suites, every accommodation offers a sanctuary of comfort and style.
              </p>
              <p className="text-base text-gray-600 mb-3">
                Each room is equipped with state-of-the-art technology, premium bedding, spacious bathrooms 
                with luxury fixtures, and private balconies or patios. Our attention to detail ensures that 
                your stay is nothing short of extraordinary, whether you&apos;re here for business or leisure.
              </p>
              <ul className="text-base text-gray-600 space-y-1">
                <li>• Deluxe rooms with garden or mountain views</li>
                <li>• Executive suites with separate living areas</li>
                <li>• Presidential villas with private pools</li>
                <li>• Family-friendly accommodations available</li>
              </ul>
            </div>
            <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center">
              <p className="text-blue-800 text-xl font-semibold">Resort Rooms Image</p>
            </div>
          </div>

        <h3 className="text-xl text-center font-bold text-gray-900 mb-4">World-Class Amenities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-amber-100 rounded-2xl h-80 flex items-center justify-center order-2 lg:order-1">
              <p className="text-amber-800 text-xl font-semibold">Resort Amenities Image</p>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-base text-gray-600 mb-3">
                Indulge in our comprehensive range of amenities designed to enhance your stay. From rejuvenating 
                spa treatments to gourmet dining experiences, every aspect of our resort is designed to provide 
                luxury and convenience at every turn.
              </p>
              <p className="text-base text-gray-600 mb-3">
                Our resort spa offers a full menu of therapeutic treatments using natural, locally-sourced 
                ingredients. Multiple dining venues provide everything from casual poolside snacks to fine 
                dining experiences featuring international and local cuisine prepared by award-winning chefs.
              </p>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div>
                  <h4 className="font-semibold mb-2">Wellness</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Fitness center</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dining & Recreation</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Fine dining restaurant</li>
                    <li>• Football field</li>
                    <li>• Swimming pools</li>
                    <li>• Tennis courts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page