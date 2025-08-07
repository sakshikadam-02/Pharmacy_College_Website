import { Link } from 'react-router-dom';
import { Target, Eye, Award } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <span className="text-gray-500">You are here: </span>
            <Link to="/" className="text-primary-600 hover:text-primary-700">Home</Link>
            <span className="text-gray-500">{'>'}</span>
            <Link to="/about/institute" className="text-primary-600 hover:text-primary-700">About Us</Link>
            <span className="text-gray-500">{'>'}</span>
            <span className="text-primary-600">Vision Mission</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="card">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">Vision & Mission</h1>
              
              {/* Vision */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading institute in pharmaceutical education, recognized for excellence in teaching, 
                  research, and community service. We aspire to produce competent pharmacy professionals who 
                  contribute significantly to the healthcare sector and society at large.
                </p>
              </div>

              {/* Mission */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    To provide quality pharmaceutical education through innovative teaching methods, 
                    state-of-the-art facilities, and industry-relevant curriculum that prepares students 
                    for successful careers in pharmacy.
                  </p>
                  <p>
                    To foster a learning environment that promotes academic excellence, ethical values, 
                    and professional development while addressing the healthcare needs of the community.
                  </p>
                  <p>
                    To establish strong partnerships with pharmaceutical industries and healthcare institutions 
                    to enhance practical training and employment opportunities for our students.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Core Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Excellence</h3>
                    <p className="text-gray-600 text-sm">
                      Striving for the highest standards in education, research, and service delivery.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Integrity</h3>
                    <p className="text-gray-600 text-sm">
                      Maintaining ethical standards and professional conduct in all our activities.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                    <p className="text-gray-600 text-sm">
                      Embracing new technologies and methodologies in pharmaceutical education.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Community Service</h3>
                    <p className="text-gray-600 text-sm">
                      Contributing to the healthcare needs of society through education and outreach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Links */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">About Us</h3>
              <div className="space-y-2">
                <Link to="/about/institute" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  About Institute
                </Link>
                <Link to="/about/organization" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  About Organization
                </Link>
                <Link to="/about/vision-mission" className="block text-primary-600 font-medium border-b border-dotted border-primary-300 pb-1">
                  Vision Mission
                </Link>
                <Link to="/about/founder-message" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Founder Message
                </Link>
                <Link to="/about/campus-director-message" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Campus Director Message
                </Link>
                <Link to="/about/principals-message" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Principal's Message
                </Link>
                <Link to="/about/governing-body" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Governing Body
                </Link>
                <Link to="/about/affiliation-certification" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Application and Certification
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
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
                  <span className="text-gray-600 text-sm">Address: Varuda Road, Dharashiv</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default VisionMission;