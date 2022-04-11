import PhotographyLogo from "../public/img/svg/PhotographyLogo";
import PageLayout from "@/components/PageLayout";

export default function Photography() {
  return (
    <>
      <PageLayout pageName="Photography">
        <div className="photographyContainer">
          <div className="photoLogo">
            <PhotographyLogo />
          </div>
          <div>
            <div>Portrait & Retouching</div>
            <div>Watches Photography</div>
            <div>Still Life Photography</div>
            <div>Products Photography</div>
            <div>Jewellery Photography</div>

            <div>City Scape Photography</div>
          </div>
        </div>
      </PageLayout>{" "}
      <style jsx>{`
        .photographyContainer {
          padding-top: 3rem;
          max-width: 70rem;
          margin: auto;
        }
        .photoLogo {
          max-width: 30rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
