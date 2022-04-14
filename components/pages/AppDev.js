import Tab from "@/components/molecule/Tab";
import Light from "@/public/img/tabs/Light";
import Modern from "@/public/img/tabs/Modern";
import Scalable from "@/public/img/tabs/Scalable";
import FeatureImg from "@/components/molecule/FeatureImg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Use from "@/components/molecule/Use";
import DeveloperWorking from "@/public/img/text/DeveloperWorking";

import YourCustomers from "@/public/img/text/YourCustomers";
import { Pagination } from "swiper";
import { apps } from "./Development";

const tabs = [
  {
    title: "Light",
    text: "We care about building a low size high efficiency applications..",
    img: <Light />
  },
  {
    title: "Modern",
    text: "We use the latest styles and technologies in the field..",
    img: <Modern />
  },
  {
    title: "Scalable",
    text:
      "Every application has a purpose, but the main service followed by many others; this for the application should be scalable and has reusable components...",
    img: <Scalable />
  }
];

export default function AppDev() {
  return (
    <>
      <Use apps={apps} />

      <div className="boom">
        <YourCustomers />

        <DeveloperWorking />
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
