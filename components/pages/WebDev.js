import Tab from "@/components/molecule/Tab";
import Devices from "@/public/img/tabs/Devices";
import Modern from "@/public/img/tabs/Modern";
import Satisfiable from "@/public/img/tabs/Satisfiable";
import FeatureImg from "@/components/molecule/FeatureImg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Use from "@/components/molecule/Use";
import Boom from "@/public/img/text/Boom";

import YourCustomers from "@/public/img/text/YourCustomers";
import { Pagination } from "swiper";
import { apps } from "./Development";

const tabs = [
  {
    title: "Responsive",
    text:
      "We care about building a responsive website, which looks great on any screen",
    img: <Devices />
  },
  {
    title: "Modern",
    text: "We use the latest styles and technologies in the field..",
    img: <Modern />
  },
  {
    title: "Satisfiable",
    text:
      "Each website has a specific purpose that builded for; therefore we clearly know to apply what is your need...",
    img: <Satisfiable />
  }
];

export default function WebDev() {
  return (
    <>
      <Use apps={apps} />
      <div className="boom">
        <YourCustomers />
        <Boom />
      </div>
      <Tab tabs={tabs} title="Features" />
      <Swiper
        style={{
          "--swiper-pagination-color": "white"
        }}
        spaceBetween={20}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
        onSlideChange={(e) => console.log(e.activeIndex)}
      >
        <SwiperSlide>
          <FeatureImg fTitle="High quality" imgLink="Descomposition" />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureImg fTitle="Fast" imgLink="SmartPhoneMan" />
        </SwiperSlide>
      </Swiper>
      <style jsx>{`
        .boom {
          padding: 0rem 2rem;
          padding-top: 1rem;
          max-width: 40rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
