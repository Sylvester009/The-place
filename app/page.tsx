import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#e2e8f0] bg-white/80 backdrop-blur-md px-4 md:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#E31837] p-1.5 rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">restaurant_menu</span>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight text-[#E31837]">The Place <span className="text-[#0f172a]">Bodija</span></h2>
          </div>
           <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Home</Link>
              <Link href="/about" className="text-sm font-semibold text-[#ec5b13] transition-colors">About Us</Link>
              <Link href="/menu" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Menu</Link>
              <Link href="/gallery" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Gallery</Link>
              <Link href="/book-table" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Reservations</Link>
            </nav>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-xl bg-[#f1f5f9] text-[#334155]">
              <span className="material-symbols-outlined">search</span>
            </button>
            <Link href="/checkout">
            <button className="relative p-2 rounded-xl bg-[#FFC72C] text-[#0f172a]">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute -top-1 -right-1 bg-[#E31837] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
            </button>
            </Link>
            <div className="w-10 h-10 rounded-full border-2 border-[#E31837] overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPaMdqaq43hHagChtBH7KVuq2j6YkGVdrpk8I785ueJWlSAMJtZiV2yXZkPl0T3uNkE2bfNEunSY3Rw1Y7BCpS9kPaHJ7lj7YKK41dblp9_8hD5PzseIpQ3awuK4K4BrZlMabqVThJWbqSVIC5I7QQaSnTWhMj94HupsgpVZL8IfWVsy3jJllYMkrc_NQsobq46ckgnewKC1wmhLulSJq0d7oUppnj1Ea3RfbO1BYu2W97gwF5pbv_K8qXBti9nx_XQ5KDok0Q5OU"
                alt="User Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 lg:flex items-center gap-12">
            <div className="lg:w-1/2 flex flex-col gap-6 md:gap-8 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC72C]/20 text-[#E31837] font-bold text-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">local_fire_department</span>
                Ibadan's Favorite Spot
              </div>
              <h1 className="text-[#0f172a] text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                Delicious Nigerian <span className="text-[#E31837]">Jollof</span> & Grills
              </h1>
              <p className="text-[#475569] text-lg md:text-xl max-w-lg leading-relaxed">
                Experience the vibrant taste of Ibadan at The Place Restaurant Bodija. Fresh, hot, and ready for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#E31837] text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#E31837]/30 transition-all flex items-center gap-2">
                  Order Now <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="px-8 py-4 bg-[#0f172a] text-white rounded-xl font-bold text-lg hover:bg-[#1e293b] transition-all">
                  Book a Table
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FFC72C]/30 rounded-full blur-3xl -z-10"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative w-full h-[400px]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYrGLOsVubNpU712V5pqmdBR_1TEqieopv6mkiBh6yJ-fkLWj03huriE-qpGR7gQABRpAmRbEnzN6VRjTRWw4ZTenbeTg-KJ0NwiomboPhjaXgs9QKPN4ToKU48lElYIGQOQgzDkM7UVkouW2DaVSSGaPInS6AV0RQRUpudqPj-i4tvUQoTSlA_xgPHxDfRyx7UsT7Muo1YlD68X0tw9O2hi--Bq7nOoUnDLMjHS1fwO3OsKCkKt-X2OdUTMgoXDxVBpnjqhK-Wz0"
                    alt="Hero Food"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-[#f1f5f9]">
                <div className="bg-[#FFC72C] p-3 rounded-xl">
                  <span className="material-symbols-outlined text-[#0f172a]">delivery_dining</span>
                </div>
                <div>
                  <p className="text-xs text-[#64748b] font-bold uppercase">Fast Delivery</p>
                  <p className="font-bold">Under 30 Mins</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Dishes Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-2">Popular Dishes</h2>
              <p className="text-[#64748b]">Our customer's all-time favorites in Bodija</p>
            </div>
            <Link href="#" className="text-[#E31837] font-bold flex items-center gap-1 hover:underline">
              View All <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#f1f5f9]">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1FuTbdfTih6xoDj-_E0PsHOEWmu-C6p-ndBQN6OQ7A4V5yFjod4BQRLwhCB-g71vnhh-_yXARlwh9AdNtB6B-rG0XYTJaAQYIvvoJj0sOraBQD0sdnhI-KbzmlVvxHQs4VIX5btlTvCNas6sdnNO3mhe1B_SDqqRlp33YyGtiCRRry2AG6tP3RS8L6aJUfWRB70-xKcB29bqiDRD9hkz5K86gxTuxPzR5v8Rm0HpbNqd1s5nvAXdOFE2uMzBDpowPElTTyEGR0Jc"
                  alt="Jollof"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[#E31837] font-bold shadow-sm">
                  ₦3,500
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#E31837] transition-colors">Smokey Jollof Rice</h3>
                <p className="text-[#64748b] text-sm mb-6">Authentic party-style jollof served with spicy chicken and fried plantains.</p>
                <button className="w-full py-3 bg-[#FFC72C]/10 text-[#0f172a] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#FFC72C] transition-colors group-hover:shadow-md">
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#f1f5f9]">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoeZOymIB5CkSIPlE4bWw0hZpL16lMTvumLEP1CVHU3hie_WYj2E2wvm_WEgEm49Okyy_wKezDXH1Ey-xw64CAlHFLdNIcGDV1G5X4qWk1TIpLVW9fAMaWNEoAZISa-AKl240gHx0vdSD1kBK97y2u0g54HUFTRC-jbc7AGZ4sUCohIm-4_u921R4-mS40l-uQbMITMyVSrIhcJyQEaZqhci3h2R21h8t6nRKcZtAyjRZ1SJNpH3ODisSot1t9JVQmvfCAJqarJ0g"
                  alt="Asun"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[#E31837] font-bold shadow-sm">
                  ₦4,200
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#E31837] transition-colors">Spicy Asun</h3>
                <p className="text-[#64748b] text-sm mb-6">Traditional Yoruba peppered goat meat, grilled to perfection over open charcoal.</p>
                <button className="w-full py-3 bg-[#FFC72C]/10 text-[#0f172a] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#FFC72C] transition-colors group-hover:shadow-md">
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#f1f5f9]">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyM1njNU9v69h12QRbdhbEDTCXM57nU4Xj--Xi7Ms_ZoSwZPhCmE0-5HZSCmazWmDwBaD3v8iJDSGpqP4kB3RmqooY8SuzPJygYvIYmgCgWhfsbx1h2F4dI8rZhb8Bj7vokeeg1Eo1pPElSu7C6kSp5fcyomNX1ub5O4JweKSvnuxnOlIADt3sTk9g3cFxZpGq1FmuoOFnW1aO00B_V_f25uOQTMdR_ptlXugucmjRTz7wWiHf7unuWOV9mj5ItP_RC1TsHFZuuOA"
                  alt="Fish"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[#E31837] font-bold shadow-sm">
                  ₦8,500
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#E31837] transition-colors">Grilled Croaker Fish</h3>
                <p className="text-[#64748b] text-sm mb-6">Large croaker fish, marinated in our secret spices and grilled with mixed veggies.</p>
                <button className="w-full py-3 bg-[#FFC72C]/10 text-[#0f172a] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#FFC72C] transition-colors group-hover:shadow-md">
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Specials Promo */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="relative rounded-4xl overflow-hidden bg-[#E31837] text-white p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC72C]/20 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 md:w-3/5">
              <h2 className="text-[#FFC72C] text-lg font-bold uppercase tracking-widest mb-2">Daily Specials</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6">Lunch Combo Box <br/>Now at 20% Off!</h3>
              <p className="text-white/80 text-lg mb-8 max-w-md">Get a bowl of Jollof, Moin-moin, and a chilled beverage. Valid every weekday from 12pm - 3pm.</p>
              <button className="px-8 py-3 bg-white text-[#E31837] rounded-xl font-black text-lg hover:bg-[#FFC72C] hover:text-[#0f172a] transition-all">
                Claim Offer
              </button>
            </div>
            <div className="relative md:w-2/5 flex justify-center">
              <div className="relative w-64 h-64 rounded-full border-8 border-white/20 shadow-2xl overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDojz8N6gsJ0s1mFzTvtuO9cra9neockD50fFNP6_99Xv0IFvFjIiis-QsCDCDrCl0Wln1UdzVrK-yORGkF5YuqrQsOw8da5au0Ph9SO3OdcKvRvQiryGo858iNpThpTWRwA6UvEkJjK9oLGulOF_9OiWJgBWLSQgg8Si1EaKBL9m_mbZ9BQZBJINVuaxJGhiFn-N0XNNX5_AOkmwuEk2VSTaiuANJZs2WdLZUIdSmTwuJCa9dBlDpjizA2OMZsorR1F7QxcQVQ2DI"
                  alt="Combo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-[#f1f5f9] py-16">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6">Find Us in <span className="text-[#E31837]">Bodija</span></h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E31837]/10 p-3 rounded-xl text-[#E31837]">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Address</p>
                    <p className="text-[#475569]">Plot 4, UI–Secretariat Road,<br/>New Bodija, Ibadan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#E31837]/10 p-3 rounded-xl text-[#E31837]">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Working Hours</p>
                    <p className="text-[#475569]">Monday - Sunday: 08:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#E31837]/10 p-3 rounded-xl text-[#E31837]">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Phone</p>
                    <p className="text-[#475569]">+234 (0) 800-THE-PLACE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] bg-[#e2e8f0] rounded-3xl overflow-hidden relative border-4 border-white shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzBPwYKQzEMp1LQ68sUmuHRG1djQh4coa6rPZ6ObzvAGfCdnfC5FirDbCMkgDyaJ5woX2_lG-CTOYVGAMVVKQdrqAtmH8C6YCc7xplVNHayB8olnNBQM_f1Z93IVri0Vqvp8RPGiylCSk6zW8cUilxOo62Yy4iSUwz5fcWVOeL7FkdrAQBdOZNXAhMEOopmEyuOhkOoRaS-sBjsXcSGs-x_98aEQDdgQrQUWNzwoJWY2DPmwc3mLLAr6Uwq5Nmd1MnhTq8aa0QFcg')" }}
              ></div>
              <div className="absolute inset-0 bg-[#E31837]/10 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-[#E31837] text-white p-3 rounded-full shadow-2xl animate-bounce">
                  <span className="material-symbols-outlined text-4xl">location_on</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-4">Join the Foodie Club</h2>
            <p className="text-[#64748b] mb-8">Get exclusive discounts, new menu updates, and secret recipes straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                className="flex-1 px-6 py-4 rounded-xl border-2 border-[#f1f5f9] bg-white focus:border-[#E31837] focus:ring-0 outline-none transition-all" 
                placeholder="Your email address" 
                type="email"
              />
              <button className="px-8 py-4 bg-[#E31837] text-white rounded-xl font-bold hover:bg-[#b1122b] transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#E31837] p-1 rounded flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm">restaurant_menu</span>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-tight">The Place <span className="text-[#FFC72C]">Bodija</span></h2>
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">The ultimate destination for delicious grills and Nigerian local delicacies in the heart of Ibadan.</p>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#E31837] transition-colors">
                  <span className="material-symbols-outlined text-xl">social_leaderboard</span>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#E31837] transition-colors">
                  <span className="material-symbols-outlined text-xl">camera</span>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#E31837] transition-colors">
                  <span className="material-symbols-outlined text-xl">share</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4 text-[#94a3b8] text-sm">
                <li><Link href="#" className="hover:text-[#FFC72C] transition-colors">Order Online</Link></li>
                <li><Link href="#" className="hover:text-[#FFC72C] transition-colors">Full Menu</Link></li>
                <li><Link href="#" className="hover:text-[#FFC72C] transition-colors">Our Story</Link></li>
                <li><Link href="#" className="hover:text-[#FFC72C] transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-4 text-[#94a3b8] text-sm">
                <li><Link href="#" className="hover:text-[#FFC72C] transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-[#FFC72C] transition-colors">FAQs</Link></li>
                <li><Link href="#" className="hover:text-[#FFC72C] transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#FFC72C] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Download Our App</h3>
              <p className="text-[#94a3b8] text-sm mb-6">Order faster with our mobile app available on iOS and Android.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-xl cursor-pointer hover:bg-[#334155] transition-colors">
                  <span className="material-symbols-outlined">shop</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#64748b] leading-none">Get it on</p>
                    <p className="font-bold">Google Play</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-xl cursor-pointer hover:bg-[#334155] transition-colors">
                  <span className="material-symbols-outlined">ios</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#64748b] leading-none">Download on</p>
                    <p className="font-bold">App Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#1e293b] pt-8 text-center text-[#64748b] text-xs">
            <p>© 2024 The Place Restaurant Bodija. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}