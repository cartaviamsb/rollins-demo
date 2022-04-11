import { Link } from "gatsby";
import React from "react";
import CTALink from "./CTALink";
import SecondaryMenu from "./SecondaryMenu";

const Header = ({ showNav, siteTitle, navMenuItems = [], textWhite = true }) => {
  let headerClass = "w-full z-30 top-0";;

  let navActionClass =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75";

  let navContentClass =
    "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 p-4 lg:p-0 z-20";

  let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";

  const menuItems = [
    [
      {
        title: 'Overview',
        link: '#overview'
      }
    ],
    [
      {
        title: 'About IR',
        link: '#IR'
      },
      {
        title: 'Philosophy and Procedures',
        link: '#pap'
      },
      {
        title: 'Meet the Staff',
        link: '#staff'
      },
    ],
    [
      {
        title: 'Policies and Procedures',
        link: '#Policies and Procedures'
      },
      {
        title: 'Policies',
        link: '#Policies'
      },
      {
        title: 'FERPA',
        link: '#FERPA'
      },
      {
        title: 'FERPA FAQs',
        link: '#FERPA FAQs'
      },
      {
          title: 'Code of Ethics',
        link: '#Code of Ethics'
      },
      {
          title: 'Institutional Review Board',
        link: '#Institutional Review Board'
      },
      {
          title: 'Assessment Schedule',
        link: '#Assessment Schedule'
      },
    ],
    [
      {
        title: 'Facts and Figures',
        link: '#Facts and Figures'
        },
      {
        title: 'Accreditation',
        link: '#Accreditation'
        },
      {
        title: 'Institutional Identifiers',
        link: '#Institutional Identifiers'
        },
      {
        title: 'Facts & Figures',
        link: '#Facts & Figures'
        },
      {
        title: 'Fact Book and Fact Brochure',
        link: '#Fact Book and Fact Brochure'
        },
      {
        title: 'Common Data Set (CDS)',
        link: '#Common Data Set (CDS)'
        },
    ],
    [
      {
        title: 'Public Reports',
        link: '#Public Reports'
        },
      {
        title: 'Carnegie Classification',
        link: '#Carnegie Classification'
        },
      {
        title: 'Athletic Information',
        link: '#Athletic Information'
        },
      {
        title: 'IPEDS',
        link: '#IPEDS'
        },
      {
        title: 'NSSE/BCSSE',
        link: '#NSSE/BCSSE'
        },
      {
        title: 'Great Colleges To Work For',
        link: '#Great Colleges To Work For'
        },
    ],
    [
      {
        title: 'Data Request Form',
        link: '#Data Request Form'
        },
    ],
    [
      {
        title: 'Institutional Survey Account',
        link: '#Institutional Survey Account'
        },
    ],
    [
      {
        title: 'Resources',
        link: '#Resources'
        },
      {
        title: 'Consumer Information',
        link: '#Consumer Information'
        },
      {
        title: 'Institutional Research Resources',
        link: '#Institutional Research Resources'
        },
      {
        title: 'Glossary of Terms',
        link: '#Glossary of Terms'
        },
    ]
  ];

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
      <SecondaryMenu title="Institutional Research" titleLink='#IR' menuItems={menuItems}/>
    </nav>
  );
};

export default Header;
