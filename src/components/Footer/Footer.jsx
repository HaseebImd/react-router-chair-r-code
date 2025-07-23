import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative mx-auto w-full max-w-screen-xl px-6 py-12 lg:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <div className="h-16 w-16 rounded-full shadow-xl border-3 border-orange-400 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 rounded-full bg-orange-400 opacity-20 animate-pulse"></div>
                            </div>
                            <div>
                                <span className="text-3xl font-bold text-white tracking-tight">
                                    Shop<span className="text-orange-400">Hub</span>
                                </span>
                                <p className="text-gray-300 text-sm mt-1">Your Premium Shopping Destination</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                            Discover our curated collection of premium products across multiple categories. 
                            Quality, innovation, and customer satisfaction are at the heart of everything we do.
                        </p>
                        
                        {/* Newsletter Signup */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                />
                                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 relative">
                            Quick Links
                            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/github" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Github
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support & Legal */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 relative">
                            Support & Legal
                            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></div>
                        </h3>
                        <ul className="space-y-3 mb-8">
                            <li>
                                <Link to="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Support Center
                                </Link>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
                            <div className="flex gap-3">
                                <a href="https://github.com/HaseebImd" target="_blank" rel="noreferrer" 
                                   className="p-3 bg-gray-800 hover:bg-orange-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.649.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer" 
                                   className="p-3 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                                    </svg>
                                </a>
                                <a href="https://wa.me/" target="_blank" rel="noreferrer" 
                                   className="p-3 bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.987c-.003 5.451-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.213 1.615 6.044L0 24l6.043-1.589a11.876 11.876 0 0 0 6.005 1.605h.005c6.554 0 11.89-5.435 11.893-12.086a11.82 11.82 0 0 0-3.48-8.651" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com/" target="_blank" rel="noreferrer" 
                                   className="p-3 bg-gray-800 hover:bg-pink-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.388 3.678 1.37c-.98.98-1.24 2.092-1.298 3.373C2.012 8.332 2 8.741 2 12c0 3.259.012 3.668.07 4.948.058 1.281.318 2.393 1.298 3.373.981.981 2.093 1.241 3.374 1.299C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.318 3.373-1.299.981-.98 1.241-2.092 1.299-3.373.058-1.28.07-1.689.07-4.948 0-3.259-.012-3.668-.07-4.948-.058-1.281-.318-2.393-1.299-3.373-.98-.981-2.092-1.241-3.373-1.299C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <span className="text-sm text-gray-400">
                                © {new Date().getFullYear()} ShopHub. All Rights Reserved.
                            </span>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <Link to="#" className="hover:text-orange-400 transition-colors">Privacy</Link>
                                <span>•</span>
                                <Link to="#" className="hover:text-orange-400 transition-colors">Terms</Link>
                                <span>•</span>
                                <Link to="#" className="hover:text-orange-400 transition-colors">Cookies</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>Made with</span>
                            <span className="text-red-500 animate-pulse">❤️</span>
                            <span>by</span>
                            <a 
                                href="https://github.com/HaseebImdad" 
                                className="text-orange-400 hover:text-orange-300 font-medium transition-colors" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Haseeb Imdad
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
