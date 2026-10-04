import React, { useState } from 'react';
import { useStore } from '../context/useStore';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    bag,
    subtotal,
    discount,
    total,
    promoCode,
    applyPromoCode,
    removePromoCode,
    placeTestOrder
  } = useStore();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    country: 'France',
    conciergeNotes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '4242 •••• •••• 4242',
    expDate: '12/28',
    cvv: '888',
    cardHolder: 'VIP CLIENT'
  });

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput) return;
    const res = applyPromoCode(promoInput);
    setPromoMessage(res);
  };

  const fillTestCredentials = () => {
    setFormData({
      firstName: 'Henri',
      lastName: 'de Saint-Germain',
      email: 'henri.saintgermain@noire-client.com',
      phone: '+33 1 42 68 55 00',
      address: '18 Place Vendôme, Suite 402',
      city: 'Paris',
      state: 'Île-de-France',
      pinCode: '75001',
      country: 'France',
      conciergeNotes: 'Please ring bell 4B upon arrival.'
    });
    setCardDetails({
      cardNumber: '4242 •••• •••• 4242',
      expDate: '12/28',
      cvv: '888',
      cardHolder: 'HENRI DE SAINT-GERMAIN'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bag.length === 0) return;

    setIsProcessing(true);

    setTimeout(() => {
      const order = placeTestOrder(formData, paymentMethod);
      setIsProcessing(false);
      setCompletedOrder(order);
    }, 1400);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setCompletedOrder(null);
  };

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-noir-950/90 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Main Checkout Container */}
      <div className="relative w-full max-w-4xl bg-noir-900 border border-champagne-500/25 rounded-2xl shadow-2xl overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-champagne-500/15 bg-noir-950/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl tracking-ultra-wide uppercase text-gold-gradient font-light">
              NOIRÉÉ
            </span>
            <span className="text-[10px] uppercase tracking-widest text-champagne-400/60 border-l border-champagne-500/20 pl-3">
              Maison Private Checkout
            </span>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close Checkout"
            className="p-2 text-champagne-400 hover:text-champagne-100 transition-colors rounded-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {completedOrder ? (
            /* Order Confirmation View */
            <div className="text-center py-8 space-y-6 max-w-xl mx-auto">
              <div className="w-16 h-16 mx-auto rounded-full bg-champagne-500/20 border border-champagne-500/40 flex items-center justify-center text-champagne-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-super-wide text-champagne-400 font-semibold block mb-1">
                  Test Transaction Simulated · No Real Charges Levied
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-champagne-100 font-light">
                  Merci, {completedOrder.customer.firstName || 'Client Privilégié'}.
                </h3>
                <p className="font-serif italic text-champagne-400 text-base mt-2">
                  Your private fragrance allocation is confirmed.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-noir-950 border border-champagne-500/20 text-left space-y-3 text-xs">
                <div className="flex justify-between border-b border-champagne-500/10 pb-2">
                  <span className="text-champagne-400/70 uppercase tracking-widest text-[10px]">Test Order Reference</span>
                  <span className="font-mono text-champagne-200 font-medium">{completedOrder.id}</span>
                </div>
                <div className="flex justify-between border-b border-champagne-500/10 pb-2">
                  <span className="text-champagne-400/70 uppercase tracking-widest text-[10px]">Allocation Date</span>
                  <span className="text-champagne-300">{completedOrder.date}</span>
                </div>
                <div className="flex justify-between border-b border-champagne-500/10 pb-2">
                  <span className="text-champagne-400/70 uppercase tracking-widest text-[10px]">Delivery Address</span>
                  <span className="text-champagne-200 text-right">
                    {completedOrder.customer.address}, {completedOrder.customer.city} {completedOrder.customer.pinCode}
                  </span>
                </div>
                <div className="flex justify-between border-b border-champagne-500/10 pb-2">
                  <span className="text-champagne-400/70 uppercase tracking-widest text-[10px]">Payment Simulation</span>
                  <span className="text-champagne-300 capitalize">{completedOrder.paymentMethod} (Mock Verified)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-champagne-300 uppercase tracking-widest text-[11px] font-medium">Total Authorized</span>
                  <span className="font-serif text-lg text-champagne-100">${completedOrder.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-champagne-500/10 border border-champagne-500/20 text-left space-y-1">
                <p className="text-[11px] font-medium text-champagne-300 flex items-center gap-2">
                  <span>✦</span> Complimentary Discovery Samples Enclosed
                </p>
                <p className="text-[11px] text-champagne-300/70 font-light">
                  Your numbered presentation case will be hand-assembled in Grasse and dispatched with White Glove Insured Express.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleClose}
                  className="px-8 py-3.5 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-super-wide font-medium transition-all shadow-[0_0_20px_rgba(201,169,110,0.25)]"
                >
                  Return To Boutique
                </button>
              </div>
            </div>
          ) : bag.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <p className="font-serif text-2xl text-champagne-100">Your Private Bag is Empty</p>
              <p className="text-xs text-champagne-400/70 max-w-sm mx-auto">
                Please add at least one fragrance to your Bag before initiating secure checkout.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 rounded-full border border-champagne-500/30 text-champagne-300 hover:border-champagne-400 text-xs uppercase tracking-widest"
              >
                Return To Collection
              </button>
            </div>
          ) : (
            /* Active Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Quick Fill Test Mode Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 rounded-xl bg-champagne-500/10 border border-champagne-500/25 gap-3">
                <div className="flex items-center gap-2 text-champagne-300 text-xs">
                  <span className="w-2 h-2 rounded-full bg-amberGlow animate-pulse"></span>
                  <span>Haute Parfumerie Secure Test Gateway</span>
                </div>
                <button
                  type="button"
                  onClick={fillTestCredentials}
                  className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-md border border-champagne-500/40 text-champagne-300 hover:bg-champagne-500 hover:text-noir-950 transition-all font-medium"
                >
                  Auto-Fill Test Client Credentials
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Client & Shipping Information */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-champagne-400 font-semibold mb-4 flex items-center gap-2">
                      <span>01</span>
                      <span>Client &amp; White Glove Delivery Details</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-champagne-300/80 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Henri"
                          className="w-full bg-noir-950 border border-champagne-500/20 rounded-lg px-3 py-2.5 text-champagne-100 placeholder-champagne-500/30 focus:outline-none focus:border-champagne-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-champagne-300/80 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="e.g. de Saint-Germain"
                          className="w-full bg-noir-950 border border-champagne-500/20 rounded-lg px-3 py-2.5 text-champagne-100 placeholder-champagne-500/30 focus:outline-none focus:border-champagne-400"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[10px] uppercase tracking-wider text-champagne-300/80 mb-1">
                          Email Address * (For Certificate &amp; Tracking)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="client@domaine.com"
                          className="w-full bg-noir-950 border border-champagne-500/20 rounded-lg px-3 py-2.5 text-champagne-100 placeholder-champagne-500/30 focus:outline-none focus:border-champagne-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-champagne-300/80 mb-1">
                          Contact Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+33 1 42 68 55 00"
                          className="w-full bg-noir-950 border border-champagne-500/20 rounded-lg px-3 py-2.5 text-champagne-100 placeholder-champagne-500/30 focus:outline-none focus:border-champagne-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-champagne-300/80 mb-1">
                          Country / Region *
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          placeholder="France / USA / International"
                          className="w-full bg-noir-950 border border-champagne-500/20 rounded-lg px-3 py-2.5 text-champagne-100 placeholder-champagne-500/30 focus:outline-none focus:border-champagne-400"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[10px] uppercase tracking-wider text-champagne-300/80 mb-1">
                          Delivery Street Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          placeholder="e.g. 18 Place Vendôme, Suite 402"
                          className="w-full bg-noir-950 border border-champagne-500/20 rounded-lg px-3 py-2.5 text-champagne-100 placeholder-champagne-500/30 focus:outline-none focus:border-champagne-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-champagne-300/80 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          placeholder="Paris"
                          className="w-full bg-noir-950 border border-champagne-500/20 rounded-lg px-3 py-2.5 text-champagne-100 placeholder-champagne-500/30 focus:outline-none focus:border-champagne-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-champagne-300/80 mb-1">
                          Postal / PIN Code *
                        </label>
                        <input
                          type="text"
                          name="pinCode"
                          value={formData.pinCode}
                          onChange={handleChange}
                          required
                          placeholder="75001"
                          className="w-full bg-noir-950 border border-champagne-500/20 rounded-lg px-3 py-2.5 text-champagne-100 placeholder-champagne-500/30 focus:outline-none focus:border-champagne-400"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[10px] uppercase tracking-wider text-champagne-300/80 mb-1">
                          Concierge Delivery Instructions (Optional)
                        </label>
                        <input
                          type="text"
                          name="conciergeNotes"
                          value={formData.conciergeNotes}
                          onChange={handleChange}
                          placeholder="e.g. Leave with private residence concierge"
                          className="w-full bg-noir-950 border border-champagne-500/20 rounded-lg px-3 py-2.5 text-champagne-100 placeholder-champagne-500/30 focus:outline-none focus:border-champagne-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="pt-4 border-t border-champagne-500/15">
                    <h4 className="text-xs uppercase tracking-widest text-champagne-400 font-semibold mb-4 flex items-center gap-2">
                      <span>02</span>
                      <span>Payment Simulation (Safe Test Mode)</span>
                    </h4>

                    <div className="grid grid-cols-3 gap-3 mb-4 text-xs">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          paymentMethod === 'card'
                            ? 'border-champagne-500 bg-champagne-500/15 text-champagne-100'
                            : 'border-champagne-500/20 bg-noir-950 text-champagne-400/80 hover:border-champagne-500/40'
                        }`}
                      >
                        <div className="font-medium">Credit Card</div>
                        <div className="text-[10px] text-champagne-400/60 mt-0.5">Test Gateway</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('upi')}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          paymentMethod === 'upi'
                            ? 'border-champagne-500 bg-champagne-500/15 text-champagne-100'
                            : 'border-champagne-500/20 bg-noir-950 text-champagne-400/80 hover:border-champagne-500/40'
                        }`}
                      >
                        <div className="font-medium">UPI / Instant</div>
                        <div className="text-[10px] text-champagne-400/60 mt-0.5">Mock Simulator</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('concierge')}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          paymentMethod === 'concierge'
                            ? 'border-champagne-500 bg-champagne-500/15 text-champagne-100'
                            : 'border-champagne-500/20 bg-noir-950 text-champagne-400/80 hover:border-champagne-500/40'
                        }`}
                      >
                        <div className="font-medium">Concierge COD</div>
                        <div className="text-[10px] text-champagne-400/60 mt-0.5">Upon Delivery</div>
                      </button>
                    </div>

                    {paymentMethod === 'card' && (
                      <div className="p-4 rounded-xl bg-noir-950 border border-champagne-500/20 space-y-3 text-xs">
                        <div>
                          <label className="block text-[10px] uppercase text-champagne-400/70 mb-1">
                            Card Number
                          </label>
                          <input
                            type="text"
                            value={cardDetails.cardNumber}
                            onChange={(e) => setCardDetails(prev => ({ ...prev, cardNumber: e.target.value }))}
                            className="w-full bg-noir-900 border border-champagne-500/20 rounded px-3 py-2 text-champagne-100 font-mono"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] uppercase text-champagne-400/70 mb-1">
                              Expires
                            </label>
                            <input
                              type="text"
                              value={cardDetails.expDate}
                              onChange={(e) => setCardDetails(prev => ({ ...prev, expDate: e.target.value }))}
                              className="w-full bg-noir-900 border border-champagne-500/20 rounded px-3 py-2 text-champagne-100 font-mono"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase text-champagne-400/70 mb-1">
                              CVV / CVC
                            </label>
                            <input
                              type="text"
                              value={cardDetails.cvv}
                              onChange={(e) => setCardDetails(prev => ({ ...prev, cvv: e.target.value }))}
                              className="w-full bg-noir-900 border border-champagne-500/20 rounded px-3 py-2 text-champagne-100 font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'upi' && (
                      <div className="p-4 rounded-xl bg-noir-950 border border-champagne-500/20 space-y-2 text-xs">
                        <label className="block text-[10px] uppercase text-champagne-400/70">
                          Mock Virtual Payment Address (VPA) / UPI ID
                        </label>
                        <input
                          type="text"
                          defaultValue="client@noiree"
                          className="w-full bg-noir-900 border border-champagne-500/20 rounded px-3 py-2 text-champagne-100 font-mono"
                        />
                        <p className="text-[10px] text-champagne-400/50">
                          Instant mock verification simulator ready.
                        </p>
                      </div>
                    )}

                    {paymentMethod === 'concierge' && (
                      <div className="p-4 rounded-xl bg-noir-950 border border-champagne-500/20 text-xs text-champagne-300/80 space-y-1">
                        <p className="font-medium text-champagne-200">White Glove Concierge Settlement</p>
                        <p className="text-[11px] font-light">
                          Our uniformed courier will present your sealed presentation case and accept contactless payment or private draft at your door.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Order Summary */}
                <div className="lg:col-span-5 bg-noir-950/80 border border-champagne-500/20 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-champagne-400 font-semibold mb-4">
                      Allocation Summary ({bag.reduce((s, i) => s + i.qty, 0)} Items)
                    </h4>

                    {/* Items List */}
                    <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                      {bag.map((item) => (
                        <div key={item.id} className="flex items-center justify-between text-xs py-2 border-b border-champagne-500/10">
                          <div className="flex items-center gap-3">
                            <img src={item.image} alt={item.name} className="w-10 h-12 object-contain bg-noir-900 rounded p-1" />
                            <div>
                              <p className="font-serif text-champagne-100 text-sm">{item.name}</p>
                              <p className="text-[10px] text-champagne-400/70">{item.sizeLabel} · Qty: {item.qty}</p>
                            </div>
                          </div>
                          <span className="font-serif text-champagne-200">${(item.price * item.qty).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Privilege Code Input */}
                    <div className="pt-4 border-t border-champagne-500/15">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={promoInput}
                          onChange={(e) => setPromoInput(e.target.value)}
                          placeholder="Maison Privilege Code (e.g. NOIR10)"
                          className="flex-1 bg-noir-900 border border-champagne-500/20 rounded-lg px-3 py-2 text-xs text-champagne-100 placeholder-champagne-500/30 uppercase focus:outline-none focus:border-champagne-400"
                        />
                        <button
                          type="button"
                          onClick={handleApplyPromo}
                          className="px-4 py-2 rounded-lg border border-champagne-500/40 text-[10px] uppercase tracking-wider text-champagne-300 hover:bg-champagne-500 hover:text-noir-950 transition-all font-medium"
                        >
                          Apply
                        </button>
                      </div>
                      {promoCode && (
                        <div className="mt-2 flex items-center justify-between text-[11px] text-champagne-400">
                          <span>Privilege Code {promoCode} Active (10% Courtesy)</span>
                          <button
                            type="button"
                            onClick={removePromoCode}
                            className="text-rose-400/80 hover:text-rose-300"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                      {promoMessage && !promoCode && (
                        <p className="text-[10px] text-rose-300/80 mt-1">{promoMessage.message}</p>
                      )}
                    </div>

                    {/* Price Breakdown */}
                    <div className="space-y-2 pt-4 border-t border-champagne-500/10 text-xs">
                      <div className="flex justify-between text-champagne-300/70">
                        <span>Subtotal</span>
                        <span className="text-champagne-200 font-medium">${subtotal.toFixed(2)}</span>
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
                      <div className="flex justify-between text-champagne-300/70">
                        <span>Included Discovery Ritual (2 Samples)</span>
                        <span className="text-champagne-400 uppercase tracking-widest text-[10px]">Complimentary</span>
                      </div>
                      <div className="pt-3 border-t border-champagne-500/15 flex justify-between items-baseline">
                        <span className="text-xs uppercase tracking-widest text-champagne-300">Total</span>
                        <span className="font-serif text-2xl text-champagne-100">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="space-y-3">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full py-4 px-6 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 text-xs uppercase tracking-super-wide font-semibold transition-all shadow-[0_4px_25px_rgba(201,169,110,0.3)] disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      {isProcessing ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-noir-950 border-t-transparent rounded-full animate-spin"></span>
                          <span>Securing Paris Allocation...</span>
                        </>
                      ) : (
                        <span>Authorize &amp; Place Order — ${total.toFixed(2)}</span>
                      )}
                    </button>
                    <p className="text-[9px] uppercase tracking-widest text-center text-champagne-400/50">
                      Encrypted Safe Test Gateway · No Real Charges Processed
                    </p>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
