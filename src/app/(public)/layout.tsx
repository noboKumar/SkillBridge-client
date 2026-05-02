import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
