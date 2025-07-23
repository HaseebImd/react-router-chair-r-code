import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, categories } from '../../data/mockData'

export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Filter products based on selected category and search term
    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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
        <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-8">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Our <span className="text-orange-600">Products</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our curated collection of premium products across multiple categories
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        />
                        <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                                selectedCategory === category.id
                                    ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md'
                            }`}
                        >
                            {category.name} ({category.count})
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group h-[520px] flex flex-col">
                            {/* Product Image */}
                            <div className="relative overflow-hidden flex-shrink-0">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
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
                                    {!product.inStock && (
                                        <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                            Out of Stock
                                        </span>
                                    )}
                                </div>
                                {/* Quick Add to Cart */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full shadow-lg transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 h-14 overflow-hidden">
                                    <span className="line-clamp-2">
                                        {product.name}
                                    </span>
                                </h3>
                                
                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex">
                                        {renderStars(product.rating)}
                                    </div>
                                    <span className="text-sm text-gray-600">
                                        {product.rating} ({product.reviews})
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-2xl font-bold text-gray-900">
                                        ${product.price}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-lg text-gray-500 line-through">
                                            ${product.originalPrice}
                                        </span>
                                    )}
                                </div>

                                {/* View Product Button */}
                                <div className="mt-auto">
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-medium transition-colors duration-200"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Products Found */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-16">
                        <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                    </div>
                )}

                {/* Results Count */}
                <div className="text-center mt-12">
                    <p className="text-gray-600">
                        Showing {filteredProducts.length} of {products.length} products
                    </p>
                </div>
            </div>
        </div>
    );
}
