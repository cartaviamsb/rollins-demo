import { Link } from "gatsby";
import React from "react";
import CTALink from "./CTALink";
import Menu from "./Menu";

const Header = ({ showNav, siteTitle, navMenuItems = [], textWhite = true }) => {
  let headerClass = "w-full z-30 top-0";;

  let navActionClass =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75";

  let navContentClass =
    "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 p-4 lg:p-0 z-20";

  let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";

  return (
    <nav id="header" className={headerClass}>
      <div className="w-full mx-auto flex flex-wrap items-center justify-between text-white bg-rollins-blue px-2 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link id="siteTitle" className={titleClass} to="/">
            {siteTitle}
          </Link>
        </div>

        {showNav && navMenuItems && (
          <div className={navContentClass} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {navMenuItems.map(i => (
                <li className="ml-3">
                  <CTALink {...i} buttonActionClass={navActionClass} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <hr className="border-b-4 border-rollins-yellow" />
      <Menu />
    </nav>
  );
};

export default Header;
