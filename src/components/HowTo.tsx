import { howToItems } from "../constants";

const HowToCard = ({ index, text, icon }) => {
  return (
    <div className="triangle-hover bg-secondary h-[210px] py-[30px] px-[20px] flex flex-col flex-1 items-center justify-center cursor-pointer">
      <div
        className="w-[92px] h-[72px] object-contain mb-[20px] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${icon})` }}
      ></div>
      <h4 className="text-accent font-bakbakOne text-[22px] leading-[30px]">
        STEP {index}
      </h4>
      <h3 className="font-bakbakOne text-[24px] leading-[32px] text-center capitalize">
        {text}
      </h3>
    </div>
  );
};

const HowTo = () => {
  return (
    <section className="mb-[60px]">
      <div className="container">
        <h2 className="font-bakbakOne text-[44px] uppercase leading-[56px] mb-[60px] text-center">
          HOW TO <span className="text-accent">NFTALIEN</span> WORK
        </h2>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {howToItems.map((item, index) => (
            <HowToCard key={item.id} text={item.text} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowTo;
