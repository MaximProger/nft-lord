import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="hero-section pt-[108px] sm:min-h-[940px] min-h-[300px] flex sm:mb-[60px] mb-[30px]"
      id="home"
    >
      <div className="container">
        <div className="flex flex-col justify-end items-center h-[100%] sm:pb-[83px] pb-[40px] text-center">
          <h1 className="text-fontColor font-bakbakOne sm:text-[72px] text-[56px] sm:leading-[80px] leading-[64px] mb-[20px]">
            EXPLORE NFT COLLECTION
          </h1>
          <p className="mb-[48px]">
            A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
            Unique,
            <br />
            metaverse-ready, and designed to benefit their holders.
          </p>
          <div className="flex flex-wrap justify-center gap-[24px]">
            <Button classes="btn--green" text="connect wallet" />
            <Button classes="btn--outline" text="whitelist now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
