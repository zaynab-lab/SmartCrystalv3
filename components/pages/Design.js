import ServiceDescription from "@/components/section/ServiceDescription";
import PhoneLayout from "../molecule/PhoneLayout";
import Figma from "@/public/img/svg/designApps/Figma";
import Photoshop from "@/public/img/svg/designApps/Photoshop";
import Maya from "@/public/img/svg/designApps/Maya";
import AdobeIllistrator from "@/public/img/svg/designApps/AdobeIllistrator";
import Blender from "@/public/img/svg/Blender";
import InDesign from "@/public/img/svg/designApps/InDesign";
import Premier from "@/public/img/svg/designApps/Premier";
import AfterEffects from "@/public/img/svg/designApps/AfterEffects";
import YourCustomers from "@/public/img/text/YourCustomers";
import DesignIllustrator from "@/public/img/text/DesignIllustrator";
import DesignHive from "@/public/img/svg/DesignHive";
import FeatureImg from "../molecule/FeatureImg";
import CostEstimatorBlock from "../molecule/CostEstimatorBlock";

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

export const apps = [
  <Figma />,
  <Photoshop />,
  <AdobeIllistrator />,
  <Maya />,
  <Blender />,
  <InDesign />,
  <Premier />,
  <AfterEffects />
];

export default function Design() {
  return (
    <>
      <ServiceDescription
        text={text}
        img={"DesignImg"}
        title={"Design & Montage"}
      />
      <div className="designHive">
        <DesignHive />
      </div>
      <div className="boom">
        <YourCustomers />
        <DesignIllustrator />
      </div>
      <CostEstimatorBlock block="design" />
      <FeatureImg fTitle="Brainstorming" imgLink="GraphicDesignproject" />

      <PhoneLayout statusbarItems={apps} phoneItems={designServices} />
      <style jsx>{`
        .designHive {
          max-width: 19rem;
          margin: auto;
        }

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

const text =
  "We will help you build your brand through our brand marketing services. We work closely with you to understand your needs, goals, and vision so we can create logos, business cards, websites, and everything you need to build a professional image that will help you achieve success now and in the future.";
