import TopProducts from "@/components/shared/home/TopProducts";
import NewProducts from "@/components/shared/home/NewProducts";
import Features from "@/components/shared/home/Features";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/home/Hero";
import Brands from "@/components/shared/home/Brands";
import ContactLocation from "@/components/shared/home/ContactLocation";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-background text-foreground [--primary:#41b2fd]">
      <Header />
      <Hero />
      <Brands />
      <div className="bg-gradient-to-br from-sky-50 to-white">
        <NewProducts />
        <TopProducts />
      </div>
      <Features />
      <ContactLocation />
      <Footer />
    </main>
  );
}