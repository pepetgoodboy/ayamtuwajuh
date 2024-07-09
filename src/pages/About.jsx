import { useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>About - Ayam Tuwajuh</title>
      </Helmet>
      <Navbar />
      <div className="w-full min-h-screen bg-ayam4 bg-gray-500 bg-blend-multiply bg-center bg-cover text-white font-jakarta">
        <div className="pt-24 md:pt-28" data-aos="fade-left">
          <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-14 xl:px-20 2xl:px-24 mt-2 xs:mt-4">
            <p className="xxs:text-sm sm:text-base md:text-lg xl:text-xl">
              <span className="font-bold xxs:text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-[#f08741]">
                Ayam Tuwajuh
              </span>{" "}
              adalah warung makan khas Yogyakarta yang berkomitmen untuk
              memberikan pengalaman kuliner terbaik dengan menu pilihan yang
              kaya akan cita rasa dan tradisi Indonesia. Dibuka dengan hasrat
              untuk menyajikan hidangan lezat dan otentik, kami telah
              menggabungkan warisan kuliner Indonesia dengan sentuhan kreatif
              yang membuat setiap hidangan istimewa.
            </p>
          </div>
          <div className="w-full flex justify-center items-center pt-4 xs:pt-10 2xl:pt-14">
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
              Kenapa Ayam Tuwajuh?
            </h1>
          </div>
          <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-14 xl:px-20 2xl:px-24 mt-2 xs:mt-4 gap-2 xxs:text-sm sm:text-base md:text-lg xl:text-xl">
            <p>
              <span className="font-bold">Keaslian Rasa:</span> Kami
              mengutamakan keaslian rasa dalam setiap hidangan kami, dengan
              mempertahankan resep tradisional yang telah diwariskan dari
              generasi ke generasi.
            </p>
            <p>
              <span className="font-bold">Bahan Berkualitas:</span> Hanya
              menggunakan bahan-bahan terbaik dan segar untuk memastikan
              kualitas terbaik dalam setiap sajian.
            </p>
          </div>
          <div className="w-full flex justify-center items-center pt-4 xs:pt-10 2xl:pt-14">
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
              Kunjungi Kami
            </h1>
          </div>
          <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-14 xl:px-20 2xl:px-24 mt-2 xs:mt-4">
            <p className="xxs:text-sm sm:text-base md:text-lg xl:text-xl">
              Temukan kelezatan Indonesia di setiap hidangan kami. Kunjungi Ayam
              Tuwajuh sekarang dan nikmati pengalaman kuliner yang tak
              terlupakan. Kami berkomitmen untuk memberikan Anda cita rasa yang
              autentik dan kenangan kuliner yang menyenangkan. Selamat
              menikmati!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
