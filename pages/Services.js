import Header from "@/components/section/Header";
import Thank from "@/components/section/Thank";
import PageLayout from "@/components/PageLayout";
import { styles } from "@/public/js/styles";
import ServicesSection from "@/components/section/ServicesSection";
import Development from "@/public/img/svg/Development";
import Simplebtn from "@/components/atom/Simplebtn";
import { designServices } from "@/components/pages/Design";
import { businessServices } from "@/components/pages/Business";
import BusinessH from "@/public/img/svg/BusinessH";

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
            <div className="servicesTitle">Development</div>
            <div className="developmentSection">
              <Development />
            </div>
            <div>
              <Simplebtn
                content="Development page"
                link="/Development"
                margin={true}
              />
            </div>
            <div className="servicesTitle">Design & Montage</div>
            <div>
              <div>
                {designServices.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </div>
              <div></div>
            </div>
            <div>
              <Simplebtn content="Design page" link="/Design" />
            </div>

            <div className="servicesTitle">Business & Marketing</div>
            <div>
              <div>
                {businessServices.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </div>
              <div>
                <BusinessH />
              </div>
            </div>
            <div>
              <Simplebtn content="Business page" link="/Business" />
            </div>
          </div>
        </div>
        <ServicesSection />
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
        .developmentSection {
          max-width: 40rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
