import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { GiChickenOven } from "react-icons/gi";
import { RiRestaurantFill, RiRestaurant2Fill } from "react-icons/ri";
import Button from "../Elements/Button/Button";

const menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Menu",
    link: "/menu",
  },
  {
    id: 3,
    name: "Promo",
    link: "/promo",
  },
  {
    id: 4,
    name: "About",
    link: "/about",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white font-dmsans fixed w-full h-screen">
      <div className="container duration-500 mx-auto py-6 flex items-center justify-between xxs:px-0 xs:px-6">
        <div className="flex gap-4 px-0">
          <GiChickenOven className="w-9 h-9 text-[#c05c19]" />
          <div className="pt-1 font-medium font-poppins text-lg hover:text-[#c05c19]">
            <a href="/" className="cursor-pointer">
              Ayam Tuwajuh
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10">
          {menu.map((menus) => (
            <ul
              key={menus.id}
              className="hover:text-[#c05c19] hover:transition duration-200"
            >
              <Link to={menus.link}>{menus.name}</Link>
            </ul>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <Link to={"/menu"}>
            <Button text="Order Now" className="font-poppins text-white" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? (
              <RiRestaurant2Fill className="h-6 w-6 text-[#c05c19]" />
            ) : (
              <RiRestaurantFill
                style={{ transform: "rotate(270deg)" }}
                className="h-6 w-6 text-[#c05c19]"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          menuOpen ? "block opacity-100" : "opacity-0 absolute"
        } lg:hidden h-screen bg-white p-4 space-y-6 xxs:pl-10 xs:pl-16 sm:pl-20 md:pl-24 transition-opacity duration-500`}
      >
        {menu.map((menus) => (
          <ul
            key={menus.id}
            className="hover:text-[#c05c19] hover:transition duration-200"
            onClick={toggleMenu}
          >
            <Link to={menus.link}>{menus.name}</Link>
          </ul>
        ))}
        <div className="items-center pb-4">
          <Link to={"/menu"}>
            <Button text="Order Now" className="font-poppins text-white" />
          </Link>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}