import ServicesHive from "../molecule/ServicesHive";
import ServiceDescription from "../section/ServiceDescription";
import PhoneLayout from "@/components/molecule/PhoneLayout";
import Reactjs from "@/public/img/apps/Reactjs";
import Nextjs from "@/public/img/apps/Nextjs";

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

const apps = [<Reactjs />, <Nextjs />];

export default function Development() {
  return (
    <>
      <ServiceDescription
        text={text}
        img={"devImg"}
        title={"Development & Technology"}
      />
      <ServicesHive
        items={[
          "Web Development",
          "System Development",
          "Application Development",
          "Artificial Intelligence"
        ]}
      />

      <PhoneLayout
        sectionTitle="Used Technology"
        items={apps.map((app, i) => (
          <div key={i}>{app}</div>
        ))}
      />
    </>
  );
}
const text =
  "We offer a full-cycle web and mobile application design, integration, and development services. We take care of all the steps of the process, from ideation to execution to ongoing support. With us, you get the functionality you need for today and the capability for future growth.";
