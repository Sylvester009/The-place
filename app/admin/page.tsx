// app/admin/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-white border-r border-[#e2e8f0] flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-[#ec5b13] p-2 rounded-lg">
            <span className="material-symbols-outlined text-white">restaurant</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-[#0f172a]">The Place</h1>
            <p className="text-xs text-[#64748b] font-medium">Bodija Branch Admin</p>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-[#ec5b13]/10 text-[#ec5b13] rounded-xl font-semibold">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard Overview</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-[#475569] hover:bg-[#f8fafc] rounded-xl transition-colors">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span>Orders Management</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-[#475569] hover:bg-[#f8fafc] rounded-xl transition-colors">
            <span className="material-symbols-outlined">menu_book</span>
            <span>Menu Management</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-[#475569] hover:bg-[#f8fafc] rounded-xl transition-colors">
            <span className="material-symbols-outlined">calendar_today</span>
            <span>Reservations</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-[#475569] hover:bg-[#f8fafc] rounded-xl transition-colors">
            <span className="material-symbols-outlined">group</span>
            <span>Customers</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-[#475569] hover:bg-[#f8fafc] rounded-xl transition-colors">
            <span className="material-symbols-outlined">bar_chart</span>
            <span>Analytics</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-[#e2e8f0]">
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-[#475569] hover:bg-[#f8fafc] rounded-xl transition-colors">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </Link>
          <div className="mt-4 flex items-center gap-3 px-4 py-2 bg-[#f1f5f9] rounded-xl">
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcpq8KXDouKNUwQLRXUb21bCsXg6l432XJ8phYbVc0ei_GS3MjCKcgD1IznR2bmT4Yw5uYiAHBh0mQGMgBagZ7LbjGRfsasYuLZKscMQkpzGOQPJRtlbz7ztDuky9iZaMLllxTk0tFyJ3_XNoFhao55aI0_vU0muuvX4QI0WzJmj3Pt189e4TxNLQc4HryA93jkyGwUuwGvF_uaFfDGqFogtppSrQ40z88SQajwfFMV9iXyqetr-dRFFVChnjc2k3-_wd2nIP_Qhg"
                alt="Profile picture of a male restaurant administrator"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold truncate text-[#0f172a]">Adekunle Smith</p>
              <p className="text-xs text-[#64748b] truncate">Manager</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#f8f6f6]">
        {/* Top Bar */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-[#e2e8f0] px-8 py-4 flex items-center justify-between">
          <div className="relative w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]">search</span>
            <input 
              className="w-full pl-10 pr-4 py-2 bg-[#f1f5f9] border-none rounded-xl focus:ring-2 focus:ring-[#ec5b13]/50 text-sm text-[#0f172a]" 
              placeholder="Search orders, customers, or menu..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[#475569] hover:bg-[#f1f5f9] rounded-full transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 h-2 w-2 bg-[#ec5b13] rounded-full ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-px bg-[#e2e8f0] mx-2"></div>
            <button className="flex items-center gap-2 bg-[#ec5b13] text-white px-4 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>New Order</span>
            </button>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Summary Cards */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black tracking-tight text-[#0f172a]">Dashboard Overview</h2>
              <p className="text-sm text-[#64748b]">Last updated: Today, 12:45 PM</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f1f5f9]">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#ec5b13]/10 p-2 rounded-lg text-[#ec5b13]">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+12.5%</span>
                </div>
                <p className="text-[#64748b] text-sm font-medium">Total Revenue</p>
                <p className="text-2xl font-black mt-1 text-[#0f172a]">₦2,450,000</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f1f5f9]">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#ec5b13]/10 p-2 rounded-lg text-[#ec5b13]">
                    <span className="material-symbols-outlined">quick_reorder</span>
                  </div>
                  <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+5.0%</span>
                </div>
                <p className="text-[#64748b] text-sm font-medium">Active Orders</p>
                <p className="text-2xl font-black mt-1 text-[#0f172a]">42</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f1f5f9]">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#ec5b13]/10 p-2 rounded-lg text-[#ec5b13]">
                    <span className="material-symbols-outlined">event_seat</span>
                  </div>
                  <span className="text-xs font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded-full">-2.1%</span>
                </div>
                <p className="text-[#64748b] text-sm font-medium">Total Reservations</p>
                <p className="text-2xl font-black mt-1 text-[#0f172a]">15</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f1f5f9]">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#ec5b13]/10 p-2 rounded-lg text-[#ec5b13]">
                    <span className="material-symbols-outlined">person_add</span>
                  </div>
                  <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+18.4%</span>
                </div>
                <p className="text-[#64748b] text-sm font-medium">New Customers</p>
                <p className="text-2xl font-black mt-1 text-[#0f172a]">128</p>
              </div>
            </div>
          </section>

          {/* Recent Orders Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-[#f1f5f9] overflow-hidden">
            <div className="px-6 py-5 border-b border-[#f1f5f9] flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#0f172a]">Recent Orders</h3>
              <button className="text-[#ec5b13] text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#f8fafc] text-[#64748b] text-xs uppercase font-bold">
                  <tr>
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Items</th>
                    <th className="px-6 py-4">Total</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f1f5f9]">
                  <tr>
                    <td className="px-6 py-4 font-medium text-sm text-[#0f172a]">#PB-9842</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                          <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv40sPanuDG87o1vkoqNtpONNKyHHs-1GXO3LpygsDcKBvr4D1y6mLGsyL4qwVWByH6DkeA7kETnYUo2YbJ4W0yN4Ld-ZDWeO65GtHMwaw_az_PUBGN4LvNrypeFK46rM4xabQxtkhQFWcqdCWUsU9YbVmfb3OCI0loP2hMY2YmLfqs4WlpiN7pVxUfZtPmJl3DUYdU1xqWN_HZO4TwVsoom8j-v3g5JVo5OotJLnL7miM88YGdBYFearxJ_foKovz9w-CQh2oF-c"
                            alt="Female customer profile picture"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm text-[#0f172a]">Chidinma Oke</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#475569]">Jollof Rice (L), Grilled Chicken (2)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#0f172a]">₦8,500</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700">Preparing</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-1 hover:bg-[#f1f5f9] rounded text-[#94a3b8]">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-sm text-[#0f172a]">#PB-9841</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                          <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1QpEFFD_4c5CbwZg0LXlsiBZeYqXsgh44oNQ8GWbJ2hbtxc7P2xiCPGuKUKjlIiUF9uKG0dEPnSg-6hTtrz43jJCBB7gHqRVhYYgh124HGX_RZ-Ix2EofSUfoHB1BYDfknRt9lM76hQR8w72vVnzTK6QC4dCs0KAdFUTYUsG_EpCTkNJ9_GInpsY7RjPy0pIDKnQHdR36wvpcf_BsyXGiWDJiGiheElGEy-x1cNgi5rWyVAfg2uYFMfBlkn-Ra2RGkJDCim7_sMg"
                            alt="Male customer profile picture"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm text-[#0f172a]">Tunde Bakare</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#475569]">Asun (Reg), Yam Fries</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#0f172a]">₦4,200</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700">Out for Delivery</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-1 hover:bg-[#f1f5f9] rounded text-[#94a3b8]">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-sm text-[#0f172a]">#PB-9840</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                          <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuADa-rqAVZ6c3HKAwP-EubAj0LJE9l9ksTi-THLTbgCxU4242xOLWBghvgG0WqU82rCuYixK9QHzbFqatea9usF0AdO3hh-2FZSdJfmsVRQrDJFQhWZGAqps_gRyVGERMZ3vPSKXNbq3AUHDfh8aheNkXZHtcc5_AtO3JTd9CfmOhIR9F1s7L3vD_atybxg3oj-VCcUmQ3CxzmYNTc9c4YMongsvotWNL3HM434x2IJmM0vQdPTFO5DHh1mbs3wIdcLalRbQLni_uY"
                            alt="Female customer profile picture"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm text-[#0f172a]">Funke Akindele</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#475569]">Platter for 2, Soft Drinks (2)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#0f172a]">₦15,000</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">Completed</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-1 hover:bg-[#f1f5f9] rounded text-[#94a3b8]">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Menu Management Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-[#0f172a]">Menu Management</h2>
                <p className="text-[#64748b] text-sm">Manage your restaurant items and categories</p>
              </div>
              <button className="flex items-center gap-2 bg-[#ec5b13] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-[#ec5b13]/30 hover:shadow-[#ec5b13]/40 hover:-translate-y-0.5">
                <span className="material-symbols-outlined">add_circle</span>
                <span>Add New Item</span>
              </button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
              <button className="px-6 py-2 bg-[#ec5b13] text-white rounded-full font-bold whitespace-nowrap">All Items</button>
              <button className="px-6 py-2 bg-white text-[#475569] rounded-full font-bold border border-[#e2e8f0] whitespace-nowrap hover:bg-[#f8fafc]">Rice Dishes</button>
              <button className="px-6 py-2 bg-white text-[#475569] rounded-full font-bold border border-[#e2e8f0] whitespace-nowrap hover:bg-[#f8fafc]">Grills & BBQ</button>
              <button className="px-6 py-2 bg-white text-[#475569] rounded-full font-bold border border-[#e2e8f0] whitespace-nowrap hover:bg-[#f8fafc]">Soups & Swallows</button>
              <button className="px-6 py-2 bg-white text-[#475569] rounded-full font-bold border border-[#e2e8f0] whitespace-nowrap hover:bg-[#f8fafc]">Drinks</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Menu Item Card 1 */}
              <div className="bg-white rounded-2xl border border-[#f1f5f9] overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuty1OoPfBBLO6sloFI94oyGb75428teCo3Kn2x0bMJ2sVDVST8wJi_GJLL3g-Np1NhgebF--5jR9b-K9Bw4lFyXdmVg31BccyU4OBDWCC20FEpcTCxxf6rZFPxPgeiPQOhM_KoQUJD7AKa3Fq9beWaIQBgDQ3k117_ThKCDbM_fh8sigxh1k_sdqhxIDPmGm8zax_fx21ZlFjLQsQGyt3721odXipac2ImFpLYf5_ergXEIEOgmQKvCxjNb6vTjecQEL-SKr5zzg"
                    alt="Delicious plate of Nigerian Jollof rice with chicken"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-[#ec5b13]">₦2,500</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-[#0f172a]">Special Jollof Rice</h4>
                    <span className="text-[10px] uppercase font-black text-[#94a3b8] bg-[#f1f5f9] px-2 py-0.5 rounded">Rice Dishes</span>
                  </div>
                  <p className="text-[#475569] text-sm line-clamp-2 mb-6">Authentic smoky Nigerian Jollof served with fried plantain and your choice of protein.</p>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#f1f5f9] text-[#334155] rounded-xl text-sm font-bold hover:bg-[#e2e8f0] transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                      Edit
                    </button>
                    <button className="p-2 text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Menu Item Card 2 */}
              <div className="bg-white rounded-2xl border border-[#f1f5f9] overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtQ1uyQZndm3AAJpZST2Q_QKDeGr6d068wq-8kASmyAIQtS_ixKSZLkR--MmblbHIY8ucYo33SvCQKKjUyjnSNDkEKFqhOjt6z5DCZJV-qLbLx_vMV8o2WTYadMT50OZlcC7qSWKNENVTXU3lt8FfHy7wrqab7K_ChK14IzIb9Qo7MUu7ACNHyQNUgXzJQW5HJBf2zNZoScX_q4i_TxKBpNaRoxSWHMzDQdlLZZc51kRvALGBfC_tGZ-y8rdrbD6jv2qtu4FMOw4s"
                    alt="Plate of grilled chicken with peppers"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-[#ec5b13]">₦4,200</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-[#0f172a]">Quarter Grilled Chicken</h4>
                    <span className="text-[10px] uppercase font-black text-[#94a3b8] bg-[#f1f5f9] px-2 py-0.5 rounded">Grills</span>
                  </div>
                  <p className="text-[#475569] text-sm line-clamp-2 mb-6">Slow-roasted quarter chicken marinated in our secret Bodija spice blend.</p>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#f1f5f9] text-[#334155] rounded-xl text-sm font-bold hover:bg-[#e2e8f0] transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                      Edit
                    </button>
                    <button className="p-2 text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Menu Item Card 3 */}
              <div className="bg-white rounded-2xl border border-[#f1f5f9] overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKPMfmOA1CqG9P7uWm7QwbBpKQUaI8f2F83MkzC_JEVXrQ-GvGRLfAtZJ0Lu3xgCCTDvCqn05LUiD_zKByuiTA82RydNG3GY1iTPrsApvY1pMVtk91slLZhv6oqe4AdxV9QC8KogH7hqh7i0z7ubYB_IeRqKHUbVAfIFfMSvGXQSwbCUStMHYpjqW7DxSn3aPb8v-v0ziAbamBMxXQqZm4xhN-UMWJGEh73Fe_OCYQZnQmc5T7YNZitH9h9zeM4isfiVGwHWD82Co"
                    alt="Traditional Nigerian soup with pounded yam"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-[#ec5b13]">₦3,800</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-[#0f172a]">Egusi Soup with Pounded Yam</h4>
                    <span className="text-[10px] uppercase font-black text-[#94a3b8] bg-[#f1f5f9] px-2 py-0.5 rounded">Swallows</span>
                  </div>
                  <p className="text-[#475569] text-sm line-clamp-2 mb-6">Rich melon seed soup with mixed meats, spinach, and smooth pounded yam.</p>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#f1f5f9] text-[#334155] rounded-xl text-sm font-bold hover:bg-[#e2e8f0] transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                      Edit
                    </button>
                    <button className="p-2 text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}