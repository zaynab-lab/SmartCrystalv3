import BuildingStage from "@/public/img/text/BuildingStage";
import ServiceDescription from "@/components/section/ServiceDescription";

export const designServices = [
  "Logo Design",
  "Website",
  "Infographic",
  "Visiting Card",
  "Web Banners",
  "Flyer & Poster",
  "Stationary",
  "Catalog",
  "Broucher",
  "3d Modeling",
  "motion graphics",
  "Video Editing"
];

export default function Design() {
  return (
    <>
      <ServiceDescription
        text={text}
        img={"designImg"}
        title={"Design & Montage"}
      />

      <BuildingStage />
      <style jsx>{``}</style>
    </>
  );
}

const text =
  "We will help you build your brand through our brand marketing services. We work closely with you to understand your needs, goals, and vision so we can create logos, business cards, websites, and everything you need to build a professional image that will help you achieve success now and in the future.";
