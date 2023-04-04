import { howToItems } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { howToCardOptions } from "../utils/titlt";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";

const HowToCard = ({
  index,
  text,
  icon,
}: {
  index: number;
  text: string;
  icon: string;
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-[100%] max-w-[330px]"
    >
      <Tilt
        options={howToCardOptions}
        className="triangle-hover bg-secondary w-[100%] h-[210px] py-[30px] px-[20px] flex flex-col items-center justify-center"
      >
        <div
          className="w-[92px] h-[72px] object-contain mb-[20px] bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${icon})` }}
        ></div>
        <h4 className="text-accent font-bakbakOne text-[22px] leading-[30px]">
          STEP {index + 1}
        </h4>
        <h3 className="font-bakbakOne text-fontColor text-[24px] leading-[32px] text-center capitalize">
          {text}
        </h3>
      </Tilt>
    </motion.div>
  );
};

const HowTo = () => {
  return (
    <>
      <motion.h2
        variants={textVariant(0)}
        className="font-bakbakOne text-[44px] uppercase leading-[56px] sm:mb-[60px] mb-[30px] text-center"
      >
        HOW TO <span className="text-accent">NFTALIEN</span> WORK
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-[30px]">
        {howToItems.map((item, index) => (
          <HowToCard
            key={item.id}
            text={item.text}
            icon={item.icon}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(HowTo, "howto", "mb-[60px]");
