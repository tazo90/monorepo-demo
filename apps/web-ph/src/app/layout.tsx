import "./globals.css";
import Image from "next/image";
import { Banner, BaseLayout, Header } from "@mono/ui";

export const metadata = {
  title: "Pizza Hut",
  description: "Pizza Hut",
};

const menuLeft = [
  {
    name: "Menu",
    url: "/menu",
  },
  {
    name: "Restauracje",
    url: "/restaurants",
  },
  {
    name: "Kontakt",
    url: "/contact",
  },
];

const menuRight = [
  {
    name: "Załóż konto",
    url: "/register",
  },
  {
    name: "Zaloguj się",
    url: "/login",
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
              logo={<Image src={"/ph-logo.svg"} width={100} height={100} />}
            />
            <Banner
              image={<img src={"/ph-banner.jpg"} className="object-fit" />}
            />
            {children}
          </main>
        </BaseLayout>
      </body>
    </html>
  );
}
