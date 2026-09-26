import Link from "next/link";

const currency = process.env.NEXT_PUBLIC_CURRENCY || "COP";

export function formatPrice(cents) {
  return new Intl.NumberFormat("es", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

export default function ProductCard({ product }) {
  return (
    <Link href={`/producto/${product.slug}`} className="product-card">
      <div className="product-card__image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
