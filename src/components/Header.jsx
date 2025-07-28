import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'ADMISSIONS', path: '/admissions' },
    { name: 'DEPARTMENT', path: '/department' },
    { name: 'FACILITY', path: '/facility' },
    { name: 'PLACEMENT', path: '/placement' },
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
              <li key={index}>
                <a 
                  href={item.path} 
                  className="nav-link"
                  onMouseEnter={(e) => e.target.classList.add('hover')}
                  onMouseLeave={(e) => e.target.classList.remove('hover')}
                >
                  {item.name}
                  <span className="nav-underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;