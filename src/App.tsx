import { Navbar, Hero, HowTo, Collection, Story, Partner } from "./components";

function App() {
  return (
    <div className="page font-poppins text-[20px] leading-[30px] text-fontColor bg-primary">
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
