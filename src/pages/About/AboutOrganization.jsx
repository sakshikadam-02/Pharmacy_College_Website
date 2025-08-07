import { Link } from 'react-router-dom';
import { Users, BookOpen, Award, Building } from 'lucide-react';

const AboutOrganization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <span className="text-gray-500">You are here: </span>
            <Link to="/" className="text-primary-600 hover:text-primary-700 hover:underline">Home</Link>
            <span className="text-gray-500 mx-2">{'>'}</span>
            <span className="text-primary-600 hover:text-primary-700">About Organization</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: Organization Description */}
          <div className="w-full lg:w-2/3 bg-white shadow rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About Organization</h1>

            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Shri. Swami Samarth Bahuuddheshiya Shaikshanik Samajik Sanstha & Krida Mandal's</strong>, established in 2007,
              has been successfully administering the V. J. Shinde Polytechnic Centre for more than 10 years.
              From 2025, the organization has also started the <strong>V. J. Shinde Institute of Pharmacy</strong>.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              V. J. Shinde Polytechnic has been dedicated to the service of humanity through the propagation
              and promotion of technical education. Over the last decade, it has emerged as a hub of quality education,
              committed to nurturing talent and developing skilled professionals.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              The organization is governed by a board of trustees responsible for its strategic management and
              administration. The board comprises eminent personalities from various fields who are deeply committed
              to the cause of education and social welfare.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              These members play a key role in policy formulation, ensuring financial stability,
              and maintaining high standards in education and services provided by the Polytechnic.
            </p>
          </div>

          {/* Right: Affiliations Section */}
          <div className="w-full lg:w-1/3 bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Affiliations & Recognitions</h2>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="w-16 h-16 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium">PCI</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <BookOpen className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium">DTE</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium">Board of Technical</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <Building className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium">MSBTE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOrganization;