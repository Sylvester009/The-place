// app/about/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#f8f6f6]/80 backdrop-blur-md border-b border-[#ec5b13]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ec5b13] text-3xl">restaurant</span>
              <h1 className="text-xl font-bold tracking-tight text-[#0f172a]">The Place <span className="text-[#ec5b13]">Bodija</span></h1>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Home</Link>
              <Link href="/about" className="text-sm font-semibold text-[#ec5b13] transition-colors">About Us</Link>
              <Link href="/menu" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Menu</Link>
              <Link href="#" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Locations</Link>
              <Link href="#" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-[#ec5b13]/10 transition-colors">
                <span className="material-symbols-outlined text-[#0f172a]">shopping_bag</span>
              </button>
              <button className="bg-[#ec5b13] text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-[#d14f0f] transition-all shadow-lg shadow-[#ec5b13]/20">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYvjCnD4ulFwQCBauTqiz1MpRAmlhi2_RHFUm-0hJdMRYC1KkapEEICUkRBcNAHoBtV85TaK1MbnEIZcMWPUhJ9P2zDMd2Tlq7lOguaVaNC_uHl9a0ZtKIKVO9TTgiWCJx9aJ2Qy0JFSynCFc9-3blD7HOgELakd9X05v9Ko4gNsGzSpy_ekxgxK4W_J2rRViU4CtHLdM5qat0MwJ9E1z8C-HPoYluWZw-Nr6Q5LZ5i3K0H49F05Ix1576auqOl05s3ttGTvxjHa8"
            alt="Modern upscale restaurant interior with warm lighting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-[#ec5b13] font-bold tracking-widest uppercase text-sm mb-4">Established in Ibadan</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">Authentic Flavors, <br/>Modern Vibes</h1>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">Discover the soul of Nigerian cuisine at The Place Bodija, where traditional recipes meet a contemporary dining experience.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block p-3 bg-[#ec5b13]/10 rounded-xl">
                <span className="material-symbols-outlined text-[#ec5b13] text-3xl">history_edu</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] leading-tight">Our Story: A Legacy of Taste</h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                Founded with a passion for Nigerian heritage, The Place Bodija has grown from a local favorite to a landmark in Ibadan. Our journey is rooted in bringing traditional recipes to the modern fast-food scene without losing the authentic soul of home-cooked meals.
              </p>
              <p className="text-lg text-[#475569] leading-relaxed">
                In the heart of Bodija, we've created a space where the vibrant energy of Ibadan meets the comforting aromas of Jollof rice, succulent grilled proteins, and local delicacies prepared with precision.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA28Av7G9w3xTN5DquStXY8hbun3DNyPch4XbMeNM0FLw4fmGj2M5Xo188cOMnbtsSscVH4_0yayu3IniHp4a5saVrmddWjluoQNdR3AvVCTW3K-3IzAT6PW7VUDmsRP0M8kIw0xB5PFi9fo6waIHqJEHb2xDa31EHYfzAxem9M1pNoAQQh5_Os4xxZzwwoQUZ9guDWctkQmSS4nwy1ayYov0Yx8nfpfallb94EvP4CT9VpRkRqz3--KoiHlYsxhNg88NkTN5wBB0Y"
                  alt="Vibrant Nigerian Jollof rice platter with plantain"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#ec5b13] p-8 rounded-2xl hidden lg:block">
                <p className="text-white font-black text-4xl">10+</p>
                <p className="text-white/80 font-bold uppercase text-xs tracking-widest">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[#ec5b13]/5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0f172a]">Our Mission & Values</h2>
            <div className="w-24 h-1.5 bg-[#ec5b13] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f8f6f6] p-8 rounded-2xl border border-[#ec5b13]/10 hover:border-[#ec5b13]/30 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[#ec5b13] text-4xl mb-4">verified</span>
              <h3 className="text-xl font-bold mb-3 text-[#0f172a]">Uncompromising Quality</h3>
              <p className="text-[#475569]">We source only the finest local ingredients, ensuring every meal meets our gold standard of freshness and hygiene.</p>
            </div>
            <div className="bg-[#f8f6f6] p-8 rounded-2xl border border-[#ec5b13]/10 hover:border-[#ec5b13]/30 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[#ec5b13] text-4xl mb-4">groups</span>
              <h3 className="text-xl font-bold mb-3 text-[#0f172a]">Community First</h3>
              <p className="text-[#475569]">Bodija is our home. We strive to create a space where memories are made and local culture is celebrated every day.</p>
            </div>
            <div className="bg-[#f8f6f6] p-8 rounded-2xl border border-[#ec5b13]/10 hover:border-[#ec5b13]/30 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[#ec5b13] text-4xl mb-4">eco</span>
              <h3 className="text-xl font-bold mb-3 text-[#0f172a]">Fresh Ingredients</h3>
              <p className="text-[#475569]">From farm to table, we prioritize seasonal produce to bring you the most authentic and nutritious flavors possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Spotlight */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6UxXuq1gdA4z8Q1UEXHGe65b_FklURz-c3Eersuw6j65KTLdohviA__qDXWtTf12vHl_dgFlfaqKFvcKUuu1xL0zYYoOkjgkxeFSMzNc4MPKTVA8Jza2Z4ZAu19811bs70pNygRjLZE_OPR_s7y9c02zDYSEc4inU3J1WyhNJhKPw1wgg-0m37Ou8hJzhHS48oyDNG8ySoRK7MgFGJrxtZdCyhja1PPtLTOiKTrLDlWw9_F_mPTDXf8qJZXma6W-TGw3leHCNw0"
                  alt="Professional chef preparing a gourmet meal"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
                  <p className="text-[#ec5b13] font-bold text-sm">Head Chef</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">Meet Our Culinary Visionary</h2>
              <h3 className="text-2xl font-bold text-[#ec5b13]">Chef Samuel Adeyemi</h3>
              <p className="text-lg text-[#475569]">
                With over 15 years of experience in both traditional and continental kitchens, Chef Samuel brings a unique flair to our menu. His philosophy is simple: "Respect the ingredient, honor the tradition."
              </p>
              <p className="text-lg text-[#475569]">
                Under his leadership, our kitchen at Bodija has become a laboratory of flavor, perfecting the balance of spices in our signature dishes.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-[#0f172a]">15+</span>
                  <span className="text-xs uppercase text-[#64748b]">Years Exp.</span>
                </div>
                <div className="w-px h-10 bg-[#ec5b13]/20"></div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-[#0f172a]">50+</span>
                  <span className="text-xs uppercase text-[#64748b]">Recipes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#0f172a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold">The Vibe</h2>
            <p className="text-slate-400">Take a peek inside our Bodija haven</p>
          </div>
          <button className="text-[#ec5b13] font-bold hover:underline flex items-center gap-2">
            View Full Gallery <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="h-64 rounded-xl overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuClSD_QgmQGfeoLfLW1Bu_ID0L8DPDm7XOVGyFE47kG3jplFHvgdm-C8LUrjMvo5fKSfPkBs21O0GM2XE9ADHhHnZ5aMcGj5rKops55hQDxZ2QdfWFfJh9c6zYX08EjwAeKwD_yhveI7fctTDHYmsUDccWwV9i_NI-Nt_4uuP27vou2wHLI2ZxMVExTii9WAfNzP90SbiA4ej6q-iR6HXmdbiMc38YfneK7Xe4LI1ZGB-3rIHXTSTtEx3kxHGgEssSXkBWq1f5-9dQ"
              alt="Cozy restaurant seating area"
              width={400}
              height={400}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="h-64 rounded-xl overflow-hidden mt-8">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjL3roSBM8NEHcQVoOxQdFYAtxDJA0HW8Jeh1gclpwCYrAoCE1OurZFxvYntlGAtx2yx_TZQrFhw9aD9KCRAe8NoXNZ1psF4QR1lkPYjZzZC4z0P4NJF_5oSI4YLw3lpfeZ4vu26xuJtwx1w1MVJEBgLVkAaLFuyDbH6p1PowoQSzzA6OnbLzcsflfRhJYazR8_LHvhVk5UUru4f2PrfgYFTYTR-k9muR5AUfXC3jN3W6YNUfHDUiJ9dNAimuzXkW2xm1MaZ_YUm8"
              alt="Gourmet dish presentation"
              width={400}
              height={400}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="h-64 rounded-xl overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu5WPy8tA_vMFbagNCYSgiKVasJp8sEvYMLkhNwl7aDU8jAIWrP5-Rt8I6bSeJP4ZHIqNbHkGGNZmHTYtJOCfy7jwe4-Eo04q-YnT_z1fviTmmPovvWW8LNlQtaacW-xIY96NkPwmKd8LOvSWl_9IZRGv7pkSksVOxBYQKp676uXluejfDqE3mmBmfc2aoGvpQo_G9xHmsh1hVqN9TzRYIVgYQ_k3HlKtPRpFLLyrxDVUiVbAQ4MK-icz2AVRrPrNZAU-_WB8uqJM"
              alt="Kitchen team working together"
              width={400}
              height={400}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="h-64 rounded-xl overflow-hidden mt-8">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtyTShwTrqUIQzTJVR_ilZUIm1JrgayqNxCgxTprSxAjySrODMVYbNDSqyqd9mH1DE_FzVhw2xDfTnC1wcZUx_TVNvJYTz6-Kpk7dP8cPBa_3ngcglwxrVxUcCLZDegGIU9YAug4YISgeAylvyycb3kkScENsg5HzOdZKbQTLfLloUYb-1Q5KpxBO1tAtWlbOVsdvWKCp8ZlrcfdjkRlgsch9pYP7OVdowibwLoebZJ8MOh0Rhml7rPHRh9CCB2owALQ4cBCpNqsY"
              alt="Cold drinks and appetizers"
              width={400}
              height={400}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#0f172a]">Loved by Bodija</h2>
            <p className="text-[#475569]">Don't just take our word for it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#f8f6f6] border border-[#ec5b13]/10 rounded-2xl relative shadow-sm">
              <span className="material-symbols-outlined text-[#ec5b13]/20 text-6xl absolute top-4 right-4">format_quote</span>
              <div className="flex text-[#ec5b13] mb-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <p className="text-[#475569] italic mb-6">"Best Jollof in Ibadan! The atmosphere at the Bodija branch is so welcoming, perfect for Sunday lunch with the family."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ec5b13]/20 flex items-center justify-center font-bold text-[#ec5b13]">BO</div>
                <div>
                  <p className="font-bold text-[#0f172a]">Bisi Olatunji</p>
                  <p className="text-xs text-[#64748b]">Local Resident</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-[#f8f6f6] border border-[#ec5b13]/10 rounded-2xl relative shadow-sm">
              <span className="material-symbols-outlined text-[#ec5b13]/20 text-6xl absolute top-4 right-4">format_quote</span>
              <div className="flex text-[#ec5b13] mb-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star_half</span>
              </div>
              <p className="text-[#475569] italic mb-6">"The service is incredibly fast and the food is always hot. It's my go-to spot during work lunch breaks. Consistently good!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ec5b13]/20 flex items-center justify-center font-bold text-[#ec5b13]">KA</div>
                <div>
                  <p className="font-bold text-[#0f172a]">Kelvin Akpan</p>
                  <p className="text-xs text-[#64748b]">Tech Professional</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-[#f8f6f6] border border-[#ec5b13]/10 rounded-2xl relative shadow-sm">
              <span className="material-symbols-outlined text-[#ec5b13]/20 text-6xl absolute top-4 right-4">format_quote</span>
              <div className="flex text-[#ec5b13] mb-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <p className="text-[#475569] italic mb-6">"Modern Nigerian dining at its best. The grilled chicken is a masterpiece. Bodija finally has a place that matches its vibe."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ec5b13]/20 flex items-center justify-center font-bold text-[#ec5b13]">SA</div>
                <div>
                  <p className="font-bold text-[#0f172a]">Sade Adebayo</p>
                  <p className="text-xs text-[#64748b]">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#ec5b13] pt-16 pb-8 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Ready to Experience <br/>The Best of Bodija?</h2>
              <p className="text-white/80 text-lg mb-8">Join us for a meal or order your favorites directly to your doorstep. We can't wait to serve you.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#ec5b13] px-8 py-3 rounded-xl font-bold hover:bg-[#f1f5f9] transition-colors shadow-xl">
                  Order Online Now
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
                  Find Our Location
                </button>
              </div>
            </div>
            <div className="bg-black/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-3xl">location_on</span>
                <div>
                  <p className="font-bold">Visit Us</p>
                  <p className="text-sm text-white/70">Awolowo Ave, Bodija Estate, Ibadan</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl">schedule</span>
                <div>
                  <p className="font-bold">Opening Hours</p>
                  <p className="text-sm text-white/70">Mon - Sun: 08:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">restaurant</span>
              <p className="text-sm font-bold">The Place Bodija © 2024</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white/70 transition-colors text-sm">Privacy Policy</Link>
              <Link href="#" className="hover:text-white/70 transition-colors text-sm">Terms of Service</Link>
              <Link href="#" className="hover:text-white/70 transition-colors text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}