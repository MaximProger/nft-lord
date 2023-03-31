import { navLinks } from "../constants";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="fix bg-primary pt-[30px] pb-[30px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="/" className="logo">
            <img src={logo} alt="NFTALIEN" width="196" height="42" />
          </a>
          <nav>
            <ul className="flex gap-[32px]">
              {navLinks.map(({ id, title }) => (
                <li>
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
            >
              light
            </button>
            <button type="button" className="btn btn--discord">
              discord
            </button>
            <button type="button" className="btn btn--wallet">
              connect
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
