import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Clock, Award, Users, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-600 rounded-full"></div>
      </div>

      {/* Upper Section */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* GET IN TOUCH */}
          <div className="group">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                GET IN TOUCH
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group-hover:transform group-hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">Address</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    V. J. Shinde Institute of Pharmacy, Varuda Road, Dharashiv (Osmanabad) - 413501
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group-hover:transform group-hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">Phone</p>
                  <p className="text-gray-600 text-sm">+91 9356039880</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group-hover:transform group-hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">Email</p>
                  <p className="text-gray-600 text-sm">vjspco2529@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* DEPARTMENT */}
          <div className="group">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-white" />
                </div>
                DEPARTMENT
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full"></div>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Teaching Staff', path: '/faculty/teaching-staff', icon: Users },
                { name: 'Non-Teaching Staff', path: '/faculty/non-teaching-staff', icon: Users },
                { name: 'Infrastructure', path: '/infrastructure/facilities', icon: BookOpen },
                { name: 'Library', path: '/infrastructure/library', icon: BookOpen },
                { name: 'Canteen', path: '/infrastructure/canteen', icon: Award }
              ].map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path} 
                  className="group/item flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-all duration-300 py-2 hover:transform hover:translate-x-2"
                >
                  <item.icon className="w-4 h-4 text-blue-500 group-hover/item:text-blue-600 transition-colors" />
                  <span className="text-sm font-medium border-b border-dotted border-gray-300 pb-1 group-hover/item:border-blue-400 transition-colors">
                    {item.name}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="group">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg flex items-center justify-center mr-3">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
                USEFUL LINKS
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full"></div>
            </div>
            <div className="space-y-3">
              {[
                { name: 'PCI', url: 'https://www.pci.nic.in', external: true },
                { name: 'MSBTE', url: 'https://msbte.org.in', external: true },
                { name: 'AICTE', url: 'https://www.aicte-india.org', external: true },
                { name: 'Admission', path: '/admissions/d-pharmacy', external: false },
                { name: 'Syllabus', path: '/academics/syllabus', external: false },
                { name: 'Academic Calendar', path: '/academics/calendar', external: false }
              ].map((item, index) => (
                <div key={index} className="group/item">
                  {item.external ? (
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 hover:text-orange-600 transition-all duration-300 py-2 hover:transform hover:translate-x-2"
                    >
                      <ExternalLink className="w-4 h-4 text-orange-500 group-hover/item:text-orange-600 transition-colors" />
                      <span className="text-sm font-medium border-b border-dotted border-gray-300 pb-1 group-hover/item:border-orange-400 transition-colors">
                        {item.name}
                      </span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" />
                    </a>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="flex items-center space-x-3 text-gray-600 hover:text-orange-600 transition-all duration-300 py-2 hover:transform hover:translate-x-2"
                    >
                      <ArrowRight className="w-4 h-4 text-orange-500 group-hover/item:text-orange-600 transition-colors" />
                      <span className="text-sm font-medium border-b border-dotted border-gray-300 pb-1 group-hover/item:border-orange-400 transition-colors">
                        {item.name}
                      </span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* LOCATION */}
          <div className="group">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                LOCATION
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d76.0!3d18.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAwJzAwLjAiTiA3NsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="V. J. Shinde Institute of Pharmacy Location"
                  className="w-full h-48"
                ></iframe>
                <div className="p-4 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <p className="text-gray-700 font-semibold text-sm">V. J. Shinde Institute of Pharmacy</p>
                  </div>
                  <p className="text-gray-500 text-xs">Varuda Road, Dharashiv (Osmanabad)</p>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg text-center">
                  <div className="text-lg font-bold">60+</div>
                  <div className="text-xs opacity-90">Students</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-lg text-center">
                  <div className="text-lg font-bold">100%</div>
                  <div className="text-xs opacity-90">PCI Approved</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="font-bold text-lg">VJSP</span>
              </div>
              <p className="text-sm opacity-90">Copyright © 2025 V. J. Shinde Institute of Pharmacy</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm opacity-90 mb-2">Designed & Developed by</p>
              <p className="font-semibold text-blue-300">Digital Marketing Team, VJSP</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 