// src/layout/MainLayout.jsx
import React from "react";
import Header from "../components/Header"; // header is in components
import Footer from "../pages/footer";      // footer is in pages
import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header (from components) */}
      <Header />

      {/* Page content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
        <Outlet />
      </main>

      {/* Footer (from pages) */}
      <Footer />
    </div>
  );
}
