// Catálogo de ejemplo. Reemplaza estos productos por los tuyos:
// cambia name, slug, category, price (en centavos), description e image.
// "image" usa un generador de imágenes de relleno; sustitúyela por tus
// fotos reales subiéndolas a /public/productos/ y apuntando a esa ruta.

export const categories = [
  { id: "tecnologia", label: "Tecnología" },
  { id: "hogar", label: "Hogar" },
  { id: "belleza", label: "Belleza" },
  { id: "moda", label: "Moda" },
  { id: "deporte", label: "Deporte" },
];

export const products = [
  {
    slug: "auriculares-inalambricos-pro",
    name: "Auriculares inalámbricos Pro",
    category: "tecnologia",
    price: 8999,
    description:
      "Cancelación de ruido activa, 30 horas de batería y estuche de carga rápida.",
    image: "https://picsum.photos/seed/auriculares-pro/800/800",
  },
  {
    slug: "lampara-led-escritorio",
    name: "Lámpara LED de escritorio",
    category: "hogar",
    price: 3499,
    description:
      "Tres tonos de luz regulables, brazo articulado y puerto USB integrado.",
    image: "https://picsum.photos/seed/lampara-led/800/800",
  },
  {
    slug: "serum-vitamina-c",
    name: "Sérum facial vitamina C",
    category: "belleza",
    price: 2299,
    description:
      "Fórmula concentrada para luminosidad e hidratación diaria, apta para piel sensible.",
    image: "https://picsum.photos/seed/serum-vitc/800/800",
  },
  {
    slug: "chaqueta-cortavientos",
    name: "Chaqueta cortavientos unisex",
    category: "moda",
    price: 5499,
    description:
      "Tejido resistente al agua, plegable y ligera, ideal para cualquier estación.",
    image: "https://picsum.photos/seed/chaqueta-cv/800/800",
  },
  {
    slug: "botella-termica-1l",
    name: "Botella térmica 1L",
    category: "deporte",
    price: 1899,
    description:
      "Mantiene el frío 24h y el calor 12h. Acero inoxidable, libre de BPA.",
    image: "https://picsum.photos/seed/botella-termica/800/800",
  },
  {
    slug: "cargador-inalambrico-3en1",
    name: "Cargador inalámbrico 3 en 1",
    category: "tecnologia",
    price: 4299,
    description:
      "Carga simultánea de teléfono, reloj y auriculares en una sola base.",
    image: "https://picsum.photos/seed/cargador-3en1/800/800",
  },
  {
    slug: "organizador-modular",
    name: "Organizador modular apilable",
    category: "hogar",
    price: 2699,
    description:
      "Set de 4 piezas para clóset o despensa, resistente y fácil de limpiar.",
    image: "https://picsum.photos/seed/organizador-mod/800/800",
  },
  {
    slug: "set-bandas-resistencia",
    name: "Set de bandas de resistencia",
    category: "deporte",
    price: 1599,
    description:
      "5 niveles de intensidad con guía de ejercicios incluida.",
    image: "https://picsum.photos/seed/bandas-resist/800/800",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
