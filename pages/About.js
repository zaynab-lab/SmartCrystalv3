import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/section/About";
import Header from "@/components/section/Header";
import Thank from "@/components/section/Thank";

export default function About() {
  return (
    <>
      <PageLayout pageName="About">
        <Header
          title={
            <>
              <div>about</div>
              <div>SMART CRYSTAL</div>
            </>
          }
          titleDes="About the company, mission, motto, vision statement, values."
        />
        <Thank
          text={
            <div>
              <div>You are great</div>
              <div>You want to know more about us</div>
            </div>
          }
        />

        <div className="aboutSection">
          <div className="aboutContent">
            <AboutSection />
          </div>
        </div>
      </PageLayout>

      <style jsx>{`
        .aboutSection {
          padding: 2rem;
          overflow: hidden;
          position: relative;
          background-color: #ffffff;
          background-color: #ffffff;
          background-image: radial-gradient(#0a5af988 1.1px, transparent 1.1px),
            radial-gradient(#0a5af988 1.1px, #ffffff 1.1px);
          background-size: 44px 44px;
          background-position: 0 0, 22px 22px;
        }
        .aboutContent {
          max-width: 50rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
