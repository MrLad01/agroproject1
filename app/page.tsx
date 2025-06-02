// pages/index.js
import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Agroterra Resort | Luxury Accommodation, Golf & Sports Academy</title>
        <meta name="description" content="Experience luxury at Agroterra Resort featuring world-class accommodation, championship golf course, and elite sports academy. Your perfect getaway awaits." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="home" className="pt-[52px] bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                Whether you`&apos;`re seeking a peaceful retreat, an exciting golf adventure, or professional sports training, 
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Luxury Resort Experience</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in unparalleled comfort and elegance at Agroterra Resort, where every detail 
              has been carefully crafted to exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Accommodations</h3>
              <p className="text-base text-gray-600 mb-3">
                Our resort features elegantly appointed suites and villas, each designed with modern amenities 
                and breathtaking views of the surrounding landscape. From cozy deluxe rooms to expansive 
                presidential suites, every accommodation offers a sanctuary of comfort and style.
              </p>
              <p className="text-base text-gray-600 mb-3">
                Each room is equipped with state-of-the-art technology, premium bedding, spacious bathrooms 
                with luxury fixtures, and private balconies or patios. Our attention to detail ensures that 
                your stay is nothing short of extraordinary, whether you`&apos;`re here for business or leisure.
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-amber-100 rounded-2xl h-80 flex items-center justify-center order-2 lg:order-1">
              <p className="text-amber-800 text-xl font-semibold">Resort Amenities Image</p>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-lg font-bold text-gray-900 mb-3">World-Class Amenities</h3>
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
      </section>

      {/* Golf Section */}
      <section id="golf" className="py-[52px] bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Championship Golf Course</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Experience golf at its finest on our meticulously designed 18-hole championship course, 
              where strategic play meets stunning natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="text-green-800 text-xl font-bold">18</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Championship Holes</h3>
              <p className="text-gray-600 text-sm">
                Our 18-hole championship course offers a challenging yet enjoyable experience for golfers 
                of all skill levels, featuring strategic bunkers, water hazards, and undulating greens.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-800 font-bold">Pro</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Instruction</h3>
              <p className="text-gray-600 text-sm">
                Learn from PGA-certified professionals who offer personalized lessons, group clinics, 
                and advanced training programs to help improve your game.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Course Design & Features</h3>
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
              <p className="text-green-800 text-xl font-semibold">Golf Course Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Academy Section */}
      <section id="academy" className="py-[52px] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Elite Sports Academy</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Elevate your athletic performance at our state-of-the-art sports academy, featuring 
              world-class facilities and expert coaching across multiple disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 text-2xl font-bold">🏊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Athletics</h3>
              <p className="text-gray-600 text-sm">Olympic-standard training programs</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-800 text-2xl font-bold">⚽</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Football</h3>
              <p className="text-gray-600 text-sm">Professional soccer training programs</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-800 text-2xl font-bold">🎾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Tennis</h3>
              <p className="text-gray-600 text-sm">Professional tennis instruction on championship courts</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-800 text-2xl font-bold">🏀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Basketball</h3>
              <p className="text-gray-600 text-sm">Indoor courts with professional coaching</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center">
              <p className="text-blue-800 text-xl font-semibold">Sports Facilities Image</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Training Programs</h3>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">State-of-the-Art Facilities</h3>
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-[58px] bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Plan Your Visit</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Ready to experience the luxury and excellence of Agroterra Resort? Contact us today to plan 
              your perfect getaway or to learn more about our programs and facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <span className="text-green-800">📍</span>
                  </div>
                  <div>
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

              <div className="mt-10">
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
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </>
  )
}