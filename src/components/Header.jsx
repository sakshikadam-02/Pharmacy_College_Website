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
      path: '/admissions',
      subItems: [
        { name: 'COURSES AVAILABLE', path: '/admissions/courses' },
        { name: 'INFORMATION BROUCHER', path: '/admissions/broucher' },
        { name: "FIRST YEAR", path: '/admissions/first-year' },
        { name: 'DIRECT SECOND YEAR', path: '/admissions/direct-second-year' }
      ]
    },
    {
      name: 'DEPARTMENT',
      path: '/departments',
      subItems: [
        { name: 'COMPUTER ENGINEERING', path: '/departments/computer' },
        { name: 'CIVIL ENGINEERING', path: '/departments/civil' },
        { name: "ELECTRONICS AND TELECOMMUNICATIONS", path: '/departments/electronics' },
        { name: 'MECHANICAL ENGINEERING', path: '/departments/mechanical' }
      ]
    },
    {
      name: 'FACILITY',
      path: '/facilities',
      subItems: [
        { name: 'LIBRARY', path: '/facilities/library' },
        { name: 'WORKSHOP', path: '/facilities/workshop' },
        { name: "COMPUTER CENTER", path: '/facilities/computer-center' }
      ]
    },
    {
      name: 'PLACEMENT',
      path: '/placement',
      subItems: [
        { name: 'RECRUITERS', path: '/placement/recruiters' },
        { name: 'TRO', path: '/placement/tro' }
      ]
    },
    {
      name: 'COMMITTEE',
      path: '/committee',
      subItems: [
        { name: 'GOVERNING BOARD', path: '/committee/governing-board' },
        { name: 'ANTI RAGING COMMITTEE', path: '/committee/anti-raging' },
        { name: 'GRIEVENCE READDRESSER', path: '/committee/grievence' },
        { name: 'SCST COMMITTEE', path: '/committee/scst' },
        { name: 'INTERNAL QUALITY COMM', path: '/committee/quality' },
        { name: 'INTERNAL COMPLAINT COMMITTEE', path: '/committee/complaint' },
        { name: 'WOMENS GRIEVENCE', path: '/committee/womens-grievence' },
        { name: 'STUDENTS COUNCIL', path: '/committee/students-council' }
      ]
    },
    {
      name: 'FEEDBACK',
      path: '/feedback',
      subItems: [
        { name: 'AICTE STUDENT FEEDBACK', path: '/feedback/aicte-student' },
        { name: 'AICTE FACULTY FEEDBACK', path: '/feedback/aicte-faculty' },
        { name: 'STUDENT FEEDBACK', path: '/feedback/student' },
        { name: 'FACULTY FEEDBACK', path: '/feedback/faculty' }
      ]
    },
    {
      name: 'DOWNLOADS',
      path: '/downloads',
      subItems: [
        { name: 'SYLLABUS', path: '/downloads/syllabus' },
        { name: 'A.Y.2024-25', path: '/downloads/ay-2024-25' },
        { name: 'QUESTION PAPER', path: '/downloads/question-paper' }
      ]
    },
    { name: 'GALLERY', path: '/gallery' },
    {
      name: 'ALUMINI',
      path: '/alumini',
      subItems: [
        { name: 'ALUMINI REGISTRATION FORM', path: '/alumini/registration' }
      ]
    },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
  <header className="top-header">
  {/* Contact Info Bar */}
  <div className="contact-bar">
    <div className="contact-container">
      <span>Phone: +91 1524840058</span>
      <span>Email: 1557principal@mstfze.ac.in</span>
      <span>DTE Code: D2S26 | MSBTE Code: 1537</span>
    </div>
  </div>



      {/* Institute Banner */}
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
      <nav className={`navbar ${isScrolled ? 'sticky' : ''}`}>
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
                onMouseEnter={() => item.subItems && window.innerWidth > 768 && setActiveDropdown(item.name)}
                onMouseLeave={() => item.subItems && window.innerWidth > 768 && setActiveDropdown(null)}
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