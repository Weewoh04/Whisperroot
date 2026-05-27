import Footer from "@/components/Footer";
import LivingWorldBackground from "@/components/LivingWorldBackground";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LivingWorldBackground />
      <Navbar />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
