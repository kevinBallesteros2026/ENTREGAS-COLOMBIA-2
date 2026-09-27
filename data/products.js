// Catálogo real de Entregas Colombia.
// Las fotos viven en /public/productos/<slug>.jpg — el campo "image" apunta ahí.
// Precios en pesos colombianos, sin centavos (ej. 165000 = $165.000).
// "features" son los puntos que se muestran destacados en la ficha del producto.

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
    description: "Batería de cocina completa en aluminio, lista para renovar tu cocina de una vez.",
    features: [
      "Set completo con varias ollas, cacerolas y sartén antiadherente",
      "Tapas de cierre hermético que conservan el calor y los sabores",
      "Aluminio resistente, ideal para uso diario",
      "Fácil de limpiar y liviano para manipular",
    ],
    image: "/productos/olla-baterias.jpg",
  },
  {
    slug: "radio-x2-boaffe",
    name: "RADIO X 2 BOAFFE",
    category: "herramientas",
    price: 192000,
    description: "Par de radios portátiles UHF para mantenerte comunicado sin depender del celular.",
    features: [
      "16 canales UHF (400–470 MHz) para comunicación clara",
      "Alcance de varios kilómetros en espacio abierto",
      "Batería recargable con larga duración",
      "Incluye 2 radios, cargadores y manos libres",
    ],
    image: "/productos/radio-x2-boaffe.jpg",
  },
  {
    slug: "escurridor-organizador-cocina",
    name: "Escurridor Y Organizador De Cocina",
    category: "hogar",
    price: 229900,
    description: "Organiza platos, vasos y utensilios en un solo mueble de varios niveles.",
    features: [
      "3 niveles: platos, vasos y utensilios ordenados en un solo mueble",
      "Incluye espacio para tabla de picar y especiero",
      "Estructura en acero resistente a la humedad",
      "Ahorra espacio en la cocina mientras seca la loza",
    ],
    image: "/productos/escurridor-organizador-cocina.jpg",
  },
  {
    slug: "combo-sabana-cortina-estampados",
    name: "Combo Sabana Cortina Estampados",
    category: "hogar",
    price: 179900,
    description: "Colcha doble faz que renueva tu habitación al instante, con fundas incluidas.",
    features: [
      "Doble faz: dos estilos de color en una sola pieza",
      "Incluye fundas de cojín a juego",
      "Tela suave, fácil de lavar y de secado rápido",
      "Disponible en varios colores",
    ],
    image: "/productos/combo-sabana-cortina-estampados.jpg",
  },
  {
    slug: "sierra-circular-makita",
    name: "SIERRA CIRCULAR MAKITA jpg",
    category: "herramientas",
    price: 335900,
    description: "Sierra circular profesional Makita, lista para cortes de precisión en madera.",
    features: [
      "Incluye disco de 7\" (185mm) de 24 dientes para madera",
      "Motor potente para cortes rápidos y parejos",
      "Base ajustable para controlar la profundidad de corte",
      "Incluye llave de ajuste y tornillería",
    ],
    image: "/productos/sierra-circular-makita.jpg",
  },
  {
    slug: "caladora-makita-900w",
    name: "CALADORA MAKITA 900W 110V",
    category: "herramientas",
    price: 303900,
    description: "Caladora Makita de 900W con velocidad variable, para cortes curvos y precisos.",
    features: [
      "Potencia de 900W para madera, metal y PVC",
      "Velocidad variable para adaptarse a cada material",
      "Base metálica ajustable para cortes en ángulo",
      "Diseño ergonómico para mayor control",
    ],
    image: "/productos/caladora-makita-900w.jpg",
  },
  {
    slug: "combo-taladro-pulidora-makita",
    name: "COMBO TALADRO Y PULIDORA 6V MAKITA",
    category: "herramientas",
    price: 328000,
    description: "Dos herramientas esenciales en un solo combo: taladro y pulidora angular.",
    features: [
      "Incluye taladro percutor y pulidora/esmeril angular",
      "Mangos auxiliares y llave incluidos",
      "Ideal para perforar, atornillar, pulir y desbastar",
      "Motor de alto rendimiento para trabajo continuo",
    ],
    image: "/productos/combo-taladro-pulidora-makita.jpg",
  },
  {
    slug: "cepillo-electrico-madera-makita",
    name: "CEPILLO ELECTRICO PARA MADERA MAKITA",
    category: "herramientas",
    price: 302900,
    description: "Cepillo eléctrico Makita KP0800: acabados profesionales en madera, pasada tras pasada.",
    features: [
      "Motor de 620W con velocidad de 17.000 RPM",
      "Ancho de cepillado de 82mm, ideal para puertas y muebles",
      "Ajuste preciso de profundidad con perilla graduada",
      "Base de aluminio resistente para mayor durabilidad",
    ],
    image: "/productos/cepillo-electrico-madera-makita.jpg",
  },
  {
    slug: "calzado-mocasin-caballero",
    name: "CALZADO MOCASIN PARA CABALLERO",
    category: "moda-masculina",
    price: 185000,
    description: "Mocasín en cuero para caballero, cómodo desde el primer uso.",
    features: [
      "Elaborado en cuero, cómodo para uso diario",
      "Suela de caucho antideslizante y resistente",
      "Diseño clásico con cordón, combina looks casuales y formales",
      "Costuras reforzadas para mayor durabilidad",
    ],
    image: "/productos/calzado-mocasin-caballero.jpg",
  },
  {
    slug: "carpa-universal-moto-impermeable",
    name: "CARPA UNVERSAL PARA MOTO 100 MPERMEABLE",
    category: "vehiculos",
    price: 137900,
    description: "Protege tu moto del sol, el polvo y la lluvia con esta carpa impermeable.",
    features: [
      "Material impermeable que protege del sol, polvo y lluvia",
      "Talla universal, se ajusta a la mayoría de motocicletas",
      "Incluye bolso para guardarla cuando no la uses",
      "Fácil de poner y quitar",
    ],
    image: "/productos/carpa-universal-moto-impermeable.jpg",
  },
  {
    slug: "set-velez-x3",
    name: "SET VELEZ X3",
    category: "moda-masculina",
    price: 221000,
    description: "Set 3 en 1 Vélez: bolso cruzado, cinturón y billetera en cuero, listo para regalar.",
    features: [
      "Set 3 en 1: bolso cruzado, cinturón y billetera",
      "Elaborado en cuero, marca Vélez",
      "Bolso con compartimentos y correa ajustable",
      "Ideal como regalo o para uso diario",
    ],
    image: "/productos/set-velez-x3.jpg",
  },
  {
    slug: "organizador-3-espacios-closet",
    name: "ORGANZADOR 3 ESPACOS CLOSET",
    category: "hogar",
    price: 172900,
    description: "Closet portátil de 3 espacios, ideal para ampliar tu clóset sin obra.",
    features: [
      "3 espacios internos con repisas y barra para colgar ropa",
      "Estructura resistente y tela reforzada",
      "Fácil de armar, sin herramientas complicadas",
      "Ideal para habitaciones pequeñas o como clóset adicional",
    ],
    image: "/productos/organizador-3-espacios-closet.jpg",
  },
  {
    slug: "organizador-6-puestos-zapatos",
    name: "ORGANZADOR 6 PSOS ZAPATOS",
    category: "hogar",
    price: 169900,
    description: "Zapatero de varios niveles con tapa, para mantener tus zapatos ordenados y protegidos.",
    features: [
      "Varios niveles para organizar tus zapatos ordenadamente",
      "Cubierta protectora contra el polvo",
      "Estructura liviana y fácil de armar",
      "Aprovecha espacios verticales pequeños",
    ],
    image: "/productos/organizador-6-puestos-zapatos.jpg",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
