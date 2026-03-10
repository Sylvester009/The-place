import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between border-b border-[#e2e8f0] px-4 md:px-10 py-4 bg-white sticky top-0 z-50">
          <Link href="/" className="flex items-center gap-4">
            <div className="size-8 bg-[#ec5b13] rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">restaurant</span>
            </div>
            <h2 className="text-[#0f172a] text-lg font-bold leading-tight tracking-tight">The Place Bodija</h2>
          </Link>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <nav className="hidden md:flex gap-6 mr-6">
              <Link href="/menu" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Menu</Link>
              <Link href="#" className="text-sm font-semibold hover:text-[#ec5b13] transition-colors">Orders</Link>
              <Link href="/checkout" className="text-sm font-semibold text-[#ec5b13]">Checkout</Link>
            </nav>
            <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-[#f1f5f9] text-[#334155]">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <div className="relative size-10 rounded-full overflow-hidden border-2 border-[#ec5b13]/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9FV36JPSVKjxtzlnWUj7bT4xcZ2iCEMbx3t7-WA5HHJqH7U6RZEySVeXHlbfL0oZYyrTjhr7naeo5awtCvvynSszsUXrJdhIkirAc_q31fVuIcPXKNCkQrYXk622BeiO5kZT0GiW2n_WtOB0qEvApftLC1MbrjgbjPvXXxzBukR4PCiGJJ_bkVzRRWLUu5I9k5tI5S7OfqprYALXwYIZP-jPmWFUxdw1A02ad7o-MuCNUX0LqD-W3TkFBsajbtwWq0fPoAuN3W9Y"
                alt="User profile avatar image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
          {/* Breadcrumbs & Title */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[#64748b] text-sm mb-2">
              <span>Menu</span>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-[#ec5b13] font-medium">Checkout</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">Review your order</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-6">
              {/* Delivery vs Pickup Toggle */}
              <section className="bg-white p-1 rounded-xl shadow-sm border border-[#e2e8f0] flex">
                <label className="flex-1 flex cursor-pointer h-12 items-center justify-center rounded-lg transition-all has-checked:bg-[#ec5b13] has-checked:text-white text-[#475569] font-bold">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined">delivery_dining</span> Delivery</span>
                  <input defaultChecked className="hidden" name="order-type" type="radio" value="delivery"/>
                </label>
                <label className="flex-1 flex cursor-pointer h-12 items-center justify-center rounded-lg transition-all has-checked:bg-[#ec5b13] has-checked:text-white text-[#475569] font-bold">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined">storefront</span> Pickup</span>
                  <input className="hidden" name="order-type" type="radio" value="pickup"/>
                </label>
              </section>

              {/* Delivery Address Section */}
              <section className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#ec5b13]">location_on</span>
                  <h3 className="text-xl font-bold text-[#0f172a]">Delivery Address</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2 text-[#0f172a]">Street Address</label>
                    <input 
                      className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] focus:ring-2 focus:ring-[#ec5b13] focus:border-[#ec5b13] p-3 outline-none" 
                      placeholder="e.g. 15 Awolowo Way" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#0f172a]">City</label>
                    <input 
                      className="w-full rounded-lg border border-[#e2e8f0] bg-[#f1f5f9] text-[#64748b] p-3" 
                      readOnly 
                      type="text" 
                      value="Ibadan (Bodija)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#0f172a]">Phone Number</label>
                    <input 
                      className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] focus:ring-2 focus:ring-[#ec5b13] focus:border-[#ec5b13] p-3 outline-none" 
                      placeholder="+234..." 
                      type="tel"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2 text-[#0f172a]">Special Delivery Instructions</label>
                    <textarea 
                      className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] focus:ring-2 focus:ring-[#ec5b13] focus:border-[#ec5b13] p-3 outline-none" 
                      placeholder="Gate code, landmark, or leave at door..." 
                      rows={2}
                    ></textarea>
                  </div>
                </div>
              </section>

              {/* Payment Method Section */}
              <section className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#ec5b13]">payments</span>
                  <h3 className="text-xl font-bold text-[#0f172a]">Payment Method</h3>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-[#e2e8f0] rounded-xl cursor-pointer hover:bg-[#f8fafc] transition-colors">
                    <input defaultChecked className="text-[#ec5b13] focus:ring-[#ec5b13]" name="payment" type="radio"/>
                    <div className="ml-4 flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#64748b]">credit_card</span>
                      <span className="font-semibold text-[#0f172a]">Credit / Debit Card</span>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-[#e2e8f0] rounded-xl cursor-pointer hover:bg-[#f8fafc] transition-colors">
                    <input className="text-[#ec5b13] focus:ring-[#ec5b13]" name="payment" type="radio"/>
                    <div className="ml-4 flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#64748b]">account_balance</span>
                      <span className="font-semibold text-[#0f172a]">Bank Transfer</span>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-[#e2e8f0] rounded-xl cursor-pointer hover:bg-[#f8fafc] transition-colors">
                    <input className="text-[#ec5b13] focus:ring-[#ec5b13]" name="payment" type="radio"/>
                    <div className="ml-4 flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#64748b]">payments</span>
                      <span className="font-semibold text-[#0f172a]">Pay on Delivery</span>
                    </div>
                  </label>
                </div>
              </section>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl shadow-lg border border-[#e2e8f0] sticky top-24">
                <div className="p-6 border-b border-[#f1f5f9]">
                  <h3 className="text-xl font-bold mb-1 text-[#0f172a]">Order Summary</h3>
                  <div className="flex items-center gap-2 text-sm text-[#ec5b13] font-medium">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>Estimated Delivery: 35-45 mins</span>
                  </div>
                </div>

                {/* Cart Items */}
                <div className="p-6 space-y-6 max-h-[400px] overflow-y-auto">
                  {/* Item 1 */}
                  <div className="flex gap-4">
                    <div className="relative size-20 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBskwbUYR5A-9xXCM-Fuyh2mQeP9LQbqdsHx-dnAIEBLi7EWrcxiNddcPkTeFm5bmAU-nOSfcL583d7nYbLptLIyIncoooOMwZQ9tMNBIriAjMZQK_mb1reILlIMeqeNCIjccH-fuMbWMQ7dmQdz4A2FzejNNH9mV7VeyoqMPHLERj1fUm0_FLzdhILBxqKuU4unljbYlhPavifRLZXjCNMehH3MVvpCXVGX5zqi1JSACgJsVi9Ps8dl8xPvhpwdk33REBY_uPEdN8"
                        alt="Plate of special Jollof rice"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-[#0f172a]">Special Jollof Rice</h4>
                        <span className="font-bold text-[#0f172a]">₦4,500</span>
                      </div>
                      <p className="text-xs text-[#64748b] mb-3">With grilled chicken & dodo</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center bg-[#f1f5f9] rounded-lg p-1">
                          <button className="size-7 flex items-center justify-center text-[#64748b] hover:text-[#ec5b13]">
                            <span className="material-symbols-outlined text-lg">remove</span>
                          </button>
                          <span className="px-3 font-bold text-sm text-[#0f172a]">1</span>
                          <button className="size-7 flex items-center justify-center text-[#64748b] hover:text-[#ec5b13]">
                            <span className="material-symbols-outlined text-lg">add</span>
                          </button>
                        </div>
                        <button className="text-[#94a3b8] hover:text-[#ef4444]">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4">
                    <div className="relative size-20 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzoOV_vVVVPlUKEP6bpqwFCgXJ9k5klThjT4x0KIfh-DUPnKK7pzExA3SqXYPqId8FR4kKAfSlbbrLfbkjO5P3ZnDeOTjUqD-xMDzD11QAV0BOs10-CPybgHFBicPQ-sdsxM7hItou2dcHIykZhf5bPaPzVyI-sg9CYhpywxpmDZeFzeu6fHxdkJoW0r0lchcqqQuD-1uI_Le6cDeScf7ka75FN7noeitWijXNsLEgcptp2spo7_ybqPshLimX0Z-dj7FnuirwffE"
                        alt="Large grilled croaker fish"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-[#0f172a]">Grilled Croaker Fish</h4>
                        <span className="font-bold text-[#0f172a]">₦8,200</span>
                      </div>
                      <p className="text-xs text-[#64748b] mb-3">Spicy marinade, large size</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center bg-[#f1f5f9] rounded-lg p-1">
                          <button className="size-7 flex items-center justify-center text-[#64748b] hover:text-[#ec5b13]">
                            <span className="material-symbols-outlined text-lg">remove</span>
                          </button>
                          <span className="px-3 font-bold text-sm text-[#0f172a]">1</span>
                          <button className="size-7 flex items-center justify-center text-[#64748b] hover:text-[#ec5b13]">
                            <span className="material-symbols-outlined text-lg">add</span>
                          </button>
                        </div>
                        <button className="text-[#94a3b8] hover:text-[#ef4444]">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4">
                    <div className="relative size-20 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXi2JfJ9mrRjQ88VKTZ2tEyV8VG0FzwRg58ZKH-Yu709tBetab6uYlXUcH-5uNy7olfqNPF3kRW55QXdMcCPrwlPzc8QfqdFHdnzfFrGov1SaBHZ7A3q3ug2q6Gc7Sv7Cf-LcxAw4eMF_SHXsWuqgm70tdxZeCMZu3Sx2uB93zFkaPKIaLBZZXiKZQ73Gl2wkbUs6367dau33C4de3ZNi0It-Rd1iLXE7HD5d8WMoFFgYS1O34KpWgylZO8wSKa_-XGfcrU1deszc"
                        alt="Chilled Coca-Cola bottle"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-[#0f172a]">Coke</h4>
                        <span className="font-bold text-[#0f172a]">₦1,200</span>
                      </div>
                      <p className="text-xs text-[#64748b] mb-3">60cl Pet bottle</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center bg-[#f1f5f9] rounded-lg p-1">
                          <button className="size-7 flex items-center justify-center text-[#64748b] hover:text-[#ec5b13]">
                            <span className="material-symbols-outlined text-lg">remove</span>
                          </button>
                          <span className="px-3 font-bold text-sm text-[#0f172a]">2</span>
                          <button className="size-7 flex items-center justify-center text-[#64748b] hover:text-[#ec5b13]">
                            <span className="material-symbols-outlined text-lg">add</span>
                          </button>
                        </div>
                        <button className="text-[#94a3b8] hover:text-[#ef4444]">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="p-6 border-t border-[#f1f5f9]">
                  <label className="block text-sm font-semibold mb-2 text-[#0f172a]">Promo Code</label>
                  <div className="flex gap-2">
                    <input 
                      className="flex-1 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] text-sm focus:ring-2 focus:ring-[#ec5b13] focus:border-[#ec5b13] p-3 outline-none" 
                      placeholder="Enter code" 
                      type="text"
                    />
                    <button className="bg-[#ec5b13]/10 text-[#ec5b13] px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#ec5b13]/20 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Billing Breakdown */}
                <div className="p-6 bg-[#f8fafc] space-y-3">
                  <div className="flex justify-between text-[#475569]">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#0f172a]">₦15,100</span>
                  </div>
                  <div className="flex justify-between text-[#475569]">
                    <span>Delivery Fee</span>
                    <span className="font-semibold text-[#0f172a]">₦1,500</span>
                  </div>
                  <div className="flex justify-between text-[#475569]">
                    <span>Service Charge</span>
                    <span className="font-semibold text-[#0f172a]">₦500</span>
                  </div>
                  <div className="pt-3 border-t border-[#e2e8f0] flex justify-between items-center">
                    <span className="text-lg font-bold text-[#0f172a]">Total</span>
                    <span className="text-2xl font-extrabold text-[#ec5b13]">₦17,100</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6">
                  <button className="w-full bg-[#ec5b13] hover:bg-[#d14f0f] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#ec5b13]/20 transition-all active:scale-[0.98]">
                    Complete Purchase
                  </button>
                  <p className="text-center text-xs text-[#94a3b8] mt-4 px-4">
                    By clicking "Complete Purchase", you agree to our terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer for brand consistency */}
        <footer className="bg-white border-t border-[#e2e8f0] py-10 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Link href="/" className="flex justify-center items-center gap-2 text-[#ec5b13] mb-4">
              <span className="material-symbols-outlined">restaurant</span>
              <span className="font-bold">The Place Bodija</span>
            </Link>
            <p className="text-[#64748b] text-sm">© 2024 The Place Restaurant Group. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}