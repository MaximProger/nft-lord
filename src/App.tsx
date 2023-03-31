import { Navbar, Hero, HowTo, Collection, Story, Partner } from "./components";

function App() {
  return (
    <div className="page">
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
