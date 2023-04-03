import { partnerItems } from "../constants";

const PartnerCard = ({ logo, name }) => {
  return (
    <div className="partner-card flex justify-center items-center py-[20px] px-[24px]">
      <img
        className="object-contain"
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
    <section className="partner-section relative z-[1]">
      <div className="container">
        <h2 className="font-bakbakOne text-[44px] uppercase leading-[56px] mb-[60px] text-center">
          <span className="text-accent">BINABOX</span> pARTNER
        </h2>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {partnerItems.map((item) => (
            <PartnerCard key={item.id} logo={item.logo} name={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
