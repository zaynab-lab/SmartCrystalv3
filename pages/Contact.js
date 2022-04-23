import PageLayout from "@/components/PageLayout";
import Header from "@/components/section/Header";
import CTA from "@/components/atom/CTA";
import Thank from "@/components/section/Thank";
import CostEstimation from "@/components/atom/CostEstimation";

export default function Contact() {
  return (
    <>
      <PageLayout pageName="Contact">
        <Header
          title="Contact Us"
          titleDes="Don't be late to build that important relationship."
        />
        <Thank
          text={
            <div>
              <div>Let's get in touch</div>
            </div>
          }
        />
        <CostEstimation />
        <CTA />
      </PageLayout>
    </>
  );
}
