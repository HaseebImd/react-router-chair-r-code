import React from 'react'
import { Link } from 'react-router-dom';
import workFriends from '../../assets/images/undraw_work-friends_g4mn.svg'
import newYear from '../../assets/images/undraw_new-year-2025_1tmm.svg'

export default function Home() {
    return (
        <div className="bg-gradient-to-br to-white min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="md:w-1/2 flex flex-col justify-center items-start">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Welcome to <span className="text-orange-600">React Chair</span>
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Build modern, scalable, and beautiful web apps with ease. Explore our features, get inspired, and start your journey with React today!
                    </p>
                    <Link
                        to="/about"
                        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-200 shadow-md text-lg"
                    >
                        Learn More
                    </Link>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src={workFriends} alt="Work Friends" className="w-full max-w-xs md:max-w-md rounded-xl shadow-lg" />
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <svg className="w-12 h-12 text-orange-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7m0 0H7m5 0h5" /></svg>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy to Use</h3>
                        <p className="text-gray-600 text-center">Our platform is designed for simplicity and ease of use, so you can focus on building amazing apps.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <svg className="w-12 h-12 text-orange-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 17v-2a6 6 0 016-6h2a6 6 0 016 6v2" /></svg>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Design</h3>
                        <p className="text-gray-600 text-center">Enjoy a clean, modern UI that looks great on any device, with beautiful illustrations and layouts.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <svg className="w-12 h-12 text-orange-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Scalable</h3>
                        <p className="text-gray-600 text-center">Built with scalability in mind, so your project can grow as your needs evolve.</p>
                    </div>
                </div>
            </section>

            {/* Inspiration Section */}
            <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <img src={newYear} alt="New Year Inspiration" className="w-full max-w-xs md:max-w-md rounded-xl shadow-lg" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your Journey</h2>
                    <p className="text-lg text-gray-700 mb-6">Whether you're a beginner or a pro, our resources and community will help you succeed. Join us and be part of something amazing!</p>
                    <Link
                        to="/contact"
                        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-200 shadow-md text-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to get started?</h2>
                <p className="text-lg text-gray-700 mb-8">Sign up now and take your web development skills to the next level with React Chair!</p>
                <Link
                    to="#"
                    className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-full transition duration-200 shadow-md text-lg"
                >
                    Get Started
                </Link>
            </section>
        </div>
    );
}