export type BrandLogo = {
  name: string;
  src: string;
  dark?: boolean;
};

export const brandLogos: BrandLogo[] = [
  { name: "Bodytech", src: "/brand-logos/bodytech.png" },
  { name: "Mobil", src: "/brand-logos/mobil.png" },
  { name: "Terpel", src: "/brand-logos/terpel.png" },
  { name: "Schwarzkopf Professional", src: "/brand-logos/schwarzkopf.png" },
  {
    name: "Authentic Beauty Concept",
    src: "/brand-logos/authentic-beauty-concept.png",
  },
  { name: "Tec Italy", src: "/brand-logos/tec-italy.png" },
  { name: "Kuul", src: "/brand-logos/kuul.png" },
  { name: "Budweiser", src: "/brand-logos/budweiser.png" },
  { name: "Stella Artois", src: "/brand-logos/stella-artois.png" },
  { name: "Corona", src: "/brand-logos/corona.png" },
  { name: "Newell Brands", src: "/brand-logos/newell.png" },
  { name: "Sharpie", src: "/brand-logos/sharpie.png" },
  { name: "Ana Taborda Home", src: "/brand-logos/ana-taborda-home.png" },
  { name: "Aurum Eventos", src: "/brand-logos/aurum.png" },
  { name: "Revlon", src: "/brand-logos/revlon.png" },
  { name: "DHEMS", src: "/brand-logos/dhems.png" },
  { name: "AHK Colombia", src: "/brand-logos/ahk.png" },
  { name: "Chalela Abogados", src: "/brand-logos/chalela-abogados.png" },
];

const managementBrandNames = [
  "Bodytech",
  "Mobil",
  "Terpel",
  "Schwarzkopf Professional",
  "Authentic Beauty Concept",
  "Tec Italy",
  "Kuul",
];

export const managementBrands = brandLogos.filter((brand) =>
  managementBrandNames.includes(brand.name),
);
