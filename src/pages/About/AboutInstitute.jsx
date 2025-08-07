import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, BookOpen, Building, MapPin, Phone, Mail } from 'lucide-react';

const AboutInstitute = () => {
  const salientFeatures = [
    "Good infrastructure",
    "Well-equipped laboratories",
    "Well qualified, experienced and trained teaching staff",
    "Special attention given to students for training and placement",
    "Extra guidance given for personality development of the student",
    "Extra-curricular activities like sports, seminars, industrial visits are conducted",
    "Periodic liaison with parents/guardians",
    "Training & placement cell available",
    "Hygienic and nutritious food provided by Mess",
    "Internet facility available all time"
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
            <Link to="/about/institute" className="text-primary-600 hover:text-primary-700">About V. J. Shinde Institute of Pharmacy</Link>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="card">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">About V. J. Shinde Institute of Pharmacy</h1>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">About V. J. Shinde Institute of Pharmacy Osmanabad</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    The institute is established in the year 2025. And with approval from All India Council of Technical Education (AICTE) New Delhi and Govt. of Maharashtra. Also affiliated by MSBTE, Mumbai. V. J. Shinde Institute of Pharmacy, dharashiv provides a strong foundation in pharmaceutical sciences, including theoretical knowledge and practical training, preparing students for a rewarding career as pharmacy technicians. Our institute is having total 60 intake.
                  </p>
                  <p>
                    It consists of best Diploma pharmacy college, spacious buildings for various Departments, sports ground, canteen, and mess which are spread over large area of land. The plot has been developed into a beautiful landscape in the vicinity of Dharashiv.
                  </p>
                  <p>
                    Dharashiv Station is about 11 kilometres away from the institute. The Institute is at 6 kilometres distance from dharashiv bus stand. The VJ Shinde polytechnic is a top Diploma engineering colleges in dharashiv. It is very well connected by bus routes with many parts of dharashiv City.
                  </p>
                </div>
              </div>

              {/* Salient Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Salient Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {salientFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

       
             
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Upcoming Events */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">o Upcoming Events o</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Medical Checkup Camp</span>
                  <span className="text-gray-400 text-xs">📤</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                  <span className="text-gray-700 text-sm">ALUMINI MEET</span>
                  <span className="text-gray-400 text-xs">📤</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Technical Quiz and Paper Presentation</span>
                  <span className="text-gray-400 text-xs">📤</span>
                </div>
              </div>
            </div>

            {/* Boards */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">o BOARDS o</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Award className="w-8 h-8 text-gray-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">PCI</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <BookOpen className="w-8 h-8 text-gray-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">DTE</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-8 h-8 text-gray-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">BOARD OF TECHNICAL</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Building className="w-8 h-8 text-gray-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">MSBTE</p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-600 text-sm">Varuda Road, Dharashiv (Osmanabad) - 413501</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-600 text-sm">+91 9356039880</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-600 text-sm">vjspco2529@gmail.com</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutInstitute;