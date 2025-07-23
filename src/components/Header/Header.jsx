import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartItemCount = 2; // Mock cart count

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-lg sticky z-50 top-0 border-b border-orange-100">
            <nav className="px-4 lg:px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <div className="relative">
                            <div className="mr-3 h-12 w-12 rounded-full shadow-md border-2 border-orange-200 group-hover:border-orange-400 transition-all duration-300 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 rounded-full bg-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </div>
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">
                            Shop<span className="text-orange-600">Hub</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <ul className="flex space-x-8 font-medium">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `relative py-2 px-1 transition-all duration-300 ${
                                            isActive 
                                                ? "text-orange-600 font-semibold" 
                                                : "text-gray-700 hover:text-orange-600"
                                        } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600 after:transform after:scale-x-0 after:transition-transform after:duration-300 ${
                                            isActive ? "after:scale-x-100" : "hover:after:scale-x-100"
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `relative py-2 px-1 transition-all duration-300 ${
                                            isActive 
                                                ? "text-orange-600 font-semibold" 
                                                : "text-gray-700 hover:text-orange-600"
                                        } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600 after:transform after:scale-x-0 after:transition-transform after:duration-300 ${
                                            isActive ? "after:scale-x-100" : "hover:after:scale-x-100"
                                        }`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        `relative py-2 px-1 transition-all duration-300 ${
                                            isActive 
                                                ? "text-orange-600 font-semibold" 
                                                : "text-gray-700 hover:text-orange-600"
                                        } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600 after:transform after:scale-x-0 after:transition-transform after:duration-300 ${
                                            isActive ? "after:scale-x-100" : "hover:after:scale-x-100"
                                        }`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `relative py-2 px-1 transition-all duration-300 ${
                                            isActive 
                                                ? "text-orange-600 font-semibold" 
                                                : "text-gray-700 hover:text-orange-600"
                                        } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600 after:transform after:scale-x-0 after:transition-transform after:duration-300 ${
                                            isActive ? "after:scale-x-100" : "hover:after:scale-x-100"
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `relative py-2 px-1 transition-all duration-300 ${
                                            isActive 
                                                ? "text-orange-600 font-semibold" 
                                                : "text-gray-700 hover:text-orange-600"
                                        } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600 after:transform after:scale-x-0 after:transition-transform after:duration-300 ${
                                            isActive ? "after:scale-x-100" : "hover:after:scale-x-100"
                                        }`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        {/* Cart Icon */}
                        <Link
                            to="/cart"
                            className="relative p-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-300 group"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
                            </svg>
                            {cartItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-pulse">
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>

                        {/* User Authentication */}
                        {isLoggedIn ? (
                            <div className="relative group">
                                <button className="flex items-center gap-2 p-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-300">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                                        alt="User"
                                        className="w-8 h-8 rounded-full border-2 border-orange-200"
                                    />
                                    <span className="hidden md:block font-medium">John Doe</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {/* Dropdown Menu */}
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">Dashboard</Link>
                                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">Profile</Link>
                                    <hr className="my-1 border-gray-100" />
                                    <button 
                                        onClick={() => setIsLoggedIn(false)}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="hidden md:flex items-center gap-3">
                                <Link
                                    to="/login"
                                    className="text-gray-700 hover:text-orange-600 font-medium px-4 py-2 rounded-lg hover:bg-orange-50 transition-all duration-300"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="/signup"
                                    className="text-white bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 font-medium rounded-lg px-6 py-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Sign up
                                </Link>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-4 pb-2 border-t border-orange-100 mt-4">
                        <ul className="space-y-2">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-lg transition-all duration-300 ${
                                            isActive 
                                                ? "text-orange-600 bg-orange-50 font-semibold" 
                                                : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-lg transition-all duration-300 ${
                                            isActive 
                                                ? "text-orange-600 bg-orange-50 font-semibold" 
                                                : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                                        }`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/products"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-lg transition-all duration-300 ${
                                            isActive 
                                                ? "text-orange-600 bg-orange-50 font-semibold" 
                                                : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                                        }`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-lg transition-all duration-300 ${
                                            isActive 
                                                ? "text-orange-600 bg-orange-50 font-semibold" 
                                                : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-lg transition-all duration-300 ${
                                            isActive 
                                                ? "text-orange-600 bg-orange-50 font-semibold" 
                                                : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                                        }`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                        
                        {/* Mobile Auth Buttons */}
                        {!isLoggedIn && (
                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-orange-100">
                                <Link
                                    to="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-center text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-lg hover:bg-orange-50 transition-all duration-300"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="/signup"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-center text-white bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 font-medium rounded-lg px-6 py-2 shadow-lg transition-all duration-300"
                                >
                                    Sign up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
