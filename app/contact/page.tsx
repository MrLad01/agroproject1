import React from 'react'

const page = () => {
  return (
    <div className='pt-[140px] pb-18'>
      <div className="lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Plan Your Visit</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Ready to experience the luxury and excellence of Agroterra Resort? Contact us today to plan 
              your perfect getaway or to learn more about our programs and facilities.
            </p>
          </div>

          <div className="flex flex-col lg:flex-col gap-16">
            <div>
              <form className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h3>
                <div className="space-y-3 text-[12px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">First Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-0" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-0" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-0" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Interest</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-0">
                      <option>Resort Accommodation</option>
                      <option>Golf Course</option>
                      <option>Sports Academy</option>
                      <option>Event Planning</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-0"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-green-800 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors outline-0">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-10">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h4>
                <div className="space-y-1.5 text-gray-600 text-[15px]">
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
              </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <span className="text-green-800">📍</span>
                  </div>
                  <div className='w-full'>
                    <h4 className="font-semibold text-sm text-gray-900">Address</h4>
                    <p className="text-gray-600 text-sm">1234 Resort Boulevard<br />Countryside Valley, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <span className="text-green-800">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Phone</h4>
                    <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <span className="text-green-800">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                    <p className="text-gray-600 text-sm">info@agroterraresort.com</p>
                  </div>
                </div>
              </div>

          
            </div>
          </div>
        </div>
    </div>
  )
}

export default page