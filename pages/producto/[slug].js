import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { products, getProductBySlug } from "../../data/products";
import { formatPrice } from "../../components/ProductCard";
import { useCart } from "../../context/CartContext";
import { trackFbEvent } from "../../lib/fbPixel";

const currency = (process.env.NEXT_PUBLIC_CURRENCY || "COP").toUpperCase();

export async function getStaticPaths() {
  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { notFound: true };
  return { props: { product } };
}

export default function ProductPage({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const router = useRouter();

  // Evento ViewContent: cada vez que alguien abre una ficha de producto,
  // esta señal llega al Administrador de Anuncios para optimizar campañas.
  useEffect(() => {
    trackFbEvent("ViewContent", {
      content_ids: [product.slug],
      content_name: product.name,
      content_type: "product",
      value: product.price,
      currency,
    });
  }, [product]);

  function handleAdd() {
    addItem(product, 1);
    trackFbEvent("AddToCart", {
      content_ids: [product.slug],
      content_name: product.name,
      content_type: "product",
      value: product.price,
      currency,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function handleBuyNow() {
    addItem(product, 1);
    trackFbEvent("AddToCart", {
      content_ids: [product.slug],
      content_name: product.name,
      content_type: "product",
      value: product.price,
      currency,
    });
    router.push("/carrito");
  }

  return (
    <>
      <Head>
        <title>{product.name} — Entregas Colombia</title>
        <meta name="description" content={product.description} />
      </Head>

      <button className="back-link" onClick={() => router.push("/")}>
        ← Volver al catálogo
      </button>

      <section className="product-detail">
        <div className="product-detail__image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} />
          <span className="brand-watermark brand-watermark--large">Entregas Colombia</span>
        </div>
        <div className="product-detail__info">
          <p className="product-detail__category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-detail__price">{formatPrice(product.price)}</p>
          <p className="product-detail__description">{product.description}</p>
          {product.features?.length > 0 && (
            <ul className="product-detail__features">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          )}
          <div className="product-detail__actions">
            <button className="btn btn--primary" onClick={handleBuyNow}>
              Comprar ahora
            </button>
            <button className="btn btn--secondary" onClick={handleAdd}>
              {added ? "Añadido ✓" : "Añadir al carrito"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
