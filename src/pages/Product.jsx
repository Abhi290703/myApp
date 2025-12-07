// src/pages/Product.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {
  const [dataProducts, setDataProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const perPage = 10;

  useEffect(() => {
    async function fetchProducts() {
      try {
        let url;

        if (category) {
          url = `https://dummyjson.com/products/category/${category}`;
        } else {
          const skip = (page - 1) * perPage;
          url = `https://dummyjson.com/products?limit=${perPage}&skip=${skip}`;
        }

        const res = await axios.get(url);
        const products = res.data.products || res.data;

        setDataProducts(products);
        setTotalProducts(res.data.total || products.length);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }

    fetchProducts();
  }, [page, category]);

  const filteredProducts = dataProducts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <h1 className="text-3xl font-bold mb-1">
          {category ? `Category: ${category}` : "All Products"}
        </h1>
        <p className="text-sm text-gray-500">
          Showing {filteredProducts.length} of {totalProducts} items
        </p>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-end">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-72 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 w-full object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="font-semibold line-clamp-1">{item.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-indigo-600">
                  ₹ {item.price}
                </span>
                <span className="text-yellow-500">
                  ⭐ {item.rating}
                </span>
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {!category && (
        <div className="flex justify-center gap-4 pb-10">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            disabled={page * perPage >= totalProducts}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
