import React from 'react';

export default function MobileView() {
  return (
    <div className="block md:hidden">
      {/* Generated JSX */}
      
{/*  Mobile Device Container Constraint (~390px - 430px modern iPhone viewport standard)  */}
<div className="w-full max-w-md min-h-screen relative flex flex-col bg-obsidian border-x border-white/5 shadow-2xl overflow-x-hidden">
{/*  BEGIN: MobileHeader  */}
{/*  Sticky iOS Blur Header  */}
<header className="sticky top-0 z-40 w-full glass-dark border-b border-white/10 px-5 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 transition-all duration-300">
<div className="flex items-center justify-between h-11">
{/*  Left: Touch Menu Trigger  */}
<button aria-label="Open Navigation Menu" className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors py-2 touch-btn" data-purpose="open-menu" id="menu-btn">
<svg className="w-5 h-5 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<line x1="3" x2="21" y1="7" y2="7"></line>
<line x1="3" x2="15" y1="17" y2="17"></line>
</svg>
<span className="text-[10px] tracking-luxury uppercase font-medium mt-0.5">Menu</span>
</button>
{/*  Center: Iconic Brand Wordmark  */}
<a aria-label="NOIRÉ Paris Home" className="text-center group" href="#">
<span className="font-serif text-2xl tracking-ultra-wide font-normal text-cream group-hover:text-gold transition-colors block pl-2">NOIRÉ</span>
<span className="block text-[7px] tracking-[0.35em] text-gold/75 uppercase -mt-0.5">Paris</span>
</a>
{/*  Right: Actions (Search + Shopping Bag)  */}
<div className="flex items-center gap-4">
<button aria-label="Search Fragrances" className="text-cream/80 hover:text-gold p-1 touch-btn">
<svg className="w-4 h-4 stroke-[1.4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<circle cx="11" cy="11" r="7"></circle>
<line x1="16.5" x2="21" y1="16.5" y2="21"></line>
</svg>
</button>
{/*  Bag Drawer Trigger with counter pill  */}
<button aria-label="View Shopping Bag" className="relative text-cream/90 hover:text-gold p-1 touch-btn" id="bag-toggle-btn">
<svg className="w-[19px] h-[19px] stroke-[1.3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M6 8h12l1 12H5L6 8z"></path>
<path d="M9 8V6a3 3 0 016 0v2"></path>
</svg>
<span className="absolute -top-1 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gold text-obsidian text-[8px] font-bold">1</span>
</button>
</div>
</div>
</header>
{/*  END: MobileHeader  */}
{/*  BEGIN: MobileMenuOverlay  */}
{/*  Fullscreen Mobile Navigation Modal  */}
<div className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between opacity-0 pointer-events-none transition-all duration-300" id="nav-overlay">
<div className="flex justify-between items-center border-b border-white/10 pb-4">
<span className="font-serif tracking-widest text-lg text-cream">NOIRÉ</span>
<button aria-label="Close Navigation Menu" className="p-2 text-cream/70 hover:text-cream touch-btn" id="close-menu-btn">
<svg className="w-6 h-6 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<nav className="flex flex-col space-y-6 my-auto text-left">
<a className="nav-link font-serif text-3xl text-cream hover:text-gold transition-colors tracking-wide" href="#signature-product">01. Fragrances</a>
<a className="nav-link font-serif text-3xl text-cream hover:text-gold transition-colors tracking-wide" href="#olfactory-pyramid">02. Scent Pyramid</a>
<a className="nav-link font-serif text-3xl text-cream hover:text-gold transition-colors tracking-wide" href="#anthology">03. The Anthology</a>
<a className="nav-link font-serif text-3xl text-cream hover:text-gold transition-colors tracking-wide" href="#scent-ritual">04. Fragrance Diagnostic</a>
<a className="nav-link font-serif text-3xl text-cream hover:text-gold transition-colors tracking-wide" href="#manifesto">05. Atelier Manifesto</a>
</nav>
<div className="border-t border-white/10 pt-6 flex flex-col gap-3 text-xs tracking-luxury text-cream/60">
<p className="text-gold font-medium">CONCIERGE &amp; APPOINTMENTS</p>
<p>18 Place Vendôme, 75001 Paris</p>
<p>concierge@noire-parfums.com</p>
</div>
</div>
{/*  END: MobileMenuOverlay  */}
<main className="flex-1 w-full">
{/*  BEGIN: HeroSection  */}
{/*  Cinematic Mobile Hero with Focal Perfume Presentation  */}
<section className="relative w-full pt-8 pb-14 px-6 flex flex-col items-center text-center overflow-hidden">
{/*  Ambient smoky glow background elements  */}
<div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gold/10 blur-[90px] pointer-events-none"></div>
<div className="absolute bottom-10 right-0 w-60 h-60 rounded-full bg-amber-900/15 blur-[80px] pointer-events-none"></div>
{/*  Tag Pill  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-5">
<span className="w-1 h-1 rounded-full bg-gold animate-pulse"></span>
<span className="text-[9px] font-medium tracking-[0.25em] uppercase text-gold">Parfums de Noiré · Paris</span>
</div>
{/*  Monumental Mobile Headline  */}
<h1 className="font-serif text-[2.75rem] leading-[1.08] tracking-tight font-light text-cream mb-6">
          Scents that stay <br /><span className="italic font-normal text-gold-light">after you leave.</span>
</h1>
{/*  High Impact Mobile Fragrance Bottle Visual  */}
<div className="relative w-full max-w-[310px] aspect-[3/4] my-2 group">
<div className="absolute inset-0 bg-radial from-gold/15 to-transparent rounded-2xl blur-xl opacity-60"></div>
<img alt="Luxury perfume bottle NOIRÉ ÉCLAT, heavy obsidian black faceted glass bottle with subtle amber liquid glowing from within" className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)]" src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png" />
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full glass-dark border border-white/10 text-[9px] uppercase tracking-widest text-gold/90 whitespace-nowrap shadow-lg">
            Extrait de Parfum · 30% Conc.
          </div>
</div>
{/*  Poetic Fragrance Subtext  */}
<p className="text-xs text-cream/70 font-light leading-relaxed max-w-[290px] mt-6 mb-8 tracking-wide">
          A hypnotic fusion of rare supercritical extraction, night-blooming accords, and smoldering amber resins.
        </p>
{/*  Tap CTA Actions  */}
<div className="w-full flex flex-col gap-3">
<a className="w-full py-4 px-6 rounded-none bg-gold text-obsidian font-medium text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300 shadow-gold-glow touch-btn flex items-center justify-center" href="#signature-product">
            Explore Collection
          </a>
<a className="w-full py-3.5 px-6 rounded-none border border-white/20 text-cream/90 font-light text-xs tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all duration-300 touch-btn flex items-center justify-center gap-2" href="#olfactory-pyramid">
            Discover Éclat <span>→</span>
</a>
</div>
{/*  Scroll Indicator  */}
<div className="mt-8 flex flex-col items-center gap-1.5 opacity-60">
<span className="text-[8px] uppercase tracking-[0.3em] text-cream/50">Scroll to Immerse</span>
<div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
<span className="w-1 h-1.5 rounded-full bg-gold animate-bounce"></span>
</div>
</div>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: OlfactoryPyramid  */}
{/*  Vertical Tactile Scent Structure Step-Through  */}
<section className="py-16 px-6 bg-gradient-to-b from-obsidian via-carbon to-obsidian border-t border-white/5" id="olfactory-pyramid">
<div className="text-center mb-10">
<p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-2 font-medium">Chapter 01 · Anatomy</p>
<h2 className="font-serif text-3xl font-light text-cream tracking-wide">The Olfactory Pyramid</h2>
<p className="text-xs text-cream/60 max-w-[280px] mx-auto mt-2 leading-relaxed">Formulated through slow maturation over six lunar cycles.</p>
</div>
{/*  Vertical Accordion / Card Cards  */}
<div className="flex flex-col gap-3.5">
{/*  01 / TOP  */}
<article className="p-5 rounded-lg bg-charcoal/40 border border-white/10 hover:border-gold/40 transition-all duration-300">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] tracking-[0.2em] font-medium text-gold">01 / HEAD NOTES</span>
<span className="text-[10px] tracking-wider text-cream/40">First 30 Mins</span>
</div>
<h3 className="font-serif text-xl text-cream font-normal mb-1">Calabrian Bergamot · Saffron · Pink Pepper</h3>
<p className="text-xs text-cream/70 font-light leading-relaxed">
              Luminous, electric cold citrus sparkling instantly against crushed winter spices and dry golden warmth.
            </p>
</article>
{/*  02 / HEART  */}
<article className="p-5 rounded-lg bg-charcoal/50 border border-gold/30 shadow-sm relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-20 h-20 bg-gold/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] tracking-[0.2em] font-medium text-gold-light">02 / HEART ACCORD</span>
<span className="text-[10px] tracking-wider text-gold/60">Hours 1 — 6</span>
</div>
<h3 className="font-serif text-xl text-cream font-normal mb-1">Tuscan Iris Pallida · Damask Rose</h3>
<p className="text-xs text-cream/70 font-light leading-relaxed">
              Aristocratic powdered butter elegance sinking slowly into velvet, smoky floral depth.
            </p>
</article>
{/*  03 / BASE  */}
<article className="p-5 rounded-lg bg-charcoal/40 border border-white/10 hover:border-gold/40 transition-all duration-300">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] tracking-[0.2em] font-medium text-gold">03 / BASE ANCHOR</span>
<span className="text-[10px] tracking-wider text-cream/40">14+ Hours Trail</span>
</div>
<h3 className="font-serif text-xl text-cream font-normal mb-1">Smoked Sandalwood · Amber Resin</h3>
<p className="text-xs text-cream/70 font-light leading-relaxed">
              Smoldering, intimate Bourbon vanilla and ancient tears of benzoin that settle like heated silk upon skin.
            </p>
</article>
</div>
</section>
{/*  END: OlfactoryPyramid  */}
{/*  BEGIN: InteractiveNotesExplorer  */}
{/*  Tactile 3-Tab Explorer with Longevity Metrics  */}
<section className="py-12 px-6 bg-charcoal/25 border-y border-white/5">
<div className="flex items-center justify-between mb-6">
<div>
<span className="text-[9px] uppercase tracking-[0.25em] text-gold">Sensory Diagnostics</span>
<h3 className="font-serif text-2xl text-cream mt-0.5">Note Characteristics</h3>
</div>
<span className="text-[10px] tracking-widest text-cream/40 uppercase">Extraction Grade I</span>
</div>
{/*  Touch-friendly 3-tab toggle  */}
<div className="grid grid-cols-3 p-1 rounded-md bg-carbon border border-white/10 mb-6" data-purpose="scent-tabs">
<button className="tab-trigger py-2.5 text-[10px] uppercase tracking-[0.2em] rounded text-gold font-medium bg-charcoal/80 transition-all" id="tab-top">Top</button>
<button className="tab-trigger py-2.5 text-[10px] uppercase tracking-[0.2em] rounded text-cream/60 hover:text-cream transition-all" id="tab-heart">Heart</button>
<button className="tab-trigger py-2.5 text-[10px] uppercase tracking-[0.2em] rounded text-cream/60 hover:text-cream transition-all" id="tab-base">Base</button>
</div>
{/*  Dynamic Note Description Box  */}
<div className="p-4 rounded border border-white/5 bg-charcoal/30 mb-6 min-h-[96px] flex flex-col justify-center" id="tab-content">
<p className="text-xs uppercase tracking-widest text-gold mb-1" id="tab-desc-title">Initial Radiance</p>
<p className="text-xs text-cream/80 font-light leading-relaxed" id="tab-desc-text">
            Distilled cold-pressed bergamot peel from Reggio Calabria paired with crushed pink pepper and saffron CO2 extract.
          </p>
</div>
{/*  Fragrance Metrics Bar Visualization  */}
<div className="space-y-4">
<div>
<div className="flex justify-between text-[11px] font-light mb-1.5">
<span className="tracking-luxury text-cream/70">Longevity</span>
<span className="font-mono text-gold text-xs">14+ Hours (Exceptional)</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gold rounded-full w-[94%] transition-all duration-700"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[11px] font-light mb-1.5">
<span className="tracking-luxury text-cream/70">Sillage</span>
<span className="font-mono text-gold text-xs">Magnetic Aura (6 ft)</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gold rounded-full w-[82%] transition-all duration-700"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[11px] font-light mb-1.5">
<span className="tracking-luxury text-cream/70">Intimacy</span>
<span className="font-mono text-gold text-xs">Warm Second-Skin</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gold rounded-full w-[88%] transition-all duration-700"></div>
</div>
</div>
</div>
</section>
{/*  END: InteractiveNotesExplorer  */}
{/*  BEGIN: SignatureProductCommerce  */}
{/*  Signature Product Showcase & Mobile Purchasing Engine  */}
<section className="py-14 px-6 bg-obsidian" id="signature-product">
{/*  Header info  */}
<div className="mb-4">
<div className="flex items-center gap-2 mb-1.5">
<span className="text-[9px] uppercase tracking-[0.25em] text-gold">Masterpiece Édition</span>
<span className="text-white/20">·</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-cream/50">Parisian Hand-Poured</span>
</div>
<h2 className="font-serif text-3xl font-normal tracking-wide text-cream">NOIRÉ ÉCLAT</h2>
<p className="text-xs text-cream/50 uppercase tracking-widest mt-0.5">Eau de Parfum Intense</p>
</div>
{/*  Product Image Gallery Viewport with Swipe Hints  */}
<div className="relative w-full aspect-[4/5] bg-carbon rounded-lg overflow-hidden border border-white/10 mb-4">
<img alt="NOIRÉ ÉCLAT luxury fragrance bottle" className="w-full h-full object-cover transition-transform duration-500 scale-100 hover:scale-105" id="main-product-img" src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png" />
<div className="absolute top-3 right-3 px-2 py-1 bg-obsidian/80 backdrop-blur-md border border-white/10 text-[9px] text-gold tracking-widest uppercase">
            Signature
          </div>
{/*  Carousel Dots  */}
<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
<span className="w-4 h-1 rounded-full bg-gold"></span>
<span className="w-1.5 h-1 rounded-full bg-white/30"></span>
<span className="w-1.5 h-1 rounded-full bg-white/30"></span>
</div>
</div>
{/*  Price Display  */}
<div className="flex items-baseline justify-between mb-5">
<div className="flex items-baseline gap-2">
<span className="font-serif text-2xl text-cream" id="current-price">$185</span>
<span className="text-[10px] text-cream/40 uppercase tracking-widest">USD · Free Shipping</span>
</div>
<span className="text-[10px] text-gold font-medium tracking-wide">In Stock (Limited Run)</span>
</div>
{/*  Tactile Flacon Size Selector Cards  */}
<div className="mb-6">
<label className="block text-[10px] uppercase tracking-[0.2em] text-cream/60 mb-2">Select Flacon Size</label>
<div className="grid grid-cols-3 gap-2">
{/*  30ml  */}
<button className="size-pill py-3 px-2 rounded border border-white/15 bg-carbon text-center transition-all touch-btn" data-price="115" data-size="30ml">
<span className="block text-xs font-medium text-cream">30 ml</span>
<span className="block text-[10px] text-cream/50 mt-0.5">$115</span>
</button>
{/*  50ml (Active Signature)  */}
<button className="size-pill py-3 px-2 rounded border border-gold bg-gold/10 text-center transition-all touch-btn relative" data-price="185" data-size="50ml">
<span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gold text-obsidian text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded-sm">Vogue Pick</span>
<span className="block text-xs font-semibold text-gold-light">50 ml</span>
<span className="block text-[10px] text-gold/80 mt-0.5">$185</span>
</button>
{/*  100ml  */}
<button className="size-pill py-3 px-2 rounded border border-white/15 bg-carbon text-center transition-all touch-btn" data-price="280" data-size="100ml">
<span className="block text-xs font-medium text-cream">100 ml</span>
<span className="block text-[10px] text-cream/50 mt-0.5">$280</span>
</button>
</div>
</div>
{/*  Add To Bag + Quantity Controls  */}
<div className="flex gap-3 mb-6">
{/*  Quantity Control  */}
<div className="flex items-center border border-white/20 bg-carbon px-2 py-1">
<button aria-label="Decrease quantity" className="w-8 h-10 flex items-center justify-center text-cream/60 hover:text-cream text-lg font-light touch-btn" id="qty-minus">−</button>
<span className="w-6 text-center text-xs font-medium text-cream font-mono" id="qty-count">1</span>
<button aria-label="Increase quantity" className="w-8 h-10 flex items-center justify-center text-cream/60 hover:text-cream text-lg font-light touch-btn" id="qty-plus">+</button>
</div>
{/*  Primary CTA Button  */}
<button className="flex-1 py-3.5 px-4 bg-gold hover:bg-gold-light text-obsidian font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-gold-glow flex items-center justify-center gap-2 touch-btn" id="add-to-bag-cta">
<span id="cta-label">Add To Bag — $185</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</button>
{/*  Wishlist Heart Button  */}
<button aria-label="Save to Wishlist" className="w-12 h-12 flex items-center justify-center border border-white/20 hover:border-gold/50 bg-carbon text-cream/70 hover:text-gold transition-colors touch-btn">
<svg className="w-5 h-5 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
</svg>
</button>
</div>
{/*  Accordion Touch Toggles (Product Specs)  */}
<div className="border-t border-white/10 divide-y divide-white/10">
<details className="group py-3.5 cursor-pointer">
<summary className="flex justify-between items-center text-xs uppercase tracking-widest text-cream/80 group-open:text-gold list-none">
<span>Scent Architecture &amp; Notes</span>
<span className="transition group-open:rotate-180 text-cream/50 text-sm">↓</span>
</summary>
<p className="pt-3 text-xs text-cream/60 font-light leading-relaxed">
              Top: Calabrian Bergamot, Pink Peppercorn, Warm Saffron.<br />
              Heart: Iris Butter, Midnight Jasmine, Rosa Damascena.<br />
              Base: Indonesian Patchouli, Black Amber, Smoked Cedar, Bourbon Vanilla.
            </p>
</details>
<details className="group py-3.5 cursor-pointer">
<summary className="flex justify-between items-center text-xs uppercase tracking-widest text-cream/80 group-open:text-gold list-none">
<span>Sustainable Sourcing &amp; Craft</span>
<span className="transition group-open:rotate-180 text-cream/50 text-sm">↓</span>
</summary>
<p className="pt-3 text-xs text-cream/60 font-light leading-relaxed">
              100% vegan organic wheat alcohol base. Hand-blended in small micro-batches of 250 bottles in Grasse, France. Carbon-neutral flacons made with recycled heavy crystalline.
            </p>
</details>
<details className="group py-3.5 cursor-pointer">
<summary className="flex justify-between items-center text-xs uppercase tracking-widest text-cream/80 group-open:text-gold list-none">
<span>Complimentary 2× Sample Ritual</span>
<span className="transition group-open:rotate-180 text-cream/50 text-sm">↓</span>
</summary>
<p className="pt-3 text-xs text-cream/60 font-light leading-relaxed">
              Every full bottle purchase includes two complimentary 2ml extrait testers. Test the miniature vial first; if unsuited, return the sealed flacon unconditionally within 30 days.
            </p>
</details>
</div>
</section>
{/*  END: SignatureProductCommerce  */}
{/*  BEGIN: TouchFragranceAnthology  */}
{/*  Swipeable Fragrance Collection / Mobile Horizontal Carousel  */}
<section className="py-14 bg-carbon border-y border-white/5" id="anthology">
<div className="px-6 flex justify-between items-end mb-6">
<div>
<span className="text-[9px] uppercase tracking-[0.25em] text-gold">The Collection</span>
<h2 className="font-serif text-2xl text-cream tracking-wide">The Extrait Anthology</h2>
</div>
<span className="text-[10px] tracking-widest text-cream/40 uppercase">Swipe →</span>
</div>
{/*  Touch Carousel Container with Peek Effect  */}
<div className="flex overflow-x-auto hide-scrollbar gap-4 px-6 snap-x snap-mandatory">
{/*  Card 1: NOIRÉ ÉCLAT  */}
<article className="flex-shrink-0 w-[240px] snap-start flex flex-col bg-charcoal/50 border border-white/10 rounded-lg p-3.5 group">
<div className="w-full aspect-[4/5] bg-obsidian rounded overflow-hidden mb-3">
<img alt="NOIRÉ ÉCLAT Eau de parfum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png" />
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<h3 className="font-serif text-lg text-cream">NOIRÉ ÉCLAT</h3>
<p className="text-[10px] text-gold/80 tracking-wider uppercase mb-1">Amber · Iris · Saffron</p>
<p className="text-xs font-mono text-cream/90 mb-3">$185</p>
</div>
<button className="quick-add-btn w-full py-2 bg-white/5 hover:bg-gold hover:text-obsidian border border-white/15 text-[10px] uppercase tracking-widest text-cream transition-all touch-btn" data-price="185" data-product="NOIRÉ ÉCLAT">
                + Quick Add
              </button>
</div>
</article>
{/*  Card 2: AMBRE NOIR  */}
<article className="flex-shrink-0 w-[240px] snap-start flex flex-col bg-charcoal/50 border border-white/10 rounded-lg p-3.5 group">
<div className="w-full aspect-[4/5] bg-obsidian rounded overflow-hidden mb-3">
<img alt="AMBRE NOIR perfume bottle on burnt wood with amber resins" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/luxury_perfume_bottle_ambre_noir_square_smoked_glass_bottle_with_gold_geometric.png" />
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<h3 className="font-serif text-lg text-cream">AMBRE NOIR</h3>
<p className="text-[10px] text-gold/80 tracking-wider uppercase mb-1">Cade Wood · Benzoin · Cacao</p>
<p className="text-xs font-mono text-cream/90 mb-3">$195</p>
</div>
<button className="quick-add-btn w-full py-2 bg-white/5 hover:bg-gold hover:text-obsidian border border-white/15 text-[10px] uppercase tracking-widest text-cream transition-all touch-btn" data-price="195" data-product="AMBRE NOIR">
                + Quick Add
              </button>
</div>
</article>
{/*  Card 3: VELVET DUSK  */}
<article className="flex-shrink-0 w-[240px] snap-start flex flex-col bg-charcoal/50 border border-white/10 rounded-lg p-3.5 group">
<div className="w-full aspect-[4/5] bg-obsidian rounded overflow-hidden mb-3">
<img alt="VELVET DUSK dark violet bottle with night jasmine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/luxury_perfume_bottle_velvet_dusk_slender_dark_violet_tinted_frosted_glass.png" />
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<h3 className="font-serif text-lg text-cream">VELVET DUSK</h3>
<p className="text-[10px] text-gold/80 tracking-wider uppercase mb-1">Night Jasmine · Violet · Musk</p>
<p className="text-xs font-mono text-cream/90 mb-3">$165</p>
</div>
<button className="quick-add-btn w-full py-2 bg-white/5 hover:bg-gold hover:text-obsidian border border-white/15 text-[10px] uppercase tracking-widest text-cream transition-all touch-btn" data-price="165" data-product="VELVET DUSK">
                + Quick Add
              </button>
</div>
</article>
{/*  Card 4: ROSE ÉTHER (Placeholder item to complete 4 fragrances)  */}
<article className="flex-shrink-0 w-[240px] snap-start flex flex-col bg-charcoal/50 border border-white/10 rounded-lg p-3.5 group">
<div className="w-full aspect-[4/5] bg-obsidian rounded overflow-hidden mb-3 relative flex items-center justify-center">
<img alt="ROSE ÉTHER extrait" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png" />
<span className="absolute text-[10px] tracking-widest text-gold bg-obsidian/90 px-3 py-1 uppercase border border-gold/30">Rare Harvest</span>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<h3 className="font-serif text-lg text-cream">ROSE ÉTHER</h3>
<p className="text-[10px] text-gold/80 tracking-wider uppercase mb-1">Smoked Rose · Frankincense</p>
<p className="text-xs font-mono text-cream/90 mb-3">$175</p>
</div>
<button className="quick-add-btn w-full py-2 bg-white/5 hover:bg-gold hover:text-obsidian border border-white/15 text-[10px] uppercase tracking-widest text-cream transition-all touch-btn" data-price="175" data-product="ROSE ÉTHER">
                + Quick Add
              </button>
</div>
</article>
</div>
</section>
{/*  END: TouchFragranceAnthology  */}
{/*  BEGIN: InteractiveScentRitual  */}
{/*  Find Your Scent Consultation (Interactive Touch Quiz)  */}
<section className="py-14 px-6 bg-obsidian" id="scent-ritual">
<div className="text-center mb-8">
<span className="text-[9px] uppercase tracking-[0.25em] text-gold">The Sensory Consultation</span>
<h2 className="font-serif text-2xl text-cream tracking-wide mt-1">Find Your Signature Scent</h2>
<p className="text-xs text-cream/60 max-w-[260px] mx-auto mt-1 leading-relaxed">
            Answer 3 intuitive questions to decode your olfactory identity.
          </p>
</div>
<div className="space-y-6 bg-carbon/70 p-5 rounded-xl border border-white/10 shadow-lg">
{/*  Step 1  */}
<div>
<p className="text-[11px] font-medium text-cream tracking-wider uppercase mb-2.5">
              1. Desired Atmosphere &amp; Mood
            </p>
<div className="grid grid-cols-1 gap-2" data-quiz-group="mood">
<button className="quiz-btn py-2.5 px-3 rounded border border-gold bg-gold/10 text-left text-xs text-cream flex justify-between items-center transition-all touch-btn">
<span>Dark &amp; Mysterious</span>
<span className="text-gold text-[10px]">●</span>
</button>
<button className="quiz-btn py-2.5 px-3 rounded border border-white/10 bg-obsidian text-left text-xs text-cream/70 flex justify-between items-center transition-all touch-btn">
<span>Warm, Intimate &amp; Sensual</span>
<span className="opacity-0 text-[10px]">●</span>
</button>
<button className="quiz-btn py-2.5 px-3 rounded border border-white/10 bg-obsidian text-left text-xs text-cream/70 flex justify-between items-center transition-all touch-btn">
<span>Clean, Cold &amp; Minimalist</span>
<span className="opacity-0 text-[10px]">●</span>
</button>
</div>
</div>
{/*  Step 2  */}
<div>
<p className="text-[11px] font-medium text-cream tracking-wider uppercase mb-2.5">
              2. Sillage &amp; Aura Preference
            </p>
<div className="grid grid-cols-3 gap-2" data-quiz-group="sillage">
<button className="quiz-btn-pill py-2 border border-white/10 rounded text-[10px] uppercase tracking-wider text-cream/70 hover:border-gold/50 text-center touch-btn">
                Whisper
              </button>
<button className="quiz-btn-pill py-2 border border-gold bg-gold/10 rounded text-[10px] uppercase tracking-wider text-gold font-medium text-center touch-btn">
                Magnetic
              </button>
<button className="quiz-btn-pill py-2 border border-white/10 rounded text-[10px] uppercase tracking-wider text-cream/70 hover:border-gold/50 text-center touch-btn">
                Monumental
              </button>
</div>
</div>
{/*  Step 3  */}
<div>
<p className="text-[11px] font-medium text-cream tracking-wider uppercase mb-2.5">
              3. Dominant Resonant Element
            </p>
<div className="grid grid-cols-3 gap-2" data-quiz-group="element">
<button className="quiz-btn-pill-3 py-2 border border-gold bg-gold/10 rounded text-[10px] uppercase tracking-wider text-gold font-medium text-center touch-btn">
                Night (Amber)
              </button>
<button className="quiz-btn-pill-3 py-2 border border-white/10 rounded text-[10px] uppercase tracking-wider text-cream/70 hover:border-gold/50 text-center touch-btn">
                Dusk (Floral)
              </button>
<button className="quiz-btn-pill-3 py-2 border border-white/10 rounded text-[10px] uppercase tracking-wider text-cream/70 hover:border-gold/50 text-center touch-btn">
                Earth (Wood)
              </button>
</div>
</div>
{/*  Consultation Result Card  */}
<div className="pt-4 border-t border-white/10 flex flex-col items-center text-center">
<span className="text-[9px] uppercase tracking-[0.2em] text-gold font-semibold mb-1">Your 98% Resonance Match</span>
<h4 className="font-serif text-xl text-cream">NOIRÉ ÉCLAT — EXTRAIT</h4>
<p className="text-xs text-cream/60 mt-1 mb-4 leading-relaxed">
              Smoked iris with black amber veil matches your craving for deep nocturnal presence.
            </p>
<a className="w-full py-3 bg-white/10 hover:bg-gold hover:text-obsidian border border-gold/40 text-gold hover:border-gold font-medium text-xs tracking-luxury uppercase transition-all duration-300 touch-btn" href="#signature-product">
              Claim Your Tailored Formula
            </a>
</div>
</div>
</section>
{/*  END: InteractiveScentRitual  */}
{/*  BEGIN: EditorialManifesto  */}
{/*  Editorial Atelier Manifesto & Campaign Imagery  */}
<section className="relative w-full overflow-hidden border-t border-white/5" id="manifesto">
<div className="relative w-full aspect-[16/10] overflow-hidden">
<img alt="Cinematic luxury fashion fragrance campaign photography with hands delicately holding perfume in golden mist" className="w-full h-full object-cover filter brightness-[0.75]" src="/cinematic_luxury_fashion_fragrance_campaign_photography_close_up_of_hands.png" />
<div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
</div>
<div className="px-6 -mt-10 relative z-10 text-center pb-12">
<span className="text-[9px] uppercase tracking-[0.3em] text-gold">The Manifesto</span>
<blockquote className="font-serif text-xl italic font-light text-cream/95 my-4 leading-relaxed max-w-[320px] mx-auto">
            "Every scent leaves a memory. We do not merely create perfume; we distill unforgotten moments."
          </blockquote>
<p className="text-[10px] uppercase tracking-luxury text-cream/50">
            Maison Fondée à Paris · Kyoto · New York
          </p>
</div>
</section>
{/*  END: EditorialManifesto  */}
</main>
{/*  BEGIN: MobileBagSlideUpSheet  */}
{/*  iOS Style Slide-Up Shopping Bag Drawer  */}
<aside className="fixed inset-x-0 bottom-0 z-50 max-w-md mx-auto transform translate-y-full transition-transform duration-300 ease-out" id="bag-drawer">
{/*  Backdrop Shadow / Dismiss Barrier  */}
<div className="fixed inset-0 bg-black/70 -z-10 opacity-0 pointer-events-none transition-opacity" id="bag-backdrop"></div>
{/*  Drawer Content  */}
<div className="bg-carbon border-t border-white/15 rounded-t-2xl px-6 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-subtle-sheet">
{/*  Pull Notch Handle  */}
<div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-4"></div>
<div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
<div className="flex items-center gap-2">
<h3 className="font-serif text-lg text-cream">Mon Panier</h3>
<span className="text-xs text-gold font-mono">(1 Item)</span>
</div>
<button className="text-cream/50 hover:text-cream text-xs tracking-widest uppercase p-1 touch-btn" id="close-bag-btn">Close ✕</button>
</div>
{/*  Bag Item  */}
<div className="flex gap-3.5 items-center pb-4 border-b border-white/10">
<div className="w-16 h-16 bg-obsidian rounded border border-white/10 p-1 flex-shrink-0">
<img alt="NOIRÉ ÉCLAT" className="w-full h-full object-cover" src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png" />
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-serif text-base text-cream">NOIRÉ ÉCLAT</h4>
<span className="text-xs font-mono text-cream">$185</span>
</div>
<p className="text-[10px] text-cream/50 uppercase tracking-widest">50ml · Extrait Edition</p>
<p className="text-[10px] text-gold/80 mt-1">+ Included 2× Discovery Vials</p>
</div>
</div>
{/*  Order Summary & Checkout  */}
<div className="pt-4 space-y-2 mb-4">
<div className="flex justify-between text-xs text-cream/60">
<span>Shipping (Insured Courier)</span>
<span className="text-gold font-medium">Complimentary</span>
</div>
<div className="flex justify-between text-sm font-medium text-cream pt-1 border-t border-white/5">
<span>Subtotal</span>
<span className="font-mono text-gold-light text-base">$185 USD</span>
</div>
</div>
{/*  Checkout Action Button  */}
<button className="w-full py-4 bg-gold hover:bg-gold-light text-obsidian text-xs tracking-[0.2em] font-semibold uppercase transition-all shadow-gold-glow touch-btn flex items-center justify-center gap-2">
<span>Proceed To Checkout</span>
<span>→</span>
</button>
<p className="text-[8px] text-center text-cream/40 uppercase tracking-widest mt-2.5">
          Encrypted Checkout · Discreet Parisian Delivery
        </p>
</div>
</aside>
{/*  END: MobileBagSlideUpSheet  */}
{/*  BEGIN: MobileFooter  */}
{/*  Minimalist Luxury Mobile Footer  */}
<footer className="w-full bg-obsidian border-t border-white/10 px-6 pt-12 pb-[max(2rem,env(safe-area-inset-bottom))] text-center">
{/*  Newsletter Dispatch  */}
<div className="mb-10">
<span className="text-[9px] uppercase tracking-[0.3em] text-gold">Private Dispatch</span>
<h4 className="font-serif text-xl text-cream tracking-wide mt-1 mb-2">Join The Inner Circle</h4>
<p className="text-xs text-cream/60 max-w-[280px] mx-auto mb-4 leading-relaxed">
          Receive confidential release notices, private vintage flacons, and invitation-only decants.
        </p>
<form className="flex gap-2 max-w-[320px] mx-auto" onsubmit="event.preventDefault();">
<input className="flex-1 bg-carbon border border-white/15 px-3 py-2.5 text-xs text-cream focus:border-gold focus:ring-0 placeholder:text-cream/30" placeholder="Enter your email address" type="email" />
<button className="px-4 py-2.5 bg-cream text-obsidian font-medium text-xs tracking-wider uppercase touch-btn hover:bg-gold transition-colors" type="submit">
            Join
          </button>
</form>
</div>
{/*  Navigation Links  */}
<div className="grid grid-cols-2 gap-4 text-left max-w-[280px] mx-auto text-xs tracking-luxury text-cream/70 mb-10 border-y border-white/10 py-6">
<div className="space-y-2">
<a className="block hover:text-gold transition-colors" href="#">Fragrances</a>
<a className="block hover:text-gold transition-colors" href="#">Discovery Sets</a>
<a className="block hover:text-gold transition-colors" href="#">Bespoke Blends</a>
</div>
<div className="space-y-2">
<a className="block hover:text-gold transition-colors" href="#">Client Concierge</a>
<a className="block hover:text-gold transition-colors" href="#">Shipping &amp; Returns</a>
<a className="block hover:text-gold transition-colors" href="#">Parisian Flagship</a>
</div>
</div>
{/*  Brand Seal & Copyright  */}
<div className="space-y-2">
<p className="font-serif tracking-widest text-lg text-cream/90">NOIRÉ</p>
<p className="text-[8px] uppercase tracking-[0.25em] text-cream/40">
          © 2025 NOIRÉ HAUTE PARFUMERIE · ALL RIGHTS RESERVED
        </p>
</div>
</footer>
{/*  END: MobileFooter  */}
</div>
{/*  BEGIN: InteractiveScripts  */}
{/*  Navigation & Drawer Interactivity  */}

{/*  Product Configuration & Commerce Interactivity  */}

{/*  Interactive Notes & Scent Diagnostic Script  */}

{/*  END: InteractiveScripts  */}

    </div>
  );
}