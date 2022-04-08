import React, {useState} from"react";

const Menu = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const [scrolled, setScrolled] = useState(false);
  if (scrolled && window.scrollY <= 0) {
    setScrolled(false);
  } else if (!scrolled && window.scrollY > 0) {
    setScrolled(true);
  }
  
  let headerClass = "secondary-menu w-full";
  headerClass += scrolled ? " fixed z-30 top-0 bg-rollins-blue text-white border-b-4 border-rollins-yellow" : " bg-rollins-gray text-rollins-blue shadow";

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
            <div class="link-group py-2 w-full md:w-1/3 border-b-2 border-rollins-gray md:border-none">
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm font-bold text-rollins-blue" role="menuitem" tabindex="-1" id="secondary-menu-item-0">Overview</a>
            </div>
            <div class="link-group py-2 w-full md:w-1/3 border-b-2 border-rollins-gray md:border-none">
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm font-bold text-rollins-blue" role="menuitem" tabindex="-1" id="secondary-menu-item-1">About IR</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-2">Philosophy & Standards</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-3">Meet the Staff</a>
            </div>
            <div class="link-group py-2 w-full md:w-1/3 border-b-2 border-rollins-gray md:border-none">
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm font-bold text-rollins-blue" role="menuitem" tabindex="-1" id="secondary-menu-item-4">Policies and Procedures</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-5">Policies</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-6">FERPA</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-7">FERPA FAQ's</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-8">Code of Ethics</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-9">Institutional Review Board</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-10">Assessment Schedule</a>
            </div>
            <div class="link-group py-2 w-full md:w-1/3 border-b-2 border-rollins-gray md:border-none">
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm font-bold text-rollins-blue" role="menuitem" tabindex="-1" id="secondary-menu-item-4">Facts and Figures</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-5">Accreditation</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-6">Institutional Identifiers</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-7">Facts & Figures</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-8">Fact Book and Fact Brochure</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-9">Common Data Set (CDS)</a>
            </div>
            <div class="link-group py-2 w-full md:w-1/3 border-b-2 border-rollins-gray md:border-none">
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm font-bold text-rollins-blue" role="menuitem" tabindex="-1" id="secondary-menu-item-4">Public Reports</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-5">Carnegie Classification</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-6">Athletic Information</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-7">IPEDS</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-8">NSSE/BCSSE</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-9">Great Colleges To Work For</a>
            </div>
            <div class="link-group py-2 w-full md:w-1/3 border-b-2 border-rollins-gray md:border-none">
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm font-bold text-rollins-blue" role="menuitem" tabindex="-1" id="secondary-menu-item-0">Data Request Form</a>
            </div>
            <div class="link-group py-2 w-full md:w-1/3 border-b-2 border-rollins-gray md:border-none">
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm font-bold text-rollins-blue" role="menuitem" tabindex="-1" id="secondary-menu-item-0">Institutional Survey Account</a>
            </div>
            <div class="link-group py-2 w-full md:w-1/3 border-b-2 border-rollins-gray md:border-none">
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm font-bold text-rollins-blue" role="menuitem" tabindex="-1" id="secondary-menu-item-1">Resources</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-2">Consumer Information</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-3">Institutional Research Resources</a>
              <a href="#" class="block py-2 md:py-0 text-base md:text-sm text-gray-700" role="menuitem" tabindex="-1" id="secondary-menu-item-3">Glossary of Terms</a>
            </div>
          </div>
        }
    </div>

    
    );
  };
        
export default Menu;