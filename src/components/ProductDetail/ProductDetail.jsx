import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../../data/mockData'

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
    const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
    const [quantity, setQuantity] = useState(1);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
                    <Link to="/products" className="text-orange-600 hover:text-orange-700">
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    // Mock multiple images (using same image for demo)
    const productImages = [
        product.image,
        product.image,
        product.image
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    // Get related products (same category, different product)
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumb */}
            <div className="container mx-auto px-6 py-4">
                <nav className="flex items-center space-x-2 text-sm text-gray-600">
                    <Link to="/" className="hover:text-orange-600">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-orange-600">Products</Link>
                    <span>/</span>
                    <span className="text-gray-900">{product.name}</span>
                </nav>
            </div>

            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                            <img
                                src={productImages[activeImageIndex]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex space-x-4">
                            {productImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImageIndex(index)}
                                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImageIndex === index
                                        ? 'border-orange-600'
                                        : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Badges */}
                        <div className="flex gap-2">
                            {product.isNew && (
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    New
                                </span>
                            )}
                            {product.isSale && (
                                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Sale
                                </span>
                            )}
                            {!product.inStock && (
                                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Out of Stock
                                </span>
                            )}
                        </div>

                        {/* Product Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {renderStars(product.rating)}
                                </div>
                                <span className="text-lg font-medium text-gray-900">
                                    {product.rating}
                                </span>
                            </div>
                            <span className="text-gray-600">
                                ({product.reviews} reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-bold text-gray-900">
                                ${product.price}
                            </span>
                            {product.originalPrice && (
                                <span className="text-2xl text-gray-500 line-through">
                                    ${product.originalPrice}
                                </span>
                            )}
                            {product.originalPrice && (
                                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                                    Save ${product.originalPrice - product.price}
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Size Selection */}
                        {product.sizes.length > 1 && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 border rounded-lg font-medium transition-all ${selectedSize === size
                                                ? 'border-orange-600 bg-orange-50 text-orange-600'
                                                : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Color Selection */}
                        {product.colors.length > 1 && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.colors.map(color => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-4 py-2 border rounded-lg font-medium transition-all ${selectedColor === color
                                                ? 'border-orange-600 bg-orange-50 text-orange-600'
                                                : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 font-medium">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="text-gray-600">
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="flex gap-4">
                            <button
                                disabled={!product.inStock}
                                className={`flex-1 py-4 px-8 rounded-lg font-semibold text-lg transition-all ${product.inStock
                                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                            <button className="px-6 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Related Products
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map(relatedProduct => (
                                <Link
                                    key={relatedProduct.id}
                                    to={`/product/${relatedProduct.id}`}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={relatedProduct.image}
                                            alt={relatedProduct.name}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                            {relatedProduct.name}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-gray-900">
                                                ${relatedProduct.price}
                                            </span>
                                            {relatedProduct.originalPrice && (
                                                <span className="text-sm text-gray-500 line-through">
                                                    ${relatedProduct.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
