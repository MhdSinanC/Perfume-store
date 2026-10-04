import React from 'react';
import { useStore } from '../context/useStore';

export default function WishlistDrawer() {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    removeFromWishlist,
    addToBag,
    setSelectedProductForModal
  } = useStore();

  if (!isWishlistOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-noir-950/80 backdrop-blur-sm z-[110] transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      ></div>

      {/* Drawer */}
      <aside
        className="fixed inset-y-0 right-0 w-full max-w-md bg-noir-900 border-l border-champagne-500/20 z-[120] transform transition-transform duration-500 ease-in-out shadow-2xl flex flex-col justify-between"
        id="wishlist-drawer"
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-champagne-500/15 flex items-center justify-between bg-noir-950/80">
          <div>
            <h3 className="font-serif text-xl text-champagne-100">Your Private Wishlist</h3>
            <p className="text-[10px] uppercase tracking-widest text-champagne-400/70 mt-0.5">
              Saved Masterpieces · Paris Atelier
            </p>
          </div>
          <button
            aria-label="Close Wishlist"
            className="p-2 text-champagne-400 hover:text-champagne-100 transition-colors"
            onClick={() => setIsWishlistOpen(false)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </button>
        </div>

        {/* Drawer Items */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {wishlist.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full border border-champagne-500/20 flex items-center justify-center text-champagne-400/40">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </div>
              <p className="font-serif text-lg text-champagne-200">Your private wishlist is empty</p>
              <p className="text-xs text-champagne-400/60 max-w-xs mx-auto">
                Explore our signature flacons and tap the heart icon to save fragrances to your private sanctuary.
              </p>
              <a
                href="#collection"
                onClick={() => setIsWishlistOpen(false)}
                className="inline-block mt-2 px-6 py-3 rounded-full border border-champagne-500/40 text-[10px] uppercase tracking-super-wide text-champagne-300 hover:bg-champagne-500 hover:text-noir-950 transition-all"
              >
                Explore The Collection
              </a>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="flex space-x-4 p-4 rounded-xl bg-noir-950 border border-champagne-500/15 hover:border-champagne-500/30 transition-all"
              >
                <div
                  className="w-20 h-24 rounded-lg bg-noir-850 overflow-hidden flex-shrink-0 flex items-center justify-center p-2 cursor-pointer"
                  onClick={() => {
                    setSelectedProductForModal(item);
                    setIsWishlistOpen(false);
                  }}
                >
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4
                        className="font-serif text-base text-champagne-100 hover:text-champagne-400 transition-colors cursor-pointer"
                        onClick={() => {
                          setSelectedProductForModal(item);
                          setIsWishlistOpen(false);
                        }}
                      >
                        {item.name}
                      </h4>
                      <span className="text-xs font-semibold text-champagne-300">${item.price}.00</span>
                    </div>
                    <p className="text-[10px] uppercase text-champagne-400/70 mt-0.5">
                      {item.subtitle} · {item.category}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-champagne-500/10">
                    <button
                      onClick={() => {
                        addToBag(item, '50ml', 1);
                        removeFromWishlist(item.id);
                      }}
                      className="px-3 py-1.5 rounded-full bg-champagne-500/15 hover:bg-champagne-500 text-champagne-300 hover:text-noir-950 text-[10px] uppercase tracking-wider transition-all border border-champagne-500/30"
                    >
                      Move To Bag
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-[10px] uppercase tracking-wider text-rose-300/70 hover:text-rose-300 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {wishlist.length > 0 && (
          <div className="p-6 border-t border-champagne-500/15 bg-noir-950/90 space-y-3">
            <button
              onClick={() => {
                wishlist.forEach(item => addToBag(item, '50ml', 1));
                setIsWishlistOpen(false);
              }}
              className="w-full py-4 px-6 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-super-wide font-medium transition-all shadow-[0_4px_25px_rgba(201,169,110,0.3)]"
            >
              Add All Wishlist To Bag
            </button>
            <p className="text-[9px] uppercase tracking-widest text-center text-champagne-400/50">
              Private Atelier Reserve · Instant Global Dispatch
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
