import { useState } from "react";
import { navLinks } from "../constants";
import Button from "./Button";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed z-10 top-0 left-0 right-0 bg-primary pt-[30px] pb-[30px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="/" className="logo">
            <img src={logo} alt="NFTALIEN" width="196" height="42" />
          </a>
          <nav className="lg:block hidden">
            <ul className="flex gap-[32px]">
              {navLinks.map(({ id, title }) => (
                <li key={id}>
                  <a
                    className="text-fontColor hover:text-accent font-bakbakOne uppercase text-base transition-colors easy-linear"
                    href={`#${id}`}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-[20px]">
            <button
              type="button"
              className="theme-btn rounded-full w-[48px] h-[48px] bg-secondary flex items-center justify-center transition ease-linear border-[1px] border-solid border-transparent  hover:border-accent"
            ></button>
            <button
              type="button"
              className={`menu-btn ${
                toggle && "menu-btn--close"
              } rounded-xl w-[48px] h-[48px] bg-secondary lg:hidden flex items-center justify-center transition ease-linear border-[1px] border-solid border-transparent  hover:border-accent`}
              onClick={() => setToggle(!toggle)}
            ></button>
            <Button
              classes="lg:flex hidden btn--icon btn--discord"
              text="discord"
            />
            <Button
              classes="lg:flex hidden btn--green btn--icon btn--wallet"
              text="connect"
            />
          </div>
          {toggle && (
            <div className="lg:hidden fixed left-0 right-0 top-[108px] bg-primary px-[15px] pb-[15px]">
              <nav>
                <ul className="flex flex-col gap-[32px] mb-[32px]">
                  {navLinks.map(({ id, title }) => (
                    <li key={id}>
                      <a
                        className="text-fontColor hover:text-accent font-bakbakOne uppercase text-base transition-colors easy-linear"
                        href={`#${id}`}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-[20px]">
                  <Button classes="btn--icon btn--discord" text="discord" />
                  <Button
                    classes="btn--green btn--icon btn--wallet"
                    text="connect"
                  />
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
