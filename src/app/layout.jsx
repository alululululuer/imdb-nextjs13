import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/Providers";

export const metadata = {
  title: "IMDB Clone",
  description: "IMDB clone created by Next js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header  */}
          <Header />
          {/* Navbar */}

          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
