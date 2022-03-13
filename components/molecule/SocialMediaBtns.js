import Button from "@/components/atom/Button";
import { styles } from "@/public/js/styles";
import { social } from "@/components/section/SocialMedia";

export default function SocialMediaBtns() {
  return (
    <>
      <div className="btnContainer">
        {social.map((item, i) => (
          <a key={i} href={item.link}>
            <Button logo={item.logo} content={item.name} />
          </a>
        ))}
      </div>
      <style jsx>{`
        .btnContainer {
          ${styles.flex}
          ${styles.flexColumn};
          ${styles.flexAligncenter}
          gap: 0.8rem;
        }
      `}</style>
    </>
  );
}
