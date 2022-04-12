import React, {useState, useEffect} from "react";

const MenuGroup = (props) => {
  const headerClasses = 'font-bold text-blue-500',
    linkClasses = 'text-gray-700';

  return (
    <div className="link-group py-2 w-full md:w-1/3 border-b-2 border-gray-100 md:border-none" >
      { props.item.map((group, i) => {
          return <GroupItem item={group} classes={i === 0 ? headerClasses : linkClasses} key={`secondary-item-${i}`}/>
        })
      }
    </div>
  );
};

const GroupItem = (props) => {
  return (
    <a href={props.item.link} className={`block py-2 md:py-0 text-base md:text-sm ${props.classes}`}  role="menuitem">{props.item.title}</a>
  );
};

const SecondaryMenu = (props) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleBodyClass);
    toggleBodyClass();
  });

  const toggleBodyClass = () => {
    if (scrolled && window.scrollY <= 0) {
      setScrolled(false);
    } else if (!scrolled && window.scrollY > 0) {
      setScrolled(true);
    };
  }
  
  let headerClass = "secondary-menu w-full z-30";
  headerClass += scrolled ? " fixed top-0 bg-blue-500 text-white border-b-4 border-yellow-500" : " absolute bg-gray-100 text-blue-500 shadow";

  return (

    <div className={headerClass}>
      <div className="navbar px-4 max-w-6xl mx-auto">
        <div className="relative flex items-center justify-between min-h-12 py-3">
          <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
            <div className="flex w-1/2 text-sm md:text-base">
              <a href={props.titleLink} className="font-bold">{props.title}</a>
            </div>
          </div>

          {/* Dropdown button  */}
          <button type="button" className={`flex px-2 border-2 focus:outline-none font-bold text-xs ${!scrolled ? 'border-blue-500' : 'border-white'}`} id="secondary-menu-button" aria-expanded="false" aria-haspopup="true"
            onClick={() => { toggleMenu() }}
          >
            <span className="sr-only">Open secondary menu</span>
            <span className="pr-2 hidden md:block">Menu</span><span>{`${!menuOpen ? '▼' : '▲'}`}</span>
          </button>
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
          <div class={`dropdown-container bg-white overflow-y-hidden ${!scrolled ? 'border-b-4 border-yellow-500 ' : ''}`}>
            <div className="dropdown-layout max-w-6xl mx-auto overflow-y-hidden">
              <div className="dropdown-menu inline-flex md:flex-wrap p-4 flex-col content-start w-full focus:outline-none h-screen overflow-y-auto" role="menu" aria-orientation="vertical" aria-labelledby="secondary-menu-button">
                {props.menuItems && props.menuItems.map((item, i) => (
                  <MenuGroup item={item} i={i} key={i}/>
                ))}
              </div>
            </div>
          </div>
        }
    </div>
    );
  };
        
export default SecondaryMenu;