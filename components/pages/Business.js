import BuildingStage from "@/public/img/text/BuildingStage";
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
    </>
  );
}
const text =
  "We develop and execute effective digital marketing strategies. We help you engage and convert your target audience through SEO, content, Google Ads, and social media marketing. With our experience, we design conversion-focused marketing campaigns to help our clients grow their businesses!";
