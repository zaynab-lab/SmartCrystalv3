import PageLayout from "@/components/PageLayout";
import Header from "@/components/section/Header";
import Thank from "@/components/section/Thank";
import { useRouter } from "next/router";
import ServicesRouter from "@/components/pages/ServicesRouter";

export default function Service() {
  const router = useRouter();
  const { service } = router.query;
  return (
    <>
      <PageLayout pageName={service}>
        <Header title={service} />
        <Thank
          text={
            <div>
              <div>
                {/* You achive the best place that will show you how {service}{" "}
                works!! */}
                Wooow {service}!!!
              </div>
              <div>Discover our {service} service!!!</div>
            </div>
          }
        />
        <ServicesRouter service={service} />
      </PageLayout>
    </>
  );
}
