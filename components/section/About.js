import TextBox from "@/components/atom/TextBox";
import { styles } from "@/public/js/styles";

const strategies = [
  {
    title: "About Company",
    content:
      "Smart crystal is a company that care about the latest and newest technologies in digital area; we help businesses and industries to improve their businesses using information technology assets such branding, websites, landing pages, apps and systems.. We aim to help businesses to include newest technologies in systems; using Machin Learning, Data analysis, IOT, AI, and Blockchain."
  },
  {
    title: "Mission",
    content:
      "Solutions development, leverage from most advanced information technologies for our customers."
  },
  {
    title: "Motto",
    content: "Be smarter with digital solutions"
  },

  {
    title: "Vision statement",
    content:
      "To provide latest technologies and innovations to every business, who wants to have radical solutions in their business."
  },

  {
    title: "Values",
    content:
      "Creativity, Problem solving, honesty, loyalty, innovation, always learn new things, and aim to be better."
  }
];

export default function About() {
  return (
    <>
      {strategies.map((strategy, i) => (
        <div key={i}>
          <div className="aboutTitle">{strategy.title}</div>
          <div>
            <TextBox text={strategy.content} />
          </div>
        </div>
      ))}

      <style jsx>{`
        .aboutTitle {
          font-size: 1.4rem;
          font-weight: bold;
          padding: 1rem 0 0.3rem 0rem;
          color: ${styles.primaryColor};
        }
      `}</style>
    </>
  );
}
