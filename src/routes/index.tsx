import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Categories from "@/components/site/Categories";
import About from "@/components/site/About";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Gallery from "@/components/site/Gallery";
import Reviews from "@/components/site/Reviews";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";


const TITLE = "Shiv Shakti Hardware | Hardware, Plumbing & Sanitary Store Near You";
const DESC =
  "Shiv Shakti Hardware — trusted hardware store, plumbing materials supplier, sanitary ware shop & construction material supplier. Cement, TMT rods, PVC pipes, pumps, water tanks & bathroom fittings at the best prices.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "hardware store near me, best hardware shop, plumbing materials supplier, sanitary ware shop, PVC pipe dealer, water tank supplier, construction material supplier, TMT iron rod supplier, wash basin dealer, bathroom fittings shop, submersible pump dealer, Shiv Shakti Hardware",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Products", item: "/#products" },
            { "@type": "ListItem", position: 3, name: "Contact", item: "/#contact" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <h1 className="sr-only">
          Shiv Shakti Hardware — Hardware Store, Plumbing Materials Supplier, Sanitary Ware Shop and
          Construction Material Supplier
        </h1>
        <Hero />
        <Categories />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}
