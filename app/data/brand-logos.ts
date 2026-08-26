export type BrandLogo = {
  name: string;
  src: string;
  dark?: boolean;
  large?: boolean;
  instagram?: string;
};

export const brandLogos: BrandLogo[] = [
  {
    name: "Bodytech",
    src: "/brand-logos/bodytech.png",
    instagram: "https://www.instagram.com/clubbodytech?igsi=MTAyYWZ0eWR1b3NxOQ==",
  },
  { name: "Mobil", src: "/brand-logos/mobil.png" },
  { name: "Terpel", src: "/brand-logos/terpel.png" },
  {
    name: "Schwarzkopf Professional",
    src: "/brand-logos/schwarzkopf.png",
    instagram: "https://www.instagram.com/schwarzkopfpro.co?igsi=MXIxNmhjcTcxdmhmdg==",
  },
  {
    name: "Authentic Beauty Concept",
    src: "/brand-logos/authentic-beauty-concept.png",
    instagram:
      "https://www.instagram.com/authenticbeautyconcept.co?igsi=MTM0M2V2aWkwdHdkZg==",
  },
  {
    name: "Tec Italy",
    src: "/brand-logos/tec-italy.png",
    instagram: "https://www.instagram.com/tecitalyoficial.co?igsi=MXFiN3hhMHczaGR3Ng==",
  },
  {
    name: "Kuul",
    src: "/brand-logos/kuul.png",
    instagram: "https://www.instagram.com/kuulcolombia?igsi=MXJiMWt2dHZtcnA4Zw==",
  },
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
  {
    name: "Bull Marketing",
    src: "/brand-logos/bull_marketing.png",
    large: true,
    instagram: "https://www.instagram.com/bull_marketing?igsi=a2ZjNHE0cm9kc2lw",
  },
  {
    name: "Aerorental",
    src: "/brand-logos/aerorental.png",
    large: true,
    instagram: "https://www.instagram.com/aerorentalcolombia?igsi=MWJraDk3aHJiOXcxZw==",
  },
];

const managementBrandNames = [
  "Bodytech",
  "Mobil",
  "Terpel",
  "Schwarzkopf Professional",
  "Authentic Beauty Concept",
  "Tec Italy",
  "Kuul",
  "Bull Marketing",
  "Aerorental"
];

export const managementBrands = brandLogos.filter((brand) =>
  managementBrandNames.includes(brand.name),
);
