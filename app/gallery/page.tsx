// app/gallery/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GalleryPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#ec5b13]/10 bg-[#f8f6f6]/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-[#ec5b13]">
              <span className="material-symbols-outlined text-3xl">restaurant</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#0f172a]">The Place <span className="text-[#ec5b13]">Bodija</span></h1>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/menu" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Menu</Link>
            <Link href="/gallery" className="text-sm font-semibold text-[#ec5b13]">Gallery</Link>
            <Link href="#" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Events</Link>
            <Link href="/book-table" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Reservations</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="rounded-xl bg-[#ec5b13] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-[#ec5b13]/20 hover:bg-[#d14f0f] transition-all">
              Book Table
            </button>
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#ec5b13]/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5gagiZ1m104_z9ozqrFJ65tI_-A_R-s3BrRM6LAhkE3MqVPuL9q7pYXUJDv4QcjzL_IYVb1ChC0RSJwtjKtexEqZtBi9nsjVrkmI4HNKqJ-ioFzBFRKBX0quoS5nNRTKAGQTACsF_Y1t4ZS2BvhN4MjqbbsA1jS0rMUbnWMnrvTgvVw8-svq0TI5xyKKuI9f263NRKAYb-xeUelb2izCYlS22k4kzZmL9qK9AghoZTiyUYy4VheEV9R7ajXDlRCfSCqFq1F4VOBo"
                alt="User profile avatar icon"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[450px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-[#221610]/90 via-[#221610]/40 to-transparent z-10"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTrlXlSz5B37ITfiUyKdKaO17pAiNxLYOfr8SQmv5sN08GvLM3LHR63_PLJH0vq0LXY_4k3vvnLE8bwJrnqtx-84n3vXwbwYVUl1uRyvaD-abMdATgH0fCplAknToev11Ts7bcmsbX-WZQ5OrdfU9EpBAu7oxkBM1i6raG15jee6MmYIWNWIN9aJzZPmEgBixS1s7pbuhj27f-0SUcF912P1ba7x-l8ep0hjoHXfnD1mrSwIasZaUi4Kp5MDiJVzRqQ7lwR-CfBpY"
            alt="Interior of a modern luxury restaurant with warm lighting"
            fill
            className="object-cover"
          />
          <div className="container relative z-20 mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="text-5xl font-extrabold text-white md:text-7xl mb-4 tracking-tight">Our Gallery</h1>
            <p className="max-w-2xl text-lg text-slate-200 md:text-xl">
              Capturing the essence of authentic Nigerian dining and the vibrant, soulful spirit of Bodija's finest culinary destination.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-[#f8f6f6]">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button className="rounded-full bg-[#ec5b13] px-6 py-2 text-sm font-bold text-white">All Photos</button>
              <button className="rounded-full bg-[#ec5b13]/10 px-6 py-2 text-sm font-semibold text-[#334155] hover:bg-[#ec5b13]/20 transition-all">Food</button>
              <button className="rounded-full bg-[#ec5b13]/10 px-6 py-2 text-sm font-semibold text-[#334155] hover:bg-[#ec5b13]/20 transition-all">Interior</button>
              <button className="rounded-full bg-[#ec5b13]/10 px-6 py-2 text-sm font-semibold text-[#334155] hover:bg-[#ec5b13]/20 transition-all">Events</button>
              <button className="rounded-full bg-[#ec5b13]/10 px-6 py-2 text-sm font-semibold text-[#334155] hover:bg-[#ec5b13]/20 transition-all">Staff</button>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20 bg-[#f8f6f6]">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Jollof */}
              <div className="group relative overflow-hidden rounded-xl bg-[#e2e8f0] h-[400px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF7OQuvJTADk2ScZoZnS7yGvmJ9c6DXu68CFMLmXM5vHUM1JvvORGoCcZqe0whrtVJnNNRwZWaYWAqD-BEiVA-_BmuFCKTXLbDE3z3O5jf94SKy4nPIR4yJVNNPutP0Akgl0kfYUQGwPCk2bjZ-_Ub5ylcbgAUMgv466iNgkhR0Enjjzb37M64r6IiQxg18t8OgbhFnZcg_JpmcT9IA7xs3qjykghQ_tdOoSAz7FE9HKJBhO_qWzfP-4IrOOylKEmtdO6GJpmr3hc"
                  alt="Authentic Nigerian smoky jollof rice with fried plantain"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-white text-4xl mb-2">fullscreen</span>
                  <h3 className="text-xl font-bold text-white">Signature Smoky Jollof</h3>
                  <p className="text-slate-300 text-sm">Our most loved authentic recipe</p>
                </div>
              </div>

              {/* Interior */}
              <div className="group relative overflow-hidden rounded-xl bg-[#e2e8f0] h-[400px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvkGRJgGnkYeLi9-M2KVaczj8n2RACAvmg6TfXysaYRDz2c6FigSNj6ruvbyZTyzlTY_D-1BhoVVZJI088x3tm0cP5ysdY75x-gngv5EvwXG5hXZn93lVQmYy96nUuQyEfjKmPO-QW-UTuMwhes01EKtSgjVQ0plGqeTwRN-uwjVGSeYNftftvP0vL7fpCHK3CE71mJu_cxOj-lt8WcB5RfE5NC-VjAYkYMJeJWnmVBesVztB39mz28gbyeKPPOt8IiAPICaq6nww"
                  alt="Vibrant restaurant bar area with amber lighting"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-white text-4xl mb-2">visibility</span>
                  <h3 className="text-xl font-bold text-white">Vibrant Night Vibes</h3>
                  <p className="text-slate-300 text-sm">Bodija's favorite evening spot</p>
                </div>
              </div>

              {/* Asun */}
              <div className="group relative overflow-hidden rounded-xl bg-[#e2e8f0] h-[400px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4dpBM7rwLLUO8dFi5_Ev1GINeqQ4yP_0ep6ghnKcazK320PHXNo8vOh6kiHLSU3h63dob82cIgKuKx9noLafKi4O7Ynk-SBE_0c_RDIYXPKgEEWGlCaxWo2M_I8acy0fusMNnAdxgeBOr0xct3e4XRyZzgBDyBgPxEj6UbhAHpH5ikTun-1uoptjQqmFm_Xnwcz-JBb1orUOlKWMoFTW_nsd2Bg3uogiTXcdpTWTW6F-Jazv5dm3GnZ7DMOlkbFlm-QRR43v7wCI"
                  alt="Spicy grilled peppered goat meat known as Asun"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-white text-4xl mb-2">zoom_in</span>
                  <h3 className="text-xl font-bold text-white">Spicy Peppered Asun</h3>
                  <p className="text-slate-300 text-sm">Traditional grilled goat meat</p>
                </div>
              </div>

              {/* Customers */}
              <div className="group relative overflow-hidden rounded-xl bg-[#e2e8f0] h-[400px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfQGtqM_RCN4mbodH5Cv5pF3cwzLwpX76B3m--X__8DkCglsrHfsntJ05bJ7RPl6vAujoXYs7CBgep9TVBvByNN6TjYuL5rg9FYVNWO_Z-PlmLv1CPrUwjC6nLDX_n8qqbluQq2XX4ZNHMmKq_f150dT2Y016GyXJHihE4glxLtfZVJtZPT_k8S_fnwaSIOjqVGCvrPSk0RgwJl9V6WFKoKHTVcRV7TSxjiaZ9No6UlIl4iz0Y9IcQAEXq8bakRTYlfmwXZxcVarE"
                  alt="Group of friends laughing and dining together at a table"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-white text-4xl mb-2">favorite</span>
                  <h3 className="text-xl font-bold text-white">The Joy of Dining</h3>
                  <p className="text-slate-300 text-sm">Memorable moments with loved ones</p>
                </div>
              </div>

              {/* Chef */}
              <div className="group relative overflow-hidden rounded-xl bg-[#e2e8f0] h-[400px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvpY439Ed_MVyOIn4raXKGnaW16ovGpJZGMMbIfq9Rwv56irJT5OnwKp0g_S5UBRRX_nbFmhbF3CgPfPJR8u6kF_JuLSZ9KsZpi08GocDsTFJ0-rW2pDVjZ48kS7NeJbK8HiisY0ZWn0vFNI_n6rsY8XoJEdNSWYwfmDW-CDThrzEoucospgel2iwIY537L3j3nfu2BrAjkmHvDV3c1fC2rxytyuM0f-cOZIbKdgSi1xB1Fgzr-5jJgTqVYpMKpaafmOth2sKgbP0"
                  alt="Professional chef preparing a gourmet meal in a kitchen"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-white text-4xl mb-2">auto_fix_high</span>
                  <h3 className="text-xl font-bold text-white">Culinary Artistry</h3>
                  <p className="text-slate-300 text-sm">Our masters behind the flavors</p>
                </div>
              </div>

              {/* Grilled Fish */}
              <div className="group relative overflow-hidden rounded-xl bg-[#e2e8f0] h-[400px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd2oGcBdFiE0wRS3dooMPuInzX0FShOeD8VegfKU7GrahWo7IG4gh-Jgr3pk8QZawr3Gw4TWHPM4LUxGQybG_7kE66LViAJNp8HIhAmLe6j3SmpDUussjnZuvF1L1iualvVsik8RiMzYbh9yBtfZJSlWhZDW5rmgVy1Z_f1_WkXi2zP_CYK-gVeQ3m_ROLK35S0tpALZXU8RQaci7dqrJl_SxVImTqPp2lmpYzHfy9zfBmler1VCoRdWmDBQhZPPapzVRDiAA4QGk"
                  alt="Large whole grilled croaker fish with vegetables"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-white text-4xl mb-2">fullscreen</span>
                  <h3 className="text-xl font-bold text-white">Grilled Croaker</h3>
                  <p className="text-slate-300 text-sm">Freshly caught and spiced to perfection</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <button className="rounded-xl border-2 border-[#ec5b13] px-8 py-3 text-sm font-bold text-[#ec5b13] hover:bg-[#ec5b13] hover:text-white transition-all">
                Load More Photos
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ec5b13]/5">
          <div className="container mx-auto px-4 lg:px-20 text-center">
            <h2 className="text-4xl font-extrabold mb-6 text-[#0f172a]">Ready to experience it yourself?</h2>
            <p className="text-lg text-[#475569] mb-10 max-w-xl mx-auto">
              Join us at The Place Bodija for an unforgettable journey through Nigeria's finest flavors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto rounded-xl bg-[#ec5b13] px-10 py-4 text-lg font-bold text-white shadow-xl shadow-[#ec5b13]/30 hover:scale-105 transition-transform">
                Book a Table Now
              </button>
              <button className="w-full sm:w-auto rounded-xl bg-white px-10 py-4 text-lg font-bold border border-[#e2e8f0] hover:bg-[#f8fafc] transition-all text-[#0f172a]">
                View Menu
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f172a] py-16 text-white">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-[#ec5b13]">restaurant</span>
                <h2 className="text-xl font-bold">The Place <span className="text-[#ec5b13]">Bodija</span></h2>
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                The heart of Nigerian hospitality in Ibadan. Serving authentic flavors with a modern twist since 2010.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1e293b] hover:bg-[#ec5b13] transition-colors">
                  <span className="material-symbols-outlined text-xl">share</span>
                </Link>
                <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1e293b] hover:bg-[#ec5b13] transition-colors">
                  <span className="material-symbols-outlined text-xl">thumb_up</span>
                </Link>
                <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1e293b] hover:bg-[#ec5b13] transition-colors">
                  <span className="material-symbols-outlined text-xl">camera_alt</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
              <ul className="space-y-4 text-sm text-[#94a3b8]">
                <li><Link href="/" className="hover:text-[#ec5b13] transition-colors">Home</Link></li>
                <li><Link href="/gallery" className="hover:text-[#ec5b13] transition-colors text-[#ec5b13]">Gallery</Link></li>
                <li><Link href="/menu" className="hover:text-[#ec5b13] transition-colors">Our Menu</Link></li>
                <li><Link href="#" className="hover:text-[#ec5b13] transition-colors">Special Events</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-bold text-white">Contact Us</h3>
              <ul className="space-y-4 text-sm text-[#94a3b8]">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#ec5b13]">location_on</span>
                  15, Bodija Way, Ibadan, Nigeria
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#ec5b13]">call</span>
                  +234 800 THE PLACE
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#ec5b13]">mail</span>
                  hello@theplacebodija.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-bold text-white">Opening Hours</h3>
              <ul className="space-y-4 text-sm text-[#94a3b8]">
                <li className="flex justify-between border-b border-[#1e293b] pb-2">
                  <span>Mon - Thu</span>
                  <span className="text-white">10am - 11pm</span>
                </li>
                <li className="flex justify-between border-b border-[#1e293b] pb-2">
                  <span>Fri - Sat</span>
                  <span className="text-white">10am - 2am</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">12pm - 11pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-[#1e293b] pt-8 text-center text-xs text-[#64748b]">
            <p>© 2024 The Place Bodija. All rights reserved. Designed with soul in Ibadan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}