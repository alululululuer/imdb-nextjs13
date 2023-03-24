import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "IMDB Clone",
  description: "IMDB clone created by Next js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header  */}
        <Header />
        {/* Navbar */}

        {/* SearchBox */}

        {children}
      </body>
    </html>
  );
}
