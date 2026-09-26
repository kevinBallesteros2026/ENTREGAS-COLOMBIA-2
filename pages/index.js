import { useState } from "react";
import Head from "next/head";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [active, setActive] = useState("todos");

  const filtered =
    active === "todos" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <Head>
        <title>Comercio — un mercado, todos los nichos</title>
        <meta
          name="description"
          content="Tecnología, hogar, belleza, moda y deporte en un solo lugar."
        />
      </Head>

      <section className="hero">
        <h1>
          Un mercado.
          <br />
          Todos los nichos que te interesan.
        </h1>
        <p>
          Selecciona una categoría o explora todo el catálogo. Pago seguro,
          envío rastreado.
        </p>
      </section>

      <nav className="filters" aria-label="Filtrar por categoría">
        <button
          className={active === "todos" ? "filters__btn is-active" : "filters__btn"}
          onClick={() => setActive("todos")}
        >
          Todos
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className={active === c.id ? "filters__btn is-active" : "filters__btn"}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </nav>

      <section className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
    </>
  );
}
