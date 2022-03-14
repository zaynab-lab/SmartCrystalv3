import PageLayout from "@/components/PageLayout";
import Header from "@/components/section/Header";
import { useRouter } from "next/router";

export default function Service() {
  const router = useRouter();
  const { service } = router.query;
  return (
    <>
      <PageLayout pageName={service}>
        <Header title={service} />
      </PageLayout>
    </>
  );
}
