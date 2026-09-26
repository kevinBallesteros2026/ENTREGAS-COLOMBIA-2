import Head from "next/head";
import Link from "next/link";

export default function Gracias() {
  return (
    <>
      <Head>
        <title>Pedido confirmado — Comercio</title>
      </Head>

      <section className="confirmation">
        <h1>¡Pedido confirmado!</h1>
        <p>
          Se abrió WhatsApp con los datos de tu pedido — envía el mensaje si
          aún no lo hiciste y te contactaremos para coordinar la entrega y el
          pago contra entrega.
        </p>
        <p className="confirmation__note">
          <Link href="/">Seguir explorando la tienda</Link>
        </p>
      </section>
    </>
  );
}
