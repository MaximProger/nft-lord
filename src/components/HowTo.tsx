import { howToItems } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const tiltOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const textVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 500,
    },
  },
};

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
    <Tilt
      options={tiltOptions}
      className="triangle-hover bg-secondary sm:min-w-[330px] w-[100%] max-w-[330px] h-[210px] py-[30px] px-[20px]"
    >
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="flex flex-col items-center justify-center "
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
      </motion.div>
    </Tilt>
  );
};

const HowTo = () => {
  return (
    <section className="mb-[60px]" id="howto">
      <div className="container">
        <motion.div variants={textVariants}>
          <h2 className="font-bakbakOne text-[44px] uppercase leading-[56px] sm:mb-[60px] mb-[30px] text-center">
            HOW TO <span className="text-accent">NFTALIEN</span> WORK
          </h2>
        </motion.div>

        <motion.div />
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
      </div>
    </section>
  );
};

export default HowTo;
