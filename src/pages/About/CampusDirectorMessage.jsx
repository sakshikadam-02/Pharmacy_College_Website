import { Link } from 'react-router-dom';
import { User, Quote } from 'lucide-react';

const CampusDirectorMessage = () => {
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
            <span className="text-primary-600">Campus Director Message</span>
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
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Campus Director's Message</h1>
                <h2 className="text-xl font-semibold text-primary-600">Mr. Anand Khadke</h2>
                <p className="text-gray-600">Campus Director, V. J. Shinde Institute of Pharmacy</p>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  I extend a warm welcome to all, both new and returning, as we embark on another exciting academic year at V. J. Shinde Institute of Pharmacy, dharashiv. It is with great pride that I address you as the Campus Director of this esteemed institution, where we are shaping the next generation of pharmacy professionals who will influence the future of healthcare.
                </p>

                <p>
                  At V. J. Shinde Institute of Pharmacy, dharashiv, we focus not just on academic learning, but on developing well-rounded individuals who possess the leadership, critical thinking, and ethical responsibility that are essential in today's healthcare environment. As part of our community, you will be encouraged to explore, learn, and grow in an environment that supports your ambitions and nurtures your talents.
                </p>

                <div className="border-l-4 border-primary-600 pl-6">
                  <Quote className="w-8 h-8 text-primary-600 mb-4" />
                  <p className="text-lg italic mb-4">
                    Our vision is to provide a world-class educational experience by offering a comprehensive curriculum, practical training, and state-of-the-art facilities. We are committed to fostering an atmosphere that promotes creativity, inquiry, and collaboration among students, faculty, and staff.
                  </p>
                </div>

                <p>
                  As we move forward, I encourage each of you to take full advantage of the opportunities available at our institute. Engage actively in your studies, participate in extracurricular activities, and build lasting relationships with your peers and mentors. Remember that your success is our success, and we are here to support you every step of the way.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Commitment to Excellence</h3>
                  <p className="text-gray-600">
                    We are committed to maintaining the highest standards of academic excellence while providing a supportive and inclusive learning environment. Our dedicated faculty and staff work tirelessly to ensure that every student receives the guidance and resources needed to achieve their goals.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Looking Forward</h3>
                  <p className="text-gray-600">
                    As we continue to grow and evolve, we remain focused on our mission to produce competent pharmacy professionals who will make meaningful contributions to healthcare. Together, we will build a brighter future for pharmaceutical education and healthcare delivery.
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
                <Link to="/about/founder-message" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Founder Message
                </Link>
                <Link to="/about/campus-director-message" className="block text-primary-600 font-medium border-b border-dotted border-primary-300 pb-1">
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

export default CampusDirectorMessage;