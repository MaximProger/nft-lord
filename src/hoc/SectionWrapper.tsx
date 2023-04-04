import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component: React.FC, idName: string, classes: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        id={idName}
        className={classes}
      >
        <div className="container">
          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
