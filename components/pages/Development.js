import ServicesHive from "../molecule/ServicesHive";
import ServiceDescription from "../section/ServiceDescription";
import PhoneLayout from "@/components/molecule/PhoneLayout";
import Reactjs from "@/public/img/apps/Reactjs";
import Nextjs from "@/public/img/apps/Nextjs";
import Flutter from "@/public/img/apps/Flutter";
import Vue from "@/public/img/apps/Vue";
import Angular from "@/public/img/apps/Angular";
import GraphQl from "@/public/img/apps/GraphQl";
import Neo4j from "@/public/img/apps/Neo4j";
import Nodejs from "@/public/img/apps/Nodejs";
import MongoDB from "@/public/img/apps/MongoDB";
import Boom from "@/public/img/text/Boom";
import YourCustomers from "@/public/img/text/YourCustomers";
import FeatureImg from "../molecule/FeatureImg";
import CostEstimation from "../atom/CostEstimation";
import CostEstimatorBlock from "../molecule/CostEstimatorBlock";

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

export const apps = [
  <Reactjs />,
  <Nextjs />,
  <Flutter />,
  <Vue />,
  <Angular />,
  <MongoDB />,
  <Nodejs />,
  <GraphQl />,
  <Neo4j />
];

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
      <div className="boom">
        <YourCustomers />
        <Boom />
      </div>
      <CostEstimatorBlock block={"development"} />
      <FeatureImg fTitle="Team Working" imgLink="DevelopmentGrop" />
      <PhoneLayout statusbarItems={apps} phoneItems={developmentservices} />
      <CostEstimation />

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
const text =
  "We offer a full-cycle web and mobile application design, integration, and development services. We take care of all the steps of the process, from ideation to execution to ongoing support. With us, you get the functionality you need for today and the capability for future growth.";
