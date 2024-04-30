import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Button from "../components/Elements/Button/Button";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <main>
      <Helmet>
        <title>Ayam Tuwajuh</title>
      </Helmet>
      <div className="w-full min-h-screen bg-ayam3 bg-gray-400 bg-blend-multiply bg-center bg-cover">
        <div
          className=" min-h-screen flex flex-col justify-center items-center text-center gap-4"
          data-aos="fade-down"
        >
          <h1 className="-mt-16 font-lexend px-2 text-3xl md:text-4xl lg:text-5xl text-white font-semibold uppercase">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #f08741;">Tak perlu jauh, </span>Kini ada Ayam Tuwajuh'
                  )
                  .pauseFor(1500)
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </h1>
          <h2 className="font-encode text-lg md:text-xl lg:text-3xl text-white font-medium">
            Rasakan Kenikmatan Ayam Bakar Khas Yogyakarta
          </h2>
          <h3 className="font-lexend text-base md:text-lg lg:text-2xl text-white font-light">
            Pesan Sekarang dan dapatkan banyak Promo!
          </h3>
          <div>
            <Link to={"/promo"}>
              <Button
                text="Lihat Promo"
                className="font-poppins text-white font-semibold"
              />
            </Link>
          </div>
        </div>
        <div
          className="-mt-60 flex flex-col px-7 md:px-12 gap-4"
          data-aos="fade-up"
        >
          <a
            href="https://wa.me/085860408156?"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="text-white hover:text-green-500 w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href="https://www.instagram.com/ayamtuwajuh/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-white hover:text-pink-600 w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href="https://www.facebook.com/muhammad.mudzaki/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="text-white hover:text-blue-700 w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
      </div>
    </main>
  );
}
