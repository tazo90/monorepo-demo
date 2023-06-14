import Image from "next/image";

import { Header } from "@mono/ui";

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
    name: "Restaurants",
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

export default function Home() {
  return (
    <main>
      <Header
        menuLeft={menuLeft}
        menuRight={menuRight}
        logo={<Image src={"/bk-logo.png"} width={32} height={32} />}
      />
    </main>
  );
}
