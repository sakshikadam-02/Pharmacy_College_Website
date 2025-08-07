import { Link } from 'react-router-dom';
import { Award, CheckCircle, BookOpen, Building } from 'lucide-react';

const AffiliationCertification = () => {
  const approvals = [
    {
      name: "Pharmacy Council of India (PCI)",
      status: "Approved",
      code: "PCI Approval",
      description: "Recognized by the Pharmacy Council of India for D. Pharmacy program",
      icon: Award
    },
    {
      name: "Maharashtra State Board of Technical Education (MSBTE)",
      status: "Affiliated",
      code: "MSBTE Code: 1557",
      description: "Affiliated to MSBTE, Mumbai for diploma programs",
      icon: BookOpen
    },
    {
      name: "Directorate of Technical Education (DTE)",
      status: "Approved",
      code: "DTE Code: D2529",
      description: "Approved by Directorate of Technical Education, Maharashtra",
      icon: Building
    },
    {
      name: "All India Council for Technical Education (AICTE)",
      status: "Approved",
      code: "AICTE Approval",
      description: "Recognized by AICTE for technical education programs",
      icon: CheckCircle
    }
  ];

  const certifications = [
    {
      title: "Quality Assurance",
      description: "Maintaining high standards of education and infrastructure",
      status: "Active"
    },
    {
      title: "Academic Excellence",
      description: "Consistently achieving academic milestones and student success",
      status: "Active"
    },
    {
      title: "Infrastructure Compliance",
      description: "Meeting all infrastructure requirements as per regulatory standards",
      status: "Active"
    },
    {
      title: "Faculty Qualification",
      description: "All faculty members meet the required qualification standards",
      status: "Active"
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
            <span className="text-primary-600">Application and Certification</span>
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
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Application and Certification</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  V. J. Shinde Institute of Pharmacy is duly recognized and affiliated by various regulatory bodies and educational authorities, ensuring quality education and valid certifications.
                </p>
              </div>

              {/* Approvals and Affiliations */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Approvals and Affiliations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {approvals.map((approval, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-600">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <approval.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{approval.name}</h3>
                          <p className="text-primary-600 text-sm font-medium">{approval.status}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-600 text-sm font-medium">{approval.code}</p>
                        <p className="text-gray-600 text-sm">{approval.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Quality Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-800">{cert.title}</h3>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Information</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">All programs are approved by relevant regulatory bodies</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Degrees and diplomas are recognized nationwide</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Students are eligible for government scholarships and benefits</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Placement assistance and career guidance provided</span>
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
                <Link to="/about/governing-body" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Governing Body
                </Link>
                <Link to="/about/affiliation-certification" className="block text-primary-600 font-medium border-b border-dotted border-primary-300 pb-1">
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

            {/* Quick Stats */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Total Intake</h4>
                  <p className="text-gray-600 text-sm">60 Students</p>
                </div>
                <div className="border-l-4 border-secondary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Program Duration</h4>
                  <p className="text-gray-600 text-sm">2 Years (4 Semesters)</p>
                </div>
                <div className="border-l-4 border-accent-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Establishment</h4>
                  <p className="text-gray-600 text-sm">2025</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AffiliationCertification;