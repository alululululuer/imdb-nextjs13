import "./globals.css";

export const metadata = {
  title: "IMDB Clone",
  description: "IMDB clone created by Next js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
