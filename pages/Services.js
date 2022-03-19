import Header from "@/components/section/Header";
import Thank from "@/components/section/Thank";
import PageLayout from "@/components/PageLayout";
import ServicesHive from "@/components/molecule/ServicesHive";
import { styles } from "@/public/js/styles";

export default function Services() {
  return (
    <>
      <PageLayout pageName="Services">
        <Header
          title={
            <div>
              our <div> Digital Services</div>
            </div>
          }
          titleDes="The best digital solutions for you and for your business."
        />
        <Thank
          text={
            <div>
              <div>You made it, You entered our world of services</div>
              <div>Go on to discover them</div>
            </div>
          }
        />
        <div className="servicesSection">
          <div className="servicesContent">
            <div className="servicesTitle">Services</div>
            <ServicesHive />
          </div>
        </div>
      </PageLayout>

      <style jsx>{`
        .servicesSection {
          padding: 2rem;
        }
        .servicesContent {
          max-width: 70rem;
          margin: auto;
        }

        .servicesTitle {
          padding: 0.6rem 0rem;
          font-size: 2rem;
          font-weight: bold;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
}
