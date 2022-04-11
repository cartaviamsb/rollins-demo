import React, {useState, useEffect} from"react";

const MenuGroup = (props) => {
  const headerClasses = 'font-bold text-rollins-blue',
    linkClasses = 'text-gray-700';

  return (
    <div className="link-group py-2 w-full md:w-1/3 border-b-2 border-rollins-gray md:border-none" >
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
  headerClass += scrolled ? " fixed top-0 bg-rollins-blue text-white border-b-4 border-rollins-yellow" : " absolute bg-rollins-gray text-rollins-blue shadow";

  return (

    <div className={headerClass}>
      <div className="navbar px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between min-h-12 py-3">
          <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
            <div className="flex w-1/2 text-sm md:text-base">
              <a href={props.titleLink} className="font-bold">{props.title}</a>
            </div>
          </div>

          {/* Dropdown button  */}
          <button type="button" className={`flex px-2 border-2 focus:outline-none font-bold text-xs ${!scrolled ? 'border-rollins-blue' : 'border-white'}`} id="secondary-menu-button" aria-expanded="false" aria-haspopup="true"
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
          <div className={`dropdown-menu inline-flex md:flex-wrap flex-col content-start p-4 sm:px-6 lg:px-8 w-full bg-white focus:outline-none h-screen overflow-y-auto ${!scrolled ? 'mt-0 border-b-4 border-rollins-yellow ' : 'mt-1'}`} role="menu" aria-orientation="vertical" aria-labelledby="secondary-menu-button">
            {props.menuItems && props.menuItems.map((item, i) => (
              <MenuGroup item={item} i={i} key={i}/>
            ))}
          </div>
        }
    </div>
    );
  };
        
export default SecondaryMenu;