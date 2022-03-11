import FlatDarkLogo from "@/public/img/svg/FlatDarkLogo";
import UAEMap from "@/public/img/svg/UAEMap";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerContent">
          <div className="footerLogo">
            <FlatDarkLogo />
          </div>
          <div className="footerInfo">
            <div>Discription</div>
            <div>
              <UAEMap />
            </div>
          </div>
          <div className="copyright">
            © Copyright 2020 - 2022, SMART CRYSTAL. All rights reserved.
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          width: 100vw;
        }
        .footerContent {
          padding: 2rem;
          max-width: 70rem;
          margin: auto;
        }
        .footerLogo {
          width: 20rem;
        }
        .footerInfo {
        }
        .copyright {
          padding: 1rem;
          text-align: center;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
