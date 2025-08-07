import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, Award, BookOpen, ChevronDown, Menu, X,
  Users, MapPin, Star, GraduationCap, Building, Library,
  Coffee, Calendar, Clock, TrendingUp, CheckCircle, AlertCircle,
  Info, ArrowRight, FileText, Download, Eye, ExternalLink, Settings
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navigationItems = [
    {
      name: 'Home',
      path: '/',
      hasDropdown: false
    },
    {
      name: 'About Us',
      path: '/about/institute',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Institute', path: '/about/institute' },
        { name: 'About Organization', path: '/about/organization' },
        { name: 'Vision & Mission', path: '/about/vision-mission' },
        { name: 'Founder Message', path: '/about/founder-message' },
        { name: 'Campus Director Message', path: '/about/campus-director-message' },
        { name: "Principal's Message", path: '/about/principals-message' },
        { name: 'Governing body', path: '/about/governing-body' },
        { name: 'Application & Certification', path: '/about/affiliation-certification' }
      
      ]
    },
    {
      name: 'Admissions',
      path: '/admissions/d-pharmacy',
      hasDropdown: true,
      dropdownItems: [
        { name: 'D.Pharmacy', path: '/admissions/d-pharmacy' },
        { name: 'Information  Brochure', path: '/admissions/information-brochure' }
        
      ]
    },
    {
      name: 'Academics',
      path: '/academics/syllabus',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Academic Calendar', path: '/academics/calendar' },
        { name: 'Exam Time Table', path: '/academics/exam-timetable' },

        { name: 'Syllabus', path: '/academics/syllabus' },
        { name: 'Results', path: '/academics/results' },
        { name: 'Rankers', path: '/academics/rankers' }
      ]
    },
    {
      name: 'Faculty',
      path: '/faculty/teaching-staff',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Teaching Staff', path: '/faculty/teaching-staff' },
        { name: 'Non-Teaching Staff', path: '/faculty/non-teaching-staff' }
      ]
    },
    {
      name: 'Infrastructure',
      path: '/infrastructure/campus',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Campus', path: '/infrastructure/campus' },
        { name: 'Facilities', path: '/infrastructure/facilities' },
        { name: 'Library', path: '/infrastructure/library' },
        { name: 'Canteen', path: '/infrastructure/canteen' }
      ]
    },
    {
      name: 'Administration',
      path: '/administration/anti-ragging-committee',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Anti-Ragging Committee', path: '/administration/anti-ragging-committee' },
        { name: 'Anti-Discrimination Committee', path: '/administration/anti-discrimination-committee' },
        { name: 'Student Grievance Redressal Committee', path: '/administration/student-grievance-redressal-committee' },
        { name: 'Entrepreneurship Development Cell', path: '/administration/entrepreneurship-development-cell' },
        { name: 'Faculty Grievance Redressal Committee', path: '/administration/faculty-grievance-redressal-committee' },
        { name: 'Training Placement Career Guidance Committee', path: '/administration/training-placement-career-guidance-committee' },
        { name: "Women's Grievance Redressal Committee", path: '/administration/womens-grievance-redressal-committee' }
      ]
    },
    {
      name: 'Students Zone',
      path: '/students-zone/gallery',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Gallery', path: '/students-zone/gallery' },
        { name: 'Alumni', path: '/students-zone/alumni' }
      
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      hasDropdown: false
    }
  ];
  return (
    <header className="relative z-50">
      {/* Top Information Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white py-1.5 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Side - Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center space-x-2 group">
                <Phone className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors duration-300 animate-pulse" />
                <span className="group-hover:text-blue-300 transition-colors duration-300">
                  +91 9356039880
                </span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Mail className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors duration-300 animate-pulse" />
                <span className="group-hover:text-blue-300 transition-colors duration-300">
                  vjspco2529@gmail.com
                </span>
    </div>
  </div>

            {/* Right Side - Institute Codes & Admin Login */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center space-x-2 group">
                <Award className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors duration-300 animate-pulse" />
                <span className="group-hover:text-blue-300 transition-colors duration-300">
                  DTE Code: D2529
                </span>
              </div>
              <div className="flex items-center space-x-2 group">
                <BookOpen className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors duration-300 animate-pulse" />
                <span className="group-hover:text-blue-300 transition-colors duration-300">
                  MSBTE Code: 1557
                </span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Settings className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors duration-300 animate-pulse" />
                <Link to="/admin" className="group-hover:text-blue-300 transition-colors duration-300">
                  Admin Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Banner */}
      <div className="bg-white shadow-lg py-6 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            
            {/* Left - Logo */}
            <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-0">
              <div className="relative">
   <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden ">
              <img
                src="/images/polynewlogo.jpg"
                alt="VJSP Logo"
                className="w-28 h-28   hover:scale-110"
              />
            </div>
              </div>
            </div>
            
            {/* Center - Institute Info */}
            <div className="flex-1 text-center mb-4 lg:mb-0">
              <p className="text-xs text-gray-500 mb-1 animate-fade-in">
                Shri. Swami Samarth Bahuuddheshiya Shaikshanik Samajik Sanstha & Krida Mandal's Sanstha
              </p>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-slide-in-left">
                V. J. Shinde Institute of Pharmacy
              </h1>
              <p className="text-sm text-gray-600 mb-3 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                Varuda Road, Dharashiv (Osmanabad) - 413501
              </p>
              <div className="flex flex-wrap justify-center gap-2 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  Approved by P.C.I.
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  Affiliated to M.S.B.T.E.
                </span>
              </div>
            </div>
            
            {/* Right - Principal Info */}
             <div className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl  hover:scale-110 hover:rotate-1 hover:shadow-2xl bg-white flex items-center justify-center">
                <img
                  src="/images/Principal.jpeg"
                  alt="Principal"
                  className="w-32 h-32 object-cover"
                />
              </div>
            </div>

            </div>
          </div>
        </div>
      

      {/* Navigation Bar */}
      <nav className={`bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl w-full transition-all duration-500 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''
      }`}>
        <div className="w-full">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden lg:grid lg:grid-cols-9 w-full">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={item.path}
                    className={`px-1 py-4 text-white font-semibold text-xs flex flex-col items-center justify-center space-y-1 transition-all duration-300 h-full nav-item ${
                      location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                        ? 'bg-white/20 backdrop-blur-sm'
                        : 'hover:bg-white/10'
                    }`}
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                  >
                    <span className="text-center leading-tight">
                      {item.name.includes(' ') ? (
                        <>
                          <div className="text-xs">{item.name.split(' ')[0]}</div>
                          <div className="text-xs">{item.name.split(' ').slice(1).join(' ')}</div>
                        </>
                      ) : (
                        item.name
                      )}
                    </span>
                    {item.hasDropdown && <ChevronDown className="w-3 h-3 flex-shrink-0 transition-transform group-hover:rotate-180" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div
                      className="absolute top-full left-0 bg-white shadow-2xl border border-gray-200 min-w-64 z-50 rounded-xl overflow-hidden"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">
                        <h3 className="font-semibold text-sm">{item.name}</h3>
                      </div>
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          to={dropdownItem.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 text-sm border-b border-gray-100 last:border-b-0 transition-all duration-200 flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-white/20 shadow-xl">
              <div className="px-4 py-2 space-y-1">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.path ? 'bg-blue-50 text-blue-600' : ''
                    }`}
                >
                  {item.name}
                  </Link>
                ))}
                
                {/* Admin Login Link */}
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <Link
                    to="/admin"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Admin Login</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;