import { collectionItems } from "../constants";

const CollectionCard = ({ image, title }) => {
  return (
    <div className="p-[20px] bg-secondary triangle-hover">
      <img
        className="object-contain block max-w-[100%] h-auto mb-[13px]"
        src={image}
        alt={title}
        width={290}
        height={297}
        loading="lazy"
      />
      <div className="font-bakbakOne text-[20px] leading-[28px] uppercase">
        {title}
      </div>
    </div>
  );
};

const Collection = () => {
  return (
    <section className="mb-[139px]">
      <div className="container">
        <h2 className="font-bakbakOne text-[44px] uppercase leading-[56px] mb-[60px]">
          HOT COLLECTION
        </h2>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {collectionItems.map((item) => (
            <CollectionCard {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
