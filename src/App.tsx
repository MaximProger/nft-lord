import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, HowTo, Collection, Story, Partner } from "./components";
import { ThemeContextType } from "./models/models";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState<ThemeContextType>(
    localStorage.getItem("themeMode") || "dark"
  );

  const changeTheme = () => {
    const mode = theme === "light" ? "dark" : "light";
    localStorage.setItem("themeMode", mode);
    setTheme(mode);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme === "dark" ? "dark" : "light"}>
        <div
          className={
            "page font-poppins sm:text-[20px] sm:leading-[30px] text-[16px] leading-[22px] text-primary dark:text-fontColor  bg-primaryLight dark:bg-primary  lg:pb-[200px] sm:pb-[100px] pb-[60px] w-full overflow-hidden"
          }
        >
          <BrowserRouter>
            <Navbar onChangeTheme={changeTheme} />
            <Hero />
            <HowTo />
            <Collection />
            <Story />
            <Partner />
          </BrowserRouter>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
