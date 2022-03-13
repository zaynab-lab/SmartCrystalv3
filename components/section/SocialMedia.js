import Telegram from "@/public/img/social/Telegram";
import WhatsApp from "@/public/img/social/WhatsApp";
import Instagram from "@/public/img/social/Instagram";
import Facebook from "@/public/img/social/Facebook";
import Youtube from "@/public/img/social/Youtube";
import Tiktok from "@/public/img/social/Tiktok";
import { styles } from "@/public/js/styles";

export const social = [
  {
    logo: <Telegram />,
    name: "Telegram",
    link: "https://telegram.me/SmartCrystal"
  },
  { logo: <WhatsApp />, name: "Whatsapp", link: "https://wa.me/+96170097533" },
  {
    logo: <Instagram />,
    name: "Instagram",
    link: "instagram://user?username=ama.gamix"
  },
  { logo: <Facebook />, name: "Facebook", link: "" },
  { logo: <Youtube />, name: "Youtube", link: "" },
  { logo: <Tiktok />, name: "Tiktok", link: "" }
];

export default function SocialMedia() {
  return (
    <>
      <div className="socialSection">
        <div className="socialContainer">
          <div className="socialContent">
            {social.map((platform, i) => (
              <div key={i} className="icon">
                {platform.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .socialSection {
          ${styles.borderGradient};
          padding: 0.15rem 0rem;
        }
        .socialContainer {
          background: white;
        }
        .socialContent {
          padding: 0.6rem 1rem;
          max-width: 70rem;
          ${styles.flex};
          gap: calc(1vw + 1rem);
          margin: auto;
        }
        .icon {
          width: calc(1vw + 2rem);
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
