import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar/>
      <section className="container mx-auto px-12 py-4">
        <Hero />
      </section>
    </main>
  );
}
