import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero-section pt-[108px] min-h-[940px] flex mb-[60px]">
      <div className="container">
        <div className="flex flex-col justify-end items-center h-[100%] pb-[83px] text-center">
          <h1 className="text-fontColor font-bakbakOne text-[72px] leading-[80px] mb-[20px]">
            EXPLORE NFT COLLECTION
          </h1>
          <p className="mb-[48px]">
            A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
            Unique,
            <br />
            metaverse-ready, and designed to benefit their holders.
          </p>
          <div className="flex justify-center gap-[24px]">
            <Button classes="btn--green" text="connect wallet" />
            <Button classes="btn--outline" text="whitelist now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
