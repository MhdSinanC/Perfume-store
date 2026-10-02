import React, { useState } from 'react';
import ProgressIndicator from './ProgressIndicator';

export default function DesktopView() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccord, setActiveAccord] = useState('top');
  const [cartQty, setCartQty] = useState(1);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [bagItemsCount, setBagItemsCount] = useState(1);
  const [isItemInBag, setIsItemInBag] = useState(true);

  const accordData = {
    top: {
      badge: 'Opening Symphony (0 - 20 mins)',
      title: 'Calabrian Bergamot & Sun-Dried Saffron',
      desc: 'A sudden beam of pure Mediterranean solar light piercing through black crystal. Distilled with zero-carbon supercritical carbon dioxide extraction to preserve volatile terpenes and sharp citrus brilliance.'
    },
    heart: {
      badge: 'The Core Identity (20 mins - 4 hrs)',
      title: 'Florentine Iris & Black Damask Rose',
      desc: 'The beating heart of the fragrance. Velvet petals steeped in midnight shadow, delivering a powdery, hypnotic depth that blooms on the skin as the temperature rises.'
    },
    base: {
      badge: 'The Hypnotic Sillage (4 hrs - 24+ hrs)',
      title: 'Smoked Amber & Obsidian Oud',
      desc: 'An indelible footprint. Ancient resins, charred Madagascar vanilla, and dense agarwood fuse with the wearer’s natural chemistry, leaving a trail that haunts long after departure.'
    }
  };

  const handleScrollLeft = () => {
    const el = document.getElementById('boutique-scroller');
    if (el) el.scrollBy({ left: -350, behavior: 'smooth' });
  };
  const handleScrollRight = () => {
    const el = document.getElementById('boutique-scroller');
    if (el) el.scrollBy({ left: 350, behavior: 'smooth' });
  };
  
  const handleAddToCart = () => {
    setIsItemInBag(true);
    setBagItemsCount(prev => prev + cartQty);
    setIsBagOpen(true);
  };

  return (
    <div>
      {/* Generated JSX */}

      <ProgressIndicator />
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-noir-950/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between transition-all duration-300 lg:hidden">
          <div className="flex justify-between items-center border-b border-champagne-500/10 pb-4">
            <span className="font-serif tracking-widest text-lg text-champagne-100">NOIRÉÉ</span>
            <button aria-label="Close Navigation Menu" onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-champagne-100/70 hover:text-champagne-100">
              <svg className="w-6 h-6 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-6 my-auto text-left">
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-champagne-100 hover:text-champagne-400 transition-colors tracking-wide" href="#signature-product">01. Fragrances</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-champagne-100 hover:text-champagne-400 transition-colors tracking-wide" href="#olfactory-accord">02. Scent Pyramid</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-champagne-100 hover:text-champagne-400 transition-colors tracking-wide" href="#collection">03. The Anthology</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-champagne-100 hover:text-champagne-400 transition-colors tracking-wide" href="#ritual">04. Fragrance Diagnostic</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-champagne-100 hover:text-champagne-400 transition-colors tracking-wide" href="#manifesto">05. Atelier Manifesto</a>
          </nav>
          <div className="border-t border-champagne-500/10 pt-6 flex flex-col gap-3 text-xs tracking-widest text-champagne-100/60 uppercase">
            <p className="text-champagne-400 font-medium">CONCIERGE & APPOINTMENTS</p>
            <p>18 Place Vendôme, 75001 Paris</p>
            <p>concierge@noire-parfums.com</p>
          </div>
        </div>
      )}

      
{/*  BEGIN: SiteNavigation  */}
<header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-champagne-500/15 bg-noir-950/80 backdrop-blur-md" id="site-header">
<div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:pl-32 h-24 flex justify-between lg:grid lg:grid-cols-3 items-center">{/*  Left: Brand Wordmark & Menu  */}
  <div className="flex items-center justify-start gap-4">
    <button aria-label="Open Navigation Menu" onClick={() => setIsMobileMenuOpen(true)} className="flex lg:hidden items-center text-champagne-100/80 hover:text-champagne-400 transition-colors p-2 -ml-2">
      <svg className="w-5 h-5 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <line x1="3" x2="21" y1="7" y2="7"></line>
        <line x1="3" x2="15" y1="17" y2="17"></line>
      </svg>
    </button>
    <a className="flex flex-col group focus:outline-none" href="#"><span className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase font-light text-gold-gradient group-hover:opacity-90 transition-opacity">NOIRÉÉ</span><span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-champagne-400/60 font-sans font-normal mt-0.5">Haute Parfumerie · Paris</span></a>
  </div>

  {/*  Center: Understated Navigation Links  */}
  <nav className="hidden lg:flex items-center justify-center space-x-8 text-[11px] tracking-widest uppercase font-light text-champagne-300/70"><a className="hover:text-champagne-100 transition-colors py-1 relative group flex-shrink-0" href="#collection">Collection<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne-400 transition-all duration-300 group-hover:w-full opacity-60"></span></a><a className="hover:text-champagne-100 transition-colors py-1 relative group flex-shrink-0" href="#olfactory-accord">Fragrance Discovery<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne-400 transition-all duration-300 group-hover:w-full opacity-60"></span></a><a className="hover:text-champagne-100 transition-colors py-1 relative group flex-shrink-0" href="#ritual">Scent Ritual<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne-400 transition-all duration-300 group-hover:w-full opacity-60"></span></a><a className="hover:text-champagne-100 transition-colors py-1 relative group flex-shrink-0" href="#manifesto">Maison<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne-400 transition-all duration-300 group-hover:w-full opacity-60"></span></a></nav>

  {/*  Right: Minimal Client Utilities & Bag Trigger  */}
  <div className="flex items-center justify-end space-x-6 sm:space-x-8 text-[11px] uppercase tracking-widest font-light text-champagne-300/80">
    <button aria-label="Search Fragrances" className="hidden md:flex items-center space-x-2 text-champagne-300/70 hover:text-champagne-100 transition-colors focus:outline-none" type="button">
      <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
      </svg>
      <span className="hidden xl:inline">Search</span>
    </button>
    <a className="hidden lg:block text-champagne-300/70 hover:text-champagne-100 transition-colors flex-shrink-0" href="#account">
      Client Space
    </a>
    <button aria-label="Open Shopping Bag" className="flex items-center space-x-2 py-1.5 px-3.5 rounded-full border border-champagne-500/25 hover:border-champagne-400/60 transition-all text-champagne-200 group bg-noir-900/40 backdrop-blur-sm" id="cart-drawer-trigger" type="button" onClick={() => setIsBagOpen(true)}>
      <span className="text-champagne-300/90 group-hover:text-champagne-100 text-[10px] tracking-widest font-normal">Bag</span>
      <span className="text-champagne-500 font-sans text-[10px] tracking-normal" id="bag-count-pill">({bagItemsCount})</span>
    </button>
  </div></div></header>
{/*  END: SiteNavigation  */}
<main>
{/*  BEGIN: HeroSection  */}
<section id="hero-experience" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 lg:px-14 xl:pl-32 overflow-hidden" data-purpose="hero-experience">
{/*  Background Ambient Glow & Lighting  */}
<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amberGlow/10 rounded-full blur-[120px] animate-glow-subtle"></div>
<div className="absolute -top-32 right-10 w-[450px] h-[450px] bg-champagne-600/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,7,9,0.7)_85%,#070709_100%)]"></div>
</div>
<div className="max-w-[1400px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
{/*  Left Editorial Copy  */}
<div className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1 space-y-7">
<div className="inline-flex items-center space-x-3 px-3.5 py-1.5 rounded-full border border-champagne-500/20 bg-noir-900/60 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-champagne-400 animate-ping"></span>
<span className="text-[10px] uppercase tracking-super-wide text-champagne-300">PARFUMS DE NOIRÉÉ · EDITION PRIVÉE</span>
</div>
<h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl text-champagne-100 font-normal leading-[1.1] tracking-tight">
            Scents that stay <br />
<span className="italic font-light text-gold-gradient font-serif">after you leave.</span>
</h1>
<p className="text-sm md:text-base text-champagne-300/70 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            A symphony of rare supercritical CO₂ extraction, chiaroscuro botanicals, and hypnotic amber resins. Crafted by master perfumers for the lingering, indelible memory.
          </p>
{/*  CTAs  */}
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-champagne-500 text-noir-950 text-xs uppercase tracking-super-wide font-medium hover:bg-champagne-400 transition-all duration-300 shadow-[0_0_30px_rgba(201,169,110,0.25)] text-center" href="#signature-product">
              Explore The Extrait
            </a>
<a className="w-full sm:w-auto px-7 py-4 rounded-full border border-champagne-500/30 text-champagne-300 text-xs uppercase tracking-super-wide hover:border-champagne-400 hover:text-champagne-100 transition-all text-center group" href="#olfactory-accord">
              Discover Signature Notes <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
</a>
</div>
{/*  Quick Metrics Bar  */}
<div className="pt-8 border-t border-champagne-500/10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 text-left">
<div>
<div className="text-[11px] text-champagne-400/60 uppercase tracking-widest">Concentration</div>
<div className="text-xs uppercase font-medium text-champagne-200 mt-1">24% Extrait</div>
</div>
<div>
<div className="text-[11px] text-champagne-400/60 uppercase tracking-widest">Longevity</div>
<div className="text-xs uppercase font-medium text-champagne-200 mt-1">14+ Hours</div>
</div>
<div>
<div className="text-[11px] text-champagne-400/60 uppercase tracking-widest">Origin</div>
<div className="text-xs uppercase font-medium text-champagne-200 mt-1">Grasse, France</div>
</div>
</div>
</div>
{/*  Center Floating Visual Centerpiece  */}
<div className="lg:col-span-7 flex justify-center items-center relative order-1 lg:order-2">
{/*  Back halo circle with subtle rotation  */}
<div className="absolute w-[360px] h-[360px] md:w-[500px] md:h-[500px] border border-champagne-500/15 rounded-full pointer-events-none"></div>
<div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] border border-champagne-500/10 rounded-full border-dashed pointer-events-none animate-spin" style={{"animationDuration": "90s"}}></div>
<div className="relative group z-10">
{/*  Hero Bottle Image Provided in Dataset: IMAGE_3  */}
<div className="relative overflow-visible animate-float-subtle">
<img alt="Luxury perfume bottle NOIRÉÉ ÉÉCLAT, heavy obsidian black faceted glass bottle with subtle amber liquid glowing from within" className="w-full max-w-[420px] md:max-w-[480px] h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] filter brightness-105" src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png" />
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 bg-amberGlow/25 rounded-full blur-2xl -z-10"></div>
</div>
{/*  Floating Micro Label Tag  */}
<div className="absolute -bottom-2 right-4 md:right-8 bg-noir-900/90 border border-champagne-500/30 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-2xl">
<p className="text-[9px] uppercase tracking-widest text-champagne-400/70">Masterwork No. 01</p>
<p className="font-serif text-sm text-champagne-100 italic tracking-wider">NOIRÉÉ ÉÉCLAT</p>
</div>
</div>
</div>
</div>
{/*  Bottom Down Arrow Scroll Link  */}
<a className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50 hover:opacity-100 transition-opacity" href="#anatomy">
<span className="text-[9px] tracking-super-wide uppercase text-champagne-400">Scroll to Explore</span>
<svg className="w-4 h-4 animate-bounce text-champagne-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: AnatomySection  */}
<section className="py-28 px-6 lg:px-14 xl:pl-32 border-t border-champagne-500/10 bg-noir-900/30 relative" data-purpose="perfume-breakdown" id="anatomy">
<div className="max-w-[1400px] mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
<p className="text-[10px] uppercase tracking-ultra-wide text-champagne-500 font-medium">Chapter 02 · Olfactory Architecture</p>
<h2 className="font-serif text-3xl md:text-5xl font-light text-champagne-100">The Anatomy of a Signature</h2>
<div className="w-12 h-[1px] bg-champagne-500/50 mx-auto mt-4"></div>
<p className="text-xs md:text-sm text-champagne-300/70 pt-2 font-light">
            Every molecule selected holds a deliberate tension between illuminated citrus and velvet smoke. Discover the layered pyramid that unfolds over hours on warm skin.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
{/*  Left: Narrative Olfactory Pyramid Steps  */}
<div className="lg:col-span-7 space-y-6">
{/*  Tier 1: Top Notes  */}
<div className="p-6 md:p-8 rounded-2xl bg-noir-850/80 border border-champagne-500/20 hover:border-champagne-400/50 transition-all duration-300 relative group">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] tracking-super-wide uppercase font-semibold text-champagne-400">01 / The First 15 Minutes</span>
<span className="text-xs uppercase font-serif tracking-widest text-champagne-300/50">Top Notes</span>
</div>
<h3 className="font-serif text-xl md:text-2xl text-champagne-100 mb-2">Calabrian Bergamot · Pink Pepper CO₂ · Persian Saffron</h3>
<p className="text-xs md:text-sm text-champagne-300/70 font-light leading-relaxed">
                A luminous, razor-sharp opening that electrifies the senses. Cold-pressed Italian citrus sparkles like cut crystal against the dry, exotic spice of red gold saffron.
              </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-[10px] px-2.5 py-1 rounded bg-noir-800 text-champagne-300/80 border border-champagne-500/10">Bright</span>
<span className="text-[10px] px-2.5 py-1 rounded bg-noir-800 text-champagne-300/80 border border-champagne-500/10">Electric Spiced</span>
<span className="text-[10px] px-2.5 py-1 rounded bg-noir-800 text-champagne-300/80 border border-champagne-500/10">Solar Facet</span>
</div>
</div>
{/*  Tier 2: Heart Notes  */}
<div className="p-6 md:p-8 rounded-2xl bg-noir-850/80 border border-champagne-500/20 hover:border-champagne-400/50 transition-all duration-300 relative group">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] tracking-super-wide uppercase font-semibold text-champagne-400">02 / Hours 01 to 06</span>
<span className="text-xs uppercase font-serif tracking-widest text-champagne-300/50">Heart Notes</span>
</div>
<h3 className="font-serif text-xl md:text-2xl text-champagne-100 mb-2">Black Tuscan Iris · Midnight Jasmine · Damask Rose Absolute</h3>
<p className="text-xs md:text-sm text-champagne-300/70 font-light leading-relaxed">
                Powdery aristocratic elegance folding into velvety shadows. Hand-gathered night jasmine brings a sensual, animalic bloom that deepens with body temperature.
              </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-[10px] px-2.5 py-1 rounded bg-noir-800 text-champagne-300/80 border border-champagne-500/10">Aristocratic Velvet</span>
<span className="text-[10px] px-2.5 py-1 rounded bg-noir-800 text-champagne-300/80 border border-champagne-500/10">Nocturnal Bloom</span>
<span className="text-[10px] px-2.5 py-1 rounded bg-noir-800 text-champagne-300/80 border border-champagne-500/10">Smoky Floral</span>
</div>
</div>
{/*  Tier 3: Base Notes  */}
<div className="p-6 md:p-8 rounded-2xl bg-noir-850/80 border border-champagne-500/20 hover:border-champagne-400/50 transition-all duration-300 relative group">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] tracking-super-wide uppercase font-semibold text-champagne-400">03 / The Lingering Aura (14+ Hours)</span>
<span className="text-xs uppercase font-serif tracking-widest text-champagne-300/50">Base Notes</span>
</div>
<h3 className="font-serif text-xl md:text-2xl text-champagne-100 mb-2">Amber Resin · Smoked Sandalwood · Bourbon Vanilla Bean</h3>
<p className="text-xs md:text-sm text-champagne-300/70 font-light leading-relaxed">
                Dark smoldering warmth that anchors into memory. Raw fossilized amber resin laced with creamy dark vanilla pod and smudged sandalwood sacred wood.
              </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-[10px] px-2.5 py-1 rounded bg-noir-800 text-champagne-300/80 border border-champagne-500/10">Fossilized Amber</span>
<span className="text-[10px] px-2.5 py-1 rounded bg-noir-800 text-champagne-300/80 border border-champagne-500/10">Smoked Woods</span>
<span className="text-[10px] px-2.5 py-1 rounded bg-noir-800 text-champagne-300/80 border border-champagne-500/10">Magnetic Trail</span>
</div>
</div>
</div>
{/*  Right: Visual Atmosphere Presentation with AMBRE NOIRÉ Dataset IMAGE_1  */}
<div className="lg:col-span-5 flex flex-col items-center">
<div className="w-full relative rounded-2xl overflow-hidden border border-champagne-500/20 bg-noir-900 shadow-2xl p-4">
<img alt="Luxury perfume bottle AMBRE NOIRÉ, square smoked glass bottle with gold geometric cap and minimalist ivory label" className="w-full h-[480px] object-cover rounded-xl filter contrast-105" src="/luxury_perfume_bottle_ambre_noir_square_smoked_glass_bottle_with_gold_geometric.png" />
<div className="absolute bottom-8 left-8 right-8 bg-noir-950/85 backdrop-blur-md p-5 rounded-xl border border-champagne-500/20 text-center">
<p className="text-[10px] uppercase tracking-widest text-champagne-400">Companion Reserve</p>
<p className="font-serif text-lg text-champagne-100 italic">AMBRE NOIRÉ · Raw Resin Extract</p>
<p className="text-[11px] text-champagne-300/60 mt-1">Formulated with pure aged fossil amber tears and Madagascar vanilla.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  END: AnatomySection  */}
{/*  BEGIN: InteractiveAccordSection  */}
<section className="py-24 px-6 lg:px-14 xl:pl-32 border-t border-champagne-500/10 relative" data-purpose="interactive-accord-selector" id="olfactory-accord">
<div className="max-w-[1280px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<span className="text-[10px] uppercase tracking-super-wide text-champagne-500 font-medium">Olfactory Tuning</span>
<h2 className="font-serif text-3xl md:text-4xl text-champagne-100 font-light mt-1">Interactive Scent Accord Matrix</h2>
</div>
<p className="text-xs text-champagne-300/60 max-w-sm mt-3 md:mt-0">
            Select an accord stratum below to inspect its molecular footprint, projection envelope, and seasonal resonance.
          </p>
</div>
{/*  Accord Tabs  */}
<div className="grid grid-cols-3 gap-3 md:gap-6 mb-10" id="accord-tabs">
<button className={`py-4 px-3 md:px-6 rounded-xl border text-left transition-all duration-300 ${activeAccord === 'top' ? 'border-champagne-500 bg-champagne-500/10 text-champagne-100' : 'border-champagne-500/20 bg-noir-900/60 text-champagne-300/70 hover:border-champagne-500/40'}`} onClick={() => setActiveAccord('top')} type="button">
<span className={`text-[9px] block uppercase tracking-widest mb-1 ${activeAccord === 'top' ? 'text-champagne-400' : 'text-champagne-400/60'}`}>Stratum 01</span>
<span className="font-serif text-base md:text-xl block font-medium">Top Accord</span>
<span className="text-[11px] text-champagne-300/70 hidden sm:inline">First Contact — Radiant</span>
</button>
<button className={`py-4 px-3 md:px-6 rounded-xl border text-left transition-all duration-300 ${activeAccord === 'heart' ? 'border-champagne-500 bg-champagne-500/10 text-champagne-100' : 'border-champagne-500/20 bg-noir-900/60 text-champagne-300/70 hover:border-champagne-500/40'}`} onClick={() => setActiveAccord('heart')} type="button">
<span className={`text-[9px] block uppercase tracking-widest mb-1 ${activeAccord === 'heart' ? 'text-champagne-400' : 'text-champagne-400/60'}`}>Stratum 02</span>
<span className="font-serif text-base md:text-xl block font-medium">Heart Accord</span>
<span className="text-[11px] text-champagne-300/70 hidden sm:inline">The Core Identity</span>
</button>
<button className={`py-4 px-3 md:px-6 rounded-xl border text-left transition-all duration-300 ${activeAccord === 'base' ? 'border-champagne-500 bg-champagne-500/10 text-champagne-100' : 'border-champagne-500/20 bg-noir-900/60 text-champagne-300/70 hover:border-champagne-500/40'}`} onClick={() => setActiveAccord('base')} type="button">
<span className={`text-[9px] block uppercase tracking-widest mb-1 ${activeAccord === 'base' ? 'text-champagne-400' : 'text-champagne-400/60'}`}>Stratum 03</span>
<span className="font-serif text-base md:text-xl block font-medium">Base Accord</span>
<span className="text-[11px] text-champagne-300/70 hidden sm:inline">The Hypnotic Sillage</span>
</button>
</div>
{/*  Dynamic Accord Details Display Container  */}
<div className="p-8 md:p-12 rounded-2xl border border-champagne-500/20 bg-noir-900/80 backdrop-blur-md relative overflow-hidden transition-all duration-500" id="accord-display">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 space-y-5">
<span className="inline-block px-3 py-1 rounded bg-champagne-500/20 text-champagne-300 text-[10px] tracking-widest uppercase" id="accord-badge">{accordData[activeAccord].badge}</span>
<h3 className="font-serif text-2xl md:text-4xl text-champagne-100 font-light" id="accord-title">{accordData[activeAccord].title}</h3>
<p className="text-xs md:text-sm text-champagne-300/80 font-light leading-relaxed" id="accord-desc">{accordData[activeAccord].desc}</p>
{/*  Olfactory Metric Gauges  */}
<div className="grid grid-cols-3 gap-4 pt-4 border-t border-champagne-500/10">
<div>
<span className="text-[10px] uppercase text-champagne-400/70 block">Projection</span>
<span className="text-sm font-medium text-champagne-100" id="metric-projection">Magnetic (6 ft)</span>
</div>
<div>
<span className="text-[10px] uppercase text-champagne-400/70 block">Vaporization</span>
<span className="text-sm font-medium text-champagne-100" id="metric-speed">Brisk &amp; Lively</span>
</div>
<div>
<span className="text-[10px] uppercase text-champagne-400/70 block">Ideal Timing</span>
<span className="text-sm font-medium text-champagne-100" id="metric-timing">Twilight Arrival</span>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col justify-center items-center p-6 rounded-xl bg-noir-950/60 border border-champagne-500/10">
<span className="text-[10px] uppercase tracking-widest text-champagne-400/60 mb-3">Distillation Profile</span>
<div className="w-full space-y-3 text-xs">
<div>
<div className="flex justify-between text-champagne-300/80 mb-1">
<span className="">Sillage Volatility</span>
<span id="stat-1" className="">88%</span>
</div>
<div className="w-full bg-noir-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-champagne-400 h-full rounded-full transition-all duration-700" id="stat-bar-1" style={{"width": "88%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-champagne-300/80 mb-1">
<span className="">Warmth Factor</span>
<span id="stat-2" className="">42%</span>
</div>
<div className="w-full bg-noir-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-amberGlow h-full rounded-full transition-all duration-700" id="stat-bar-2" style={{"width": "42%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-champagne-300/80 mb-1">
<span className="">Memory Fixation</span>
<span id="stat-3" className="">94%</span>
</div>
<div className="w-full bg-noir-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-champagne-500 h-full rounded-full transition-all duration-700" id="stat-bar-3" style={{"width": "94%"}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  END: InteractiveAccordSection  */}
{/*  BEGIN: SignatureProductStudio  */}
<section className="py-28 px-6 lg:px-14 xl:pl-32 border-t border-champagne-500/10 bg-noir-950 relative" data-purpose="product-studio-and-purchase" id="signature-product">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
{/*  Product Gallery Left (Features IMAGE_3)  */}
<div className="lg:col-span-7 space-y-4">
<div className="relative rounded-2xl overflow-hidden border border-champagne-500/20 bg-noir-900/60 p-8 flex items-center justify-center min-h-[580px]">
{/*  Concentration Badge  */}
<div className="absolute top-6 left-6 z-10">
<span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] tracking-wider uppercase bg-noir-950/80 border border-champagne-500/30 text-champagne-300 font-medium">
                  EXTRAIT DE PARFUM 24%
                </span>
</div>
{/*  Main Bottle Display  */}
<img alt="NOIRÉÉ ÉÉCLAT luxury fragrance bottle" className="w-full max-w-[420px] h-auto object-contain transition-transform duration-700 hover:scale-105" id="main-product-image" src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png" />
<div className="absolute bottom-6 right-6 flex items-center space-x-2 text-[10px] uppercase tracking-widest text-champagne-400/60">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="">Interactive Flacon</span>
</div>
</div>
{/*  Alternative Angles / Mood Thumbs  */}
<div className="grid grid-cols-3 gap-4">
<button className="gallery-thumb-btn border-2 border-champagne-500 rounded-xl overflow-hidden p-2 bg-noir-900 aspect-square flex items-center justify-center" type="button">
<img alt="NOIRÉÉ ÉÉCLAT Studio Angle" className="w-16 h-16 object-contain" src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png" />
</button>
<button className="gallery-thumb-btn border border-champagne-500/20 rounded-xl overflow-hidden p-2 bg-noir-900 aspect-square flex items-center justify-center hover:border-champagne-500/60 transition-colors" type="button">
<img alt="Ambre Noir Warm Amber Texture" className="w-16 h-16 object-cover rounded" src="/luxury_perfume_bottle_ambre_noir_square_smoked_glass_bottle_with_gold_geometric.png" />
</button>
<button className="gallery-thumb-btn border border-champagne-500/20 rounded-xl overflow-hidden p-2 bg-noir-900 aspect-square flex items-center justify-center hover:border-champagne-500/60 transition-colors" type="button">
<img alt="Velvet Dusk Nocturnal Vibe" className="w-16 h-16 object-cover rounded" src="/luxury_perfume_bottle_velvet_dusk_slender_dark_violet_tinted_frosted_glass.png" />
</button>
</div>
</div>
{/*  Product Details & Configuration Right  */}
<div className="lg:col-span-5 space-y-8">
<div>
<div className="flex items-center justify-between text-xs text-champagne-400 tracking-widest uppercase mb-2">
<span className="">Maison Signature Collection</span>
<span className="text-champagne-500/80">Batch No. 042 / Grasse</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl text-champagne-100 font-normal">
                NOIRÉÉ ÉÉCLAT
              </h2>
<p className="font-serif italic text-lg text-champagne-400 mt-1">Eau de Parfum Intense</p>
<div className="flex items-baseline space-x-3 mt-4">
<span className="text-3xl font-serif text-champagne-100" id="price-display">$185</span>
<span className="text-xs uppercase text-champagne-400/60 tracking-wider">USD · Complimentary Global Express</span>
</div>
</div>
<p className="text-xs md:text-sm text-champagne-300/70 font-light leading-relaxed">
              Our flagship olfactory monument. Deep amber resins encased in faceted obsidian crystal, infused with rare night jasmine, Calabrian bergamot, and hand-scraped bourbon vanilla.
            </p>
{/*  Size Selector  */}
<div className="space-y-3">
<label className="block text-xs uppercase tracking-super-wide text-champagne-300">Select Volume</label>
<div className="grid grid-cols-3 gap-3" id="size-selector">
<button className="size-pill py-3 px-2 rounded-xl border border-champagne-500/20 text-center hover:border-champagne-500/60 transition-all" data-price="115" data-size="30ml" type="button">
<div className="text-xs font-medium text-champagne-200">30 ML</div>
<div className="text-[10px] text-champagne-400/70">$115</div>
</button>
<button className="size-pill active py-3 px-2 rounded-xl border-2 border-champagne-500 bg-champagne-500/10 text-center transition-all" data-price="185" data-size="50ml" type="button">
<div className="text-xs font-semibold text-champagne-100">50 ML</div>
<div className="text-[10px] text-champagne-400">$185 · Signature</div>
</button>
<button className="size-pill py-3 px-2 rounded-xl border border-champagne-500/20 text-center hover:border-champagne-500/60 transition-all" data-price="280" data-size="100ml" type="button">
<div className="text-xs font-medium text-champagne-200">100 ML</div>
<div className="text-[10px] text-champagne-400/70">$280</div>
</button>
</div>
</div>
{/*  Quantity & Add to Cart  */}
<div className="space-y-4 pt-2">
<div className="flex items-center space-x-4">
{/*  Quantity Stepper  */}
<div className="inline-flex items-center border border-champagne-500/30 rounded-full px-3 py-2 bg-noir-900">
<button aria-label="Decrease quantity" className="w-7 h-7 flex items-center justify-center text-champagne-300 hover:text-champagne-100 text-sm" id="qty-minus" type="button" onClick={() => setCartQty(Math.max(1, cartQty - 1))}>-</button>
<span className="px-3 text-xs font-medium text-champagne-100" id="qty-val">{cartQty}</span>
<button aria-label="Increase quantity" className="w-7 h-7 flex items-center justify-center text-champagne-300 hover:text-champagne-100 text-sm" id="qty-plus" type="button" onClick={() => setCartQty(cartQty + 1)}>+</button>
</div>
{/*  Primary Add to Bag Button  */}
<button className="flex-1 py-4 px-6 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-super-wide font-medium transition-all shadow-[0_4px_25px_rgba(201,169,110,0.25)] flex items-center justify-center space-x-2" id="add-to-bag-cta" type="button" onClick={handleAddToCart}>
<span className="">Add To Bag</span>
<span className="">—</span>
<span id="btn-price-preview" className="">${185 * cartQty}</span>
</button>
{/*  Wishlist Heart Button  */}
<button aria-label="Add to Wishlist" className="p-4 rounded-full border border-champagne-500/30 text-champagne-300 hover:text-champagne-100 hover:border-champagne-400 transition-colors" type="button">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
{/*  Buy Now Direct Action  */}
<button className="w-full py-3.5 px-6 rounded-full border border-champagne-500/40 text-champagne-200 text-xs uppercase tracking-super-wide hover:bg-champagne-500/10 transition-colors" id="buy-now-cta" type="button">
                Instant Luxury Checkout
              </button>
</div>
{/*  Accordion Details  */}
<div className="border-t border-champagne-500/15 pt-6 space-y-4">
{/*  Tab 1  */}
<details className="group cursor-pointer">
<summary className="flex justify-between items-center text-xs uppercase tracking-widest text-champagne-200 py-2 list-none">
<span className="">The Olfactory Pyramid</span>
<span className="transition-transform group-open:rotate-180 text-champagne-400">+</span>
</summary>
<div className="text-xs text-champagne-300/70 font-light pt-2 pb-4 leading-relaxed">
                  Head: Calabrian Bergamot, Pink Pepper, Saffron.<br />
                  Heart: Tuscan Orris, Midnight Jasmine, Rose Absolute.<br />
                  Base: Smoked Sandalwood, Bourbon Amber, Rare Benzoin.
                </div>
</details>
{/*  Tab 2  */}
<details className="group cursor-pointer border-t border-champagne-500/10 pt-4">
<summary className="flex justify-between items-center text-xs uppercase tracking-widest text-champagne-200 py-2 list-none">
<span className="">Artisan Craftsmanship &amp; Ethics</span>
<span className="transition-transform group-open:rotate-180 text-champagne-400">+</span>
</summary>
<div className="text-xs text-champagne-300/70 font-light pt-2 pb-4 leading-relaxed">
                  Each bottle is sculpted in France from 40% recycled obsidian glass, numbered individually, and aged in smoked French oak barrels for 90 days before cold hand-filtration.
                </div>
</details>
{/*  Tab 3  */}
<details className="group cursor-pointer border-t border-champagne-500/10 pt-4">
<summary className="flex justify-between items-center text-xs uppercase tracking-widest text-champagne-200 py-2 list-none">
<span className="">The Complimentary Ritual (2 Samples Included)</span>
<span className="transition-transform group-open:rotate-180 text-champagne-400">+</span>
</summary>
<div className="text-xs text-champagne-300/70 font-light pt-2 pb-4 leading-relaxed">
                  Every order includes complimentary 2ml discovery vials of AMBRE NOIRÉ and VELVET DUSK in an embossed matte black presentation envelope.
                </div>
</details>
</div>
</div>
</div>
</div>
</section>
{/*  END: SignatureProductStudio  */}
{/*  BEGIN: CuratedCollectionGallery  */}
<section className="py-28 px-6 lg:px-14 xl:pl-32 border-t border-champagne-500/10 bg-noir-900/40 relative" data-purpose="horizontal-boutique" id="collection">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
<div className="space-y-2">
<span className="text-[10px] uppercase tracking-ultra-wide text-champagne-500 font-medium">Chapter 04 · Complete Anthology</span>
<h2 className="font-serif text-3xl md:text-5xl text-champagne-100 font-light">The Extrait Collection</h2>
</div>
<div className="flex items-center space-x-4 mt-6 md:mt-0">
<button aria-label="Scroll boutique left" className="w-11 h-11 rounded-full border border-champagne-500/30 flex items-center justify-center text-champagne-300 hover:border-champagne-400 hover:text-champagne-100 transition-colors" id="scroll-left-btn" type="button" onClick={handleScrollLeft}>
              ←
            </button>
<button aria-label="Scroll boutique right" className="w-11 h-11 rounded-full border border-champagne-500/30 flex items-center justify-center text-champagne-300 hover:border-champagne-400 hover:text-champagne-100 transition-colors" id="scroll-right-btn" type="button" onClick={handleScrollRight}>
              →
            </button>
</div>
</div>
{/*  Horizontal Scrollable Container  */}
<div className="flex space-x-6 overflow-x-auto pb-8 hide-scrollbar scroll-smooth" id="boutique-scroller">
{/*  Fragrance 1: NOIRÉÉ ÉÉCLAT (IMAGE_3)  */}
<div className="flex-none w-[320px] md:w-[360px] bg-noir-850/90 rounded-2xl border border-champagne-500/15 p-6 hover:border-champagne-400/50 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-noir-900 relative mb-6 flex items-center justify-center">
<img alt="NOIRÉÉ ÉÉCLAT Perfume bottle" className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-500" src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png" />
<span className="absolute top-3 right-3 text-[9px] uppercase tracking-widest bg-noir-950/80 px-2 py-1 rounded text-champagne-400 border border-champagne-500/20">Signature</span>
</div>
<p className="text-[10px] uppercase tracking-widest text-champagne-400/70">Eau de Parfum</p>
<h3 className="font-serif text-2xl text-champagne-100 group-hover:text-champagne-400 transition-colors">NOIRÉÉ ÉÉCLAT</h3>
<p className="text-xs text-champagne-300/60 mt-1 line-clamp-2">Calabrian bergamot, dark orris root, bourbon amber smoke.</p>
</div>
<div className="mt-6 pt-4 border-t border-champagne-500/10 flex items-center justify-between">
<span className="font-serif text-lg text-champagne-200">$185</span>
<button className="px-4 py-2 rounded-full border border-champagne-500/30 text-[10px] uppercase tracking-widest text-champagne-300 hover:bg-champagne-500 hover:text-noir-950 transition-all" onClick="quickAdd('NOIRÉÉ ÉÉCLAT', 185)" type="button">
                Quick Add
              </button>
</div>
</div>
{/*  Fragrance 2: AMBRE NOIRÉ (IMAGE_1)  */}
<div className="flex-none w-[320px] md:w-[360px] bg-noir-850/90 rounded-2xl border border-champagne-500/15 p-6 hover:border-champagne-400/50 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-noir-900 relative mb-6 flex items-center justify-center">
<img alt="AMBRE NOIRÉ Perfume bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/luxury_perfume_bottle_ambre_noir_square_smoked_glass_bottle_with_gold_geometric.png" />
<span className="absolute top-3 right-3 text-[9px] uppercase tracking-widest bg-noir-950/80 px-2 py-1 rounded text-champagne-400 border border-champagne-500/20">Extrait Rare</span>
</div>
<p className="text-[10px] uppercase tracking-widest text-champagne-400/70">Pure Essence</p>
<h3 className="font-serif text-2xl text-champagne-100 group-hover:text-champagne-400 transition-colors">AMBRE NOIRÉ</h3>
<p className="text-xs text-champagne-300/60 mt-1 line-clamp-2">Smoked amber crystals, charred oak, Madagascar bean.</p>
</div>
<div className="mt-6 pt-4 border-t border-champagne-500/10 flex items-center justify-between">
<span className="font-serif text-lg text-champagne-200">$195</span>
<button className="px-4 py-2 rounded-full border border-champagne-500/30 text-[10px] uppercase tracking-widest text-champagne-300 hover:bg-champagne-500 hover:text-noir-950 transition-all" onClick="quickAdd('AMBRE NOIRÉ', 195)" type="button">
                Quick Add
              </button>
</div>
</div>
{/*  Fragrance 3: VELVET DUSK (IMAGE_4)  */}
<div className="flex-none w-[320px] md:w-[360px] bg-noir-850/90 rounded-2xl border border-champagne-500/15 p-6 hover:border-champagne-400/50 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-noir-900 relative mb-6 flex items-center justify-center">
<img alt="VELVET DUSK Perfume bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/luxury_perfume_bottle_velvet_dusk_slender_dark_violet_tinted_frosted_glass.png" />
<span className="absolute top-3 right-3 text-[9px] uppercase tracking-widest bg-noir-950/80 px-2 py-1 rounded text-champagne-400 border border-champagne-500/20">Eau de Parfum</span>
</div>
<p className="text-[10px] uppercase tracking-widest text-champagne-400/70">Nocturnal Blend</p>
<h3 className="font-serif text-2xl text-champagne-100 group-hover:text-champagne-400 transition-colors">VELVET DUSK</h3>
<p className="text-xs text-champagne-300/60 mt-1 line-clamp-2">Dark violet petals, night-blooming jasmine, cedar haze.</p>
</div>
<div className="mt-6 pt-4 border-t border-champagne-500/10 flex items-center justify-between">
<span className="font-serif text-lg text-champagne-200">$165</span>
<button className="px-4 py-2 rounded-full border border-champagne-500/30 text-[10px] uppercase tracking-widest text-champagne-300 hover:bg-champagne-500 hover:text-noir-950 transition-all" onClick="quickAdd('VELVET DUSK', 165)" type="button">
                Quick Add
              </button>
</div>
</div>
{/*  Fragrance 4: ROSE ÉTHER  */}
<div className="flex-none w-[320px] md:w-[360px] bg-noir-850/90 rounded-2xl border border-champagne-500/15 p-6 hover:border-champagne-400/50 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-noir-900 relative mb-6 flex items-center justify-center p-8">
<div className="w-28 h-44 rounded-full border border-champagne-500/40 bg-gradient-to-b from-rose-950/60 to-noir-950 flex flex-col items-center justify-center p-4 text-center">
<span className="text-[8px] tracking-widest uppercase text-rose-300">Rose Éther</span>
<span className="font-serif text-xs text-champagne-300 mt-2">Atelier Batch</span>
</div>
</div>
<p className="text-[10px] uppercase tracking-widest text-champagne-400/70">Pure Essence</p>
<h3 className="font-serif text-2xl text-champagne-100 group-hover:text-champagne-400 transition-colors">ROSE ÉTHER</h3>
<p className="text-xs text-champagne-300/60 mt-1 line-clamp-2">Damascena rose petal extract, cold frankincense, silver birch.</p>
</div>
<div className="mt-6 pt-4 border-t border-champagne-500/10 flex items-center justify-between">
<span className="font-serif text-lg text-champagne-200">$175</span>
<button className="px-4 py-2 rounded-full border border-champagne-500/30 text-[10px] uppercase tracking-widest text-champagne-300 hover:bg-champagne-500 hover:text-noir-950 transition-all" onClick="quickAdd('ROSE ÉTHER', 175)" type="button">
                Quick Add
              </button>
</div>
</div>
{/*  Fragrance 5: SAFFRON VEIL  */}
<div className="flex-none w-[320px] md:w-[360px] bg-noir-850/90 rounded-2xl border border-champagne-500/15 p-6 hover:border-champagne-400/50 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-noir-900 relative mb-6 flex items-center justify-center p-8">
<div className="w-28 h-44 rounded-md border border-amber-500/40 bg-gradient-to-b from-amber-950/50 to-noir-950 flex flex-col items-center justify-center p-4 text-center">
<span className="text-[8px] tracking-widest uppercase text-amber-300">Saffron Veil</span>
<span className="font-serif text-xs text-champagne-300 mt-2">Extrait Noir</span>
</div>
</div>
<p className="text-[10px] uppercase tracking-widest text-champagne-400/70">Extrait Noir</p>
<h3 className="font-serif text-2xl text-champagne-100 group-hover:text-champagne-400 transition-colors">SAFFRON VEIL</h3>
<p className="text-xs text-champagne-300/60 mt-1 line-clamp-2">Crimson saffron pistils, smoked leather hide, dark patchouli.</p>
</div>
<div className="mt-6 pt-4 border-t border-champagne-500/10 flex items-center justify-between">
<span className="font-serif text-lg text-champagne-200">$210</span>
<button className="px-4 py-2 rounded-full border border-champagne-500/30 text-[10px] uppercase tracking-widest text-champagne-300 hover:bg-champagne-500 hover:text-noir-950 transition-all" onClick="quickAdd('SAFFRON VEIL', 210)" type="button">
                Quick Add
              </button>
</div>
</div>
{/*  Fragrance 6: BOIS BLANC  */}
<div className="flex-none w-[320px] md:w-[360px] bg-noir-850/90 rounded-2xl border border-champagne-500/15 p-6 hover:border-champagne-400/50 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-noir-900 relative mb-6 flex items-center justify-center p-8">
<div className="w-28 h-44 rounded-lg border border-champagne-400/30 bg-gradient-to-b from-slate-900 to-noir-950 flex flex-col items-center justify-center p-4 text-center">
<span className="text-[8px] tracking-widest uppercase text-champagne-200">Bois Blanc</span>
<span className="font-serif text-xs text-champagne-300 mt-2">Eau de Parfum</span>
</div>
</div>
<p className="text-[10px] uppercase tracking-widest text-champagne-400/70">Wood Essence</p>
<h3 className="font-serif text-2xl text-champagne-100 group-hover:text-champagne-400 transition-colors">BOIS BLANC</h3>
<p className="text-xs text-champagne-300/60 mt-1 line-clamp-2">Bleached cedar, white sandalwood milk, sheer musk mist.</p>
</div>
<div className="mt-6 pt-4 border-t border-champagne-500/10 flex items-center justify-between">
<span className="font-serif text-lg text-champagne-200">$180</span>
<button className="px-4 py-2 rounded-full border border-champagne-500/30 text-[10px] uppercase tracking-widest text-champagne-300 hover:bg-champagne-500 hover:text-noir-950 transition-all" onClick="quickAdd('BOIS BLANC', 180)" type="button">
                Quick Add
              </button>
</div>
</div>
</div>
</div>
</section>
{/*  END: CuratedCollectionGallery  */}
{/*  BEGIN: BespokeRitualConsultation  */}
<section className="py-28 px-6 lg:px-14 xl:pl-32 border-t border-champagne-500/10 bg-noir-950 relative" data-purpose="diagnostic-ritual" id="ritual">
<div className="max-w-[1200px] mx-auto">
<div className="text-center max-w-xl mx-auto mb-16 space-y-3">
<span className="text-[10px] uppercase tracking-ultra-wide text-champagne-500 font-medium">Chapter 05 · Bespoke Consultation</span>
<h2 className="font-serif text-3xl md:text-5xl text-champagne-100 font-light">Find the Scent That Feels Like You</h2>
<p className="text-xs md:text-sm text-champagne-300/70 font-light">
            An intimate 3-parameter olfactory reading formulated by our master perfumer to mirror your interior landscape.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
{/*  Ritual Form Controls Left  */}
<div className="lg:col-span-7 bg-noir-900/70 border border-champagne-500/20 rounded-2xl p-8 space-y-8">
{/*  Step 1: Mood  */}
<div>
<div className="flex justify-between items-center mb-3">
<span className="text-[11px] uppercase tracking-widest text-champagne-300 font-medium">01 · Desired Aura &amp; Mood</span>
<span className="text-[10px] text-champagne-500/80">Step 1 of 3</span>
</div>
<div className="grid grid-cols-2 gap-3" id="quiz-mood">
<button className="quiz-btn active py-3 px-4 rounded-xl border border-champagne-500 bg-champagne-500/15 text-xs text-champagne-100 text-left transition-all" data-mood="dark" type="button">
                  Dark &amp; Mysterious
                </button>
<button className="quiz-btn py-3 px-4 rounded-xl border border-champagne-500/20 bg-noir-800 text-xs text-champagne-300/80 hover:border-champagne-500/40 text-left transition-all" data-mood="warm" type="button">
                  Warm &amp; Sensual
                </button>
<button className="quiz-btn py-3 px-4 rounded-xl border border-champagne-500/20 bg-noir-800 text-xs text-champagne-300/80 hover:border-champagne-500/40 text-left transition-all" data-mood="fresh" type="button">
                  Fresh &amp; Luminous
                </button>
<button className="quiz-btn py-3 px-4 rounded-xl border border-champagne-500/20 bg-noir-800 text-xs text-champagne-300/80 hover:border-champagne-500/40 text-left transition-all" data-mood="romantic" type="button">
                  Soft &amp; Aristocratic
                </button>
</div>
</div>
{/*  Step 2: Intensity  */}
<div>
<div className="flex justify-between items-center mb-3">
<span className="text-[11px] uppercase tracking-widest text-champagne-300 font-medium">02 · Sillage &amp; Intensity</span>
<span className="text-[10px] text-champagne-500/80">Step 2 of 3</span>
</div>
<div className="grid grid-cols-3 gap-3" id="quiz-intensity">
<button className="quiz-btn py-3 px-3 rounded-xl border border-champagne-500/20 bg-noir-800 text-xs text-champagne-300/80 hover:border-champagne-500/40 text-center transition-all" data-intensity="subtle" type="button">
                  Subtle Whisper
                </button>
<button className="quiz-btn active py-3 px-3 rounded-xl border border-champagne-500 bg-champagne-500/15 text-xs text-champagne-100 text-center transition-all" data-intensity="balanced" type="button">
                  Balanced Sillage
                </button>
<button className="quiz-btn py-3 px-3 rounded-xl border border-champagne-500/20 bg-noir-800 text-xs text-champagne-300/80 hover:border-champagne-500/40 text-center transition-all" data-intensity="intense" type="button">
                  Intense Resonance
                </button>
</div>
</div>
{/*  Step 3: Elemental World  */}
<div>
<div className="flex justify-between items-center mb-3">
<span className="text-[11px] uppercase tracking-widest text-champagne-300 font-medium">03 · Primary Element</span>
<span className="text-[10px] text-champagne-500/80">Step 3 of 3</span>
</div>
<div className="grid grid-cols-4 gap-2.5" id="quiz-element">
<button className="quiz-btn active py-3 rounded-xl border border-champagne-500 bg-champagne-500/15 text-xs text-champagne-100 text-center transition-all" data-element="night" type="button">
                  Night
                </button>
<button className="quiz-btn py-3 rounded-xl border border-champagne-500/20 bg-noir-800 text-xs text-champagne-300/80 hover:border-champagne-500/40 text-center transition-all" data-element="day" type="button">
                  Dawn
                </button>
<button className="quiz-btn py-3 rounded-xl border border-champagne-500/20 bg-noir-800 text-xs text-champagne-300/80 hover:border-champagne-500/40 text-center transition-all" data-element="earth" type="button">
                  Earth
                </button>
<button className="quiz-btn py-3 rounded-xl border border-champagne-500/20 bg-noir-800 text-xs text-champagne-300/80 hover:border-champagne-500/40 text-center transition-all" data-element="air" type="button">
                  Smoke
                </button>
</div>
</div>
</div>
{/*  Dynamic Result Card Right  */}
<div className="lg:col-span-5 bg-gradient-to-b from-noir-900 to-noir-850 border border-champagne-500/30 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
<div className="space-y-4">
<span className="text-[9px] uppercase tracking-ultra-wide px-3 py-1 rounded bg-champagne-500/20 text-champagne-300 inline-block font-semibold">
                Your Bespoke Resonance
              </span>
<h3 className="font-serif text-3xl text-champagne-100 font-normal" id="recommend-title">
                NOIRÉÉ ÉÉCLAT
              </h3>
<p className="font-serif italic text-champagne-400 text-sm" id="recommend-quote">
                "For the enigmatic persona who occupies a room without raising their voice."
              </p>
<p className="text-xs text-champagne-300/70 font-light leading-relaxed" id="recommend-body">
                Your preference for dark mystique paired with balanced sillage aligns perfectly with our obsidian-infused iris and Persian saffron accord.
              </p>
{/*  Compatibility Ring  */}
<div className="p-4 rounded-xl bg-noir-950/80 border border-champagne-500/15 flex items-center justify-between">
<div>
<div className="text-[10px] uppercase text-champagne-400 tracking-wider">Aura Compatibility</div>
<div className="text-2xl font-serif text-champagne-100" id="match-percent">98.4%</div>
</div>
<div className="text-right">
<div className="text-[10px] uppercase text-champagne-400 tracking-wider">Primary Scent Family</div>
<div className="text-xs text-champagne-200" id="match-family">Smoky Amber Floriental</div>
</div>
</div>
</div>
{/*  Direct Claim CTA  */}
<div className="pt-6">
<button className="w-full py-4 px-6 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-super-wide font-medium transition-all shadow-[0_4px_25px_rgba(201,169,110,0.2)]" id="claim-scent-btn" type="button">
                Claim Your Scent — Add To Bag ($185)
              </button>
</div>
</div>
</div>
</div>
</section>
{/*  END: BespokeRitualConsultation  */}
{/*  BEGIN: CinematicPhilosophyCampaign  */}
<section className="relative py-32 px-6 lg:px-14 xl:pl-32 border-t border-champagne-500/10 overflow-hidden" data-purpose="cinematic-campaign-banner" id="manifesto">
{/*  Full Bleed Image Provided: IMAGE_5  */}
<div className="absolute inset-0 z-0">
<img alt="Cinematic luxury fashion fragrance campaign photography with dark luxury glass perfume bottle and golden dust" className="w-full h-full object-cover filter brightness-[0.4] contrast-125" src="/cinematic_luxury_fashion_fragrance_campaign_photography_close_up_of_hands.png" />
<div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/60 to-noir-950"></div>
</div>
<div className="max-w-[1100px] mx-auto relative z-10 text-center space-y-8">
<span className="text-[10px] uppercase tracking-[0.4em] text-champagne-400 font-medium inline-block border-b border-champagne-500/40 pb-2">
          Maison Manifesto
        </span>
<h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-champagne-100 font-light leading-tight">
          “Every scent leaves a memory. <br className="hidden md:inline" />
          We do not create fragrance; <br />
<span className="italic font-normal text-gold-gradient font-serif">we distill unforgotten moments.”</span>
</h2>
<p className="text-sm md:text-base text-champagne-200/80 font-light max-w-2xl mx-auto leading-relaxed">
          Hand-poured in Grasse, aged in smoked French oak barrels, and bottled in hand-blown obsidian crystal flacons. Born at the intersection of haute couture and alchemy.
        </p>
<div className="pt-6 flex justify-center items-center space-x-12 text-champagne-400/80 text-xs tracking-super-wide uppercase">
<div className="">Paris</div>
<span className="text-champagne-500/40">✦</span>
<div className="">Grasse</div>
<span className="text-champagne-500/40">✦</span>
<div className="">Kyoto</div>
<span className="text-champagne-500/40">✦</span>
<div className="">New York</div>
</div>
</div>
</section>
{/*  END: CinematicPhilosophyCampaign  */}
</main>
{/*  BEGIN: LuxuryShoppingBagDrawer  */}
<aside aria-hidden={!isBagOpen} className={`fixed inset-y-0 right-0 w-full max-w-md bg-noir-900 border-l border-champagne-500/20 z-[100] transform transition-transform duration-500 ease-in-out shadow-2xl flex flex-col justify-between ${isBagOpen ? 'translate-x-0' : 'translate-x-full'}`} data-purpose="shopping-bag-panel" id="shopping-bag-drawer">
{/*  Drawer Header  */}
<div className="p-6 border-b border-champagne-500/15 flex items-center justify-between bg-noir-950/80">
<div>
<h3 className="font-serif text-xl text-champagne-100">Your Private Selection</h3>
<p className="text-[10px] uppercase tracking-widest text-champagne-400/70 mt-0.5">Complimentary Ritual Packaging Included</p>
</div>
<button aria-label="Close Shopping Bag" className="p-2 text-champagne-400 hover:text-champagne-100 transition-colors" id="close-drawer-btn" type="button" onClick={() => setIsBagOpen(false)}>
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
{/*  Drawer Items Container  */}
<div className="p-6 overflow-y-auto space-y-6 flex-1">
{/*  Cart Item  */}

{isItemInBag ? (
  <div className="flex space-x-4 p-4 rounded-xl bg-noir-950 border border-champagne-500/15" id="cart-item-primary">
    <div className="w-20 h-24 rounded-lg bg-noir-850 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
      <img alt="NOIRÉ ÉCLAT" className="w-full h-full object-contain" src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png" />
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h4 className="font-serif text-base text-champagne-100" id="cart-item-title">NOIRÉ ÉCLAT</h4>
          <span className="text-xs font-semibold text-champagne-300" id="cart-item-price">$185.00</span>
        </div>
        <p className="text-[10px] uppercase text-champagne-400/70 mt-0.5" id="cart-item-spec">50 ML — Extrait de Parfum</p>
      </div>
      <div className="flex items-center justify-between text-xs text-champagne-400">
        <span className="text-[11px] text-champagne-300/80">Qty: <span id="cart-qty-num" className="">{bagItemsCount}</span></span>
        <button className="text-[10px] uppercase tracking-wider text-rose-300/70 hover:text-rose-300" id="remove-cart-item" type="button" onClick={() => { setIsItemInBag(false); setBagItemsCount(0); }}>Remove</button>
      </div>
    </div>
  </div>
) : (
  <div className="text-center py-10 text-champagne-300/50">Your bag is empty.</div>
)}

{/*  Free Gift / Samples Notification  */}
<div className="p-4 rounded-xl bg-champagne-500/10 border border-champagne-500/20 space-y-2">
<div className="flex items-center space-x-2 text-champagne-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[10px] uppercase tracking-wider font-semibold">Included Atelier Ritual</span>
</div>
<p className="text-xs text-champagne-300/80 leading-relaxed font-light">
          • 2ml Discovery sample of <em>AMBRE NOIRÉ</em><br />
          • 2ml Discovery sample of <em>VELVET DUSK</em><br />
          • Hand-pressed gold foil gift presentation box
        </p>
</div>
</div>
{/*  Drawer Footer Subtotal & Action  */}
<div className="p-6 border-t border-champagne-500/15 bg-noir-950/90 space-y-4">
<div className="space-y-1.5 text-xs">
<div className="flex justify-between text-champagne-300/70">
<span className="">Subtotal</span>
<span className="text-champagne-200 font-medium" id="drawer-subtotal">${(bagItemsCount * 185).toFixed(2)}</span>
</div>
<div className="flex justify-between text-champagne-300/70">
<span className="">White Glove Insured Shipping</span>
<span className="text-champagne-400 uppercase tracking-widest text-[10px]">Complimentary</span>
</div>
</div>
<div className="pt-2 border-t border-champagne-500/10 flex justify-between items-baseline">
<span className="text-xs uppercase tracking-widest text-champagne-300">Total</span>
<span className="font-serif text-2xl text-champagne-100" id="drawer-total">${(bagItemsCount * 185).toFixed(2)}</span>
</div>
<button className="w-full py-4 px-6 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-super-wide font-semibold transition-all shadow-[0_4px_25px_rgba(201,169,110,0.3)]" type="button">
        Proceed To Secure Checkout
      </button>
<p className="text-[9px] uppercase tracking-widest text-center text-champagne-400/50">
        Encrypted Transaction · Maison Authenticity Guaranteed
      </p>
</div>
</aside>
{/*  Overlay for Drawer  */}
{isBagOpen && <div aria-hidden="true" className="fixed inset-0 bg-noir-950/80 backdrop-blur-sm z-50 transition-opacity" id="drawer-backdrop" onClick={() => setIsBagOpen(false)}></div>}
{/*  END: LuxuryShoppingBagDrawer  */}
{/*  BEGIN: MaisonFooter  */}
<footer className="border-t border-champagne-500/15 bg-noir-950 pt-20 pb-12 px-6 lg:px-14 relative" data-purpose="site-footer">
<div className="max-w-[1400px] mx-auto space-y-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
{/*  Brand Vision  */}
<div className="lg:col-span-4 space-y-4">
<span className="font-serif text-3xl tracking-ultra-wide uppercase font-light text-gold-gradient block">
            NOIRÉÉ
          </span>
<p className="text-xs text-champagne-300/60 leading-relaxed font-light max-w-sm">
            Maison de haute parfumerie conceived in Paris and distilled in Grasse. Devoted to rare extracts, raw botanical resonances, and unforgotten olfactory imprints.
          </p>
<div className="pt-2">
<span className="text-[10px] uppercase tracking-widest text-champagne-400 block mb-2">Concierge Atelier</span>
<a className="text-xs text-champagne-200 hover:text-champagne-400 transition-colors" href="mailto:concierge@noire-parfums.com">
              concierge@noire-parfums.com
            </a>
</div>
</div>
{/*  Boutique Locations  */}
<div className="lg:col-span-2 space-y-3">
<h4 className="text-[11px] uppercase tracking-widest text-champagne-400 font-medium">Boutiques</h4>
<ul className="text-xs space-y-2 text-champagne-300/70 font-light">
<li className="">Paris · 28 Rue Saint-Honoré</li>
<li className="">New York · 742 Madison Ave</li>
<li className="">Tokyo · Ginza 6-Chōme</li>
<li className="">Milan · Via Monte Napoleone</li>
</ul>
</div>
{/*  Client Services  */}
<div className="lg:col-span-2 space-y-3">
<h4 className="text-[11px] uppercase tracking-widest text-champagne-400 font-medium">Client Care</h4>
<ul className="text-xs space-y-2 text-champagne-300/70 font-light">
<li className=""><a className="hover:text-champagne-400 transition-colors" href="#">Private Consultations</a></li>
<li className=""><a className="hover:text-champagne-400 transition-colors" href="#">Complimentary Refills</a></li>
<li className=""><a className="hover:text-champagne-400 transition-colors" href="#">Authenticity Registry</a></li>
<li className=""><a className="hover:text-champagne-400 transition-colors" href="#">Global Delivery</a></li>
</ul>
</div>
{/*  Newsletter Sign-up  */}
<div className="lg:col-span-4 space-y-4">
<h4 className="text-[11px] uppercase tracking-widest text-champagne-400 font-medium">The Atelier Gazette</h4>
<p className="text-xs text-champagne-300/60 font-light leading-relaxed">
            Receive private allocations of strictly limited seasonal batches and invitations to private salon viewings.
          </p>
<form className="flex items-center space-x-2" onsubmit="event.preventDefault(); alert('Merci. You are registered for the private allocations.');">
<input className="flex-1 bg-noir-900 border border-champagne-500/30 rounded-full px-4 py-2.5 text-xs text-champagne-200 placeholder-champagne-500/40 focus:outline-none focus:border-champagne-400" placeholder="Enter your email address" required="" type="email" />
<button className="px-5 py-2.5 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-widest font-medium transition-colors" type="submit">
              Join
            </button>
</form>
</div>
</div>
{/*  Legal & Copyright  */}
<div className="pt-8 border-t border-champagne-500/10 flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-champagne-400/50 space-y-4 sm:space-y-0">
<div className="">
          © 2025 NOIRÉÉ PARFUMS DE PARIS. ALL RIGHTS RESERVED.
        </div>
<div className="flex space-x-6">
<a className="hover:text-champagne-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-champagne-400 transition-colors" href="#">Terms of Atelier</a>
<a className="hover:text-champagne-400 transition-colors" href="#">Sustainability Disclosure</a>
</div>
</div>
</div>
</footer>
{/*  END: MaisonFooter  */}
{/*  BEGIN: InteractiveScripts  */}
{/*  Accord Selector Logic  */}

{/*  Product Configuration & Drawer Logic  */}

{/*  Horizontal Boutique Scroll Logic  */}

{/*  Diagnostic Ritual Logic  */}

{/*  END: InteractiveScripts  */}







    </div>
  );
}