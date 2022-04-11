import FlatDarkLogo from "@/public/img/svg/FlatDarkLogo";
import UAEMap from "@/public/img/svg/UAEMap";
import SocialMedia from "@/components/section/SocialMedia";
import { styles } from "@/public/js/styles";
import { FaPhone, FaUserAlt } from "react-icons/fa";

const team = [
  {
    name: "Zuhair Al Khalsan",
    role: "Founder",
    mail: "zuhair@scrystalit.com",
    phone: "+971 5510 22 100"
  },
  {
    name: "Abdallah Mobarak",
    role: "Co-Founder & CEO",
    mail: "abdallah@scrystalit.com",
    phone: "+961 7009 75 33"
  }
];

export default function Footer() {
  return (
    <>
      <SocialMedia />
      <div className="footer">
        <div className="footerContent">
          <div className="footerLogo">
            <FlatDarkLogo />
          </div>
          <div className="footerInfo">
            <div className="members">
              {team.map((member, i) => (
                <div key={i}>
                  <div className="memberName">
                    <span className="memberIcon">
                      <FaUserAlt />
                    </span>
                    {member.name}
                  </div>
                  <div className="memberRole">{member.role}</div>
                  <div className="memberDesc">{member.mail}</div>
                  <div className="memberDesc">
                    {member.phone && `ph : ${member.phone}`}
                  </div>
                </div>
              ))}
            </div>
            <div className="map">
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
          overflow: hidden;
        }
        .footerContent {
          padding: 1rem;
          padding-top: 2rem;
          max-width: 70rem;
          margin: auto;
        }
        .footerLogo {
          width: 18rem;
        }
        .footerInfo {
          padding: 2rem 1rem;
          ${styles.flex};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          flex-wrap: wrap;
          gap: 1rem 5rem;
          max-width: 50rem;
          margin: auto;
        }
        .members {
          ${styles.flex};
          ${styles.flexColumn};
          gap: 2rem;
        }
        .memberName {
          font-size: 1.4rem;
          font-weight: bold;
          color: ${styles.primaryColor};
          ${styles.flex};
          gap: 1rem;
        }
        .memberIcon {
          color: ${styles.primaryColor};
        }
        .memberDesc {
          padding-left: 2.6rem;
          font-size: 0.9rem;
        }
        .memberRole {
          padding-left: 2.6rem;
          padding-bottom: 0.3rem;
          font-size: 1.1rem;
          color: ${styles.grey};
        }

        .map {
          max-width: 30rem;
          margin: auto;
        }
        .copyright {
          padding: 1rem;
          text-align: center;
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
}
