import React, { useRef, useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import Ayam from "../assets/images/ayambakar.jpg";
import Gudeg from "../assets/images/gudeg1.jpg";
import Krecek from "../assets/images/krecek.jpg";
import Tempe from "../assets/images/tempe.jpg";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { StarIcon } from "@heroicons/react/24/solid";
import Button from "../components/Elements/Button/Button";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const menu = [
  {
    id: 1,
    name: "Ayam Bakar",
    price: "Rp. 15.000",
    image: Ayam,
  },
  {
    id: 2,
    name: "Gudeg",
    price: "Rp. 20.000",
    image: Gudeg,
  },
  {
    id: 3,
    name: "Krecek",
    price: "Rp. 20.000",
    image: Krecek,
  },
  {
    id: 4,
    name: "Tempe Bacem",
    price: "Rp. 5.000",
    image: Tempe,
  },
];
export default function Makanan() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const linkWa =
    "https://wa.me/+6285860408156?text=Halo%20Ayam%20Tuwajuh,%20saya%20mau%20order%20makanan%20yang%20saya%20ingin%20order.";

  return (
    <>
      <Helmet>
        <title>Makanan - Ayam Tuwajuh</title>
      </Helmet>
      <Navbar />
      <div className="pt-28 font-jakarta" data-aos="zoom-in">
        <div className="w-full flex justify-center items-center">
          <Link to={"/menu"}>
            <h1 className="text-2xl md:text-3xl font-bold">Menu</h1>
          </Link>
        </div>
        <div className="w-full font-medium flex justify-center items-center gap-12 sm:gap-32 md:gap-48 py-6">
          <h2 className="text-base text-[#c05c19] font-semibold">Makanan</h2>
          <Link to={"/menu/minuman"}>
            <h2 className="text-base">Minuman</h2>
          </Link>
        </div>
        <div>
          <Slider {...settings} ref={sliderRef}>
            {menu.map((menus) => (
              <div
                className="w-full flex justify-center items-center"
                key={menus.id}
              >
                <div className="w-full h-full px-2 flex flex-col justify-center items-center gap-4">
                  <img
                    src={menus.image}
                    alt={menus.name}
                    className="w-72 h-52 xs:w-80 xs:h-64 md:w-[500px] md:h-80 lg:w-[580px] lg:h-60 object-cover rounded-xl"
                  />
                  <div className="flex justify-center items-center gap-[320px] xs:gap-[400px] md:gap-[500px] lg:gap-[700px] -mt-32 xs:-mt-40 md:-mt-44 lg:-mt-48">
                    <IoIosArrowDropleftCircle
                      className="w-5 h-5 xs:w-6 xs:h-6 md:w-8 md:h-8 text-black hover:text-slate-300 duration-500 cursor-pointer"
                      onClick={previous}
                    />
                    <IoIosArrowDroprightCircle
                      className="w-5 h-5 xs:w-6 xs:h-6 md:w-8 md:h-8 text-black hover:text-slate-300 duration-500 cursor-pointer"
                      onClick={next}
                    />
                  </div>
                  <div className="mt-24 xs:mt-32 md:mt-36 flex flex-col justify-center items-center gap-2">
                    <div className="flex justify-center items-center gap-1">
                      <h2 className="md:text-lg">{menus.name}</h2>
                      <div className="flex">
                        <StarIcon className="w-4 h-4 text-yellow-500" />
                        <StarIcon className="w-4 h-4 text-yellow-500" />
                        <StarIcon className="w-4 h-4 text-yellow-500" />
                        <StarIcon className="w-4 h-4 text-yellow-500" />
                        <StarIcon className="w-4 h-4 text-yellow-500" />
                      </div>
                    </div>
                    <h3 className="text-sm md:text-base">{menus.price}</h3>
                    <Link to={linkWa} target="_blank">
                      <Button
                        text="Beli Sekarang"
                        className="text-white text-xs md:text-base"
                      ></Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
