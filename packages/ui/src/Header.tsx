import Link from "next/link";

export const Header = ({ logo, menuLeft, menuRight }) => {
  return (
    <div className="flex">
      <div className="flex items-center justify-between w-full text-xs font-semibold">
        <div className="flex items-center space-x-6">
          {logo}
          {menuLeft.map((item) => (
            <Link href={item.url} className="uppercase">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex space-x-6">
          <Link href="/login" className="uppercase">
            Logowanie
          </Link>
          <Link href="/register" className="uppercase">
            Rejestracja
          </Link>
        </div>
      </div>
    </div>
  );
};
