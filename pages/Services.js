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
import Design from "@/public/img/svg/Design";
import ServicesHive from "@/components/molecule/ServicesHive";
import PhotographyLogo from "@/public/img/svg/PhotographyLogo";

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
            <div className="section">
              <div className="servicesTitle">Development & Technology</div>
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
            </div>
            <div className="section">
              {/* <div className="servicesTitle">Photography</div> */}
              <div className="photoLogo">
                <PhotographyLogo />
              </div>
              <div>
                <Simplebtn
                  content="Photography page"
                  link="/Photography"
                  margin={true}
                />
              </div>
            </div>
            <div className="section">
              <div className="servicesTitle">Design & Montage</div>

              <div className="ServiceSection">
                <div>
                  {designServices.map((service, i) => (
                    <li key={i} className="serviceslistItem">
                      {service}
                    </li>
                  ))}
                  <Simplebtn content="Design page" link="/Design" />
                </div>
                <div className="horizantalHive">
                  <Design />
                </div>
              </div>
            </div>
            <div className="section">
              <div className="servicesTitle">Business & Marketing</div>

              <div className="ServiceSection">
                <div>
                  {businessServices.map((service, i) => (
                    <li key={i} className="serviceslistItem">
                      {service}
                    </li>
                  ))}
                  <Simplebtn content="Business page" link="/Business" />
                </div>
                <div className="horizantalHive">
                  <BusinessH />
                </div>
              </div>
              <div className="phoneBusinessHive">
                <ServicesHive
                  items={[
                    "Digital Marketing",
                    "Business Management",
                    "Data Analysis"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <ServicesSection />
      </PageLayout>

      <style jsx>{`
        .servicesContent {
          max-width: 70rem;
          margin: auto;
        }
        .servicesTitle {
          padding: 0.6rem 0rem;
          font-size: 1.8rem;
          font-weight: bold;
          ${styles.brandGradient};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section {
          padding: 1rem 2rem;
        }
        .section:nth-child(2) {
          background: #f4f9ff;
        }
        .section:nth-child(3) {
          background: #f4f9ff;
        }

        .developmentSection {
          max-width: 40rem;
          margin: auto;
        }
        .ServiceSection {
          ${styles.flex};
          ${styles.justifyBetween}
        }
        .horizantalHive {
          width: 13rem;
        }
        .serviceslistItem {
          padding: 0.1rem 0;
        }
        .phoneBusinessHive {
          display: none;
        }
        .photoLogo {
          max-width: 30rem;
          margin: auto;
        }

        @media only screen and (max-width: 600px) {
          .horizantalHive {
            display: none;
          }
          .phoneBusinessHive {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
