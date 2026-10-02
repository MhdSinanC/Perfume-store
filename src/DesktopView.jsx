import React, { useState, useMemo } from 'react';
import ProgressIndicator from './ProgressIndicator';
import { useStore } from './context/useStore';
import SearchModal from './components/SearchModal';
import WishlistDrawer from './components/WishlistDrawer';
import CheckoutModal from './components/CheckoutModal';
import ClientSpaceModal from './components/ClientSpaceModal';
import ProductDetailModal from './components/ProductDetailModal';
import ToastNotification from './components/ToastNotification';

export default function DesktopView() {
  const {
    products,
    bag,
    bagItemsCount,
    subtotal,
    discount,
    total,
    addToBag,
    updateBagQuantity,
    removeFromBag,
    wishlist,
    toggleWishlist,
    isInWishlist,
    isBagOpen,
    setIsBagOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsCheckoutOpen,
    setIsClientSpaceOpen,
    setSelectedProductForModal
  } = useStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccord, setActiveAccord] = useState('top');

  // Studio Product State
  const [studioProductId, setStudioProductId] = useState('noiree-eclat');
  const [studioSize, setStudioSize] = useState('50ml');
  const [cartQty, setCartQty] = useState(1);
  const [studioImage, setStudioImage] = useState('/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png');

  // Boutique Carousel Filter & Sort State
  const [collectionFilter, setCollectionFilter] = useState('all');
  const [collectionSort, setCollectionSort] = useState('default');

  // Bespoke Ritual Quiz State
  const [quizMood, setQuizMood] = useState('dark');
  const [quizIntensity, setQuizIntensity] = useState('balanced');
  const [quizElement, setQuizElement] = useState('night');

  // Footer Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Studio Product Object
  const studioProduct = useMemo(() => {
    return products.find(p => p.id === studioProductId) || products[0];
  }, [products, studioProductId]);

  const studioSizeObj = useMemo(() => {
    return studioProduct.sizes?.find(s => s.size === studioSize) || {
      size: '50ml',
      label: '50 ML',
      price: studioProduct.price
    };
  }, [studioProduct, studioSize]);

  // Accord Data
  const accordData = {
    top: {
      badge: 'Opening Symphony (0 - 20 mins)',
      title: 'Calabrian Bergamot & Sun-Dried Saffron',
      desc: 'A sudden beam of pure Mediterranean solar light piercing through black crystal. Distilled with zero-carbon supercritical carbon dioxide extraction to preserve volatile terpenes and sharp citrus brilliance.',
      projection: 'Radiant (8 ft)',
      speed: 'Instant & Sparking',
      timing: 'Initial Spray',
      stat1: '92%',
      stat2: '35%',
      stat3: '78%'
    },
    heart: {
      badge: 'The Core Identity (20 mins - 4 hrs)',
      title: 'Florentine Iris & Black Damask Rose',
      desc: 'The beating heart of the fragrance. Velvet petals steeped in midnight shadow, delivering a powdery, hypnotic depth that blooms on the skin as the temperature rises.',
      projection: 'Magnetic (6 ft)',
      speed: 'Brisk & Lively',
      timing: 'Twilight Arrival',
      stat1: '88%',
      stat2: '42%',
      stat3: '94%'
    },
    base: {
      badge: 'The Hypnotic Sillage (4 hrs - 24+ hrs)',
      title: 'Smoked Amber & Obsidian Oud',
      desc: 'An indelible footprint. Ancient resins, charred Madagascar vanilla, and dense agarwood fuse with the wearer’s natural chemistry, leaving a trail that haunts long after departure.',
      projection: 'Intimate & Tenacious',
      speed: 'Slow & Smoldering',
      timing: 'Midnight to Dawn',
      stat1: '65%',
      stat2: '96%',
      stat3: '99%'
    }
  };

  // Horizontal boutique scroll
  const handleScrollLeft = () => {
    const el = document.getElementById('boutique-scroller');
    if (el) el.scrollBy({ left: -360, behavior: 'smooth' });
  };
  const handleScrollRight = () => {
    const el = document.getElementById('boutique-scroller');
    if (el) el.scrollBy({ left: 360, behavior: 'smooth' });
  };

  // Filtered and Sorted Collection
  const filteredCollection = useMemo(() => {
    let list = [...products];

    if (collectionFilter !== 'all') {
      list = list.filter(item =>
        item.category.toLowerCase().includes(collectionFilter.toLowerCase()) ||
        item.badge.toLowerCase().includes(collectionFilter.toLowerCase())
      );
    }

    if (collectionSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (collectionSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, collectionFilter, collectionSort]);

  // Dynamic Quiz Recommendation
  const recommendedScent = useMemo(() => {
    const intensitySuffix = quizIntensity === 'intense' ? ' (Intense Resonance)' : quizIntensity === 'subtle' ? ' (Whisper Concentration)' : ' (Balanced Sillage)';
    if (quizMood === 'dark' && quizElement === 'air') {
      return {
        product: products.find(p => p.id === 'saffron-veil') || products[4],
        quote: '"For the commanding presence wrapped in smoldering crimson shadow."',
        desc: `Your affinity for darkness and atmospheric air harmonizes with raw saffron pistils and smoked artisan leather hide${intensitySuffix}.`,
        match: quizIntensity === 'intense' ? '99.4%' : '98.2%',
        family: 'Smoky Leather Oriental'
      };
    }
    if (quizMood === 'dark' || quizElement === 'night') {
      return {
        product: products.find(p => p.id === 'noiree-eclat') || products[0],
        quote: '"For the enigmatic persona who occupies a room without raising their voice."',
        desc: `Your preference for dark mystique paired with balanced sillage aligns perfectly with our obsidian-infused iris and Persian saffron accord${intensitySuffix}.`,
        match: quizIntensity === 'intense' ? '99.2%' : '98.4%',
        family: 'Smoky Amber Floriental'
      };
    }
    if (quizMood === 'warm' || quizElement === 'earth') {
      return {
        product: products.find(p => p.id === 'ambre-noire') || products[1],
        quote: '"For the soul seeking subterranean warmth and sacred resins."',
        desc: `Your longing for deep warmth and grounding earth calls for fossil amber tears and slow-charred oak${intensitySuffix}.`,
        match: quizIntensity === 'intense' ? '98.9%' : '97.8%',
        family: 'Resinous Amber Woody'
      };
    }
    if (quizMood === 'romantic' && quizElement === 'dawn') {
      return {
        product: products.find(p => p.id === 'rose-ether') || products[3],
        quote: '"For the poetic spirit awake before the rest of the world."',
        desc: `Your choice of soft romance and the first light of dawn mirrors cold-distilled May rose petals on silver birch${intensitySuffix}.`,
        match: quizIntensity === 'intense' ? '97.6%' : '96.9%',
        family: 'Crystalline Floral Wood'
      };
    }
    if (quizMood === 'romantic') {
      return {
        product: products.find(p => p.id === 'velvet-dusk') || products[2],
        quote: '"For the nocturnal romantic who walks between starlight and shadow."',
        desc: `Crushed night violet petals and seductive evening jasmine weave an intimate, unforgettable trail${intensitySuffix}.`,
        match: quizIntensity === 'intense' ? '98.8%' : '98.2%',
        family: 'Nocturnal Violet Chypre'
      };
    }
    // Fresh
    return {
      product: products.find(p => p.id === 'bois-blanc') || products[5],
      quote: '"For the purist of clean lines, alpine clarity, and sheer architectural grace."',
      desc: `Pristine bleached cedarwood and white sandalwood milk bathed in mountain cypress and atmospheric musk${intensitySuffix}.`,
      match: quizIntensity === 'intense' ? '98.1%' : '97.4%',
      family: 'Architectural Sheer Wood'
    };
  }, [quizMood, quizIntensity, quizElement, products]);

  // Newsletter Submit
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div>
      <ProgressIndicator />
      <ToastNotification />

      {/* Global Modals */}
      <SearchModal />
      <WishlistDrawer />
      <CheckoutModal />
      <ClientSpaceModal />
      <ProductDetailModal />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-noir-950/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between transition-all duration-300 lg:hidden">
          <div className="flex justify-between items-center border-b border-champagne-500/10 pb-4">
            <span className="font-serif tracking-widest text-lg text-champagne-100">NOIRÉÉ</span>
            <button
              aria-label="Close Navigation Menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-champagne-100/70 hover:text-champagne-100"
            >
              <svg className="w-6 h-6 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-8 my-auto text-left">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl text-champagne-100 hover:text-champagne-400 transition-colors tracking-wide"
              href="#collection"
            >
              Collections
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="font-serif text-3xl text-champagne-100 hover:text-champagne-400 transition-colors tracking-wide text-left"
            >
              Search
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsBagOpen(true);
              }}
              className="font-serif text-3xl text-champagne-100 hover:text-champagne-400 transition-colors tracking-wide text-left"
            >
              Bag ({bagItemsCount})
            </button>
          </nav>
          <div className="border-t border-champagne-500/10 pt-6 flex flex-col gap-3 text-xs tracking-widest text-champagne-100/60 uppercase">
            <p className="text-champagne-400 font-medium">CONCIERGE &amp; APPOINTMENTS</p>
            <p>18 Place Vendôme, 75001 Paris</p>
            <p>concierge@noire-parfums.com</p>
          </div>
        </div>
      )}

      {/* BEGIN: SiteNavigation */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-champagne-500/15 bg-noir-950/80 backdrop-blur-md" id="site-header">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:pl-32 h-24 flex justify-between items-center">
          {/* Left: Brand Wordmark & Menu */}
          <div className="flex items-center justify-start gap-4">
            <button
              aria-label="Open Navigation Menu"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex lg:hidden items-center text-champagne-100/80 hover:text-champagne-400 transition-colors p-2 -ml-2"
            >
              <svg className="w-5 h-5 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="3" x2="21" y1="7" y2="7"></line>
                <line x1="3" x2="15" y1="17" y2="17"></line>
              </svg>
            </button>
            <a className="flex flex-col group focus:outline-none" href="#">
              <span className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase font-light text-gold-gradient group-hover:opacity-90 transition-opacity">
                NOIRÉÉ
              </span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-champagne-400/60 font-sans font-normal mt-0.5">
                Haute Parfumerie · Paris
              </span>
            </a>
          </div>

          {/* Right: Navigation - Collections | Search | Bag */}
          <nav className="flex items-center justify-end space-x-5 sm:space-x-8 text-[11px] uppercase tracking-widest font-light text-champagne-300/80">
            <a className="hover:text-champagne-100 transition-colors py-1 relative group flex-shrink-0" href="#collection">
              Collections
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne-400 transition-all duration-300 group-hover:w-full opacity-60"></span>
            </a>

            <button
              aria-label="Search Fragrances"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 text-champagne-300/70 hover:text-champagne-100 transition-colors focus:outline-none"
              type="button"
            >
              <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
              <span>Search</span>
            </button>

            <button
              aria-label="Open Shopping Bag"
              className="flex items-center space-x-2 py-1.5 px-3.5 rounded-full border border-champagne-500/25 hover:border-champagne-400/60 transition-all text-champagne-200 group bg-noir-900/40 backdrop-blur-sm"
              id="cart-drawer-trigger"
              type="button"
              onClick={() => setIsBagOpen(true)}
            >
              <span className="text-champagne-300/90 group-hover:text-champagne-100 text-[10px] tracking-widest font-normal">Bag</span>
              <span className="text-champagne-500 font-sans text-[10px] tracking-normal" id="bag-count-pill">({bagItemsCount})</span>
            </button>
          </nav>
        </div>
      </header>
      {/* END: SiteNavigation */}

      <main>
        {/* BEGIN: HeroSection */}
        <section id="hero-experience" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 lg:px-14 xl:pl-32 overflow-hidden" data-purpose="hero-experience">
          {/* Background Ambient Glow & Lighting */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amberGlow/10 rounded-full blur-[120px] animate-glow-subtle"></div>
            <div className="absolute -top-32 right-10 w-[450px] h-[450px] bg-champagne-600/10 rounded-full blur-[100px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,7,9,0.7)_85%,#070709_100%)]"></div>
          </div>
          <div className="max-w-[1400px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            {/* Left Editorial Copy */}
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
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-champagne-500 text-noir-950 text-xs uppercase tracking-super-wide font-medium hover:bg-champagne-400 transition-all duration-300 shadow-[0_0_30px_rgba(201,169,110,0.25)] text-center"
                  href="#signature-product"
                >
                  Explore The Extrait
                </a>
                <a
                  className="w-full sm:w-auto px-7 py-4 rounded-full border border-champagne-500/30 text-champagne-300 text-xs uppercase tracking-super-wide hover:border-champagne-400 hover:text-champagne-100 transition-all text-center group"
                  href="#olfactory-accord"
                >
                  Discover Signature Notes <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
              {/* Quick Metrics Bar */}
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
            {/* Center Floating Visual Centerpiece */}
            <div className="lg:col-span-7 flex justify-center items-center relative order-1 lg:order-2">
              <div className="absolute w-[360px] h-[360px] md:w-[500px] md:h-[500px] border border-champagne-500/15 rounded-full pointer-events-none"></div>
              <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] border border-champagne-500/10 rounded-full border-dashed pointer-events-none animate-spin" style={{ animationDuration: '90s' }}></div>
              <div className="relative group z-10">
                <div className="relative overflow-visible animate-float-subtle">
                  <img
                    alt="Luxury perfume bottle NOIRÉÉ ÉÉCLAT, heavy obsidian black faceted glass bottle with subtle amber liquid glowing from within"
                    className="w-full max-w-[420px] md:max-w-[480px] h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] filter brightness-105"
                    src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png"
                  />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 bg-amberGlow/25 rounded-full blur-2xl -z-10"></div>
                </div>
                <div className="absolute -bottom-2 right-4 md:right-8 bg-noir-900/90 border border-champagne-500/30 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-2xl">
                  <p className="text-[9px] uppercase tracking-widest text-champagne-400/70">Masterwork No. 01</p>
                  <p className="font-serif text-sm text-champagne-100 italic tracking-wider">NOIRÉÉ ÉÉCLAT</p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Down Arrow Scroll Link */}
          <a className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50 hover:opacity-100 transition-opacity" href="#anatomy">
            <span className="text-[9px] tracking-super-wide uppercase text-champagne-400">Scroll to Explore</span>
            <svg className="w-4 h-4 animate-bounce text-champagne-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </a>
        </section>
        {/* END: HeroSection */}

        {/* BEGIN: AnatomySection */}
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
              {/* Left: Narrative Olfactory Pyramid Steps */}
              <div className="lg:col-span-7 space-y-6">
                {/* Tier 1: Top Notes */}
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

                {/* Tier 2: Heart Notes */}
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

                {/* Tier 3: Base Notes */}
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

              {/* Right: Visual Atmosphere Presentation with AMBRE NOIRÉ */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full relative rounded-2xl overflow-hidden border border-champagne-500/20 bg-noir-900 shadow-2xl p-4">
                  <img
                    alt="Luxury perfume bottle AMBRE NOIRÉ, square smoked glass bottle with gold geometric cap and minimalist ivory label"
                    className="w-full h-[480px] object-cover rounded-xl filter contrast-105"
                    src="/luxury_perfume_bottle_ambre_noir_square_smoked_glass_bottle_with_gold_geometric.png"
                  />
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
        {/* END: AnatomySection */}

        {/* BEGIN: InteractiveAccordSection */}
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
            {/* Accord Tabs */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 mb-10" id="accord-tabs">
              <button
                className={`py-4 px-3 md:px-6 rounded-xl border text-left transition-all duration-300 ${
                  activeAccord === 'top'
                    ? 'border-champagne-500 bg-champagne-500/10 text-champagne-100'
                    : 'border-champagne-500/20 bg-noir-900/60 text-champagne-300/70 hover:border-champagne-500/40'
                }`}
                onClick={() => setActiveAccord('top')}
                type="button"
              >
                <span className={`text-[9px] block uppercase tracking-widest mb-1 ${activeAccord === 'top' ? 'text-champagne-400' : 'text-champagne-400/60'}`}>
                  Stratum 01
                </span>
                <span className="font-serif text-base md:text-xl block font-medium">Top Accord</span>
                <span className="text-[11px] text-champagne-300/70 hidden sm:inline">First Contact — Radiant</span>
              </button>

              <button
                className={`py-4 px-3 md:px-6 rounded-xl border text-left transition-all duration-300 ${
                  activeAccord === 'heart'
                    ? 'border-champagne-500 bg-champagne-500/10 text-champagne-100'
                    : 'border-champagne-500/20 bg-noir-900/60 text-champagne-300/70 hover:border-champagne-500/40'
                }`}
                onClick={() => setActiveAccord('heart')}
                type="button"
              >
                <span className={`text-[9px] block uppercase tracking-widest mb-1 ${activeAccord === 'heart' ? 'text-champagne-400' : 'text-champagne-400/60'}`}>
                  Stratum 02
                </span>
                <span className="font-serif text-base md:text-xl block font-medium">Heart Accord</span>
                <span className="text-[11px] text-champagne-300/70 hidden sm:inline">The Core Identity</span>
              </button>

              <button
                className={`py-4 px-3 md:px-6 rounded-xl border text-left transition-all duration-300 ${
                  activeAccord === 'base'
                    ? 'border-champagne-500 bg-champagne-500/10 text-champagne-100'
                    : 'border-champagne-500/20 bg-noir-900/60 text-champagne-300/70 hover:border-champagne-500/40'
                }`}
                onClick={() => setActiveAccord('base')}
                type="button"
              >
                <span className={`text-[9px] block uppercase tracking-widest mb-1 ${activeAccord === 'base' ? 'text-champagne-400' : 'text-champagne-400/60'}`}>
                  Stratum 03
                </span>
                <span className="font-serif text-base md:text-xl block font-medium">Base Accord</span>
                <span className="text-[11px] text-champagne-300/70 hidden sm:inline">The Hypnotic Sillage</span>
              </button>
            </div>

            {/* Dynamic Accord Details Display Container */}
            <div className="p-8 md:p-12 rounded-2xl border border-champagne-500/20 bg-noir-900/80 backdrop-blur-md relative overflow-hidden transition-all duration-500" id="accord-display">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <span className="inline-block px-3 py-1 rounded bg-champagne-500/20 text-champagne-300 text-[10px] tracking-widest uppercase" id="accord-badge">
                    {accordData[activeAccord].badge}
                  </span>
                  <h3 className="font-serif text-2xl md:text-4xl text-champagne-100 font-light" id="accord-title">
                    {accordData[activeAccord].title}
                  </h3>
                  <p className="text-xs md:text-sm text-champagne-300/80 font-light leading-relaxed" id="accord-desc">
                    {accordData[activeAccord].desc}
                  </p>
                  {/* Olfactory Metric Gauges */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-champagne-500/10">
                    <div>
                      <span className="text-[10px] uppercase text-champagne-400/70 block">Projection</span>
                      <span className="text-sm font-medium text-champagne-100" id="metric-projection">
                        {accordData[activeAccord].projection}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-champagne-400/70 block">Vaporization</span>
                      <span className="text-sm font-medium text-champagne-100" id="metric-speed">
                        {accordData[activeAccord].speed}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-champagne-400/70 block">Ideal Timing</span>
                      <span className="text-sm font-medium text-champagne-100" id="metric-timing">
                        {accordData[activeAccord].timing}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center items-center p-6 rounded-xl bg-noir-950/60 border border-champagne-500/10">
                  <span className="text-[10px] uppercase tracking-widest text-champagne-400/60 mb-3">Distillation Profile</span>
                  <div className="w-full space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between text-champagne-300/80 mb-1">
                        <span>Sillage Volatility</span>
                        <span id="stat-1">{accordData[activeAccord].stat1}</span>
                      </div>
                      <div className="w-full bg-noir-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-champagne-400 h-full rounded-full transition-all duration-700"
                          id="stat-bar-1"
                          style={{ width: accordData[activeAccord].stat1 }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-champagne-300/80 mb-1">
                        <span>Warmth Factor</span>
                        <span id="stat-2">{accordData[activeAccord].stat2}</span>
                      </div>
                      <div className="w-full bg-noir-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-amberGlow h-full rounded-full transition-all duration-700"
                          id="stat-bar-2"
                          style={{ width: accordData[activeAccord].stat2 }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-champagne-300/80 mb-1">
                        <span>Memory Fixation</span>
                        <span id="stat-3">{accordData[activeAccord].stat3}</span>
                      </div>
                      <div className="w-full bg-noir-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-champagne-500 h-full rounded-full transition-all duration-700"
                          id="stat-bar-3"
                          style={{ width: accordData[activeAccord].stat3 }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: InteractiveAccordSection */}

        {/* BEGIN: SignatureProductStudio */}
        <section className="py-28 px-6 lg:px-14 xl:pl-32 border-t border-champagne-500/10 bg-noir-950 relative" data-purpose="product-studio-and-purchase" id="signature-product">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
              {/* Product Gallery Left */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-champagne-500/20 bg-noir-900/60 p-8 flex items-center justify-center min-h-[580px]">
                  {/* Concentration Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] tracking-wider uppercase bg-noir-950/80 border border-champagne-500/30 text-champagne-300 font-medium">
                      {studioProduct.badge || 'EXTRAIT DE PARFUM 24%'}
                    </span>
                  </div>
                  {/* Main Bottle Display */}
                  <img
                    alt={`${studioProduct.name} luxury fragrance bottle`}
                    className="w-full max-w-[420px] h-auto object-contain transition-transform duration-700 hover:scale-105"
                    id="main-product-image"
                    src={studioImage}
                  />
                  <div className="absolute bottom-6 right-6 flex items-center space-x-2 text-[10px] uppercase tracking-widest text-champagne-400/60">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                    <span>Interactive Flacon</span>
                  </div>
                </div>

                {/* Alternative Angles / Mood Thumbs */}
                <div className="grid grid-cols-3 gap-4">
                  <button
                    className={`gallery-thumb-btn border rounded-xl overflow-hidden p-2 bg-noir-900 aspect-square flex items-center justify-center transition-all ${
                      studioImage === '/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png'
                        ? 'border-2 border-champagne-500'
                        : 'border-champagne-500/20 hover:border-champagne-500/60'
                    }`}
                    type="button"
                    onClick={() => {
                      setStudioImage('/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png');
                      setStudioProductId('noiree-eclat');
                    }}
                  >
                    <img alt="NOIRÉÉ ÉÉCLAT Studio Angle" className="w-16 h-16 object-contain" src="/luxury_perfume_bottle_noir_clat_heavy_obsidian_black_faceted_glass_bottle_with.png" />
                  </button>

                  <button
                    className={`gallery-thumb-btn border rounded-xl overflow-hidden p-2 bg-noir-900 aspect-square flex items-center justify-center transition-all ${
                      studioImage === '/luxury_perfume_bottle_ambre_noir_square_smoked_glass_bottle_with_gold_geometric.png'
                        ? 'border-2 border-champagne-500'
                        : 'border-champagne-500/20 hover:border-champagne-500/60'
                    }`}
                    type="button"
                    onClick={() => {
                      setStudioImage('/luxury_perfume_bottle_ambre_noir_square_smoked_glass_bottle_with_gold_geometric.png');
                      setStudioProductId('ambre-noire');
                    }}
                  >
                    <img alt="Ambre Noir Warm Amber Texture" className="w-16 h-16 object-cover rounded" src="/luxury_perfume_bottle_ambre_noir_square_smoked_glass_bottle_with_gold_geometric.png" />
                  </button>

                  <button
                    className={`gallery-thumb-btn border rounded-xl overflow-hidden p-2 bg-noir-900 aspect-square flex items-center justify-center transition-all ${
                      studioImage === '/luxury_perfume_bottle_velvet_dusk_slender_dark_violet_tinted_frosted_glass.png'
                        ? 'border-2 border-champagne-500'
                        : 'border-champagne-500/20 hover:border-champagne-500/60'
                    }`}
                    type="button"
                    onClick={() => {
                      setStudioImage('/luxury_perfume_bottle_velvet_dusk_slender_dark_violet_tinted_frosted_glass.png');
                      setStudioProductId('velvet-dusk');
                    }}
                  >
                    <img alt="Velvet Dusk Nocturnal Vibe" className="w-16 h-16 object-cover rounded" src="/luxury_perfume_bottle_velvet_dusk_slender_dark_violet_tinted_frosted_glass.png" />
                  </button>
                </div>
              </div>

              {/* Product Details & Configuration Right */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <div className="flex items-center justify-between text-xs text-champagne-400 tracking-widest uppercase mb-2">
                    <span>Maison Signature Collection</span>
                    <span className="text-champagne-500/80">Batch No. 042 / Grasse</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-champagne-100 font-normal">
                    {studioProduct.name}
                  </h2>
                  <p className="font-serif italic text-lg text-champagne-400 mt-1">{studioProduct.subtitle}</p>
                  <div className="flex items-baseline space-x-3 mt-4">
                    <span className="text-3xl font-serif text-champagne-100" id="price-display">
                      ${studioSizeObj.price}
                    </span>
                    <span className="text-xs uppercase text-champagne-400/60 tracking-wider">USD · Complimentary Global Express</span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-champagne-300/70 font-light leading-relaxed">
                  {studioProduct.description}
                </p>

                {/* Size Selector */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase tracking-super-wide text-champagne-300">Select Volume</label>
                  <div className="grid grid-cols-3 gap-3" id="size-selector">
                    {studioProduct.sizes?.map((sizeItem) => (
                      <button
                        key={sizeItem.size}
                        className={`size-pill py-3 px-2 rounded-xl text-center transition-all ${
                          studioSize === sizeItem.size
                            ? 'active border-2 border-champagne-500 bg-champagne-500/10'
                            : 'border border-champagne-500/20 hover:border-champagne-500/60'
                        }`}
                        data-price={sizeItem.price}
                        data-size={sizeItem.size}
                        type="button"
                        onClick={() => setStudioSize(sizeItem.size)}
                      >
                        <div className={`text-xs font-medium ${studioSize === sizeItem.size ? 'text-champagne-100 font-semibold' : 'text-champagne-200'}`}>
                          {sizeItem.label}
                        </div>
                        <div className="text-[10px] text-champagne-400 mt-0.5">
                          ${sizeItem.price} {sizeItem.tag ? `· ${sizeItem.tag}` : ''}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Add to Bag */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center space-x-4">
                    {/* Quantity Stepper */}
                    <div className="inline-flex items-center border border-champagne-500/30 rounded-full px-3 py-2 bg-noir-900">
                      <button
                        aria-label="Decrease quantity"
                        className="w-7 h-7 flex items-center justify-center text-champagne-300 hover:text-champagne-100 text-sm"
                        id="qty-minus"
                        type="button"
                        onClick={() => setCartQty(Math.max(1, cartQty - 1))}
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-medium text-champagne-100" id="qty-val">{cartQty}</span>
                      <button
                        aria-label="Increase quantity"
                        className="w-7 h-7 flex items-center justify-center text-champagne-300 hover:text-champagne-100 text-sm"
                        id="qty-plus"
                        type="button"
                        onClick={() => setCartQty(cartQty + 1)}
                      >
                        +
                      </button>
                    </div>

                    {/* Primary Add to Bag Button */}
                    <button
                      className="flex-1 py-4 px-6 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-super-wide font-medium transition-all shadow-[0_4px_25px_rgba(201,169,110,0.25)] flex items-center justify-center space-x-2"
                      id="add-to-bag-cta"
                      type="button"
                      onClick={() => {
                        addToBag(studioProduct, studioSize, cartQty);
                        setIsBagOpen(true);
                      }}
                    >
                      <span>Add To Bag</span>
                      <span>—</span>
                      <span id="btn-price-preview">${studioSizeObj.price * cartQty}</span>
                    </button>

                    {/* Wishlist Heart Button */}
                    <button
                      aria-label="Add to Wishlist"
                      className={`p-4 rounded-full border transition-colors ${
                        isInWishlist(studioProduct.id)
                          ? 'border-champagne-400 bg-champagne-500/20 text-champagne-400'
                          : 'border-champagne-500/30 text-champagne-300 hover:text-champagne-100 hover:border-champagne-400'
                      }`}
                      type="button"
                      onClick={() => toggleWishlist(studioProduct)}
                    >
                      <svg
                        className="w-4 h-4"
                        fill={isInWishlist(studioProduct.id) ? 'currentColor' : 'none'}
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

                  {/* Buy Now Direct Action */}
                  <button
                    className="w-full py-3.5 px-6 rounded-full border border-champagne-500/40 text-champagne-200 text-xs uppercase tracking-super-wide hover:bg-champagne-500/10 transition-colors"
                    id="buy-now-cta"
                    type="button"
                    onClick={() => {
                      addToBag(studioProduct, studioSize, cartQty);
                      setIsCheckoutOpen(true);
                    }}
                  >
                    Instant Luxury Checkout
                  </button>
                </div>

                {/* Accordion Details */}
                <div className="border-t border-champagne-500/15 pt-6 space-y-4">
                  <details className="group cursor-pointer" open>
                    <summary className="flex justify-between items-center text-xs uppercase tracking-widest text-champagne-200 py-2 list-none">
                      <span>The Olfactory Pyramid</span>
                      <span className="transition-transform group-open:rotate-180 text-champagne-400">+</span>
                    </summary>
                    <div className="text-xs text-champagne-300/70 font-light pt-2 pb-4 leading-relaxed">
                      Head: {studioProduct.pyramid?.head}<br />
                      Heart: {studioProduct.pyramid?.heart}<br />
                      Base: {studioProduct.pyramid?.base}
                    </div>
                  </details>

                  <details className="group cursor-pointer border-t border-champagne-500/10 pt-4">
                    <summary className="flex justify-between items-center text-xs uppercase tracking-widest text-champagne-200 py-2 list-none">
                      <span>Artisan Craftsmanship &amp; Ethics</span>
                      <span className="transition-transform group-open:rotate-180 text-champagne-400">+</span>
                    </summary>
                    <div className="text-xs text-champagne-300/70 font-light pt-2 pb-4 leading-relaxed">
                      {studioProduct.craftsmanship}
                    </div>
                  </details>

                  <details className="group cursor-pointer border-t border-champagne-500/10 pt-4">
                    <summary className="flex justify-between items-center text-xs uppercase tracking-widest text-champagne-200 py-2 list-none">
                      <span>The Complimentary Ritual (2 Samples Included)</span>
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
        {/* END: SignatureProductStudio */}

        {/* BEGIN: CuratedCollectionGallery */}
        <section className="py-28 px-6 lg:px-14 xl:pl-32 border-t border-champagne-500/10 bg-noir-900/40 relative" data-purpose="horizontal-boutique" id="collection">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-ultra-wide text-champagne-500 font-medium">Chapter 04 · Complete Anthology</span>
                <h2 className="font-serif text-3xl md:text-5xl text-champagne-100 font-light">The Extrait Collection</h2>
              </div>
              <div className="flex items-center space-x-4 mt-6 md:mt-0">
                <button
                  aria-label="Scroll boutique left"
                  className="w-11 h-11 rounded-full border border-champagne-500/30 flex items-center justify-center text-champagne-300 hover:border-champagne-400 hover:text-champagne-100 transition-colors"
                  id="scroll-left-btn"
                  type="button"
                  onClick={handleScrollLeft}
                >
                  ←
                </button>
                <button
                  aria-label="Scroll boutique right"
                  className="w-11 h-11 rounded-full border border-champagne-500/30 flex items-center justify-center text-champagne-300 hover:border-champagne-400 hover:text-champagne-100 transition-colors"
                  id="scroll-right-btn"
                  type="button"
                  onClick={handleScrollRight}
                >
                  →
                </button>
              </div>
            </div>

            {/* Filter and Sorting Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-champagne-500/10 text-xs">
              <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest">
                <span className="text-champagne-400/60 mr-1">Accord:</span>
                {[
                  { id: 'all', label: 'All Fragrances' },
                  { id: 'Eau de Parfum', label: 'Eau de Parfum' },
                  { id: 'Pure Essence', label: 'Pure Essence' },
                  { id: 'Extrait Noir', label: 'Extrait Noir' },
                  { id: 'Wood Essence', label: 'Wood Essence' }
                ].map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setCollectionFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-full border transition-all ${
                      collectionFilter === filter.id
                        ? 'border-champagne-500 bg-champagne-500/20 text-champagne-100'
                        : 'border-champagne-500/20 text-champagne-400/70 hover:border-champagne-500/40 hover:text-champagne-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-champagne-400/70">
                <span>Sort:</span>
                <select
                  value={collectionSort}
                  onChange={(e) => setCollectionSort(e.target.value)}
                  className="bg-noir-950 border border-champagne-500/20 rounded-md px-2.5 py-1 text-champagne-200 focus:outline-none focus:border-champagne-400"
                >
                  <option value="default">Curated Anthology</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Horizontal Scrollable Container */}
            <div className="flex space-x-6 overflow-x-auto pb-8 hide-scrollbar scroll-smooth" id="boutique-scroller">
              {filteredCollection.map((product) => {
                const inWish = isInWishlist(product.id);
                return (
                  <div
                    key={product.id}
                    className="flex-none w-[320px] md:w-[360px] bg-noir-850/90 rounded-2xl border border-champagne-500/15 p-6 hover:border-champagne-400/50 transition-all duration-300 flex flex-col justify-between group relative"
                  >
                    {/* Wishlist Quick Toggle */}
                    <button
                      type="button"
                      aria-label="Save to Wishlist"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                      }}
                      className={`absolute top-8 right-8 z-20 p-2 rounded-full backdrop-blur-md border transition-all ${
                        inWish
                          ? 'border-champagne-400 bg-champagne-500/30 text-champagne-300'
                          : 'border-champagne-500/20 bg-noir-950/70 text-champagne-400/60 hover:text-champagne-200 hover:border-champagne-400'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill={inWish ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                      </svg>
                    </button>

                    <div
                      className="cursor-pointer"
                      onClick={() => setSelectedProductForModal(product)}
                    >
                      <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-noir-900 relative mb-6 flex items-center justify-center p-3">
                        <img
                          alt={`${product.name} Perfume bottle`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          src={product.image}
                        />
                        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest bg-noir-950/80 px-2 py-1 rounded text-champagne-400 border border-champagne-500/20">
                          {product.badge}
                        </span>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-champagne-400/70">{product.subtitle}</p>
                      <h3 className="font-serif text-2xl text-champagne-100 group-hover:text-champagne-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-champagne-300/60 mt-1 line-clamp-2">{product.notesSummary}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-champagne-500/10 flex items-center justify-between">
                      <span className="font-serif text-lg text-champagne-200">${product.price}</span>
                      <div className="flex items-center gap-2">
                        <button
                          className="px-3 py-2 rounded-full border border-champagne-500/20 text-[10px] uppercase tracking-widest text-champagne-400/80 hover:border-champagne-400 hover:text-champagne-100 transition-all"
                          onClick={() => setSelectedProductForModal(product)}
                          type="button"
                        >
                          Details
                        </button>
                        <button
                          className="px-4 py-2 rounded-full border border-champagne-500/30 text-[10px] uppercase tracking-widest text-champagne-300 hover:bg-champagne-500 hover:text-noir-950 transition-all"
                          onClick={() => {
                            addToBag(product, '50ml', 1);
                            setIsBagOpen(true);
                          }}
                          type="button"
                        >
                          Quick Add
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* END: CuratedCollectionGallery */}

        {/* BEGIN: BespokeRitualConsultation */}
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
              {/* Ritual Form Controls Left */}
              <div className="lg:col-span-7 bg-noir-900/70 border border-champagne-500/20 rounded-2xl p-8 space-y-8">
                {/* Step 1: Mood */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] uppercase tracking-widest text-champagne-300 font-medium">01 · Desired Aura &amp; Mood</span>
                    <span className="text-[10px] text-champagne-500/80">Step 1 of 3</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3" id="quiz-mood">
                    {[
                      { id: 'dark', label: 'Dark & Mysterious' },
                      { id: 'warm', label: 'Warm & Sensual' },
                      { id: 'fresh', label: 'Fresh & Luminous' },
                      { id: 'romantic', label: 'Soft & Aristocratic' }
                    ].map(item => (
                      <button
                        key={item.id}
                        className={`quiz-btn py-3 px-4 rounded-xl border text-xs text-left transition-all ${
                          quizMood === item.id
                            ? 'active border-champagne-500 bg-champagne-500/15 text-champagne-100'
                            : 'border-champagne-500/20 bg-noir-800 text-champagne-300/80 hover:border-champagne-500/40'
                        }`}
                        data-mood={item.id}
                        type="button"
                        onClick={() => setQuizMood(item.id)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Intensity */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] uppercase tracking-widest text-champagne-300 font-medium">02 · Sillage &amp; Intensity</span>
                    <span className="text-[10px] text-champagne-500/80">Step 2 of 3</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3" id="quiz-intensity">
                    {[
                      { id: 'subtle', label: 'Subtle Whisper' },
                      { id: 'balanced', label: 'Balanced Sillage' },
                      { id: 'intense', label: 'Intense Resonance' }
                    ].map(item => (
                      <button
                        key={item.id}
                        className={`quiz-btn py-3 px-3 rounded-xl border text-xs text-center transition-all ${
                          quizIntensity === item.id
                            ? 'active border-champagne-500 bg-champagne-500/15 text-champagne-100'
                            : 'border-champagne-500/20 bg-noir-800 text-champagne-300/80 hover:border-champagne-500/40'
                        }`}
                        data-intensity={item.id}
                        type="button"
                        onClick={() => setQuizIntensity(item.id)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Elemental World */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] uppercase tracking-widest text-champagne-300 font-medium">03 · Primary Element</span>
                    <span className="text-[10px] text-champagne-500/80">Step 3 of 3</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2.5" id="quiz-element">
                    {[
                      { id: 'night', label: 'Night' },
                      { id: 'dawn', label: 'Dawn' },
                      { id: 'earth', label: 'Earth' },
                      { id: 'air', label: 'Smoke' }
                    ].map(item => (
                      <button
                        key={item.id}
                        className={`quiz-btn py-3 rounded-xl border text-xs text-center transition-all ${
                          quizElement === item.id
                            ? 'active border-champagne-500 bg-champagne-500/15 text-champagne-100'
                            : 'border-champagne-500/20 bg-noir-800 text-champagne-300/80 hover:border-champagne-500/40'
                        }`}
                        data-element={item.id}
                        type="button"
                        onClick={() => setQuizElement(item.id)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Result Card Right */}
              <div className="lg:col-span-5 bg-gradient-to-b from-noir-900 to-noir-850 border border-champagne-500/30 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                <div className="space-y-4">
                  <span className="text-[9px] uppercase tracking-ultra-wide px-3 py-1 rounded bg-champagne-500/20 text-champagne-300 inline-block font-semibold">
                    Your Bespoke Resonance
                  </span>
                  <h3 className="font-serif text-3xl text-champagne-100 font-normal" id="recommend-title">
                    {recommendedScent.product.name}
                  </h3>
                  <p className="font-serif italic text-champagne-400 text-sm" id="recommend-quote">
                    {recommendedScent.quote}
                  </p>
                  <p className="text-xs text-champagne-300/70 font-light leading-relaxed" id="recommend-body">
                    {recommendedScent.desc}
                  </p>
                  {/* Compatibility Ring */}
                  <div className="p-4 rounded-xl bg-noir-950/80 border border-champagne-500/15 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase text-champagne-400 tracking-wider">Aura Compatibility</div>
                      <div className="text-2xl font-serif text-champagne-100" id="match-percent">{recommendedScent.match}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase text-champagne-400 tracking-wider">Primary Scent Family</div>
                      <div className="text-xs text-champagne-200" id="match-family">{recommendedScent.family}</div>
                    </div>
                  </div>
                </div>
                {/* Direct Claim CTA */}
                <div className="pt-6">
                  <button
                    className="w-full py-4 px-6 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-super-wide font-medium transition-all shadow-[0_4px_25px_rgba(201,169,110,0.2)]"
                    id="claim-scent-btn"
                    type="button"
                    onClick={() => {
                      addToBag(recommendedScent.product, '50ml', 1);
                      setIsBagOpen(true);
                    }}
                  >
                    Claim Your Scent — Add To Bag (${recommendedScent.product.price})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: BespokeRitualConsultation */}

        {/* BEGIN: CinematicPhilosophyCampaign */}
        <section className="relative py-32 px-6 lg:px-14 xl:pl-32 border-t border-champagne-500/10 overflow-hidden" data-purpose="cinematic-campaign-banner" id="manifesto">
          <div className="absolute inset-0 z-0">
            <img
              alt="Cinematic luxury fashion fragrance campaign photography with dark luxury glass perfume bottle and golden dust"
              className="w-full h-full object-cover filter brightness-[0.4] contrast-125"
              src="/cinematic_luxury_fashion_fragrance_campaign_photography_close_up_of_hands.png"
            />
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
              <div>Paris</div>
              <span className="text-champagne-500/40">✦</span>
              <div>Grasse</div>
              <span className="text-champagne-500/40">✦</span>
              <div>Kyoto</div>
              <span className="text-champagne-500/40">✦</span>
              <div>New York</div>
            </div>
          </div>
        </section>
        {/* END: CinematicPhilosophyCampaign */}
      </main>

      {/* BEGIN: LuxuryShoppingBagDrawer */}
      <aside
        aria-hidden={!isBagOpen}
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-noir-900 border-l border-champagne-500/20 z-[100] transform transition-transform duration-500 ease-in-out shadow-2xl flex flex-col justify-between ${
          isBagOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        data-purpose="shopping-bag-panel"
        id="shopping-bag-drawer"
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-champagne-500/15 flex items-center justify-between bg-noir-950/80">
          <div>
            <h3 className="font-serif text-xl text-champagne-100">Your Private Selection</h3>
            <p className="text-[10px] uppercase tracking-widest text-champagne-400/70 mt-0.5">Complimentary Ritual Packaging Included</p>
          </div>
          <button
            aria-label="Close Shopping Bag"
            className="p-2 text-champagne-400 hover:text-champagne-100 transition-colors"
            id="close-drawer-btn"
            type="button"
            onClick={() => setIsBagOpen(false)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </button>
        </div>

        {/* Drawer Items Container */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {bag.length > 0 ? (
            bag.map((item) => (
              <div key={item.id} className="flex space-x-4 p-4 rounded-xl bg-noir-950 border border-champagne-500/15" id={`cart-item-${item.id}`}>
                <div className="w-20 h-24 rounded-lg bg-noir-850 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                  <img alt={item.name} className="w-full h-full object-contain" src={item.image} />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif text-base text-champagne-100">{item.name}</h4>
                      <span className="text-xs font-semibold text-champagne-300">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                    <p className="text-[10px] uppercase text-champagne-400/70 mt-0.5">{item.spec}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-champagne-400 pt-2 border-t border-champagne-500/10">
                    <div className="inline-flex items-center space-x-2">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => updateBagQuantity(item.id, item.qty - 1)}
                        className="w-5 h-5 flex items-center justify-center border border-champagne-500/30 rounded text-champagne-300 hover:text-champagne-100 hover:border-champagne-400"
                      >
                        -
                      </button>
                      <span className="text-[11px] text-champagne-300/80 px-1">{item.qty}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => updateBagQuantity(item.id, item.qty + 1)}
                        className="w-5 h-5 flex items-center justify-center border border-champagne-500/30 rounded text-champagne-300 hover:text-champagne-100 hover:border-champagne-400"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-[10px] uppercase tracking-wider text-rose-300/70 hover:text-rose-300"
                      type="button"
                      onClick={() => removeFromBag(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-champagne-300/50 space-y-3">
              <p className="font-serif text-lg text-champagne-200">Your bag is empty.</p>
              <p className="text-xs text-champagne-400/60 max-w-xs mx-auto">
                Explore our collection to add handcrafted extrait flacons to your private bag.
              </p>
              <a
                href="#collection"
                onClick={() => setIsBagOpen(false)}
                className="inline-block mt-2 px-6 py-2.5 rounded-full border border-champagne-500/30 text-champagne-300 text-xs uppercase tracking-wider hover:bg-champagne-500 hover:text-noir-950 transition-all"
              >
                Explore Collection
              </a>
            </div>
          )}

          {/* Free Gift / Samples Notification */}
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

        {/* Drawer Footer Subtotal & Action */}
        <div className="p-6 border-t border-champagne-500/15 bg-noir-950/90 space-y-4">
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between text-champagne-300/70">
              <span>Subtotal</span>
              <span className="text-champagne-200 font-medium" id="drawer-subtotal">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-champagne-400">
                <span>Maison Privilege Courtesy</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-champagne-300/70">
              <span>White Glove Insured Shipping</span>
              <span className="text-champagne-400 uppercase tracking-widest text-[10px]">Complimentary</span>
            </div>
          </div>
          <div className="pt-2 border-t border-champagne-500/10 flex justify-between items-baseline">
            <span className="text-xs uppercase tracking-widest text-champagne-300">Total</span>
            <span className="font-serif text-2xl text-champagne-100" id="drawer-total">
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            className="w-full py-4 px-6 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-super-wide font-semibold transition-all shadow-[0_4px_25px_rgba(201,169,110,0.3)] disabled:opacity-50"
            type="button"
            disabled={bag.length === 0}
            onClick={() => {
              setIsBagOpen(false);
              setIsCheckoutOpen(true);
            }}
          >
            Proceed To Secure Checkout
          </button>
          <p className="text-[9px] uppercase tracking-widest text-center text-champagne-400/50">
            Encrypted Transaction · Maison Authenticity Guaranteed
          </p>
        </div>
      </aside>

      {/* Overlay for Drawer */}
      {isBagOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-noir-950/80 backdrop-blur-sm z-50 transition-opacity"
          id="drawer-backdrop"
          onClick={() => setIsBagOpen(false)}
        ></div>
      )}
      {/* END: LuxuryShoppingBagDrawer */}

      {/* BEGIN: MaisonFooter */}
      <footer id="contact" className="border-t border-champagne-500/15 bg-noir-950 pt-20 pb-12 px-6 lg:px-14 relative" data-purpose="site-footer">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Brand Vision */}
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

            {/* Boutique Locations */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-[11px] uppercase tracking-widest text-champagne-400 font-medium">Boutiques</h4>
              <ul className="text-xs space-y-2 text-champagne-300/70 font-light">
                <li>Paris · 28 Rue Saint-Honoré</li>
                <li>New York · 742 Madison Ave</li>
                <li>Tokyo · Ginza 6-Chōme</li>
                <li>Milan · Via Monte Napoleone</li>
              </ul>
            </div>

            {/* Client Services */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-[11px] uppercase tracking-widest text-champagne-400 font-medium">Client Care</h4>
              <ul className="text-xs space-y-2 text-champagne-300/70 font-light">
                <li>
                  <button
                    onClick={() => {
                      const el = document.getElementById('ritual');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-champagne-400 transition-colors text-left"
                  >
                    Private Consultations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsClientSpaceOpen(true)}
                    className="hover:text-champagne-400 transition-colors text-left"
                  >
                    Complimentary Refills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsClientSpaceOpen(true)}
                    className="hover:text-champagne-400 transition-colors text-left"
                  >
                    Authenticity Registry
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsBagOpen(true)}
                    className="hover:text-champagne-400 transition-colors text-left"
                  >
                    Global Delivery
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter Sign-up */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-[11px] uppercase tracking-widest text-champagne-400 font-medium">The Atelier Gazette</h4>
              <p className="text-xs text-champagne-300/60 font-light leading-relaxed">
                Receive private allocations of strictly limited seasonal batches and invitations to private salon viewings.
              </p>

              {newsletterSubscribed ? (
                <div className="p-3.5 rounded-full bg-champagne-500/15 border border-champagne-500/30 text-xs text-champagne-200">
                  Merci. You are registered for the private allocations.
                </div>
              ) : (
                <form className="flex items-center space-x-2" onSubmit={handleNewsletterSubmit}>
                  <input
                    className="flex-1 bg-noir-900 border border-champagne-500/30 rounded-full px-4 py-2.5 text-xs text-champagne-200 placeholder-champagne-500/40 focus:outline-none focus:border-champagne-400"
                    placeholder="Enter your email address"
                    required
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button className="px-5 py-2.5 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-widest font-medium transition-colors" type="submit">
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Legal & Copyright */}
          <div className="pt-8 border-t border-champagne-500/10 flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-champagne-400/50 space-y-4 sm:space-y-0">
            <div>© 2025 NOIRÉÉ PARFUMS DE PARIS. ALL RIGHTS RESERVED.</div>
            <div className="flex space-x-6">
              <a className="hover:text-champagne-400 transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-champagne-400 transition-colors" href="#">Terms of Atelier</a>
              <a className="hover:text-champagne-400 transition-colors" href="#">Sustainability Disclosure</a>
            </div>
          </div>
        </div>
      </footer>
      {/* END: MaisonFooter */}
    </div>
  );
}