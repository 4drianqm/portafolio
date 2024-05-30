import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Proyects from "@/components/Proyects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900">
      <Navbar/>
      <section className="container mx-auto px-8 py-4">
        <Hero />
        <AboutMe/>
        <Experience/>
        <Proyects/>
      </section>
    </main>
  );
}
