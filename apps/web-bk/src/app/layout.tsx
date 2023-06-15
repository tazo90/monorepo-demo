import "./globals.css";
import { Banner, BaseLayout, Header } from "@mono/ui";
import Image from "next/image";

export const metadata = {
  title: "Burger King",
  description: "Burger King",
};

const menuLeft = [
  {
    name: "Menu",
    url: "/menu",
  },
  {
    name: "Oferty specjalne",
    url: "/promotions",
  },
  {
    name: "Restauracje",
    url: "/restaurants",
  },
];

const menuRight = [
  {
    name: "Logowanie",
    url: "/login",
  },
  {
    name: "Cart",
    url: "/cart",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BaseLayout>
          <main>
            <Header
              menuLeft={menuLeft}
              menuRight={menuRight}
              logo={<Image src={"/bk-logo.png"} width={32} height={32} />}
            />
            <Banner
              image={<img src={"/bk-banner.jpg"} className="object-fit" />}
            />

            {children}
          </main>
        </BaseLayout>
      </body>
    </html>
  );
}
