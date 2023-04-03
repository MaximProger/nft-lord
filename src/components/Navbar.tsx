import { navLinks } from "../constants";
import Button from "./Button";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary pt-[30px] pb-[30px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="/" className="logo">
            <img src={logo} alt="NFTALIEN" width="196" height="42" />
          </a>
          <nav>
            <ul className="flex gap-[32px]">
              {navLinks.map(({ id, title }) => (
                <li key={id}>
                  <a
                    className="text-white hover:text-accent font-bakbakOne uppercase text-base transition-colors easy-linear"
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
            <Button classes="btn--icon btn--discord" text="discord" />
            <Button classes="btn--green btn--icon btn--wallet" text="connect" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
