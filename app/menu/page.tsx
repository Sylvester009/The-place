import Image from 'next/image';
import Link from 'next/link';

export default function MenuPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#e2e8f0] bg-white/80 backdrop-blur-md px-4 md:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-[#dc2626] font-bold text-xl">
              <span className="material-symbols-outlined text-3xl">restaurant</span>
              <span className="hidden md:block">The Place Bodija</span>
            </Link>
          </div>
          <div className="flex-1 max-w-md hidden md:block">
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#94a3b8]">
                <span className="material-symbols-outlined">search</span>
              </span>
              <input 
                className="w-full rounded-xl border-none bg-[#f1f5f9] py-2 pl-10 pr-4 focus:ring-2 focus:ring-[#dc2626]/50" 
                placeholder="Search for food..." 
                type="text"
              />
            </label>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-[#f1f5f9] relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute top-0 right-0 bg-[#facc15] text-[#0f172a] text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">3</span>
            </button>
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfSvI4yb9kcK5wB03FRZdy4N_U0Zmhe8o5auSZHDFgVEtWHoFv6b4JvcdXOV0gdQtNta_fM2Cf0ITArk2H-KxQClGHoyIO64SsZcyCfV65aqgGXEELqCj94t21Xg8xRRdEBMgTK4bPzhwyFNQQn2hfSZEfgAxcPJU1TIuxuAVETuuKrKx4PRaNZu31LVDpq-ML-hzcl_yplj1JjChd-XQl9C6K5IU1oNTYElnRHjYKyvlBapJZ__B4dYfyAXxWznf4oP8xJYIe76s"
                alt="User profile avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-8xl mx-auto w-full flex flex-1 overflow-hidden">
        {/* Sidebar Navigation (Desktop) */}
        <aside className="hidden lg:flex w-64 flex-col border-r border-[#e2e8f0] p-6 sticky top-[73px] h-[calc(100vh-73px)]">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#64748b] mb-4">Categories</h2>
          <nav className="space-y-1">
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#dc2626] text-white font-medium">
              <span className="material-symbols-outlined">rice_bowl</span> Rice Dishes
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f1f5f9] transition-colors">
              <span className="material-symbols-outlined">local_fire_department</span> Grills / Asun
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f1f5f9] transition-colors">
              <span className="material-symbols-outlined">soup_kitchen</span> Soups
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f1f5f9] transition-colors">
              <span className="material-symbols-outlined">bakery_dining</span> Small Chops
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f1f5f9] transition-colors">
              <span className="material-symbols-outlined">egg_alt</span> Proteins
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f1f5f9] transition-colors">
              <span className="material-symbols-outlined">flatware</span> Shawarma
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f1f5f9] transition-colors">
              <span className="material-symbols-outlined">local_bar</span> Drinks
            </Link>
          </nav>
          <div className="mt-auto p-4 bg-[#facc15]/10 rounded-2xl border border-[#facc15]/20">
            <p className="text-xs font-bold text-[#dc2626] uppercase mb-1">Promo</p>
            <p className="text-sm font-semibold">Free delivery on orders above ₦15,000</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* Category Tabs (Mobile) */}
          <div className="lg:hidden flex overflow-x-auto p-4 gap-2 no-scrollbar bg-white sticky top-[73px] z-40 border-b border-[#e2e8f0]">
            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-[#dc2626] text-white text-sm font-medium">Rice Dishes</button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-[#f1f5f9] text-sm font-medium">Grills</button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-[#f1f5f9] text-sm font-medium">Soups</button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-[#f1f5f9] text-sm font-medium">Small Chops</button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-[#f1f5f9] text-sm font-medium">Drinks</button>
          </div>

          <div className="p-4 md:p-8 flex-1">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-[#0f172a]">Rice Dishes</h1>
                <p className="text-[#64748b]">Authentic Nigerian rice specialties</p>
              </div>
              <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-[#e2e8f0]">
                <button className="p-1.5 rounded bg-[#f1f5f9]"><span className="material-symbols-outlined">grid_view</span></button>
                <button className="p-1.5 rounded hover:bg-[#f1f5f9]"><span className="material-symbols-outlined">list</span></button>
              </div>
            </div>

            {/* Food Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Food Item 1 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e2e8f0]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi6Oa0AGdHL0f1COX-jj8qskT-1F2eQGsnJZcTHEvj1aXEOfcstgHntmb8DXr_AVjTpamFZZMzugKZ7V1MBHS2PAunt8HBYa2sMCPuGf8OkhjzJV8IjCIkZ1fBcEcNX0eGDaVQ9jBCPe0mMPx-uOpGhc11_R3Czg9nVTbDBQpeqc7YpuBMf9MINFgInhBW9POAzqq1gbzuzfv_BO29USlWk9pz2sJ5WrM2qcP2thCEscYse8uC5da211Xb_GCHjJB9wim0fU3_bb4"
                    alt="Plate of special jollof rice with chicken"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-[#facc15] text-[#0f172a] font-bold px-3 py-1 rounded-full text-xs shadow-sm">Popular</div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-[#0f172a]">Special Jollof Rice</h3>
                    <span className="text-[#dc2626] font-bold">₦3,500</span>
                  </div>
                  <p className="text-sm text-[#64748b] mb-6 line-clamp-2">Smoky party jollof served with fried plantain and your choice of protein side.</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 bg-[#f1f5f9] rounded-xl p-1">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="text-sm font-bold w-6 text-center text-[#0f172a]">1</span>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
                      <span className="material-symbols-outlined text-sm">shopping_bag</span> Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Food Item 2 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e2e8f0]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNW-PuRgAHuvANXuya4t58MTzsWTNk5XR_Iim-P3OXoIa_1k3S_e1OOGBusilsqqx3bHycprS-QONK479jJTfNDKOdDptiZJGQD2HGsmLMt-3QBgra29FKJTryWEPExfeAwtOoPuiDXnPEg7z1bJzcgbGFdOd3_Zlnx_5NxXEIeFlMhjZUU39mmIvu3V2lZ59uosEPk-x3fvsJGD9bIwQrwwBfvyQPotNtZYow753pQfNlMeA-44zCL3ZX2hrpgSDgKoAKkLWmebg"
                    alt="Fried rice with shrimp and vegetables"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-[#0f172a]">Special Fried Rice</h3>
                    <span className="text-[#dc2626] font-bold">₦3,800</span>
                  </div>
                  <p className="text-sm text-[#64748b] mb-6 line-clamp-2">Flavorful fried rice with mixed veggies, shrimp, and aromatic spices.</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 bg-[#f1f5f9] rounded-xl p-1">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="text-sm font-bold w-6 text-center text-[#0f172a]">1</span>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
                      <span className="material-symbols-outlined text-sm">shopping_bag</span> Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Food Item 3 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e2e8f0]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2_rKMcMmWHeGJdgQjV89Gh-cdYm5OkZXMnbKlMZvKIq0qCtkB_CHEb1CHvamj-7nvfnp1UcwbveJsexB3-9tDVrJUZdk6FaSzD1rQf_gRWFxMV8Xh8Et1UDtlxxr3BNL3gGtFOTWZ0Jm4--wOw0A1z2nNlOqzt_rlB_tJ6_wt_ynb44rYK_noB57nTflhd25McQ6vOKzZNmDebGPXEHMFX3OcpBMEuQ8GbYVQZgKeSpM34kz_-wEQBXc6QQitmgR70xr7MMBX-B8"
                    alt="Plate of white rice and assorted meat stew"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-[#0f172a]">Village Rice</h3>
                    <span className="text-[#dc2626] font-bold">₦4,200</span>
                  </div>
                  <p className="text-sm text-[#64748b] mb-6 line-clamp-2">Traditional native rice cooked with palm oil, locust beans, and dried fish.</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 bg-[#f1f5f9] rounded-xl p-1">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="text-sm font-bold w-6 text-center text-[#0f172a]">1</span>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
                      <span className="material-symbols-outlined text-sm">shopping_bag</span> Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Food Item 4 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e2e8f0]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZmeo_UhRvZT82usTLkoBqXvnBQ_H2NJL1szEkQEy7L6RjGyRrJ1BO3H6693iFEd6hRZQwZdZFub-zBBzV0a8DRSRFzJsqhnXGVXq2DLTQyyds2sr6wN00_jdQhxdBD0sLdZMx9bQEqtwr0IR3jZ1si9LHzNDsKWsaZprR8RT5sjqqTldBQ_WrqZVIp8j0iLGPnJdwkLFVcCUarMuss20sLmFw8iVrhNFmwOKFaG5FwDUO0nHMjvV-sZFY6S8ynJADXDXCQpWlTvY"
                    alt="Ofada rice with designer stew"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-[#0f172a]">Ofada Special</h3>
                    <span className="text-[#dc2626] font-bold">₦5,500</span>
                  </div>
                  <p className="text-sm text-[#64748b] mb-6 line-clamp-2">Aromatic local unpolished rice served with spicy Ayamase (Designer) stew.</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 bg-[#f1f5f9] rounded-xl p-1">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="text-sm font-bold w-6 text-center text-[#0f172a]">1</span>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
                      <span className="material-symbols-outlined text-sm">shopping_bag</span> Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Sticky Cart Summary (Desktop Only) */}
        <aside className="hidden xl:flex w-80 flex-col border-l border-[#e2e8f0] p-6 sticky top-[73px] h-[calc(100vh-73px)]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#0f172a]">Your Cart</h2>
            <span className="text-xs bg-[#f1f5f9] px-2 py-1 rounded text-[#64748b]">3 Items</span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {/* Cart Item 1 */}
            <div className="flex gap-3">
              <div className="relative h-14 w-14 rounded-lg overflow-hidden shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB58Y2FtQ8a5GBZec79s7UkKcTi3Upvlmu2aq_GqSxvTDbyxu6_lDKB8HYYm1XbaZUeI2IeprSymTV71zpseL4LjbRp8cksLPegQMWwpSF_B98EOflgMwgwsZxFxYSPTsf7Ai49clDO_DEROTauThDQYy29vduTjtB0lS92J1cXKC-zqheHw9A3uKoGnwjjsVjNYPHBNZaMutk2Nj8RoL7oEg8D2k8CnxhhrxdWQuUyjLWIAFHEd3VpHTL4Y6elcZPjxl34NVikdwI"
                  alt="Small thumbnail of jollof rice"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#0f172a] truncate">Special Jollof Rice</p>
                <p className="text-xs text-[#64748b]">₦3,500 x 2</p>
              </div>
              <p className="text-sm font-bold text-[#0f172a]">₦7,000</p>
            </div>

            {/* Cart Item 2 */}
            <div className="flex gap-3">
              <div className="relative h-14 w-14 rounded-lg overflow-hidden shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLO66V0PcFtkK1aS8L4XAdL7hhHx-GeAHj0AU4jqJr8cPji8IaptFN4j2lJOutJ3oPJXkQ5bxJI_TJlz4ZaHKU4bGhi_F_gIS6euLGMEM5qNb1XHbfXuxnZ9nyBk9DqCzDkjSQYeUfZ4jEP38lVnUo8BaadYB5KseScKqCKvLzzQidBfq5uw9b4IV25QlIQ7noTkS2uaSXF2fOFnxKhP44JXSO4gXky1X1Plzoc6wx5jUF_NNb6FU17Pou4dQ_8oWWa1btt5H5Bzk"
                  alt="Small thumbnail of cold coca-cola"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#0f172a] truncate">Coke 50cl</p>
                <p className="text-xs text-[#64748b]">₦500 x 1</p>
              </div>
              <p className="text-sm font-bold text-[#0f172a]">₦500</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 pt-6 border-t border-[#e2e8f0]">
            <div className="flex justify-between text-sm">
              <span className="text-[#64748b]">Subtotal</span>
              <span className="font-bold text-[#0f172a]">₦7,500</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#64748b]">Delivery</span>
              <span className="font-bold text-[#0f172a]">₦1,200</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-3 border-t border-dashed border-[#e2e8f0]">
              <span className="text-[#0f172a]">Total</span>
              <span className="text-[#dc2626]">₦8,700</span>
            </div>
            <button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#dc2626]/20 transition-all mt-4">
              Checkout Now <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </aside>
      </div>

      {/* Floating Mobile Cart Button */}
      <div className="xl:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-50">
        <button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-between shadow-2xl shadow-[#dc2626]/40">
          <div className="flex items-center gap-3">
            <span className="bg-[#facc15] text-[#0f172a] w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
            <span>View Cart</span>
          </div>
          <span className="text-lg">₦8,700</span>
        </button>
      </div>
    </div>
  );
}