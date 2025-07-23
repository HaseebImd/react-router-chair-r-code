import React from 'react'
import { Link } from 'react-router-dom'
import { products, categories } from '../../data/mockData'

export default function Home() {
    // Get featured products (new and on sale items)
    const featuredProducts = products.filter(product => product.isNew || product.isSale).slice(0, 8);

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div className="bg-gradient-to-br from-orange-50 to-white min-h-screen">
            {/* Hero Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Welcome to <span className="text-orange-600">Our Store</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Discover amazing products across electronics, fashion, home, and sports categories
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/products"
                            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            Shop Now
                        </Link>
                        <Link
                            to="/about"
                            className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 px-6 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Shop by <span className="text-orange-600">Category</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.filter(cat => cat.id !== 'all').map(category => (
                            <Link
                                key={category.id}
                                to={`/products`}
                                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100"
                            >
                                <div className="text-4xl mb-4">
                                    {category.id === 'electronics' && '📱'}
                                    {category.id === 'fashion' && '👕'}
                                    {category.id === 'home' && '🏠'}
                                    {category.id === 'sports' && '⚽'}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-gray-600">
                                    {category.count} products
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Featured <span className="text-orange-600">Products</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                                {/* Product Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        {product.isNew && (
                                            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                New
                                            </span>
                                        )}
                                        {product.isSale && (
                                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                Sale
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                        {product.name}
                                    </h3>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex">
                                            {renderStars(product.rating)}
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            {product.rating}
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xl font-bold text-gray-900">
                                            ${product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">
                                                ${product.originalPrice}
                                            </span>
                                        )}
                                    </div>

                                    {/* View Product Button */}
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center py-2 rounded-lg font-medium transition-colors duration-200"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link
                            to="/products"
                            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl font-bold text-orange-600 mb-2">{products.length}+</div>
                            <div className="text-gray-600 font-medium">Products</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
                            <div className="text-gray-600 font-medium">Happy Customers</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-orange-600 mb-2">4.8</div>
                            <div className="text-gray-600 font-medium">Average Rating</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                            <div className="text-gray-600 font-medium">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-700">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Start Shopping?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers and discover amazing products at great prices
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/signup"
                            className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            Sign Up Now
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-transparent hover:bg-orange-800 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white transition-all duration-200 transform hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
