// src/pages/Home.jsx

import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-100">

      {/* 🔵 Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">MyStore</span>
        </h1>

        <p className="text-lg max-w-2xl mx-auto">
          Your one-stop destination for affordable, high-quality products and insightful blogs.
        </p>

        <button className="mt-6 bg-yellow-400 text-indigo-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition">
          Explore Now
        </button>
      </section>


      {/* 🟣 Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">🔥 High Quality</h3>
            <p className="text-gray-600">We offer excellent products with trusted quality.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">🚚 Fast Delivery</h3>
            <p className="text-gray-600">Quick, reliable delivery right to your doorstep.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">📘 Helpful Blogs</h3>
            <p className="text-gray-600">Learn from our detailed tutorials and tech articles.</p>
          </div>
        </div>
      </section>


      {/* 🟠 About Section */}
      <section className="py-16 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>

        <p className="text-gray-700 max-w-3xl mx-auto">
          We aim to provide great shopping and learning experiences. Explore our high-quality products
          and read blogs that help you grow personally and professionally.
        </p>
      </section>


      {/* 🟢 Call to Action */}
      <section className="bg-indigo-700 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to begin?</h2>

        <p className="mt-3 text-gray-200">
          Browse our product collections and upgrade your lifestyle.
        </p>

        <button className="mt-6 bg-yellow-400 text-indigo-900 px-8 py-3 font-semibold rounded-lg hover:bg-yellow-300 transition">
          Shop Now
        </button>
      </section>

    </div>
  );
}
