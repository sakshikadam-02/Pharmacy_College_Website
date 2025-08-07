import { Link } from 'react-router-dom';
import { Camera, Image, Users, Building } from 'lucide-react';

const Gallery = () => {
  const galleryCategories = [
    {
      title: "Campus Life",
      description: "Beautiful campus views and student activities",
      count: "24 Photos",
      icon: Building
    },
    {
      title: "Laboratories",
      description: "Modern pharmaceutical laboratories and equipment",
      count: "18 Photos",
      icon: Image
    },
    {
      title: "Events & Celebrations",
      description: "Cultural events, seminars, and celebrations",
      count: "32 Photos",
      icon: Camera
    },
    {
      title: "Student Activities",
      description: "Students in various academic and extracurricular activities",
      count: "28 Photos",
      icon: Users
    }
  ];

  const recentPhotos = [
    { id: 1, title: "Main Building", category: "Campus" },
    { id: 2, title: "Pharmacy Lab", category: "Laboratory" },
    { id: 3, title: "Independence Day", category: "Events" },
    { id: 4, title: "Students in Lab", category: "Activities" },
    { id: 5, title: "Library", category: "Campus" },
    { id: 6, title: "Workshop Session", category: "Activities" }
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
            <Link to="/students-zone/gallery" className="text-primary-600 hover:text-primary-700">Students Zone</Link>
            <span className="text-gray-500">{'>'}</span>
            <span className="text-primary-600">Gallery</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our photo gallery showcasing campus life, academic activities, events, and the beautiful infrastructure 
            of V. J. Shinde Institute of Pharmacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Gallery Categories */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Gallery Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryCategories.map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{category.title}</h3>
                        <p className="text-gray-600 text-sm">{category.count}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Photos */}
            <div className="card mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Photos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentPhotos.map((photo, index) => (
                  <div key={index} className="bg-gray-200 rounded-lg p-4 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 text-sm font-medium">{photo.title}</p>
                      <p className="text-gray-500 text-xs">{photo.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Upload Section */}
            <div className="card mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Share Your Photos</h2>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Upload Photos</h3>
                  <p className="text-gray-600 mb-4">
                    Share your memorable moments from campus life, events, and activities.
                  </p>
                  <button className="btn-primary">
                    Upload Photos
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Stats */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Gallery Stats</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Total Photos</h4>
                  <p className="text-gray-600 text-sm">102 Photos</p>
                </div>
                <div className="border-l-4 border-secondary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Categories</h4>
                  <p className="text-gray-600 text-sm">4 Categories</p>
                </div>
                <div className="border-l-4 border-accent-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Latest Update</h4>
                  <p className="text-gray-600 text-sm">2 days ago</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Students Zone</h3>
              <div className="space-y-2">
                <Link to="/students-zone/alumni" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Alumni
                </Link>
                <Link to="/students-zone/gallery" className="block text-primary-600 font-medium border-b border-dotted border-primary-300 pb-1">
                  Gallery
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

            {/* Photo Guidelines */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Photo Guidelines</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Photos should be high quality and clear</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Respect privacy and get consent</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Include relevant descriptions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Follow institute guidelines</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Gallery; 