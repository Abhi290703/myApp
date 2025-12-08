// src/pages/Product.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Product({ category }) {
  const [dataProducts, setDataProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const perPage = 10;

  useEffect(() => {
    async function fetchProducts() {
      let url;

      if (category) {
        url = `https://dummyjson.com/products/category/${category}`;
      } else {
        const skip = (page - 1) * perPage;
        url = `https://dummyjson.com/products?limit=${perPage}&skip=${skip}`;
      }

      const res = await axios.get(url);
      setDataProducts(res.data.products || res.data);
      setTotalProducts(res.data.total || res.data.length);
    }

    fetchProducts();
  }, [page, category]);

  const filteredProducts = dataProducts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(totalProducts / perPage);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="px-6 pt-8">
        <h1 className="text-3xl font-bold">
          {category ? `Category: ${category}` : "All Products"}
        </h1>
        <p className="text-sm text-gray-500">
          Showing {filteredProducts.length} of {totalProducts}
        </p>
      </div>

      <div className="px-6 py-6 flex justify-end">
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-72"
        />
      </div>

      <div className="px-6 pb-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow">
            <img
              src={item.thumbnail}
              className="h-40 w-full object-cover rounded-t-xl"
              alt={item.title}
            />
            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between mt-3">
                <span className="font-bold text-indigo-600">
                  ₹ {item.price}
                </span>
                <span>⭐ {item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!category && (
        <div className="flex justify-center gap-2 pb-10">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${
                page === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
