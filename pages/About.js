import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/section/About";
import Header from "@/components/section/Header";
import Thank from "@/components/section/Thank";

export default function About() {
  return (
    <>
      <PageLayout pageName="About">
        <Header
          title="About us"
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

        <div className="about">
          <AboutSection />
        </div>
      </PageLayout>

      <style jsx>{`
        .about {
          max-width: 50rem;
          margin: auto;
          padding: 2rem;
        }
      `}</style>
    </>
  );
}
