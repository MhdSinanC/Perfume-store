import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { StoreContext } from './storeInstance';

export function StoreProvider({ children }) {
  // Bag State with localStorage persistence
  const [bag, setBag] = useState(() => {
    try {
      const saved = localStorage.getItem('noiree_bag');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    // Default initial item matching original static state
    const defaultProduct = PRODUCTS[0];
    return [
      {
        id: `${defaultProduct.id}-50ml`,
        productId: defaultProduct.id,
        name: defaultProduct.name,
        size: '50ml',
        sizeLabel: '50 ML',
        spec: '50 ML — Extrait de Parfum',
        price: 185,
        qty: 1,
        image: defaultProduct.image
      }
    ];
  });

  // Wishlist State with localStorage persistence
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('noiree_wishlist');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [];
  });

  // Orders State with localStorage persistence
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('noiree_orders');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [];
  });

  // UI Modals / Drawers State
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isClientSpaceOpen, setIsClientSpaceOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscountRate, setPromoDiscountRate] = useState(0);

  // Sync Bag to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('noiree_bag', JSON.stringify(bag));
    } catch (e) {
      console.error('Failed to save bag to localStorage', e);
    }
  }, [bag]);

  // Sync Wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('noiree_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  // Sync Orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('noiree_orders', JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to save orders to localStorage', e);
    }
  }, [orders]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(prev => prev === message ? null : prev);
    }, 3200);
  };

  // Bag Operations
  const addToBag = (product, selectedSize = '50ml', qty = 1) => {
    const sizeData = product.sizes?.find(s => s.size === selectedSize) || {
      size: '50ml',
      label: '50 ML',
      price: product.price
    };

    const itemId = `${product.id}-${sizeData.size}`;

    setBag(prev => {
      const existingIndex = prev.findIndex(item => item.id === itemId);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          qty: next[existingIndex].qty + qty
        };
        return next;
      } else {
        return [
          ...prev,
          {
            id: itemId,
            productId: product.id,
            name: product.name,
            size: sizeData.size,
            sizeLabel: sizeData.label,
            spec: `${sizeData.label} — ${product.category || 'Extrait de Parfum'}`,
            price: sizeData.price,
            qty: qty,
            image: product.image
          }
        ];
      }
    });

    showToast(`Added ${product.name} (${sizeData.label}) to Bag`);
  };

  const updateBagQuantity = (itemId, newQty) => {
    if (newQty <= 0) {
      removeFromBag(itemId);
      return;
    }
    setBag(prev => prev.map(item => item.id === itemId ? { ...item, qty: newQty } : item));
  };

  const removeFromBag = (itemId) => {
    setBag(prev => prev.filter(item => item.id !== itemId));
    showToast('Item removed from Bag');
  };

  const clearBag = () => {
    setBag([]);
  };

  // Wishlist Operations
  const toggleWishlist = (product) => {
    const exists = wishlist.some(item => item.id === product.id);
    if (exists) {
      setWishlist(prev => prev.filter(item => item.id !== product.id));
      showToast(`Removed ${product.name} from Wishlist`);
    } else {
      setWishlist(prev => [...prev, product]);
      showToast(`Added ${product.name} to Wishlist`);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
    showToast('Removed from Wishlist');
  };

  // Promo Code
  const applyPromoCode = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'NOIR10' || clean === 'MAISON') {
      setPromoCode(clean);
      setPromoDiscountRate(0.1); // 10% discount
      showToast('Privilege code applied: 10% Maison courtesy');
      return { success: true, message: '10% privilege discount applied' };
    } else {
      return { success: false, message: 'Invalid private code' };
    }
  };

  const removePromoCode = () => {
    setPromoCode('');
    setPromoDiscountRate(0);
  };

  // Calculations
  const bagItemsCount = bag.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = bag.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = Math.round(subtotal * promoDiscountRate);
  const shipping = 0; // Complimentary White Glove Insured Shipping
  const total = Math.max(0, subtotal - discount + shipping);

  // Place Test Order
  const placeTestOrder = (customerDetails, paymentMethod) => {
    const orderId = `NE-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      items: [...bag],
      subtotal,
      discount,
      shipping: 'Complimentary White Glove Express',
      total,
      customer: customerDetails,
      paymentMethod,
      status: 'Allocation Confirmed · In Preparation'
    };

    setOrders(prev => [newOrder, ...prev]);
    clearBag();
    return newOrder;
  };

  const addConfirmedOrder = (order) => {
    setOrders(prev => [order, ...prev]);
  };

  return (
    <StoreContext.Provider
      value={{
        products: PRODUCTS,
        bag,
        bagItemsCount,
        subtotal,
        discount,
        shipping,
        total,
        promoCode,
        promoDiscountRate,
        applyPromoCode,
        removePromoCode,
        addToBag,
        updateBagQuantity,
        removeFromBag,
        clearBag,
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        orders,
        placeTestOrder,
        addConfirmedOrder,
        isBagOpen,
        setIsBagOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isClientSpaceOpen,
        setIsClientSpaceOpen,
        selectedProductForModal,
        setSelectedProductForModal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
