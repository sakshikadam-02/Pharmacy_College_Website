import { Link } from 'react-router-dom';
import { User, Quote } from 'lucide-react';

const PrincipalsMessage = () => {
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
            <span className="text-primary-600">Principal's Message</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-16 h-16 text-gray-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Principal's Message</h1>
                <h2 className="text-xl font-semibold text-primary-600">Dr. Nitin Satpute</h2>
                <p className="text-gray-600">Principal, V. J. Shinde Institute of Pharmacy</p>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Welcome to V. J. Shinde Institute of Pharmacy, dharashiv, where excellence in education and professional development are at the heart of everything we do. As the Principal, I am proud to lead an institution dedicated to shaping the future of pharmacy professionals who will make significant contributions to healthcare.
                </p>

                <div className="border-l-4 border-primary-600 pl-6">
                  <Quote className="w-8 h-8 text-primary-600 mb-4" />
                  <p className="text-lg italic mb-4">
                    Our commitment to delivering high-quality education is reflected in our experienced faculty, state-of-the-art facilities, and rigorous curriculum designed to equip you with the knowledge, skills, and ethical grounding necessary for success in the dynamic field of pharmacy.
                  </p>
                </div>

                <p>
                  At V. J. Shinde Institute of Pharmacy, we believe in fostering an environment that encourages innovation, critical thinking, and hands-on learning. Our curriculum is designed to provide students with both theoretical knowledge and practical experience, ensuring they are well-prepared for the challenges of the pharmaceutical industry.
                </p>

                <p>
                  Our dedicated team of faculty members brings years of experience and expertise to the classroom, ensuring that students receive the best possible education. We also maintain strong partnerships with pharmaceutical companies and healthcare institutions to provide our students with valuable internship and placement opportunities.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Academic Excellence</h3>
                  <p className="text-gray-600">
                    We are committed to maintaining the highest standards of academic excellence. Our curriculum is regularly updated to reflect the latest developments in pharmaceutical sciences, and we provide students with access to modern laboratories and equipment to enhance their learning experience.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Student Development</h3>
                  <p className="text-gray-600">
                    Beyond academics, we focus on the overall development of our students. We encourage participation in extracurricular activities, research projects, and community service initiatives that help develop leadership skills and social responsibility.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Future Ready</h3>
                  <p className="text-gray-600">
                    As the pharmaceutical industry continues to evolve, we ensure our students are equipped with the skills and knowledge needed to adapt and thrive in this dynamic field. Our graduates are well-prepared to take on challenging roles in various sectors of the pharmaceutical industry.
                  </p>
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
                <Link to="/about/vision-mission" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Vision Mission
                </Link>
                <Link to="/about/founder-message" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Founder Message
                </Link>
                <Link to="/about/campus-director-message" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Campus Director Message
                </Link>
                <Link to="/about/principals-message" className="block text-primary-600 font-medium border-b border-dotted border-primary-300 pb-1">
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

export default PrincipalsMessage;