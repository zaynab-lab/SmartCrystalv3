import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/section/About";

export default function About() {
  return (
    <>
      <PageLayout pageName="About">
        <div className="about">
          <AboutSection />
        </div>
      </PageLayout>

      <style jsx>{`
        .about {
          max-width: 50rem;
          margin: auto;
          padding: 2rem;
          padding-top: 4rem;
        }
      `}</style>
    </>
  );
}
