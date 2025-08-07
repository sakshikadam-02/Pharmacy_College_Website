import { Link } from 'react-router-dom';
import { Users, User, Award } from 'lucide-react';

const GoverningBody = () => {
  const governingMembers = [
    {
      name: "Shri. Vishwas J. Shinde",
      position: "Founder & Chairman",
      qualification: "B.E., M.B.A.",
      experience: "15+ Years"
    },
    {
      name: "Mr. Anand Khadke",
      position: "Campus Director",
      qualification: "M.Pharm, Ph.D.",
      experience: "12+ Years"
    },
    {
      name: "Dr. Nitin Satpute",
      position: "Principal",
      qualification: "M.Pharm, Ph.D.",
      experience: "10+ Years"
    },
    {
      name: "Prof. Rajesh Patil",
      position: "Academic Director",
      qualification: "M.Pharm, Ph.D.",
      experience: "8+ Years"
    },
    {
      name: "Mrs. Priya Sharma",
      position: "Administrative Officer",
      qualification: "M.B.A.",
      experience: "6+ Years"
    },
    {
      name: "Dr. Amit Kumar",
      position: "HOD - Pharmacy",
      qualification: "M.Pharm, Ph.D.",
      experience: "7+ Years"
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
            <Link to="/about/institute" className="text-primary-600 hover:text-primary-700">About Us</Link>
            <span className="text-gray-500">{'>'}</span>
            <span className="text-primary-600">Governing Body</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Governing Body</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our governing body consists of experienced professionals and academicians who provide strategic direction and ensure the highest standards of education and administration.
                </p>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {governingMembers.map((member, index) => (
    <div
      key={index}
      className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 flex flex-col space-y-3"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-[#FDECEC] rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-[#5B0206]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
          <p className="text-sm text-[#5B0206] font-medium">{member.position}</p>
        </div>
      </div>

      <div className="text-sm text-gray-700 pl-16">
        <p><span className="font-semibold text-gray-600">Qualification:</span> {member.qualification}</p>
        <p><span className="font-semibold text-gray-600">Experience:</span> {member.experience}</p>
      </div>
    </div>
  ))}
</div>


              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Commitment</h3>
                <p className="text-gray-600">
                  The governing body is committed to maintaining the highest standards of academic excellence, 
                  ensuring proper infrastructure development, and fostering an environment conducive to learning 
                  and research. We work together to provide strategic direction and oversight to all aspects 
                  of the institute's operations.
                </p>
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
                <Link to="/about/campus-director-message" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Campus Director Message
                </Link>
                <Link to="/about/principals-message" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Principal's Message
                </Link>
                <Link to="/about/governing-body" className="block text-primary-600 font-medium border-b border-dotted border-primary-300 pb-1">
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

export default GoverningBody;