import Admob from "@/public/img/svg/businessApps/Admob";
import Ads from "@/public/img/svg/businessApps/Ads";
import Adsense from "@/public/img/svg/businessApps/Adsense";
import Analytics from "@/public/img/svg/businessApps/Analytics";
import GoogleDrive from "@/public/img/svg/businessApps/GoogleDrive";
import Marketing from "@/public/img/svg/businessApps/Marketing";
import MyBusiness from "@/public/img/svg/businessApps/MyBusiness";
import Optimize from "@/public/img/svg/businessApps/Optimize";
import PowerBI from "@/public/img/svg/businessApps/PowerBI";
import TagManager from "@/public/img/svg/businessApps/TagManager";
import PhoneLayout from "../molecule/PhoneLayout";
import ServicesHive from "../molecule/ServicesHive";
import ServiceDescription from "../section/ServiceDescription";

export const businessServices = [
  "Branding System Guideline",
  "Digital Marketing Consultancy",
  "Digital Marketing Campiagn",
  "Digital Marketing Optimization",
  "Digital Marketing Strategies ",
  "Engagement, Monitoring & Reporting",
  "SWOT Analysis",
  "Community Management",
  "Content Generation",
  "Supporting Advertising Strategies & Execution",
  "Email Marketing",
  "Content & Video Marketing",
  "Market Research",
  "Business Plan & Business Model"
];

const apps = [
  <PowerBI />,
  <GoogleDrive />,
  <Analytics />,
  <Marketing />,
  <Ads />,
  <Adsense />,
  <Admob />,
  <Optimize />,
  <TagManager />,
  <MyBusiness />
];
export default function Business() {
  return (
    <>
      <ServiceDescription
        text={text}
        img={"businessImg"}
        title={"Business & Marketing"}
      />
      <ServicesHive
        items={["Digital Marketing", "Business Management", "Data Analysis"]}
      />
      <PhoneLayout
        sectionTitle="Used Technology"
        statusbarItems={apps}
        phoneItems={businessServices}
      />
    </>
  );
}
const text =
  "We develop and execute effective digital marketing strategies. We help you engage and convert your target audience through SEO, content, Google Ads, and social media marketing. With our experience, we design conversion-focused marketing campaigns to help our clients grow their businesses!";
