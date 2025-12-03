import React, { useEffect, useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get visible items based on current page
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = products.slice(indexOfFirst, indexOfLast);

  // Handle next/prev page
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="rounded-lg h-40 w-full object-cover"
            />

            <h2 className="text-lg font-semibold mt-3">{item.title}</h2>

            <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>

            <div className="flex justify-between items-center mt-3">
              <span className="text-green-600 font-bold">₹ {item.price}</span>
              <span className="text-yellow-500 font-semibold">⭐ {item.rating}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">

        {/* Prev Button */}
        <button
          className={`px-4 py-2 rounded-lg text-white 
            ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-md border 
                  ${
                    currentPage === page
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white hover:bg-blue-100 border-gray-400"
                  }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          className={`px-4 py-2 rounded-lg text-white 
            ${currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>
    </div>
  );
}
