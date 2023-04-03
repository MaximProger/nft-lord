import { storyItems } from "../constants";
import Button from "./Button";

const StoryCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="story-card triangle-hover h-[252px] max-w-[330px] bg-secondary flex flex-col items-center justify-end text-center p-[30px]">
      <h4
        className="story-card__title mb-[24px] font-bakbakOne text-[24px] leading-[32px]"
        data-story-number={index + 1}
      >
        {title}
      </h4>
      <p className="max-w-[270px] text-tertiary text-[18px] leading-[28px]">
        {description}
      </p>
    </div>
  );
};

const Story = () => {
  return (
    <section className="story sm:mb-[131px] mb-[60px] relative" id="story">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between story__inner relative z-[1]">
          <div className="lg:max-w-[635px] max-w-none lg:pt-[65px] pt-0 lg:mb-0 mb-[40px] lg:block flex flex-col items-center lg:text-left text-center">
            <h2 className="font-bakbakOne text-[44px] uppercase leading-[56px] mb-[16px]">
              tHE STORY
            </h2>
            <p className="text-tertiary text-[18px] leading-[28px] mb-[40px]">
              Our collection's priority is to reward NFT holders by developing
              utilities they can use in their current everyday life. Not in a
              hypothetical future.
            </p>
            <div className="flex flex-wrap sm:justify-start justify-center gap-[60px] mb-[40px]">
              <div className="flex flex-col items-center justify-center font-bakbakOne text-[20px] leading-[28px]">
                <p className="mb-[8px] text-tertiary">Total Iteam</p>
                <p className="text-[56px] leading-[68px] font-bakbakOne text-shadow">
                  2240+
                </p>
              </div>
              <div className="flex flex-col items-center justify-center font-bakbakOne text-[20px] leading-[28px]">
                <p className="mb-[8px] text-tertiary">Profiles whitelisted</p>
                <p className="text-[56px] leading-[68px] font-bakbakOne text-shadow">
                  1000+
                </p>
              </div>
            </div>
            <Button classes="btn--outline" text="READ MORE" />
          </div>
          <div className="flex flex-wrap justify-center gap-[30px] lg:max-w-[691px] max-w-none">
            {storyItems.map((item, index) => (
              <StoryCard
                key={item.id}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
