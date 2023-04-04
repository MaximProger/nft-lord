import { collectionItems } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const CollectionCard = ({
  image,
  title,
  index,
}: {
  image: string;
  title: string;
  index: number;
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="p-[20px] bg-secondary triangle-hover"
    >
      <img
        className="object-contain block max-w-[100%] h-auto mb-[13px]"
        src={image}
        alt={title}
        width={290}
        height={297}
        loading="lazy"
      />
      <h4 className="font-bakbakOne text-fontColor text-[20px] leading-[28px] uppercase">
        {title}
      </h4>
    </motion.div>
  );
};

const Collection = () => {
  return (
    <section className="sm:mb-[139px] mb-[60px] relative z-[2]" id="collection">
      <div className="container">
        <h2 className="font-bakbakOne text-[44px] uppercase leading-[56px] sm:mb-[60px] mb-[30px] lg:text-left text-center">
          HOT COLLECTION
        </h2>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {collectionItems.map((item, index) => (
            <CollectionCard key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
