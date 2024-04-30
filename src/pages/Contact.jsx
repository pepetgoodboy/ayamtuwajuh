import { React, useEffect } from "react";
import { Helmet } from "react-helmet";
import Map from "../components/Fragments/Map";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const social = [
  {
    id: 1,
    name: "Komp. Tirtawening No.127",
    logo: <MdOutlineLocationOn className="text-[#c05c19] hover:text-[#f08741] w-6 h-6 md:w-8 md:h-8" />,
    link: "https://maps.app.goo.gl/EpbL9UmAFF1Z6MuY8",
  },
  {
    id: 2,
    name: "0858-6040-8156",
    logo: <FaWhatsapp className="text-green-500 hover:text-green-400 w-6 h-6 md:w-8 md:h-8" />,
    link: "https://wa.me/085860408156?",
  },
  {
    id: 3,
    name: "@ayamtuwajuh",
    logo: <FaInstagram className="text-pink-600 hover:text-pink-500 w-6 h-6 md:w-8 md:h-8" />,
    link: "https://www.instagram.com/ayamtuwajuh/",
  },
  {
    id: 4,
    name: "Muhammad Iqbal Mudzaki",
    logo: <FaFacebook className="text-blue-700 hover:text-blue-600 w-6 h-6 md:w-8 md:h-8" />,
    link: "https://www.facebook.com/muhammad.mudzaki/",
  },
]

export default function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  const position = [-6.916074, 107.712059]; 
  const address = 'Ayam Tuwajuh'; 

  return (
    <>
      <Helmet>
        <title>Contact - Ayam Tuwajuh</title>
      </Helmet>
      <div
        className="flex flex-col items-center justify-center"
        data-aos="fade-right"
      >
        <h1 className="text-xl md:text-2xl xl:text-3xl font-bold font-lexend">
          Contact
        </h1>
        <div className="gap-2 flex flex-col lg:flex-row lg:gap-10 pt-8">
          {social.map((socials) => (
            <div key={socials.id}>
              <a
                className="flex font-encode font-medium items-center justify-center gap-2"
                href={socials.link}
                target="_blank"
                rel="noreferrer"
              >
                {socials.logo} {socials.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center pt-6" data-aos="fade-up">
        <Map position={position} address={address} />
      </div>
    </>
  );
}