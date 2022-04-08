import React, {useState} from"react";

const MenuGroup = (props) => {
  return (
    <div class="link-group py-2 w-full md:w-1/3 border-b-2 border-rollins-gray md:border-none" id={`secondary-group-${props.i}`} >
      { props.item.map((group, i) => {
          return i == 0 ? <GroupHeader item = {group} /> : <GroupLink item = {group} />
        })
      }
    </div>
  );
};

const GroupHeader = (props) => {
  return (
    <a href={props.item.link} class="block py-2 md:py-0 text-base md:text-sm font-bold text-rollins-blue" role="menuitem" tabindex="-1" id={`secondary-header-item-${props.i}`}>{props.item.title}</a>
  );
};

const GroupLink = (props) => {
  return (
    <a href={props.item.link} class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id={`secondary-link-item-${props.i}`}>{props.item.title}</a>
  );
};

const Menu = (props) => {

  const menuItems= [
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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [scrolled, setScrolled] = useState(false);
  if (scrolled && window.scrollY <= 0) {
    setScrolled(false);
  } else if (!scrolled && window.scrollY > 0) {
    setScrolled(true);
  };
  
  let headerClass = "secondary-menu w-full z-30";
  headerClass += scrolled ? " fixed top-0 bg-rollins-blue text-white border-b-4 border-rollins-yellow" : " absolute bg-rollins-gray text-rollins-blue shadow";

  return (

    <div class={headerClass}>
      <div class="navbar px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between min-h-12 py-3">
          <div class="flex-1 flex items-center sm:items-stretch sm:justify-start">
            <div class="flex w-1/2 text-sm md:text-base">
              <a href="#" class="font-bold">Institutional Research</a>
            </div>
          </div>

          {/* Dropdown  */}
          <div class="relative">
            <div>
              <button type="button" class={`flex px-2 border-2 focus:outline-none font-bold text-xs ${!scrolled ? 'border-rollins-blue' : 'border-white'}`} id="secondary-menu-button" aria-expanded="false" aria-haspopup="true"
                onClick={() => { toggleMenu() }}
              >
                <span class="sr-only">Open secondary menu</span>
                <span class="pr-2 hidden md:block">Menu</span><span>{`${!menuOpen ? '▼' : '▲'}`}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
        */}
        { menuOpen && 
          <div  class={`dropdown-menu inline-flex md:flex-wrap flex-col content-start p-4 sm:px-6 lg:px-8 w-full bg-white focus:outline-none h-screen overflow-y-auto ${!scrolled ? 'mt-0 border-b-4 border-rollins-yellow ' : 'mt-1'}`} role="menu" aria-orientation="vertical" aria-labelledby="secondary-menu-button" tabindex="-1">
            {menuItems.map((item, i) => (
              <MenuGroup item={item} i={i} />
            ))}
          </div>
        }
    </div>
    );
  };
        
export default Menu;