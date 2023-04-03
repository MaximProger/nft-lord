import { partnerItems } from "../constants";

const PartnerCard = ({ logo, name }) => {
  return (
    <div className="partner-card flex justify-center items-center sm:py-[20px] sm:px-[24px] py-[10px] px-[12px]">
      <img
        className="object-contain sm:w-[162px] sm:h-[60px] w-[120px] h-[45px]"
        src={logo}
        alt={name}
        width="162"
        height="60"
        loading="lazy"
      />
    </div>
  );
};

const Partner = () => {
  return (
    <section className="partner-section relative z-[1]" id="partner">
      <div className="container">
        <h2 className="font-bakbakOne text-[44px] uppercase leading-[56px] sm:mb-[60px] mb-[30px] text-center">
          <span className="text-accent">BINABOX</span> pARTNER
        </h2>
        <div className="flex flex-wrap justify-center sm:gap-[30px] gap-[16px] relative z-[1]">
          {partnerItems.map((item, index) => (
            <PartnerCard key={item.id} logo={item.logo} name={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
