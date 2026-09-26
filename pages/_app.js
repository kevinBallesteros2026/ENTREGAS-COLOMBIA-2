import { useEffect } from "react";
import { useRouter } from "next/router";
import { CartProvider } from "../context/CartContext";
import { trackFbPageView } from "../lib/fbPixel";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // El Pixel dispara un PageView al cargar la página vía _document.js.
  // Esto cubre las navegaciones posteriores dentro de la SPA (sin recarga).
  useEffect(() => {
    const handleRouteChange = () => trackFbPageView();
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}
