import "./globals.css";

export const metadata = {
  title: "Kayra Craft — Buy & Sell Handcrafted Furniture",
  description: "Discover unique, handcrafted furniture. Buy from artisans or sell your own pieces on Kayra Craft.",
  icons: {
    icon: "/images/kayra-craft-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
