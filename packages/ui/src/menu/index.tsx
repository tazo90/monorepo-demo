"use client";

import { useEffect, useState } from "react";

interface MenuProps {
  menuUrl: string;
  brand?: string;
}

function MenuCategories({ categories, brand = "default" }) {
  let boxColor = "bg-white";

  if (brand === "bk") {
    boxColor = "bg-[#e0d1bc]";
  } else if (brand === "ph") {
    boxColor = "bg-gray-200";
  }

  return (
    <div className="grid grid-cols-4 gap-4 my-8">
      {categories?.map((cat) => (
        <div
          key={cat.id}
          className={`flex flex-col items-center justify-center h-48 rounded-md border border-gray-200 ${boxColor}`}
        >
          <img src={cat.img} className="w-28" />
          <span className="text-md text-gray-800 font-semibold uppercase pt-2 px-8 text-center">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Menu({ menuUrl, brand = "default" }: MenuProps) {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      const res = await fetch(menuUrl, {
        method: "GET",
      });

      const data = await res.json();
      setMenu(data);
    }

    fetchMenu();
  }, []);

  return (
    <div>
      {menu && (
        <MenuCategories categories={menu?.menu.categories} brand={brand} />
      )}
    </div>
  );
}
