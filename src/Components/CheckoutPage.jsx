import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

// --------------------- CARD PAYMENT FORM ---------------------
function CheckoutForm({ total, discount }) {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [taxNumber, setTaxNumber] = useState("");

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="border-b border-gray-200 mb-6 pb-3">
        <button className="py-2 px-6 text-sm font-medium border-b-2 border-blue-600 text-blue-600">
          Pay by Card
        </button>
      </div>

      {/* Inputs */}
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email address
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card number
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="1234 1234 1234 1234"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expiration date
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Security code
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cardholder name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Jenny Rosen"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tax number (optional)
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="123456789"
            value={taxNumber}
            onChange={(e) => setTaxNumber(e.target.value)}
          />
        </div>

        {/* Summary */}
        <div className="flex justify-between mb-6 font-bold text-lg">
          <span className="text-gray-900">Total (after 5% discount)</span>
          <span className="text-blue-600">₨{total.toLocaleString()}</span>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
          Pay ₨{total.toLocaleString()}
        </button>
      </div>

      <div className="text-center mt-6 text-gray-500 text-xs">
        Powered by Supplier · Terms · Privacy
      </div>
    </div>
  );
}

// --------------------- COD PAYMENT FORM ---------------------
function CODForm({ subtotal, shipping, codCharges, discount }) {
  const total = subtotal + shipping + codCharges - discount;

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <h3 className="text-xl font-bold mb-6 text-center">Cash on Delivery</h3>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-700">Subtotal</span>
          <strong className="text-gray-900">{subtotal.toLocaleString()} PKR</strong>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Shipping (Fixed)</span>
          <strong className="text-gray-900">{shipping.toLocaleString()} PKR</strong>
        </div>
        <div className="flex justify-between text-red-600">
          <span>COD Charges</span>
          <strong>+{codCharges} PKR</strong>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Discount (5%)</span>
          <strong>-{discount.toLocaleString()} PKR</strong>
        </div>
        <hr className="border-gray-300 my-3" />
        <div className="flex justify-between font-bold text-lg">
          <span className="text-gray-900">Total</span>
          <span className="text-blue-600">{total.toLocaleString()} PKR</span>
        </div>
      </div>

      <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
        Place Order (COD)
      </button>
    </div>
  );
}

// --------------------- MAIN CHECKOUT PAGE ---------------------
export default function CheckoutPage() {
  const { state } = useLocation();
  const product = state?.product || {}; // ✅ data from previous page
  const subtotal = product.totalPrice || 0;
  const shipping = 500; // ✅ Fixed shipping charge
  const codCharges = 250;
  const discount = subtotal * 0.05; // ✅ 5% discount

  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [streetname, setStreetname] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const formRef = useRef(null);

  const total =
    paymentMethod === "COD"
      ? subtotal + shipping + codCharges - discount
      : subtotal + shipping - discount;

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setPaymentMethod("");
      }
    }
    if (paymentMethod) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [paymentMethod]);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
              
              {/* LEFT FORM */}
              <div className="w-full md:w-7/12 p-6 md:p-8 bg-white order-2 md:order-1">
                <h5 className="font-bold text-lg mb-6">Checkout</h5>

                {/* CUSTOMER INFO */}
                <label className="block text-sm font-medium text-gray-600 mb-3">
                  Customer Information
                </label>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <input
                    className="w-full border-b border-gray-200 px-4 py-3 text-sm outline-none"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="w-full border-b border-gray-200 px-4 py-3 text-sm outline-none"
                    type="text"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    className="w-full border-b border-gray-200 px-4 py-3 text-sm outline-none"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full border-b border-gray-200 px-4 py-3 text-sm outline-none"
                    type="text"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <input
                    className="w-full border-b border-gray-200 px-4 py-3 text-sm outline-none"
                    type="text"
                    placeholder="Enter your street name or number"
                    value={streetname}
                    onChange={(e) => setStreetname(e.target.value)}
                  />
                  <input
                    className="w-full px-4 py-3 text-sm outline-none"
                    type="text"
                    placeholder="Enter postal code"
                    value={postalcode}
                    onChange={(e) => setPostalcode(e.target.value)}
                  />
                </div>

                {/* PAYMENT OPTIONS */}
                <label className="block text-sm font-medium text-gray-600 mt-6 mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className={`h-16  border-2 font-medium flex items-center justify-center ${
                      paymentMethod === "e-Transfer"
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-100 bg-white text-gray-600"
                    }`}
                    onClick={() => setPaymentMethod("e-Transfer")}
                  >
                    Bank Transfer
                  </button>
                  <button
                    className={`h-16  border-2 font-medium flex items-center justify-center ${
                      paymentMethod === "COD"
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-100 bg-white text-gray-600"
                    }`}
                    onClick={() => setPaymentMethod("COD")}
                  >
                    Cash on Delivery
                  </button>
                </div>

                {paymentMethod && (
                  <div ref={formRef} className="mt-6">
                    {paymentMethod === "e-Transfer" && (
                      <CheckoutForm total={total} discount={discount} />
                    )}
                    {paymentMethod === "COD" && (
                      <CODForm
                        subtotal={subtotal}
                        shipping={shipping}
                        codCharges={codCharges}
                        discount={discount}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* RIGHT SUMMARY */}
              <div className="w-full md:w-5/12 p-6 md:p-8 bg-gray-50">
                <div className="bg-blue-50  p-6 h-full border border-blue-50">
                  <div className="text-center mt-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-28 h-28 mx-auto object-cover rounded-lg mb-4"
                    />
                    <p className="font-bold text-gray-800">{product.name}</p>
                    <p className="text-gray-500 text-xs mb-2">
                      Quantity: {product.quantity || 1}
                    </p>
                    <h2 className="font-bold text-3xl text-blue-600 mb-1">
                      ₨{total.toLocaleString()}
                    </h2>
                    <p className="text-gray-500 text-xs">Secure Payment 🔒</p>
                  </div>

                  <hr className="border-gray-200 my-4" />

                  <p className="text-gray-500 text-xs mb-3">Order Summary</p>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{product.name}</span>
                    <span>{subtotal.toLocaleString()} PKR</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Shipping </span>
                    <span>{shipping.toLocaleString()} PKR</span>
                  </div>

                  <div className="flex justify-between text-sm text-green-600 mb-1">
                    <span>Discount (5%)</span>
                    <span>-{discount.toLocaleString()} PKR</span>
                  </div>

                  {paymentMethod === "COD" && (
                    <div className="flex justify-between text-sm text-red-600 mb-1">
                      <span>COD Charges</span>
                      <span>{codCharges.toLocaleString()} PKR</span>
                    </div>
                  )}

                  <hr className="border-gray-200 my-4" />

                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">
                      {total.toLocaleString()} PKR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
