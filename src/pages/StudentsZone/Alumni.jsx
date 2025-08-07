import { Link } from 'react-router-dom';
import { Users, GraduationCap, Briefcase, Mail } from 'lucide-react';

const Alumni = () => {
  const alumniStats = [
    {
      title: "Total Alumni",
      value: "500+",
      description: "Graduates since establishment",
      icon: Users
    },
    {
      title: "Employed",
      value: "85%",
      description: "Placement rate",
      icon: Briefcase
    },
    {
      title: "Higher Studies",
      value: "15%",
      description: "Pursuing further education",
      icon: GraduationCap
    },
    {
      title: "Active Network",
      value: "300+",
      description: "Registered alumni members",
      icon: Mail
    }
  ];

  const alumniTestimonials = [
    {
      name: "Rahul Sharma",
      batch: "2020-22",
      position: "Pharmacy Technician",
      company: "Apollo Hospitals",
      testimonial: "The institute provided excellent foundation in pharmaceutical sciences. The practical training helped me secure a good position."
    },
    {
      name: "Priya Patel",
      batch: "2019-21",
      position: "Drug Store Manager",
      company: "MedPlus Pharmacy",
      testimonial: "Quality education and supportive faculty made my learning journey memorable. I'm grateful for the opportunities provided."
    },
    {
      name: "Amit Kumar",
      batch: "2021-23",
      position: "Quality Control Analyst",
      company: "Cipla Ltd",
      testimonial: "The industry-relevant curriculum and hands-on training prepared me well for the pharmaceutical industry."
    }
  ];

  const alumniEvents = [
    {
      title: "Alumni Meet 2025",
      date: "March 15, 2025",
      description: "Annual alumni gathering and networking event"
    },
    {
      title: "Career Guidance Session",
      date: "April 10, 2025",
      description: "Alumni sharing career insights with current students"
    },
    {
      title: "Industry Visit",
      date: "May 20, 2025",
      description: "Alumni-led industrial visit for current students"
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
            <Link to="/students-zone/alumni" className="text-primary-600 hover:text-primary-700">Students Zone</Link>
            <span className="text-gray-500">{'>'}</span>
            <span className="text-primary-600">Alumni</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Alumni Network</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Connect with our successful alumni network. Stay updated with alumni events, career opportunities, 
            and contribute to the growth of our institute community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Alumni Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {alumniStats.map((stat, index) => (
                <div key={index} className="card text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                  <h4 className="font-semibold text-gray-800 mb-2">{stat.title}</h4>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* Alumni Testimonials */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Alumni Testimonials</h2>
              <div className="space-y-6">
                {alumniTestimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-6">
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-primary-600 text-sm">{testimonial.batch} • {testimonial.position}</p>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Alumni Events */}
            <div className="card mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Alumni Events</h2>
              <div className="space-y-4">
                {alumniEvents.map((event, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">{event.title}</h3>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary-600 font-medium">{event.date}</p>
                        <button className="btn-primary text-sm mt-2">Register</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alumni Registration */}
            <div className="card mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Join Alumni Network</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  Are you an alumnus of V. J. Shinde Institute of Pharmacy? Register with our alumni network 
                  to stay connected and receive updates about events and opportunities.
                </p>
                <button className="btn-primary">
                  Register as Alumni
                </button>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Links */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Students Zone</h3>
              <div className="space-y-2">
                <Link to="/students-zone/alumni" className="block text-primary-600 font-medium border-b border-dotted border-primary-300 pb-1">
                  Alumni
                </Link>
                <Link to="/students-zone/gallery" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Gallery
                </Link>
              </div>
            </div>

            {/* Alumni Benefits */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Alumni Benefits</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Access to institute library</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Career guidance and placement support</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Networking opportunities</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Invitation to institute events</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mentorship opportunities</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Alumni Office</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600 text-sm">Phone: +91 9356039880</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600 text-sm">Email: alumni@vjsp.edu.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600 text-sm">Office Hours: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary text-sm">
                  LinkedIn Group
                </button>
                <button className="w-full btn-secondary text-sm">
                  WhatsApp Group
                </button>
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm">
                  Facebook Page
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Alumni; 