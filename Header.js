import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { count } = useCart();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo">
          Comercio<span>.</span>
        </Link>
        <Link href="/carrito" className="site-header__cart">
          Carrito
          {count > 0 && <span className="site-header__badge">{count}</span>}
        </Link>
      </div>
    </header>
  );
}
