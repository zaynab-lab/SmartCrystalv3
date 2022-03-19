import { styles } from "@/public/js/styles";
import HomeHeader from "@/components/section/HomeHeader";
import Technology from "@/components/section/Technology";
import Phone from "@/components/section/Phone";
import Madeit from "@/components/section/Madeit";
import Process from "@/components/section/Process";
import ServicesSection from "@/components/section/ServicesSection";
import PageLayout from "@/components/PageLayout";

export default function IndexPage() {
  return (
    <>
      <PageLayout pageName="">
        <div className="pageContent">
          <HomeHeader />
          <Technology />
          <Phone />
          <Madeit />
          <Process />
          <ServicesSection />
        </div>
      </PageLayout>
      <style jsx>{`
        .page {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          ${styles.flexAligncenter}
        }
        .pageContent {
          overflow: auto;
        }
        .btnContainer {
          padding: 1rem;
          ${styles.flexBothcenter}
        }
      `}</style>
    </>
  );
}
