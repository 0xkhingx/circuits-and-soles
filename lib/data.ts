export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  sizes: string[];
  condition: "New" | "Like New" | "Used";
  verified: boolean;
  isNewDrop?: boolean;
  image: string;
  description: string;
};

export type Story = {
  slug: string;
  headline: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
};

export const products: Product[] = [
  { id: "aj1-mocha", brand: "Nike", name: "Air Jordan 1 Retro High Mocha", price: 185000, sizes: ["40", "41", "42", "43", "44"], condition: "New", verified: true, isNewDrop: true, image: "/placeholder-sneaker.svg", description: "Classic Mocha colorway. 100% authentic, box included." },
  { id: "nb-550", brand: "New Balance", name: "550 White Grey", price: 95000, sizes: ["40", "42", "43", "45"], condition: "New", verified: true, image: "/placeholder-sneaker.svg", description: "Clean everyday staple." },
  { id: "stussy-hoodie", brand: "Stüssy", name: "Basic Stüssy Hoodie Black", price: 68000, sizes: ["S", "M", "L", "XL"], condition: "Like New", verified: true, isNewDrop: true, image: "/placeholder-hoodie.svg", description: "Heavyweight fleece, minimal branding." },
  { id: "carhartt-cargo", brand: "Carhartt WIP", name: "Aviation Cargo Pant", price: 74000, sizes: ["30", "32", "34"], condition: "New", verified: true, image: "/placeholder-pants.svg", description: "Ripstop cargo, relaxed fit." },
  { id: "supreme-tee", brand: "Supreme", name: "Box Logo Tee FW24", price: 88000, sizes: ["M", "L"], condition: "New", verified: true, isNewDrop: true, image: "/placeholder-tee.svg", description: "FW24 box logo, deadstock." },
  { id: "dunk-panda", brand: "Nike", name: "Dunk Low Panda", price: 110000, sizes: ["41", "42", "43", "44"], condition: "Like New", verified: false, image: "/placeholder-sneaker.svg", description: "Worn twice, no creasing." },
  { id: "essentials-hoodie", brand: "Fear of God Essentials", name: "Essentials Pullover Oatmeal", price: 72000, sizes: ["S", "M", "L"], condition: "New", verified: true, image: "/placeholder-hoodie.svg", description: "Core oatmeal colorway." },
  { id: "palace-cap", brand: "Palace", name: "Tri-Ferg Cap Black", price: 32000, sizes: ["OS"], condition: "New", verified: true, image: "/placeholder-cap.svg", description: "Embroidered tri-ferg." },
];

export const stories: Story[] = [
  { slug: "lagos-street-style", headline: "Lagos Street Style: 5 Fits That Shut Down Alara", category: "Community", readTime: "4 min", image: "/placeholder-editorial.svg", excerpt: "From cargos to vintage jerseys — what the community pulled up in." },
  { slug: "how-to-spot-fakes", headline: "How We Verify Every Pair Before It Lists", category: "Guide", readTime: "6 min", image: "/placeholder-editorial.svg", excerpt: "Stitching, tags, box labels — our checklist explained." },
  { slug: "drop-calendar", headline: "March Drop Calendar: What to Save For", category: "Drops", readTime: "3 min", image: "/placeholder-editorial.svg", excerpt: "Three heat releases worth your allowance." },
];

export const WHATSAPP_NUMBER = "2348000000000";
export const whatsappLink = (product: Product) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi C&S! I want the ${product.brand} ${product.name} (₦${product.price.toLocaleString()}) — ID: ${product.id}`)}`;
