import Image from "next/image";
import { Banner, BaseLayout, Header } from "@mono/ui";

import "./globals.css";

export const metadata = {
  title: "KFC",
  description: "KFC",
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
    name: "Ku(r)pony",
    url: "/promotions",
  },
];

const menuRight = [
  {
    name: "Logowanie",
    url: "/login",
  },
  {
    name: "Register",
    url: "/register",
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
          <main className="flex flex-col">
            <Header
              menuLeft={menuLeft}
              menuRight={menuRight}
              logo={<Image src={"kfc-logo.svg"} width={32} height={32} />}
            />
            <Banner
              image={<img src={"/kfc-banner.jpg"} className="object-fit" />}
            />
            {children}
          </main>
        </BaseLayout>
      </body>
    </html>
  );
}
