const products = [
  {
    name: "Pan Blandito",
    url: "img/pan_blandito.jpg",
    imageUrl: "img/pan_blandito.jpg",
    price: 3000
    ,
    details: [
      "Paquete de 6 panes",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Pan Integral",
    url: "img/pan_integral.jpg",
    imageUrl: "img/pan_integral.jpg",
    price: 3000
    ,
    details: [
      "Paquete de 6 panes",
      "Harina de trigo, de maíz y de avena",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Mogolla Campesina",
    url: "img/pan_campesino.jpg",
    imageUrl: "img/pan_campesino.jpg",
    price: 3000,
    details: [
      "Paquete de 6 panes",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Pan Francés",
    url: "img/pan_frances.jpg",
    imageUrl: "img/pan_frances.jpg",
    price: 3000
    ,
    details: [
      "Pan francés hecho en Cota",
      "Paquete de 6 panes",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Pan Frances con Queso",
    url: "img/pan_frances_queso.jpg",
    imageUrl: "img/pan_frances_queso.jpg",
    price: 3000,
    details: [
      "Pan francés hecho en Cota",
      "Paquete de 4 panes",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Pan de Francés con Ajo",
    url: "img/pan_ajo.jpg",
    imageUrl: "img/pan_ajo.jpg",
    price: 2500,
    details: [
      "Pan francés hecho en Cota",
      "Pan individual",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Pan de Coco",
    url: "img/pan_coco.jpg",
    imageUrl: "img/pan_coco.jpg",
    price: 3000,
    details: [
      "Paquete de 6 panes",
      "Pan de dulce"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Mogolla Negra",
    url: "img/pan_negra.jpg",
    imageUrl: "img/pan_negra.jpg",
    price: 3000,
    details: [
      "Paquete de 6 panes",
      "Rellenas de bocadillo",
      "Pan de dulce"
    ],
    state: "available",
    purchaser: "id",
  },
  {
    name: "Roscón",
    url: "img/pan_roscon.jpg",
    imageUrl: "img/pan_roscon.jpg",
    price: 600,
    details: [
      "1 Roscón = 1 Roscón",
      "Relleno de bocadillo",
      "Pan de dulce"
    ],
    state: "available",
    purchaser: "id",
  },
  {
    name: "Pan de Maíz",
    url: "img/pan_maiz.jpg",
    imageUrl: "img/pan_maiz.jpg",
    price: 3000,
    details: [
      "Paquete de 6 panes",
      "Pan de dulce"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Mogolla Mestiza",
    url: "img/pan_mestiza.jpg",
    imageUrl: "img/pan_mestiza.jpg",
    price: 3000,
    details: [
      "Paquete de 6 panes",
      "Pan de dulce"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Pan Focaccia",
    url: "img/pan_focaccia.jpg",
    imageUrl: "img/pan_focaccia.jpg",
    price: 3000,
    details: [
      "Pan italiano hecho en Cota",
      "Paquete de 4 panes",
      "Con especias",
      "Ideal para sandwishes y pastas",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Pan Árabe",
    url: "img/pan_arabe.jpg",
    imageUrl: "img/pan_arabe.jpg",
    price: 3000,
    details: [
      "Pan árabe hecho en Cota",
      "Paquete de 4 panes",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Pan Aliñado de Molde",
    url: "img/pan_molde.jpg",
    imageUrl: "img/pan_molde.jpg",
    price: 4000,
    details: [
      "Pan individual",
      "Con mantequilla y huevo",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Pan Aliñado con Queso",
    url: "img/pan_queso.jpg",
    imageUrl: "img/pan_queso.jpg",
    price: 3500,
    details: [
      "Pan individual",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "(1/2 Libra) Pan Integral 7 Granos Artesanal",
    url: "img/pan_integral_7.jpg",
    imageUrl: "img/pan_integral_7.jpg",
    price: 4500,
    details: [
      "Pan individual",
      "Hecho a base de harina de centeno",
      "Sin grasas",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "(1 Libra) Pan Integral 7 Granos Artesanal",
    url: "img/pan_integral_7.jpg",
    imageUrl: "img/pan_integral_7.jpg",
    price: 8500,
    details: [
      "Pan individual",
      "Hecho a base de harina de centeno",
      "Sin grasas",
      "Pan de sal"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Pastelería",
    url: "img/pasteleria.jpg",
    imageUrl: "img/pasteleria.jpg",
    price: 0,
    details: [
      "Galletas",
      "Corazones",
      "Pasabocas",
      "Pan Gloria",
      "Palitos de queso",
      "Milhojas",
      "Ponqués",
      "Y más... Pregunte por el que no ve en la lista"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Huevos y Leche",
    url: "img/huevos_leche.jpg",
    imageUrl: "img/huevos_leche.jpg",
    price: 0,
    details: [
      "Leche entera",
      "Leche Deslactosada",
      "En Bolsa o en Caja",
      "Huevo rojo AA"
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: "Empanadas",
    url: "img/empanadas.jpg",
    imageUrl: "img/empanadas.jpg",
    price: 2500,
    details: [
      "Rellenas de pollo",
      "Literalmente rellenas de pollo",
      "No arroz ni papa. Pollo"
    ],
    state: "available",
    purchaser: "id"
  }
]
