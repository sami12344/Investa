import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Investa || Empowering Your Financial Future',
  description:
    "Discover prosperity with Investa&apos;s secure and innovative investment solutions. Empower your financial future with us.'",
  author:"Sami Islam"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
