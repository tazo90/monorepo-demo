"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface MenuProps {
  menuUrl: string;
  brand?: string;
}

function MenuProducts({ products }) {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {products?.map((product) => (
        <div className="flex w-full bg-white h-24 rounded-md px-2 py-3 cursor-pointer hover:bg-gray-200 hover:border hover:border-gray-300">
          <img src={product.img} className="w-20 mr-2" />
          <div className="flex justify-between flex-col pl-2">
            <div className="flex flex-col">
              <span className="text-xs font-semibold">{product.name}</span>
              <span className="text-[10px] text-gray-500 truncate w-32">
                {product.description}
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold">{product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function MenuIntro({ menuUrl, brand = "default" }: MenuProps) {
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

  let boxColor = "bg-white";

  if (brand === "bk") {
    boxColor = "bg-[#e0d1bc]";
  } else if (brand === "ph") {
    boxColor = "bg-gray-200";
  }

  const categories = menu?.menu.categories;

  return (
    <div>
      {menu && (
        <div className="grid grid-cols-4 gap-4 my-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              scroll={false}
              href={`/menu#${cat.id}`}
              className={`flex flex-col items-center justify-center h-48 rounded-md border border-gray-200 ${boxColor}`}
            >
              <img src={cat.img} className="w-28" />
              <span className="text-md text-gray-800 font-semibold uppercase pt-2 px-8 text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function MenuDetails({ menuUrl, brand = "default" }: MenuProps) {
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

  const categories = menu?.menu.categories;

  return (
    <div>
      {menu && (
        <div className="flex flex-col space-y-8">
          {categories.map((cat) => {
            const subCategories = cat.subCategories?.filter(
              (item) => item.type === "BLOCK"
            );

            return (
              <div className="flex flex-col my-4" id={cat.id}>
                <h2 className="text-2xl font-semibold">{cat.name}</h2>

                <div className="flex space-x-2 mt-4">
                  <div className="cursor-pointer text-[11px] px-2 py-0.5 bg-white text-red-500 border border-red-500 uppercase font-semibold rounded-md">
                    Wszystkie
                  </div>
                  {subCategories?.map((subCat) => (
                    <div className="cursor-pointer text-[11px] px-2 py-0.5 bg-white border border-gray-300 uppercase font-semibold rounded-md">
                      {subCat.name}
                    </div>
                  ))}
                </div>

                <MenuProducts products={Object.values(cat.products)} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
