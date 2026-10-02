import React, { useState, useMemo } from 'react';
import { useStore } from '../context/useStore';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, products, addToBag, setSelectedProductForModal } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return products.filter(product => {
      const matchesFilter =
        activeFilter === 'all' ||
        product.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        product.badge.toLowerCase().includes(activeFilter.toLowerCase());

      if (!matchesFilter) return false;
      if (!term) return true;

      const nameMatch = product.name.toLowerCase().includes(term);
      const subtitleMatch = product.subtitle.toLowerCase().includes(term);
      const catMatch = product.category.toLowerCase().includes(term);
      const notesMatch = product.notesSummary.toLowerCase().includes(term);
      const pyramidMatch =
        product.pyramid?.head?.toLowerCase().includes(term) ||
        product.pyramid?.heart?.toLowerCase().includes(term) ||
        product.pyramid?.base?.toLowerCase().includes(term);

      return nameMatch || subtitleMatch || catMatch || notesMatch || pyramidMatch;
    });
  }, [searchTerm, activeFilter, products]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-noir-950/90 backdrop-blur-md transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-noir-900 border border-champagne-500/25 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10">
        {/* Search Header */}
        <div className="p-6 border-b border-champagne-500/15 bg-noir-950/80 flex items-center gap-4">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne-400/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by fragrance name, note, or olfactive accord..."
              autoFocus
              className="w-full bg-noir-850 border border-champagne-500/30 rounded-full pl-11 pr-4 py-3 text-sm text-champagne-100 placeholder-champagne-500/40 focus:outline-none focus:border-champagne-400 font-light"
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            aria-label="Close Search"
            className="p-2 text-champagne-400 hover:text-champagne-100 transition-colors rounded-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </button>
        </div>

        {/* Filter Quick Chips */}
        <div className="px-6 py-3 border-b border-champagne-500/10 bg-noir-950/50 flex flex-wrap gap-2 text-[10px] uppercase tracking-widest">
          <span className="text-champagne-400/60 py-1 mr-1">Filter:</span>
          {['all', 'Eau de Parfum', 'Pure Essence', 'Extrait Noir', 'Wood Essence'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-full border transition-all ${
                activeFilter === cat
                  ? 'border-champagne-500 bg-champagne-500/20 text-champagne-100'
                  : 'border-champagne-500/20 text-champagne-300/60 hover:border-champagne-500/40 hover:text-champagne-200'
              }`}
            >
              {cat === 'all' ? 'All Accords' : cat}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 text-champagne-400/60 space-y-2">
              <p className="font-serif text-lg text-champagne-200">No olfactory accord found</p>
              <p className="text-xs">No fragrance matched “{searchTerm}”. Try searching for “Amber”, “Bergamot”, “Rose”, or “Saffron”.</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 rounded-xl bg-noir-950/60 border border-champagne-500/15 hover:border-champagne-500/40 transition-all group"
              >
                <div
                  className="flex items-center gap-4 cursor-pointer flex-1"
                  onClick={() => {
                    setSelectedProductForModal(product);
                    setIsSearchOpen(false);
                  }}
                >
                  <div className="w-16 h-20 rounded-lg bg-noir-850 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden border border-champagne-500/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-base text-champagne-100 group-hover:text-champagne-400 transition-colors">
                        {product.name}
                      </h4>
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-champagne-500/10 text-champagne-400 border border-champagne-500/20">
                        {product.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-champagne-400/70 font-light mt-0.5">
                      {product.subtitle} · {product.category}
                    </p>
                    <p className="text-xs text-champagne-300/60 font-light mt-1 line-clamp-1">
                      {product.notesSummary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-4 border-l border-champagne-500/15">
                  <span className="font-serif text-base text-champagne-200">${product.price}</span>
                  <button
                    onClick={() => addToBag(product, '50ml', 1)}
                    className="px-4 py-2 rounded-full border border-champagne-500/30 text-[10px] uppercase tracking-widest text-champagne-300 hover:bg-champagne-500 hover:text-noir-950 transition-all whitespace-nowrap"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
