import WebDev from "./WebDev";

export default function ServiceRouter({ service }) {
  return (
    <>
      <div className="servicesRouter">
        {service === "Web Development" && <WebDev />}
        {service === "System Development" && <div>HELLO</div>}
        {service === "Application Development" && <div>hey</div>}
      </div>
      <style jsx>{`
        .servicesRouter {
          padding: 2rem;
          max-width: 70rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
