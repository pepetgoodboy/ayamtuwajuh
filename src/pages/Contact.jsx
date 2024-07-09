import { React, useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import { Helmet } from "react-helmet";
import Call from "../../src/assets/images/call.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../components/Elements/Button/Button";
import { Link } from "react-router-dom";

export default function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  const linkWa = "https://wa.me/+6285860408156";

  return (
    <>
      <Helmet>
        <title>Contact - Ayam Tuwajuh</title>
      </Helmet>
      <Navbar />
      <div className="font-jakarta pt-20">
        <div className="flex justify-center text-3xl font-bold py-1 md:py-6">
          <h2>Contact</h2>
        </div>
        <div className="px-4 md:px-8 lg:px-14 py-4 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[45%] flex items-center">
            <img
              src={Call}
              alt="Call"
              data-aos="fade-right"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-[55%] md:px-8 flex flex-col justify-center">
            <div className="flex flex-col gap-1 text-2xl md:text-3xl">
              <h3 className="font-semibold">Kontak Kami</h3>
              <h4 className="font-medium">
                Kirimi kami <span className="text-primary">Pesan.</span>
              </h4>
            </div>
            <div className="py-4">
              <p className="text-justify font-medium text-sm md:text-base">
                Terima kasih telah mengunjungi situs web kami! Di Ayam Tuwajuh,
                kami berkomitmen untuk memberikan layanan pelanggan terbaik.
                Jika Anda memiliki pertanyaan, umpan balik, atau membutuhkan
                bantuan, jangan ragu untuk menghubungi kami melalui salah satu
                metode di bawah ini.
              </p>
              <Link to={linkWa} target="_blank">
                <Button
                  text="Hubungi Kami"
                  className="mt-4 md:mt-6 text-white"
                ></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
