import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { productApi } from "../../services/api";
import "./Product.css";

const getProductImageUrl = (slug) => {
  const mapping = {
    "ai-cctv-cameras": new URL("../../assets/products/ai-camera.jpg", import.meta.url).href,
    "ip-camera-systems": new URL("../../assets/products/nvr.jpg", import.meta.url).href,
    "audiovisual-systems": new URL("../../assets/products/audio.jpg", import.meta.url).href,
    "agricultural-ai-drones": new URL("../../assets/products/ai-edge.jpg", import.meta.url).href,
    "access-control": new URL("../../assets/products/access-control.jpg", import.meta.url).href,
  };
  return mapping[slug] || new URL("../../assets/products/productshero.jpg", import.meta.url).href;
};

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await productApi.list();
        setProducts(data.products || []);
      } catch (err) {
        setError(err.message || "Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-[#0b1220] text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              Our Products
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mt-5">
              Intelligent Products for a <span className="text-[#F1CF45]">Smarter World</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 leading-8">
              Honey Vision delivers advanced surveillance, AI, networking, and AV products built for secure, connected operations across cities, industry, and enterprise.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {loading ? (
              <div className="col-span-full rounded-3xl border border-[#24A8E0]/20 bg-[#11151f] p-10 text-center text-gray-400">
                Loading products...
              </div>
            ) : error ? (
              <div className="col-span-full rounded-3xl border border-red-500/20 bg-[#11151f] p-10 text-center text-red-300">
                {error}
              </div>
            ) : products.length === 0 ? (
              <div className="col-span-full rounded-3xl border border-[#24A8E0]/20 bg-[#11151f] p-10 text-center text-gray-400">
                No products available.
              </div>
            ) : (
              products.map((product, idx) => (
                <Link
                  key={product.slug}
                  to={`/product/${product.slug}`}
                  className={`group product-card overflow-hidden rounded-[32px] border border-white/10 bg-[#0f172a] transition duration-500 hover:-translate-y-1 hover:shadow-xl`}
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={getProductImageUrl(product.slug)}
                      alt={product.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="product-info absolute left-5 top-5 rounded-md bg-black/40 px-3 py-2 text-white backdrop-blur-sm">
                      <p className="text-sm font-semibold">{product.title}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Product</p>
                    <h2 className="mt-4 text-2xl font-semibold text-white">{product.title}</h2>
                    <p className="mt-4 text-gray-300 leading-7 line-clamp-3">{product.description}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-[#24A8E0] font-semibold transition group-hover:text-[#F1CF45]">
                        Learn More
                      </div>
                      <div className="ml-4">
                        <span className="inline-flex items-center rounded-full bg-[#24A8E0] px-3 py-2 text-sm font-semibold text-black">Explore</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <div className="mt-24 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-[#24A8E0]/20 bg-[#11151f] p-10 shadow-[0_35px_90px_-60px_rgba(36,168,224,0.7)]">
              <h2 className="text-4xl font-bold">Why HoneyVision Products?</h2>
              <p className="mt-6 text-gray-300 leading-8">
                Our portfolio combines AI-powered cameras, secure storage, intelligent edge compute, and professional AV solutions to help you build resilient, scalable surveillance and smart infrastructure systems.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#0f172a] p-8 text-center">
                <p className="text-5xl font-bold text-[#F1CF45]">AI</p>
                <p className="mt-3 text-gray-300">Smart analytics and automation</p>
              </div>
              <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#0f172a] p-8 text-center">
                <p className="text-5xl font-bold text-[#F1CF45]">24×7</p>
                <p className="mt-3 text-gray-300">Continuous monitoring and alerts</p>
              </div>
              <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#0f172a] p-8 text-center">
                <p className="text-5xl font-bold text-[#F1CF45]">Secure</p>
                <p className="mt-3 text-gray-300">End-to-end device and data protection</p>
              </div>
              <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#0f172a] p-8 text-center">
                <p className="text-5xl font-bold text-[#F1CF45]">Modular</p>
                <p className="mt-3 text-gray-300">Flexible deployment for any environment</p>
              </div>
            </div>
          </div>

          <div className="mt-24 rounded-[32px] border border-[#24A8E0]/20 bg-[#11151f] p-14 text-center shadow-[0_35px_90px_-60px_rgba(36,168,224,0.75)]">
            <h2 className="text-4xl font-bold text-white">Built for modern operations</h2>
            <p className="mx-auto mt-6 max-w-3xl text-gray-300 leading-8">
              From command centers to campus security, HoneyVision product solutions give you the hardware, software, and connectivity needed to deliver faster response, higher uptime, and smarter insights.
            </p>
            <Link
              to="/demo"
              className="mt-10 inline-flex rounded-full bg-[#F1CF45] px-10 py-4 text-sm font-semibold text-[#111015] transition hover:bg-[#24A8E0] hover:text-white"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
