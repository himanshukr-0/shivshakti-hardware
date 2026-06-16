import catConstruction from "@/assets/cat-construction.jpg";
import catPlumbing from "@/assets/cat-plumbing.jpg";
import catWater from "@/assets/cat-water.jpg";
import catBathroom from "@/assets/cat-bathroom.jpg";

export const BUSINESS = {
  name: "Shiv Shakti Hardware",
  phone: "+919430083013",
  phoneDisplay: "+91 94300 83013",
  whatsapp: "919430083013",
  email: "info@shivshaktihardware.com",
  address: "Sursand road, near PP Jalan PetrolPump, Janakpur road, sitamarhi, Bihar",
  mapsQuery: "Shiv Shakti Hardware Sursand road Janakpur road sitamarhi Bihar",
};

export const waLink = (text: string) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;

export const CATEGORIES = [
  {
    title: "Construction Materials",
    image: catConstruction,
    items: ["Cement", "Sand", "Iron Rods (TMT Bars)"],
    desc: "Premium cement, graded sand and high-strength TMT iron rods from a trusted construction material supplier.",
  },
  {
    title: "Plumbing Solutions",
    image: catPlumbing,
    items: ["PVC / CPVC / UPVC Pipes", "Pipe Fittings, Elbows, Tees", "Valves & Reducers"],
    desc: "Complete plumbing materials supplier — pipes, fittings and valves for every project. Leading PVC pipe dealer.",
  },
  {
    title: "Water Supply",
    image: catWater,
    items: ["Submersible Pumps", "Water Motors & Hand Pumps", "Water Tanks"],
    desc: "Reliable submersible pump dealer and water tank supplier for homes, farms and buildings.",
  },
  {
    title: "Bathroom & Sanitary",
    image: catBathroom,
    items: ["Wash Basins & Kitchen Sinks", "Commode & Toilet Seats", "Taps, Showers & Faucets"],
    desc: "Modern sanitary ware shop and wash basin dealer with a full range of bathroom fittings.",
  },
];

export const FEATURED = [
  { name: "Premium TMT Iron Rods", desc: "Fe-500/550 grade rust-resistant steel bars for strong, durable construction." },
  { name: "ISI PVC & CPVC Pipes", desc: "Leak-proof pipes in all sizes for water supply and drainage." },
  { name: "Submersible Water Pump", desc: "High-efficiency copper-winding pumps with long warranty." },
  { name: "Designer Wash Basins", desc: "Ceramic wash basins and sinks in modern shapes and finishes." },
  { name: "Branded Cement", desc: "Top-brand 53-grade cement for foundations, slabs and plaster." },
  { name: "Mixer Taps & Faucets", desc: "Chrome-finish taps, health faucets and showers for every bathroom." },
];

export const STATS = [
  { value: 5000, suffix: "+", label: "Happy Customers" },
  { value: 1000, suffix: "+", label: "Products in Stock" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Trusted Local Supplier" },
];

export const REVIEWS = [
  { name: "Rajesh Kumar", role: "Home Builder", rating: 5, text: "Best hardware shop in the area. Got all my cement, TMT rods and pipes at great prices with quick delivery." },
  { name: "Sunita Sharma", role: "Homeowner", rating: 5, text: "Bought a complete bathroom set — wash basin, taps and commode. Excellent quality sanitary ware and helpful staff." },
  { name: "Imran Sheikh", role: "Plumbing Contractor", rating: 5, text: "My go-to plumbing materials supplier. Always stocked with PVC pipes, fittings and valves. Highly recommended." },
  { name: "Anil Patel", role: "Farmer", rating: 5, text: "Reliable submersible pump dealer. The motor they suggested works perfectly for my borewell." },
];
