import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../components/ProductCard";
import { trackFbEvent } from "../lib/fbPixel";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const currency = (process.env.NEXT_PUBLIC_CURRENCY || "COP").toUpperCase();

export default function Carrito() {
  const { items, updateQty, removeItem, total, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({ nombre: "", telefono: "", direccion: "", ciudad: "", nota: "" });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function buildWhatsappMessage() {
    const lineas = items
      .map((i) => `• ${i.qty} x ${i.name} — ${formatPrice(i.price * i.qty)}`)
      .join("\n");

    return (
      `¡Hola! Quiero confirmar este pedido *pago contra entrega*:\n\n` +
      `${lineas}\n\n` +
      `*Total: ${formatPrice(total)}*\n\n` +
      `Nombre: ${form.nombre}\n` +
      `Teléfono: ${form.telefono}\n` +
      `Dirección: ${form.direccion}\n` +
      `Ciudad: ${form.ciudad}` +
      (form.nota ? `\nNota: ${form.nota}` : "")
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!whatsappNumber) {
      setError(
        "Falta configurar el número de WhatsApp de la tienda (variable NEXT_PUBLIC_WHATSAPP_NUMBER)."
      );
      return;
    }
    if (!form.nombre || !form.telefono || !form.direccion || !form.ciudad) {
      setError("Completa nombre, teléfono, dirección y ciudad para confirmar el pedido.");
      return;
    }

    setSending(true);

    // En pago contra entrega, confirmar el pedido ES la conversión que
    // interesa optimizar en el Administrador de Anuncios (el cobro ocurre
    // después, al entregar). Por eso el evento Purchase se dispara aquí.
    trackFbEvent("Purchase", {
      content_ids: items.map((i) => i.slug),
      value: total,
      currency,
      num_items: items.reduce((n, i) => n + i.qty, 0),
    });

    const mensaje = encodeURIComponent(buildWhatsappMessage());
    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, "_blank");

    clearCart();
    router.push("/gracias");
  }

  if (items.length === 0) {
    return (
      <section className="cart-empty">
        <h1>Tu carrito está vacío</h1>
        <p>Explora el catálogo y añade productos para verlos aquí.</p>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>Confirmar pedido — Entregas Colombia</title>
      </Head>

      <section className="cart">
        <h1>Tu pedido</h1>

        <ul className="cart__list">
          {items.map((item) => (
            <li key={item.slug} className="cart__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.name} />
              <div className="cart__item-info">
                <p className="cart__item-name">{item.name}</p>
                <p className="cart__item-price">{formatPrice(item.price)}</p>
              </div>
              <div className="cart__item-qty">
                <button type="button" onClick={() => updateQty(item.slug, item.qty - 1)}>−</button>
                <span>{item.qty}</span>
                <button type="button" onClick={() => updateQty(item.slug, item.qty + 1)}>+</button>
              </div>
              <button
                type="button"
                className="cart__item-remove"
                onClick={() => removeItem(item.slug)}
                aria-label={`Quitar ${item.name}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <div className="cart__summary">
          <span>Total a pagar contra entrega</span>
          <strong>{formatPrice(total)}</strong>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <p className="order-form__note">
            Paga en efectivo o con datáfono cuando recibas tu pedido. Completa
            tus datos para confirmarlo por WhatsApp.
          </p>

          <label>
            Nombre completo
            <input name="nombre" value={form.nombre} onChange={handleChange} required />
          </label>
          <label>
            Teléfono
            <input name="telefono" value={form.telefono} onChange={handleChange} required />
          </label>
          <label>
            Dirección de entrega
            <input name="direccion" value={form.direccion} onChange={handleChange} required />
          </label>
          <label>
            Ciudad
            <input name="ciudad" value={form.ciudad} onChange={handleChange} required />
          </label>
          <label>
            Nota para la entrega (opcional)
            <input name="nota" value={form.nota} onChange={handleChange} />
          </label>

          {error && <p className="cart__error">{error}</p>}

          <button className="btn btn--primary btn--full" type="submit" disabled={sending}>
            {sending ? "Abriendo WhatsApp…" : "Confirmar pedido por WhatsApp"}
          </button>
        </form>
      </section>
    </>
  );
}
