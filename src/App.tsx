import { Navbar, Hero, HowTo, Collection, Story, Partner } from "./components";

function App() {
  return (
    <div className="page font-poppins sm:text-[20px] sm:leading-[30px] text-[16px] leading-[22px] text-fontColor bg-primary lg:pb-[200px] sm:pb-[100px] pb-[60px] w-full overflow-hidden">
      <Navbar />
      <Hero />
      <HowTo />
      <Collection />
      <Story />
      <Partner />
    </div>
  );
}

export default App;
