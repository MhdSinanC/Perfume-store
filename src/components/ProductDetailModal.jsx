import React, { useState } from 'react';
import { useStore } from '../context/useStore';

function ProductDetailContent({ product }) {
  const {
    setSelectedProductForModal,
    addToBag,
    toggleWishlist,
    isInWishlist,
    setIsBagOpen,
    setIsCheckoutOpen
  } = useStore();

  const [selectedSize, setSelectedSize] = useState('50ml');
  const [qty, setQty] = useState(1);

  const currentSizeObj = product.sizes?.find(s => s.size === selectedSize) || {
    size: '50ml',
    label: '50 ML',
    price: product.price
  };

  const currentPrice = currentSizeObj.price;
  const inWishlist = isInWishlist(product.id);

  const handleAdd = () => {
    addToBag(product, selectedSize, qty);
    setIsBagOpen(true);
    setSelectedProductForModal(null);
  };

  const handleInstantCheckout = () => {
    addToBag(product, selectedSize, qty);
    setSelectedProductForModal(null);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-noir-950/90 backdrop-blur-md transition-opacity"
        onClick={() => setSelectedProductForModal(null)}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-noir-900 border border-champagne-500/25 rounded-2xl shadow-2xl overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-champagne-500/15 bg-noir-950/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest text-champagne-400">
              Maison Flacon Detail
            </span>
            <span className="text-champagne-500/40">✦</span>
            <span className="text-xs text-champagne-300/80">{product.name}</span>
          </div>
          <button
            onClick={() => setSelectedProductForModal(null)}
            aria-label="Close Product Details"
            className="p-2 text-champagne-400 hover:text-champagne-100 transition-colors rounded-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Product Image */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-champagne-500/20 bg-noir-950 p-6 flex items-center justify-center min-h-[380px]">
              <span className="absolute top-4 left-4 z-10 inline-flex items-center px-3 py-1 rounded-full text-[9px] tracking-wider uppercase bg-noir-900/90 border border-champagne-500/30 text-champagne-300 font-medium">
                {product.badge || 'EXTRAIT DE PARFUM 24%'}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Product Details & Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-champagne-400 tracking-widest uppercase mb-1">
                <span>Maison Signature Collection</span>
                <span className="text-champagne-500/80">Batch No. 042 / Grasse</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-champagne-100 font-normal">
                {product.name}
              </h2>
              <p className="font-serif italic text-base text-champagne-400 mt-1">
                {product.subtitle}
              </p>
              <div className="flex items-baseline space-x-3 mt-3">
                <span className="text-3xl font-serif text-champagne-100">${currentPrice}</span>
                <span className="text-xs uppercase text-champagne-400/60 tracking-wider">
                  USD · Complimentary Global Express
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-champagne-300/70 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-super-wide text-champagne-300">
                Select Volume
              </label>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes?.map((sizeItem) => (
                  <button
                    key={sizeItem.size}
                    type="button"
                    onClick={() => setSelectedSize(sizeItem.size)}
                    className={`py-3 px-2 rounded-xl text-center transition-all ${
                      selectedSize === sizeItem.size
                        ? 'border-2 border-champagne-500 bg-champagne-500/10'
                        : 'border border-champagne-500/20 hover:border-champagne-500/60'
                    }`}
                  >
                    <div
                      className={`text-xs font-medium ${
                        selectedSize === sizeItem.size ? 'text-champagne-100 font-semibold' : 'text-champagne-200'
                      }`}
                    >
                      {sizeItem.label}
                    </div>
                    <div className="text-[10px] text-champagne-400 mt-0.5">${sizeItem.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & CTA */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-4">
                {/* Quantity Stepper */}
                <div className="inline-flex items-center border border-champagne-500/30 rounded-full px-3 py-2 bg-noir-950">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-7 h-7 flex items-center justify-center text-champagne-300 hover:text-champagne-100 text-sm"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-medium text-champagne-100">{qty}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty(qty + 1)}
                    className="w-7 h-7 flex items-center justify-center text-champagne-300 hover:text-champagne-100 text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Primary Add To Bag */}
                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex-1 py-4 px-6 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-super-wide font-medium transition-all shadow-[0_4px_25px_rgba(201,169,110,0.25)] flex items-center justify-center space-x-2"
                >
                  <span>Add To Bag</span>
                  <span>—</span>
                  <span>${currentPrice * qty}</span>
                </button>

                {/* Wishlist Heart */}
                <button
                  type="button"
                  aria-label="Toggle Wishlist"
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-full border transition-colors ${
                    inWishlist
                      ? 'border-champagne-400 bg-champagne-500/20 text-champagne-400'
                      : 'border-champagne-500/30 text-champagne-300 hover:text-champagne-100 hover:border-champagne-400'
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill={inWishlist ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Instant Luxury Checkout */}
              <button
                type="button"
                onClick={handleInstantCheckout}
                className="w-full py-3.5 px-6 rounded-full border border-champagne-500/40 text-champagne-200 text-xs uppercase tracking-super-wide hover:bg-champagne-500/10 transition-colors"
              >
                Instant Luxury Checkout
              </button>
            </div>

            {/* Accordion Details */}
            <div className="border-t border-champagne-500/15 pt-4 space-y-3">
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center text-xs uppercase tracking-widest text-champagne-200 py-1.5 list-none">
                  <span>The Olfactory Pyramid</span>
                  <span className="transition-transform group-open:rotate-180 text-champagne-400">+</span>
                </summary>
                <div className="text-xs text-champagne-300/70 font-light pt-2 pb-3 leading-relaxed">
                  Head: {product.pyramid?.head}<br />
                  Heart: {product.pyramid?.heart}<br />
                  Base: {product.pyramid?.base}
                </div>
              </details>

              <details className="group cursor-pointer border-t border-champagne-500/10 pt-3">
                <summary className="flex justify-between items-center text-xs uppercase tracking-widest text-champagne-200 py-1.5 list-none">
                  <span>Artisan Craftsmanship &amp; Ethics</span>
                  <span className="transition-transform group-open:rotate-180 text-champagne-400">+</span>
                </summary>
                <div className="text-xs text-champagne-300/70 font-light pt-2 pb-3 leading-relaxed">
                  {product.craftsmanship}
                </div>
              </details>

              <details className="group cursor-pointer border-t border-champagne-500/10 pt-3">
                <summary className="flex justify-between items-center text-xs uppercase tracking-widest text-champagne-200 py-1.5 list-none">
                  <span>The Complimentary Ritual (2 Samples Included)</span>
                  <span className="transition-transform group-open:rotate-180 text-champagne-400">+</span>
                </summary>
                <div className="text-xs text-champagne-300/70 font-light pt-2 pb-3 leading-relaxed">
                  Every order includes complimentary 2ml discovery vials of AMBRE NOIRÉ and VELVET DUSK in an embossed matte black presentation envelope.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailModal() {
  const { selectedProductForModal } = useStore();
  if (!selectedProductForModal) return null;
  return <ProductDetailContent key={selectedProductForModal.id} product={selectedProductForModal} />;
}
