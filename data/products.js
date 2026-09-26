// Catálogo real de Entregas Colombia.
// Las fotos viven en /public/productos/<slug>.jpg — el campo "image" apunta ahí.
// Precios en pesos colombianos, sin centavos (ej. 165000 = $165.000).

export const categories = [
  { id: "hogar", label: "Hogar" },
  { id: "herramientas", label: "Herramientas" },
  { id: "moda-masculina", label: "Moda masculina" },
  { id: "vehiculos", label: "Vehículos" },
];

export const products = [
  {
    slug: "olla-baterias",
    name: "OLLA BATERIAS",
    category: "hogar",
    price: 165000,
    description: "Gran combo de ollas y batería de cocina en acero, con tapas incluidas.",
    image: "/productos/olla-baterias.jpg",
  },
  {
    slug: "radio-x2-boaffe",
    name: "RADIO X 2 BOAFFE",
    category: "herramientas",
    price: 192000,
    description: "Par de radios de comunicación Baofeng con accesorios y cargadores incluidos.",
    image: "/productos/radio-x2-boaffe.jpg",
  },
  {
    slug: "escurridor-organizador-cocina",
    name: "Escurridor Y Organizador De Cocina",
    category: "hogar",
    price: 229900,
    description: "Escurridor de 3 niveles con organizador de utensilios, especias y tabla.",
    image: "/productos/escurridor-organizador-cocina.jpg",
  },
  {
    slug: "combo-sabana-cortina-estampados",
    name: "Combo Sabana Cortina Estampados",
    category: "hogar",
    price: 179900,
    description: "Colcha doble faz con fundas incluidas, disponible en varios colores.",
    image: "/productos/combo-sabana-cortina-estampados.jpg",
  },
  {
    slug: "sierra-circular-makita",
    name: "SIERRA CIRCULAR MAKITA jpg",
    category: "herramientas",
    price: 335900,
    description: "Sierra circular profesional Makita de 7 pulgadas, incluye disco para madera.",
    image: "/productos/sierra-circular-makita.jpg",
  },
  {
    slug: "caladora-makita-900w",
    name: "CALADORA MAKITA 900W 110V",
    category: "herramientas",
    price: 303900,
    description: "Caladora profesional Makita 900W, velocidad variable, 110V.",
    image: "/productos/caladora-makita-900w.jpg",
  },
  {
    slug: "combo-taladro-pulidora-makita",
    name: "COMBO TALADRO Y PULIDORA 6V MAKITA",
    category: "herramientas",
    price: 328000,
    description: "Combo de taladro y pulidora/esmeril angular Makita, con accesorios incluidos.",
    image: "/productos/combo-taladro-pulidora-makita.jpg",
  },
  {
    slug: "cepillo-electrico-madera-makita",
    name: "CEPILLO ELECTRICO PARA MADERA MAKITA",
    category: "herramientas",
    price: 302900,
    description: "Cepillo eléctrico profesional Makita para madera, 82mm.",
    image: "/productos/cepillo-electrico-madera-makita.jpg",
  },
  {
    slug: "calzado-mocasin-caballero",
    name: "CALZADO MOCASIN PARA CABALLERO",
    category: "moda-masculina",
    price: 185000,
    description: "Mocasín en cuero para caballero, cómodo y resistente.",
    image: "/productos/calzado-mocasin-caballero.jpg",
  },
  {
    slug: "carpa-universal-moto-impermeable",
    name: "CARPA UNVERSAL PARA MOTO 100 MPERMEABLE",
    category: "vehiculos",
    price: 137900,
    description: "Carpa cobertora universal para moto, impermeable, incluye bolso de guardado.",
    image: "/productos/carpa-universal-moto-impermeable.jpg",
  },
  {
    slug: "set-velez-x3",
    name: "SET VELEZ X3",
    category: "moda-masculina",
    price: 221000,
    description: "Set Vélez x3: bolso cruzado, cinturón y billetera en cuero.",
    image: "/productos/set-velez-x3.jpg",
  },
  {
    slug: "organizador-3-espacios-closet",
    name: "ORGANZADOR 3 ESPACOS CLOSET",
    category: "hogar",
    price: 172900,
    description: "Closet organizador portátil de 3 espacios, fácil de armar.",
    image: "/productos/organizador-3-espacios-closet.jpg",
  },
  {
    slug: "organizador-6-puestos-zapatos",
    name: "ORGANZADOR 6 PSOS ZAPATOS",
    category: "hogar",
    price: 169900,
    description: "Zapatero organizador de varios niveles con tapa protectora.",
    image: "/productos/organizador-6-puestos-zapatos.jpg",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
