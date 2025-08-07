import { Link } from 'react-router-dom';
import { Download, FileText, BookOpen, Users, Award, Calendar } from 'lucide-react';

const InformationBrochure = () => {
  const brochures = [
    {
      title: "D. Pharmacy Program Brochure 2025-26",
      description: "Complete information about D. Pharmacy program including curriculum, facilities, and admission process",
      size: "2.5 MB",
      format: "PDF",
      icon: FileText
    },
    {
      title: "Institute Prospectus 2025-26",
      description: "Comprehensive guide about the institute, facilities, faculty, and programs offered",
      size: "5.2 MB",
      format: "PDF",
      icon: BookOpen
    },
    {
      title: "Admission Guidelines 2025-26",
      description: "Step-by-step admission process, eligibility criteria, and required documents",
      size: "1.8 MB",
      format: "PDF",
      icon: Users
    },
    {
      title: "Fee Structure 2025-26",
      description: "Detailed fee structure for D. Pharmacy program including all charges and payment schedule",
      size: "1.2 MB",
      format: "PDF",
      icon: Award
    }
  ];

  const quickInfo = [
    {
      title: "Program Duration",
      value: "2 Years (4 Semesters)",
      icon: Calendar
    },
    {
      title: "Total Intake",
      value: "60 Students",
      icon: Users
    },
    {
      title: "Approval",
      value: "PCI Approved",
      icon: Award
    },
    {
      title: "Affiliation",
      value: "MSBTE, Mumbai",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <span className="text-gray-500">You are here: </span>
            <Link to="/" className="text-primary-600 hover:text-primary-700">Home</Link>
            <span className="text-gray-500">{'>'}</span>
            <Link to="/admissions/d-pharmacy" className="text-primary-600 hover:text-primary-700">Admissions</Link>
            <span className="text-gray-500">{'>'}</span>
            <span className="text-primary-600">Information Brochure</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Information Brochure</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive brochures and information guides to learn more about V. J. Shinde Institute of Pharmacy, 
            our programs, facilities, and admission process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {quickInfo.map((info, index) => (
                <div key={index} className="card text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Downloadable Brochures */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Download Brochures</h2>
              <div className="space-y-4">
                {brochures.map((brochure, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          <brochure.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">{brochure.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{brochure.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Size: {brochure.size}</span>
                            <span>Format: {brochure.format}</span>
                          </div>
                        </div>
                      </div>
                      <button className="btn-primary flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Highlights */}
            <div className="card mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Academic Excellence</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">PCI approved curriculum</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">Experienced faculty members</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">Modern laboratory facilities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">Industry-relevant training</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Career Opportunities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">Pharmacy technician</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">Drug store management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">Hospital pharmacy</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">Pharmaceutical industry</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/admissions/d-pharmacy" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                </Link>
                <Link to="/contact" className="btn-secondary w-full flex items-center justify-center space-x-2">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>

            {/* Important Dates */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Important Dates</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Application Start</h4>
                  <p className="text-gray-600 text-sm">March 2025</p>
                </div>
                <div className="border-l-4 border-secondary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Last Date to Apply</h4>
                  <p className="text-gray-600 text-sm">May 2025</p>
                </div>
                <div className="border-l-4 border-accent-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Counseling</h4>
                  <p className="text-gray-600 text-sm">June 2025</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Classes Begin</h4>
                  <p className="text-gray-600 text-sm">July 2025</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Admission Office</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600 text-sm">Phone: +91 9356039880</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600 text-sm">Email: vjspco2529@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600 text-sm">Office Hours: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Useful Links</h3>
              <div className="space-y-2">
                <Link to="/about/institute" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  About Institute
                </Link>
                <Link to="/infrastructure/facilities" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Facilities
                </Link>
                <Link to="/faculty/teaching-staff" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Faculty
                </Link>
                <Link to="/contact" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Contact Us
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default InformationBrochure; 