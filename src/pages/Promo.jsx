import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Helmet } from "react-helmet";
import Ayam from "../assets/images/ayambakar.jpg";
import Gudeg from "../assets/images/gudeg.jpg";
import OrangeJuice from "../assets/images/orangejuice.jpg";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { StarIcon } from "@heroicons/react/24/solid";
import Button from "../components/Elements/Button/Button";
import Aos from "aos";
import "aos/dist/aos.css";



const menu = [
  {
    id: 1,
    name: "Paket Hemat 1",
    price: "Rp. 15.000",
    desc: "Nasi, Ayam Bakar, Es Teh Manis",
    image: Ayam,
  },
  {
    id: 2,
    name: "Paket Hemat 2",
    price: "Rp. 20.000",
    desc: "Nasi, Gudeg, Krecek, Es Jeruk",
    image: Gudeg,
  },
  {
    id: 3,
    name: "Paket Hemat 3",
    price: "Rp. 25.000",
    desc: "Nasi, Ayam Bakar, Gudeg, Krecek, Lemon Tea",
    image: OrangeJuice,
  },
]
export default function Promo() {
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

    return (
      <>
        <Helmet>
          <title>Promo - Ayam Tuwajuh</title>
        </Helmet>
        <div className="pt-14 md:pt-6"
        data-aos="flip-right">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-3xl font-bold font-lexend mb-2">Promo</h1>
            <h2 className="text-xl md:text-2xl font-bold font-lexend mb-10">Discount Up To <span className="text-red-500 md:text-3xl">50%</span></h2>
          </div>
          <div>
            <Slider {...settings} ref={sliderRef}>
              {menu.map((menus) => (
                <div className="w-full flex justify-center items-center">
                  <div className="w-full h-full px-2 flex flex-col justify-center items-center gap-4">
                    <img
                      src={menus.image}
                      alt={menus.name}
                      className="w-72 h-52 xs:w-80 xs:h-64 md:w-[500px]md:h-80 lg:w-[580px] lg:h-80 object-cover rounded-xl"
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
                        <h2 className="font-lexend md:text-lg">{menus.name}</h2>
                        <div className="flex">
                          <StarIcon className="w-4 h-4 text-yellow-500" />
                          <StarIcon className="w-4 h-4 text-yellow-500" />
                          <StarIcon className="w-4 h-4 text-yellow-500" />
                          <StarIcon className="w-4 h-4 text-yellow-500" />
                          <StarIcon className="w-4 h-4 text-yellow-500" />
                        </div>
                      </div>
                      <h3 className="text-sm md:text-lg font-lexend font-light">{menus.desc}</h3>
                      <h4 className="text-sm md:text-base">{menus.price}</h4>
                      <Button
                        text="Beli Sekarang"
                        className="font-poppins text-white text-xs md:text-base font-medium"
                      ></Button>
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