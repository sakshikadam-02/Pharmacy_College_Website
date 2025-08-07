import { Link } from 'react-router-dom';
import { User, Quote } from 'lucide-react';

const FounderMessage = () => {
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
            <span className="text-primary-600">Founder Message</span>
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
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Founder's Message</h1>
                <h2 className="text-xl font-semibold text-primary-600">SHRI. VISHWAS J. SHINDE</h2>
                <p className="text-gray-600">Founder, V. J. Shinde Institute of Pharmacy</p>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="border-l-4 border-primary-600 pl-6">
                  <Quote className="w-8 h-8 text-primary-600 mb-4" />
                  <p className="text-lg italic mb-4">
                    "Young, ignited minds is the need of the hour." One Young mind, infused with a thirst for knowledge and striving for excellence, can bring to fruition the A vision of a fully developed India.
                  </p>
                </div>

                <p>
                  At V. J. Shinde Institute of Pharmacy, dharashiv, we create the right atmosphere for igniting and nurturing young minds towards technology. The Diploma Engineering courses offered at V.J. Shinde Polytechnic Institute develop employment related generic skills needed for our Industries.
                </p>

                <p>
                  Our students will be strong building-blocks of technologically developed India. We truly believe that 'Knowledge is Power' and every action at our institutions will be a step in knowledge dissemination.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Vision</h3>
                  <p className="text-gray-600">
                    To create a nurturing environment where young minds can flourish and develop the skills necessary to contribute to India's technological advancement. We believe in the power of education to transform lives and build a stronger, more developed nation.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Commitment</h3>
                  <p className="text-gray-600">
                    We are committed to providing quality education that not only imparts technical knowledge but also develops character, leadership skills, and a sense of responsibility towards society. Our focus is on creating well-rounded individuals who can make meaningful contributions to the healthcare sector.
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
                <Link to="/about/organization" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  About Organization
                </Link>
                <Link to="/about/vision-mission" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Vision Mission
                </Link>
                <Link to="/about/founder-message" className="block text-primary-600 font-medium border-b border-dotted border-primary-300 pb-1">
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

export default FounderMessage;