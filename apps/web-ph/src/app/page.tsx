import Image from "next/image";

import { Header } from "@mono/ui";

const menuLeft = [
  {
    name: "Menu",
    url: "/menu",
  },
  {
    name: "Restaurants",
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

export default function Home() {
  return (
    <main>
      <Header
        menuLeft={menuLeft}
        menuRight={menuRight}
        logo={<Image src={"/ph-logo.svg"} width={100} height={100} />}
      />
    </main>
  );
}
