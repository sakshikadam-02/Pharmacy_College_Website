import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white relative">
      {/* Upper Section */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* GET IN TOUCH */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center mr-3">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">CONTACT US</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    V. J. Shinde Institute of Pharmacy,<br />
                    Varuda Road, Dharashiv (Osmanabad) - 413501
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <p className="text-blue-100 text-sm">+91 9356039880</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-blue-100 text-sm">vjspco2529@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center mr-3">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">QUICK LINKS</h3>
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
                <div key={index}>
                  {item.external ? (
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors py-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-blue-300" />
                      <span className="text-sm">{item.name}</span>
                    </a>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors py-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-blue-300" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* LOCATION */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center mr-3">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">OUR LOCATION</h3>
            </div>
            
            <div className="bg-blue-800 rounded-lg overflow-hidden">
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
              <div className="p-4 bg-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <p className="font-medium text-sm">V. J. Shinde Institute of Pharmacy</p>
                </div>
                <p className="text-blue-200 text-xs">Varuda Road, Dharashiv (Osmanabad)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="bg-blue-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="font-bold text-sm">VJSP</span>
              </div>
              <span className="text-sm">© 2025 V. J. Shinde Institute of Pharmacy</span>
            </div>
            
          <div className="text-center md:text-right">
  <a 
    href="https://scrimatec.com/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block text-blue-300 hover:text-blue-200 text-sm transition-all duration-300 transform hover:scale-105 group"
  >
    <span className="flex items-center justify-end space-x-1">
      <span className="border-b border-dotted border-transparent group-hover:border-blue-300 transition-all duration-300">
        Designed & Developed by <span className="text-base">Scrimatec IT Solutions Pvt Ltd</span>
      </span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </span>
  </a>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;