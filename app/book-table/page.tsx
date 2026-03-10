// app/book-table/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BookTablePage() {
  return (
    <>
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#e2e8f0] bg-[#f8f6f6]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="p-2 bg-[#ec5b13] rounded-lg text-white">
                <span className="material-symbols-outlined text-2xl">restaurant</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-[#0f172a]">The Place <span className="text-[#ec5b13]">Bodija</span></h1>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/menu" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Menu</Link>
              <Link href="/book-table" className="text-sm font-semibold text-[#ec5b13]">Reservations</Link>
              <Link href="#" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Locations</Link>
              <Link href="#" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Offers</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-[#e2e8f0] transition-colors">
                <span className="material-symbols-outlined text-[#0f172a]">account_circle</span>
              </button>
              <button className="md:hidden p-2">
                <span className="material-symbols-outlined text-[#0f172a]">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="relative rounded-xl overflow-hidden mb-12 h-64 sm:h-80 lg:h-96">
          <div className="absolute inset-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARk79VEkGhxp0TWrkNNtD11dVYR-EusvPj9xdN2JHQtvnX6reCdQzMO2WOMnNCNKDcY4q1xsn-Ri3SwY157v4V-b7rgboO9t_PG1Hf39poMlerz3crKVW4XjSvzeWGSMGUhtryyHHYCBc0X_bwN7PslNpN6Im1IpPHDaqFUIBIj7aCjUyy5k_Nx3sZ1ste9wVAw0JpO9yI3Up9AL-pv4fehTAI0HyO6jGDHwAKwgV4ncze1rFONmSyIBmtRSyzIJb7A6_Fk9lZPF4"
              alt="Elegant restaurant interior with warm lighting and set tables"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">Book a Table</h2>
            <p className="text-slate-200 text-lg max-w-xl">Experience the perfect blend of luxury and taste in the heart of New Bodija.</p>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-[#ec5b13]">event_seat</span>
                <h3 className="text-xl font-bold text-[#0f172a]">Reservation Details</h3>
              </div>
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0f172a]">Date</label>
                    <div className="relative">
                      <input 
                        className="w-full rounded-lg border border-[#cbd5e1] bg-transparent py-3 pl-4 pr-10 focus:ring-2 focus:ring-[#ec5b13] focus:border-[#ec5b13] outline-none text-[#0f172a]" 
                        type="date"
                      />
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0f172a]">Time</label>
                    <select className="w-full rounded-lg border border-[#cbd5e1] bg-transparent py-3 px-4 focus:ring-2 focus:ring-[#ec5b13] focus:border-[#ec5b13] outline-none appearance-none text-[#0f172a]">
                      <option>Select a time</option>
                      <option>08:00 AM</option>
                      <option>10:00 AM</option>
                      <option>12:00 PM</option>
                      <option>02:00 PM</option>
                      <option>04:00 PM</option>
                      <option>06:00 PM</option>
                      <option>08:00 PM</option>
                      <option>09:00 PM</option>
                    </select>
                  </div>

                  {/* Guests Dropdown */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0f172a]">Number of Guests</label>
                    <select className="w-full rounded-lg border border-[#cbd5e1] bg-transparent py-3 px-4 focus:ring-2 focus:ring-[#ec5b13] focus:border-[#ec5b13] outline-none text-[#0f172a]">
                      <option>1 Guest</option>
                      <option defaultChecked>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6+ Guests</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0f172a]">Full Name</label>
                    <input 
                      className="w-full rounded-lg border border-[#cbd5e1] bg-transparent py-3 px-4 focus:ring-2 focus:ring-[#ec5b13] focus:border-[#ec5b13] outline-none text-[#0f172a]" 
                      placeholder="John Doe" 
                      type="text"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0f172a]">Phone Number</label>
                    <input 
                      className="w-full rounded-lg border border-[#cbd5e1] bg-transparent py-3 px-4 focus:ring-2 focus:ring-[#ec5b13] focus:border-[#ec5b13] outline-none text-[#0f172a]" 
                      placeholder="+234 000 000 0000" 
                      type="tel"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0f172a]">Email Address</label>
                    <input 
                      className="w-full rounded-lg border border-[#cbd5e1] bg-transparent py-3 px-4 focus:ring-2 focus:ring-[#ec5b13] focus:border-[#ec5b13] outline-none text-[#0f172a]" 
                      placeholder="john@example.com" 
                      type="email"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#0f172a]">Special Requests (Optional)</label>
                  <textarea 
                    className="w-full rounded-lg border border-[#cbd5e1] bg-transparent py-3 px-4 focus:ring-2 focus:ring-[#ec5b13] focus:border-[#ec5b13] outline-none text-[#0f172a]" 
                    placeholder="Allergies, birthday celebration, quiet table request..." 
                    rows={4}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-[#ec5b13] hover:bg-[#d14f0f] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#ec5b13]/20 flex items-center justify-center gap-2" type="submit">
                    <span>Confirm Reservation</span>
                    <span className="material-symbols-outlined">check_circle</span>
                  </button>
                  <p className="text-xs text-center text-[#64748b] mt-4">By booking, you agree to our Terms of Service and Privacy Policy.</p>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Location & Hours */}
            <div className="bg-[#ec5b13]/10 border border-[#ec5b13]/20 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0f172a]">
                <span className="material-symbols-outlined text-[#ec5b13]">info</span>
                Information
              </h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#ec5b13]">location_on</span>
                  <div>
                    <p className="font-semibold text-sm text-[#0f172a]">Location</p>
                    <p className="text-sm text-[#475569]">Plot 4, UI–Secretariat Road, New Bodija, Ibadan</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#ec5b13]">schedule</span>
                  <div>
                    <p className="font-semibold text-sm text-[#0f172a]">Opening Hours</p>
                    <p className="text-sm text-[#475569]">Daily: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-lg overflow-hidden h-40 relative bg-[#e2e8f0]">
                <div className="w-full h-full flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-4xl text-[#94a3b8]">map</span>
                  <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-[10px] font-bold shadow-sm text-[#0f172a]">
                    Ibadan, Nigeria
                  </div>
                </div>
              </div>
            </div>

            {/* Why Dine With Us? */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#0f172a]">Why Dine with Us?</h4>
              <div className="group relative rounded-xl overflow-hidden h-48">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKOtZlzqKnNHulywhlhmL1lWtPFW3p0_4NXlsplWnEdTGgV0QYAp0lFy7qH_GGuQJw0MCgud_hSveljDaZlJdBqRVq8g0lyPTrv7VlZQpeZqHeObdziADdWpF4YhrwDTy773B4JymrbGCp84RAt0GulVfnJObDWZP9ncSoS4bY5CvOKOYdYCJBdtTYtlJMEDsmQZ7hDt8CVt--YglOA1KVF_Dezas1ltFwx44XaGmDCFpbfheQ2Yotn4RjMQWJKvAiJEWnjk-eoPQ"
                    alt="Close up of a gourmet African fusion dish"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-white text-sm font-bold">Signature Culinary Excellence</p>
                </div>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                At The Place Bodija, we combine the vibrant flavors of local cuisine with modern international techniques. Our atmosphere is designed for comfort, making it the perfect spot for corporate lunches, romantic dinners, or family celebrations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-[#475569]">
                  <span className="material-symbols-outlined text-[#ec5b13] text-lg">verified</span>
                  <span>Fresh, locally sourced ingredients</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#475569]">
                  <span className="material-symbols-outlined text-[#ec5b13] text-lg">verified</span>
                  <span>Award-winning chef team</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#475569]">
                  <span className="material-symbols-outlined text-[#ec5b13] text-lg">verified</span>
                  <span>Premium wine and cocktail selection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e2e8f0] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-1.5 bg-[#ec5b13] rounded text-white">
                  <span className="material-symbols-outlined text-xl">restaurant</span>
                </div>
                <h2 className="text-xl font-bold text-[#0f172a]">The Place <span className="text-[#ec5b13]">Bodija</span></h2>
              </div>
              <p className="text-[#475569] max-w-sm mb-6">
                The heartbeat of Ibadan's culinary scene. Join us for a journey of taste and refinement at our New Bodija location.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center hover:bg-[#ec5b13] hover:text-white transition-all text-[#0f172a]">
                  <span className="material-symbols-outlined">public</span>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center hover:bg-[#ec5b13] hover:text-white transition-all text-[#0f172a]">
                  <span className="material-symbols-outlined">camera</span>
                </Link>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-[#0f172a]">Quick Links</h5>
              <ul className="space-y-4 text-sm text-[#475569]">
                <li><Link href="/menu" className="hover:text-[#ec5b13] transition-colors">Our Menu</Link></li>
                <li><Link href="#" className="hover:text-[#ec5b13] transition-colors">Private Events</Link></li>
                <li><Link href="#" className="hover:text-[#ec5b13] transition-colors">Career Opportunities</Link></li>
                <li><Link href="#" className="hover:text-[#ec5b13] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-[#0f172a]">Contact</h5>
              <ul className="space-y-4 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#ec5b13] text-lg">mail</span>
                  <span>reservations@theplacebodija.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#ec5b13] text-lg">call</span>
                  <span>+234 812 345 6789</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#f1f5f9] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#64748b]">
            <p>© 2023 The Place Restaurant Bodija. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#ec5b13]">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#ec5b13]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}