import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockCartItems } from '../../data/mockData'

export default function Cart() {
    const [cartItems, setCartItems] = useState(mockCartItems);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity === 0) {
            removeItem(id);
            return;
        }
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 15;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    if (cartItems.length === 0) {
        return (
            <div className="bg-gray-50 min-h-screen py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                        <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
                        <Link
                            to="/products"
                            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-200"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Shopping Cart
                    </h1>
                    <p className="text-gray-600">
                        {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6">
                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Product Image */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-32 h-32 object-cover rounded-xl"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {item.name}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                                                {item.size && (
                                                    <span>Size: <span className="font-medium">{item.size}</span></span>
                                                )}
                                                {item.color && (
                                                    <span>Color: <span className="font-medium">{item.color}</span></span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                                                <div className="flex items-center border border-gray-300 rounded-lg">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-4 py-2 font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Price and Remove */}
                                            <div className="flex items-center justify-between sm:justify-end gap-4">
                                                <div className="text-right">
                                                    <div className="text-lg font-bold text-gray-900">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        ${item.price} each
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Continue Shopping */}
                        <div className="pt-4">
                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                Continue Shopping
                            </Link>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                                </div>
                                
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium">
                                        {shipping === 0 ? (
                                            <span className="text-green-600">Free</span>
                                        ) : (
                                            `$${shipping.toFixed(2)}`
                                        )}
                                    </span>
                                </div>
                                
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="font-medium">${tax.toFixed(2)}</span>
                                </div>
                                
                                <hr className="my-4" />
                                
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Free Shipping Notice */}
                            {shipping > 0 && (
                                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                                    <p className="text-sm text-orange-800">
                                        Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                                    </p>
                                </div>
                            )}

                            {/* Checkout Button */}
                            <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 text-lg">
                                Proceed to Checkout
                            </button>

                            {/* Security Notice */}
                            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Secure checkout
                            </div>

                            {/* Payment Methods */}
                            <div className="mt-6 pt-6 border-t">
                                <p className="text-sm text-gray-600 mb-3">We accept:</p>
                                <div className="flex gap-2">
                                    <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                                        VISA
                                    </div>
                                    <div className="w-10 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                                        MC
                                    </div>
                                    <div className="w-10 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                                        AMEX
                                    </div>
                                    <div className="w-10 h-6 bg-yellow-400 rounded text-blue-900 text-xs flex items-center justify-center font-bold">
                                        PP
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
