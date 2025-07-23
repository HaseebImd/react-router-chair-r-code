import React from 'react'
import { Link } from 'react-router-dom'
import { mockUser } from '../../data/mockData'

export default function Dashboard() {
    const user = mockUser;

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'delivered':
                return 'bg-green-100 text-green-800';
            case 'processing':
                return 'bg-yellow-100 text-yellow-800';
            case 'shipped':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Welcome back, {user.name}!
                    </h1>
                    <p className="text-gray-600">
                        Manage your account and track your orders
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="text-center">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-orange-200"
                                />
                                <h2 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
                                <p className="text-gray-600 mb-4">{user.email}</p>
                                <div className="text-sm text-gray-500 mb-6">
                                    Member since {new Date(user.joinDate).toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'long' 
                                    })}
                                </div>
                                <Link
                                    to="/profile"
                                    className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                                >
                                    Edit Profile
                                </Link>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Total Orders</span>
                                    <span className="font-semibold text-gray-900">{user.orders.length}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Total Spent</span>
                                    <span className="font-semibold text-gray-900">
                                        ${user.orders.reduce((sum, order) => sum + order.total, 0)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Wishlist Items</span>
                                    <span className="font-semibold text-gray-900">5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Quick Actions */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <Link
                                    to="/products"
                                    className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all group"
                                >
                                    <svg className="w-8 h-8 text-gray-600 group-hover:text-orange-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-orange-700">Shop Now</span>
                                </Link>
                                <Link
                                    to="/cart"
                                    className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all group"
                                >
                                    <svg className="w-8 h-8 text-gray-600 group-hover:text-orange-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-orange-700">View Cart</span>
                                </Link>
                                <button className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all group">
                                    <svg className="w-8 h-8 text-gray-600 group-hover:text-orange-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-orange-700">Wishlist</span>
                                </button>
                                <Link
                                    to="/contact"
                                    className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all group"
                                >
                                    <svg className="w-8 h-8 text-gray-600 group-hover:text-orange-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-orange-700">Support</span>
                                </Link>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
                                <Link
                                    to="#"
                                    className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                                >
                                    View All Orders
                                </Link>
                            </div>
                            
                            <div className="space-y-4">
                                {user.orders.map(order => (
                                    <div key={order.id} className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h4 className="font-semibold text-gray-900">Order {order.id}</h4>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                                        {order.status}
                                                    </span>
                                                </div>
                                                <div className="text-sm text-gray-600 space-y-1">
                                                    <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                                                    <p>{order.items} {order.items === 1 ? 'item' : 'items'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between sm:justify-end gap-4">
                                                <div className="text-right">
                                                    <div className="font-bold text-gray-900">${order.total}</div>
                                                </div>
                                                <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Account Settings */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Link
                                    to="/profile"
                                    className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all group"
                                >
                                    <svg className="w-6 h-6 text-gray-600 group-hover:text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <div>
                                        <div className="font-medium text-gray-900 group-hover:text-orange-700">Personal Information</div>
                                        <div className="text-sm text-gray-600">Update your profile details</div>
                                    </div>
                                </Link>
                                <button className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all group">
                                    <svg className="w-6 h-6 text-gray-600 group-hover:text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <div className="font-medium text-gray-900 group-hover:text-orange-700">Addresses</div>
                                        <div className="text-sm text-gray-600">Manage shipping addresses</div>
                                    </div>
                                </button>
                                <button className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all group">
                                    <svg className="w-6 h-6 text-gray-600 group-hover:text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    <div>
                                        <div className="font-medium text-gray-900 group-hover:text-orange-700">Payment Methods</div>
                                        <div className="text-sm text-gray-600">Manage payment options</div>
                                    </div>
                                </button>
                                <button className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all group">
                                    <svg className="w-6 h-6 text-gray-600 group-hover:text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4 19h10a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <div className="font-medium text-gray-900 group-hover:text-orange-700">Notifications</div>
                                        <div className="text-sm text-gray-600">Email and SMS preferences</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
