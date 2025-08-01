import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AgendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen flex flex-col "
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "var(--font-geist-sans)",
      }}
    >
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
