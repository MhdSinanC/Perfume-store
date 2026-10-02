import React, { useState } from 'react';
import { useStore } from '../context/useStore';

export default function ClientSpaceModal() {
  const {
    isClientSpaceOpen,
    setIsClientSpaceOpen,
    orders,
    wishlist,
    setIsWishlistOpen,
    setSelectedProductForModal
  } = useStore();

  const [activeTab, setActiveTab] = useState('orders');

  if (!isClientSpaceOpen) return null;

  return (
    <div className="fixed inset-0 z-[125] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-noir-950/90 backdrop-blur-md transition-opacity"
        onClick={() => setIsClientSpaceOpen(false)}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-noir-900 border border-champagne-500/25 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10">
        {/* Header */}
        <div className="p-6 border-b border-champagne-500/15 bg-noir-950/80 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl tracking-ultra-wide uppercase text-gold-gradient font-light">
                NOIRÉÉ
              </span>
              <span className="text-[10px] uppercase tracking-widest text-champagne-400/60 border-l border-champagne-500/20 pl-3">
                Client Space
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-champagne-400/70 mt-1">
              Member Status: Grand Cru · Paris Salon Privé
            </p>
          </div>
          <button
            onClick={() => setIsClientSpaceOpen(false)}
            aria-label="Close Client Space"
            className="p-2 text-champagne-400 hover:text-champagne-100 transition-colors rounded-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-champagne-500/15 bg-noir-950/50 px-6 text-xs uppercase tracking-widest">
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3.5 px-4 border-b-2 font-medium transition-all ${
              activeTab === 'orders'
                ? 'border-champagne-500 text-champagne-100'
                : 'border-transparent text-champagne-400/60 hover:text-champagne-300'
            }`}
          >
            Allocations &amp; Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`py-3.5 px-4 border-b-2 font-medium transition-all ${
              activeTab === 'wishlist'
                ? 'border-champagne-500 text-champagne-100'
                : 'border-transparent text-champagne-400/60 hover:text-champagne-300'
            }`}
          >
            Saved Sanctuary ({wishlist.length})
          </button>
          <button
            onClick={() => setActiveTab('concierge')}
            className={`py-3.5 px-4 border-b-2 font-medium transition-all ${
              activeTab === 'concierge'
                ? 'border-champagne-500 text-champagne-100'
                : 'border-transparent text-champagne-400/60 hover:text-champagne-300'
            }`}
          >
            Concierge &amp; Appointments
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'orders' && (
            <div className="space-y-4">
              {orders.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full border border-champagne-500/20 flex items-center justify-center text-champagne-400/40">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                  </div>
                  <p className="font-serif text-lg text-champagne-200">No Prior Allocations Recorded</p>
                  <p className="text-xs text-champagne-400/60 max-w-sm mx-auto">
                    When you place test orders through our secure checkout, your private certificates of allocation will appear here.
                  </p>
                </div>
              ) : (
                orders.map((order) => (
                  <div
                    key={order.id}
                    className="p-5 rounded-xl bg-noir-950 border border-champagne-500/20 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-champagne-500/10 gap-2">
                      <div>
                        <span className="font-mono text-champagne-300 font-medium text-sm">{order.id}</span>
                        <p className="text-[10px] text-champagne-400/60 mt-0.5">{order.date}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-champagne-500/15 text-champagne-300 border border-champagne-500/20">
                          {order.status}
                        </span>
                        <p className="font-serif text-base text-champagne-100 mt-1">Total: ${order.total.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs text-champagne-300/80">
                          <div className="flex items-center gap-2">
                            <img src={item.image} alt={item.name} className="w-8 h-10 object-contain rounded bg-noir-900 p-0.5" />
                            <span>{item.name} ({item.sizeLabel}) × {item.qty}</span>
                          </div>
                          <span>${(item.price * item.qty).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-champagne-500/10 flex justify-between items-center text-[11px] text-champagne-400/70">
                      <span>Delivery: {order.customer.address}, {order.customer.city}</span>
                      <span className="text-champagne-400">White Glove Insured</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="space-y-4">
              {wishlist.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <p className="font-serif text-lg text-champagne-200">No Saved Fragrances</p>
                  <p className="text-xs text-champagne-400/60">
                    Your private sanctuary is currently empty.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlist.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-noir-950 border border-champagne-500/15 flex items-center gap-4 cursor-pointer hover:border-champagne-500/40 transition-all"
                      onClick={() => {
                        setSelectedProductForModal(item);
                        setIsClientSpaceOpen(false);
                      }}
                    >
                      <img src={item.image} alt={item.name} className="w-14 h-16 object-contain rounded bg-noir-900 p-1" />
                      <div>
                        <h4 className="font-serif text-base text-champagne-100">{item.name}</h4>
                        <p className="text-[10px] text-champagne-400/70">{item.subtitle}</p>
                        <p className="font-serif text-sm text-champagne-300 mt-1">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="pt-2 text-center">
                <button
                  onClick={() => {
                    setIsClientSpaceOpen(false);
                    setIsWishlistOpen(true);
                  }}
                  className="px-6 py-2.5 rounded-full border border-champagne-500/30 text-champagne-300 text-xs uppercase tracking-wider hover:bg-champagne-500 hover:text-noir-950 transition-all"
                >
                  Manage Private Wishlist
                </button>
              </div>
            </div>
          )}

          {activeTab === 'concierge' && (
            <div className="space-y-6 text-xs text-champagne-300/80">
              <div className="p-6 rounded-xl bg-noir-950 border border-champagne-500/15 space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-champagne-400 font-medium">Paris Atelier Concierge</span>
                <h4 className="font-serif text-xl text-champagne-100">Private Salons &amp; Bespoke Consultation</h4>
                <p className="font-light leading-relaxed">
                  As an esteemed member of our Maison registry, you have priority access to private formulation appointments with our nose in Paris or Grasse.
                </p>
                <div className="pt-2 space-y-1 text-champagne-200">
                  <p>📍 18 Place Vendôme, 75001 Paris, France</p>
                  <p>✉️ <a href="mailto:concierge@noire-parfums.com" className="hover:text-champagne-400 transition-colors">concierge@noire-parfums.com</a></p>
                  <p>📞 +33 1 42 68 55 00 (Private Line)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-champagne-500/10 border border-champagne-500/20 space-y-1">
                <p className="font-medium text-champagne-300">Complimentary Refill Courtesy</p>
                <p className="text-[11px] font-light text-champagne-300/70">
                  All 100ml obsidian crystal flacons are eligible for our zero-waste artisan fountain refills at any of our worldwide flagship boutiques.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
