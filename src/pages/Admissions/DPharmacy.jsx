import { Link } from 'react-router-dom';
import { BookOpen, Users, Clock, Award, CheckCircle, Download } from 'lucide-react';

const DPharmacy = () => {
  const programDetails = [
    {
      icon: BookOpen,
      title: "Program Duration",
      description: "2 Years (4 Semesters)"
    },
    {
      icon: Users,
      title: "Total Intake",
      description: "60 Students"
    },
    {
      icon: Award,
      title: "Approval",
      description: "Approved by Pharmacy Council of India (PCI)"
    },
    {
      icon: Clock,
      title: "Affiliation",
      description: "Affiliated to MSBTE, Mumbai"
    }
  ];

  const eligibilityCriteria = [
    "Candidates must have passed 10+2 examination with Physics, Chemistry, and Biology/Mathematics",
    "Minimum 50% marks in aggregate (45% for reserved categories)",
    "Age limit: 17-25 years as on 1st October of the admission year",
    "Candidates must be medically fit",
    "Domicile of Maharashtra is preferred"
  ];

  const admissionProcess = [
    "Fill the online application form",
    "Submit required documents",
    "Pay application fee",
    "Attend counseling session",
    "Complete document verification",
    "Pay admission fee and confirm seat"
  ];

  const requiredDocuments = [
    "10th and 12th mark sheets",
    "Transfer certificate",
    "Migration certificate (if applicable)",
    "Domicile certificate",
    "Caste certificate (if applicable)",
    "Income certificate (if applicable)",
    "Passport size photographs",
    "Aadhar card copy"
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
            <span className="text-primary-600">D. Pharmacy</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">D. Pharmacy Program</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Diploma in Pharmacy (D. Pharm) is a 2-year program designed to prepare students for a career as pharmacy technicians. 
            The program provides comprehensive knowledge of pharmaceutical sciences and practical training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Program Overview */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programDetails.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <detail.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{detail.title}</h3>
                      <p className="text-gray-600 text-sm">{detail.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Eligibility Criteria</h2>
              <div className="space-y-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Process */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Admission Process</h2>
              <div className="space-y-4">
                {admissionProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{step}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Required Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">{document}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Structure */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Structure</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">First Year</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Semester 1</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Pharmaceutics-I</li>
                        <li>• Pharmaceutical Chemistry-I</li>
                        <li>• Pharmacognosy</li>
                        <li>• Human Anatomy & Physiology</li>
                        <li>• Social Pharmacy</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Semester 2</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Pharmaceutics-II</li>
                        <li>• Pharmaceutical Chemistry-II</li>
                        <li>• Drug Store & Business Management</li>
                        <li>• Health Education & Community Pharmacy</li>
                        <li>• Pharmaceutical Jurisprudence</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Second Year</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Semester 3</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Pharmaceutics-III</li>
                        <li>• Pharmaceutical Chemistry-III</li>
                        <li>• Pharmacology & Toxicology</li>
                        <li>• Pharmaceutical Analysis</li>
                        <li>• Drug Store & Business Management</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Semester 4</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Pharmaceutics-IV</li>
                        <li>• Pharmaceutical Chemistry-IV</li>
                        <li>• Pharmacology & Toxicology</li>
                        <li>• Pharmaceutical Analysis</li>
                        <li>• Hospital & Clinical Pharmacy</li>
                      </ul>
                    </div>
                  </div>
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
                <Link to="/admissions/information-brochure" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Brochure</span>
                </Link>
                <button className="btn-secondary w-full flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                </button>
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

          </div>

        </div>
      </div>
    </div>
  );
};

export default DPharmacy; 