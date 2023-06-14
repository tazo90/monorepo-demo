import Image from "next/image";

import { Header, Banner } from "@mono/ui";

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

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header
        menuLeft={menuLeft}
        menuRight={menuRight}
        logo={<Image src={"kfc-logo.svg"} width={32} height={32} />}
      />
      <Banner image={<img src={"/kfc-banner.jpg"} className="object-fit" />} />
    </main>
  );
}
