import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setActiveDropdown(null);
  };

  const handleDropdown = (itemName) => {
    if (window.innerWidth > 768) return;
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'HOME', path: '/' },
    { 
      name: 'ABOUT US', 
      path: '/about',
      subItems: [
        { name: 'ABOUT VJSHINDE POLYTECHNIC', path: '/about/institute' },
        { name: 'FOUNDER VIEW', path: '/about/founder' },
        { name: "DIRECTOR'S VIEW", path: '/about/director' },
        { name: 'PRINCIPAL VIEW', path: '/about/principal' },
        { name: 'BOARD OF GOVERNORS', path: '/about/governors' },
        { name: 'AICTE APPROVAL', path: '/about/aicte' },
        { name: 'MSBTE APPROVAL', path: '/about/msbte' }
      ]
    },
    {
      name: 'ADMISSIONS',
      path: '/Admissions',
      subItem: [
        { name: 'COURSES AVAILABLE', path: '/Admissions/institute' },
        { name: 'INFORMATION BROUCHER', path: '/Admissions/founder' },
        { name: "FIRST YEAR", path: '/Admissions/director' },
        { name: 'DIRECT SECOND YEAR', path: '/Admissions/principal' },
        

      ]
    },
        {
      name: 'DEPARTMENT',
      path: '/Departments',
      subItem: [
        { name: 'COMPUTER ENGINEERING', path: '/Departments/institute' },
        { name: 'CIVIL ENGINEERING', path: '/Departments/founder' },
        { name: "ELECTRONICS AND TELECOMMUNICATIONS", path: '/Departments/director' },
        { name: 'MECHANICAL ENGINEERING', path: '/Departments/principal' },
        

      ]
    },
   {
      name: 'FACILITY',
      path: '/Facilities',
      subItem: [
        { name: 'LIBRARY', path: '/Facilities/institute' },
        { name: 'WORKSHOP', path: '/Facilities/founder' },
        { name: "COMPUTER CENTER", path: '/Facilities/director' },       

      ]
    },
     {
      name: 'PLACEMENT',
      path: '/Placement',
      subItem: [
        { name: 'RECRUITERS', path: '/about/institute' },
        { name: 'TRO', path: '/about/founder' },
               

      ]
    },

    { name: 'COMMITTEE', path: '/committee' },
    { name: 'FEEDBACK', path: '/feedback' },
    { name: 'DOWNLOADS', path: '/downloads' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'ALUMINI', path: '/alumini' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} style={{ top: 0 }}>
      {/* Contact Info Bar */}
      <div className="contact-bar">
        <div className="contact-container">
          <span>Phone: +91 1524840058</span>
          <span>Email: 1557principal@mstfze.ac.in</span>
          <span>DTE Code: D2S26 | MSBTE Code: 1537</span>
        </div>
      </div>

      {/* Institute Info */}
      <div className="institute-banner">
        <div className="banner-content">
          <h1>Shri, Swami Samarth Bahuuddheshiya Shaikehanik</h1>
          <h1>Samajik Sanstha & Krida Mandal's Sanstha</h1>
          <h2>V J Shinde Polytechnic Institute</h2>
          <p>Varuda Road, Dinarashiv (comandbad) - 415501</p>
          <p>Approved by A.I.C.T.E. | Affiliated to M.S.B.T.E., Mumbai</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <button 
            className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <li 
                key={index}
                className={`nav-item ${item.subItems ? 'has-dropdown' : ''} ${activeDropdown === item.name ? 'dropdown-active' : ''}`}
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => item.subItems && setActiveDropdown(null)}
              >
                <a 
                  href={item.path} 
                  className="nav-link"
                  onClick={(e) => {
                    if (item.subItems) {
                      e.preventDefault();
                      handleDropdown(item.name);
                    } else {
                      closeAllMenus();
                    }
                  }}
                  onMouseEnter={(e) => e.target.classList.add('hover')}
                  onMouseLeave={(e) => e.target.classList.remove('hover')}
                >
                  {item.name}
                  {item.subItems && <span className="dropdown-arrow"></span>}
                  <span className="nav-underline"></span>
                </a>

                {item.subItems && (
                  <ul className="dropdown-menu">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a 
                          href={subItem.path} 
                          className="dropdown-link"
                          onClick={closeAllMenus}
                          onMouseEnter={(e) => e.target.classList.add('hover')}
                          onMouseLeave={(e) => e.target.classList.remove('hover')}
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
