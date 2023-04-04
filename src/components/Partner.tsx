import { motion } from "framer-motion";
import { partnerItems } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, zoomIn } from "../utils/motion";

const PartnerCard = ({
  logo,
  name,
  index,
}: {
  logo: string;
  name: string;
  index: number;
}) => {
  return (
    <motion.div
      variants={zoomIn(index * 0.1, 0.5)}
      className="partner-card flex justify-center items-center sm:py-[20px] sm:px-[24px] py-[10px] px-[12px]"
    >
      <img
        className="object-contain sm:w-[162px] sm:h-[60px] w-[120px] h-[45px]"
        src={logo}
        alt={name}
        width="162"
        height="60"
        loading="lazy"
      />
    </motion.div>
  );
};

const Partner = () => {
  return (
    <>
      <motion.h2
        variants={textVariant(0)}
        className="font-bakbakOne text-[44px] uppercase leading-[56px] sm:mb-[60px] mb-[30px] text-center"
      >
        <span className="text-accent">BINABOX</span> pARTNER
      </motion.h2>
      <div className="flex flex-wrap justify-center sm:gap-[30px] gap-[16px] relative z-[1]">
        {partnerItems.map((item, index) => (
          <PartnerCard
            key={item.id}
            logo={item.logo}
            name={item.name}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(
  Partner,
  "partner",
  "partner-section relative z-[1]"
);
