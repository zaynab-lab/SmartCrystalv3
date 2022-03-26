import ServicesHive from "../molecule/ServicesHive";
import ServiceDescription from "../section/ServiceDescription";

const developmentservices = [
  "Company Profile",
  "Landing Page",
  "Product Marketing Page",
  "Brand Story",
  "E-commerce",
  "Artical Blog",
  "Digital Gallery",
  "Digital Menu",
  "Digital Catalog",
  "ERP System",
  "CMS System",
  "CRM System",
  "Accounting System",
  "Education App",
  "Medical App",
  "Process Automation"
];

export default function Development() {
  return (
    <>
      <ServiceDescription text={text} img={"devImg"} title={"Development"} />
      <ServicesHive
        items={[
          "Web Development",
          "System Development",
          "Application Development",
          "Artificial Intelligence"
        ]}
      />
    </>
  );
}
const text =
  "We offer a full-cycle web and mobile application design, integration, and development services. We take care of all the steps of the process, from ideation to execution to ongoing support. With us, you get the functionality you need for today and the capability for future growth.";
