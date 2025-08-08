import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Star, ChevronLeft, ChevronRight, Award, Users, BookOpen,
  GraduationCap, Building, Library, Coffee, Calendar, Clock,
  TrendingUp, CheckCircle, AlertCircle, Info, ArrowRight,
  MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin,
  FileText, Download, Eye, ExternalLink
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  // Hero slides with enhanced content
  const heroSlides = [
    {
      title: "Welcome to V. J. Shinde Institute of Pharmacy",
      subtitle: "Excellence in Pharmaceutical Education Since 2025",
      description: "Empowering students with quality education and modern infrastructure for a successful career in pharmacy.",
      icon: GraduationCap,
      bgClass: "bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800",
      image: "/images/img1.jpg"
    },
    {
      title: "PCI Approved Programs",
      subtitle: "100% Approved by Pharmacy Council of India",
      description: "Our D.Pharmacy program is fully approved and recognized by PCI, ensuring quality education standards.",
      icon: Award,
      bgClass: "bg-gradient-to-br from-green-600 via-emerald-600 to-green-800",
      image: "/images/img8.jpg"
    },
    {
      title: "Modern Infrastructure",
      subtitle: "State-of-the-Art Facilities & Equipment",
      description: "Experience world-class laboratories, library, and facilities designed for practical learning excellence.",
      icon: Building,
      bgClass: "bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800",
      image: "/images/img3.jpg"
    },
    {
      title: "Expert Faculty",
      subtitle: "Experienced Teaching Staff",
      description: "Learn from qualified and experienced faculty members dedicated to your academic success.",
      icon: Users,
      bgClass: "bg-gradient-to-br from-orange-600 via-red-600 to-orange-800",
      image: "/images/img4.jpg"
    }
  ];

  // Sliding notifications
  const notifications = [
    {
      type: "info",
      message: "🎓 Admissions Open for D.Pharmacy 2025-26 Academic Year",
      icon: Info,
      color: "from-blue-500 to-blue-600"
    },
    {
      type: "success",
      message: "✅ PCI Approval Certificate Received - 100% Recognition",
      icon: CheckCircle,
      color: "from-green-500 to-green-600"
    },
    {
      type: "warning",
      message: "📚 Library Timings Extended - Now Open 8 AM to 8 PM",
      icon: AlertCircle,
      color: "from-orange-500 to-orange-600"
    },
    {
      type: "info",
      message: "🏆 Student Achievements - 95% Placement Rate in 2024",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Latest Circulars data
  const circulars = [
    {
      title: "Direct Second Year Institute Level Round",
      date: "September 05, 2024",
      snippet: "Direct Second Year Institute Level Round - Important information for D.Pharmacy second year admissions...",
      type: "admission",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "First Year Institute Level Round",
      date: "September 05, 2024",
      snippet: "First Year Institute Level Round - Complete details about first year D.Pharmacy admissions...",
      type: "admission",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Academic Calendar 2024-25",
      date: "August 28, 2024",
      snippet: "Updated academic calendar for the current academic year with all important dates...",
      type: "academic",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Examination Schedule - Semester 1",
      date: "August 20, 2024",
      snippet: "First semester examination schedule has been announced. Check your roll numbers...",
      type: "exam",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Upcoming Events data
  const upcomingEvents = [
    {
      title: "Prize Distribution Ceremony",
      subtitle: "Engineous - 2024",
      date: "11",
      month: "OCTOBER",
      year: "2024",
      time: "11:00 AM",
      location: "VJSP Seminar Hall",
      description: "Annual prize distribution ceremony for outstanding students and achievements...",
      type: "ceremony",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Industrial Visit",
      subtitle: "Pharmaceutical Industry",
      date: "05",
      month: "SEPTEMBER",
      year: "2024",
      time: "10:00 AM",
      location: "Local Pharmaceutical Plant",
      description: "Educational visit to pharmaceutical manufacturing unit for practical exposure...",
      type: "visit",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Orientation Program",
      subtitle: "New Students 2024",
      date: "15",
      month: "AUGUST",
      year: "2024",
      time: "9:00 AM",
      location: "VJSP Auditorium",
      description: "Welcome orientation program for new D.Pharmacy students...",
      type: "orientation",
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Notice Board data
  const notices = [
    {
      title: "Admissions Open",
      date: "2025-01-15",
      status: "active",
      description: "D.Pharmacy admissions are now open for the academic year 2025-26",
      type: "admission",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Exam Schedule",
      date: "2025-01-20",
      status: "upcoming",
      description: "First semester examination schedule has been announced",
      type: "exam",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Library Timings",
      date: "2025-01-10",
      status: "active",
      description: "Library timings extended - Now open 8 AM to 8 PM",
      type: "facility",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Academic Calendar",
      date: "2025-01-05",
      status: "active",
      description: "Updated academic calendar for the current academic year",
      type: "academic",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Stats data
  const stats = [
    { number: "60+", label: "Students", icon: Users, color: "from-blue-500 to-blue-600" },
    { number: "100%", label: "PCI Approved", icon: Award, color: "from-green-500 to-green-600" },
    { number: "15+", label: "Expert Faculty", icon: GraduationCap, color: "from-purple-500 to-purple-600" },
    { number: "5+", label: "Years Experience", icon: Clock, color: "from-orange-500 to-orange-600" }
  ];

  // Features data
  const features = [
    {
      title: "PCI Approved",
      description: "Fully recognized by Pharmacy Council of India",
      icon: Award,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Modern Labs",
      description: "State-of-the-art pharmaceutical laboratories",
      icon: Building,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Expert Faculty",
      description: "Qualified and experienced teaching staff",
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Library",
      description: "Extensive collection of pharmaceutical books",
      icon: Library,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Canteen",
      description: "Hygienic and affordable food facilities",
      icon: Coffee,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Placement Support",
      description: "Career guidance and placement assistance",
      icon: TrendingUp,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  // Programs data
  const programs = [
    {
      title: "D.Pharmacy",
      duration: "2 Years",
      seats: "60 Seats",
      description: "Diploma in Pharmacy program approved by PCI",
      features: ["PCI Approved", "Practical Training", "Industry Visits", "Placement Support"],
      color: "from-blue-500 to-blue-600"
    }
  ];

  // Facilities data
  const facilities = [
    {
      title: "Modern Laboratories",
      description: "Well-equipped pharmaceutical labs with latest instruments",
      icon: Building,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources",
      icon: Library,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Computer Lab",
      description: "Latest computers with pharmaceutical software",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Canteen",
      description: "Hygienic and affordable food facilities",
      icon: Coffee,
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "D.Pharmacy Student",
      content: "Excellent faculty and modern facilities. The practical training is outstanding!",
      rating: 5,
      avatar: "RS"
    },
    {
      name: "Priya Patel",
      role: "Alumni",
      content: "Great learning environment and supportive staff. Highly recommended!",
      rating: 5,
      avatar: "PP"
    },
    {
      name: "Amit Kumar",
      role: "Parent",
      content: "My daughter is getting quality education here. Very satisfied with the institute.",
      rating: 5,
      avatar: "AK"
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    // Auto-advance hero slides
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    // Auto-advance notifications
    const notificationInterval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 4000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(notificationInterval);
    };
  }, [heroSlides.length, notifications.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`min-h-screen ${isVisible ? 'fade-in' : ''}`}>
      {/* Sliding Notifications Bar */}
      <div className="bg-gradient-to-r bg-[#2a86e9] text-white py-1.5 overflow-hidden relative">

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="flex-shrink-0">
              {(() => {
                const IconComponent = notifications[currentNotification].icon;
                return <IconComponent className="w-5 h-5 animate-pulse" />;
              })()}
            </div>
            <div className="flex-1 text-center overflow-hidden">
              <div
                className="transition-all duration-1000 ease-in-out transform flex"
                style={{ transform: `translateX(-${currentNotification * 100}%)` }}
              >
                {notifications.map((notification, index) => (
                  <div key={index} className="flex-shrink-0 w-full text-center">
                    <p className="text-sm font-medium animate-pulse">
                      {notification.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-1">
              {notifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNotification(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentNotification ? 'bg-white' : 'bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Sliding Images */}
      <section className={`relative h-screen overflow-hidden`}>
        {/* Blurred Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/background.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>



        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Text Content */}
              <div className="text-white space-y-6 slide-in-left">

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>

                <h2 className="text-xl md:text-2xl text-yellow-300 font-semibold">
                  {heroSlides[currentSlide].subtitle}
                </h2>

                <p className="text-lg text-white/90 leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/admissions/d-pharmacy" className="btn-primary inline-flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link to="/about/institute" className="btn-outline text-white border-white hover:bg-white hover:text-blue-600">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="relative slide-in-right">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Image Container */}
                  <div
                    className="w-full h-full transition-all duration-1000 ease-in-out transform"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {heroSlides.map((slide, index) => (
                      <div
                        key={index}
                        className="absolute inset-0 w-full h-full"
                        style={{ left: `${index * 100}%` }}
                      >
                        <div className="w-full h-full rounded-2xl overflow-hidden relative">
                          {/* Main Image */}
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover rounded-2xl animate-pulse-slow"
                            onLoad={(e) => {
                              e.target.style.display = 'block';
                              const fallback = e.target.nextElementSibling;
                              if (fallback) fallback.style.display = 'none';
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              const fallback = e.target.nextElementSibling;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />

                          {/* Gradient Overlay for better text readability */}
                          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 rounded-2xl"></div>



                          {/* Fallback for missing images */}
                          <div className="hidden w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl items-center justify-center">
                            <div className="text-center text-white">
                              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                {(() => {
                                  const IconComponent = slide.icon;
                                  return <IconComponent className="w-8 h-8" />;
                                })()}
                              </div>
                              <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                              <p className="text-sm opacity-90">{slide.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group z-20"
                  >
                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group z-20"
                  >
                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Circular & Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Latest Circular */}
            <div className="card hover-lift">
              <div className="bg-gradient-to-r bg-blue-800 text-white px-6 py-4 rounded-t-xl -mt-6 -mx-6 mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Latest Circular
                </h3>
              </div>
              <div className="space-y-4 max-h-80 overflow-y-auto ">
                {circulars.map((circular, index) => (
                  <div
                    key={index}
                    className="group/item p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r bg-[#297dd6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 mb-2 group-hover/[#5B0206] transition-colors">
                          {circular.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {circular.snippet}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-orange-600 font-medium">
                            {circular.date}
                          </span>
                          <div className="flex space-x-2">
                            <button className="p-1 text-gray-400 hover:text-[#2a2929] transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  VIEW ALL
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="card hover-lift">
              <div className="bg-gradient-to-r bg-blue-800 text-white px-6 py-4 rounded-t-xl -mt-6 -mx-6 mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Upcoming Events
                </h3>
              </div>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="group/item p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Date Block */}
                      <div className="w-16 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex flex-col items-center justify-center text-white font-bold flex-shrink-0 group-hover/item:scale-110 transition-transform relative">
                        <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full opacity-50"></div>
                        <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full opacity-50"></div>
                        <div className="text-lg leading-tight">{event.date}</div>
                        <div className="text-xs leading-tight">{event.month}</div>
                        <div className="w-full bg-blue-800 text-center text-xs py-1 mt-1">
                          {event.year}
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 mb-1 group-hover/item:text-blue-600 transition-colors">
                          {event.title}
                        </h4>
                        {event.subtitle && (
                          <p className="text-sm text-gray-500 mb-2 italic">
                            {event.subtitle}
                          </p>
                        )}
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {event.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {event.time}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {event.location}
                            </span>
                          </div>
                          <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  VIEW ALL
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Notice Board Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card hover-lift">
               <div className="bg-blue-800 text-white px-6 py-4 rounded-t-xl -mt-6 -mx-6 mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <AlertCircle className="w-6 h-6 mr-3" />
                  Notice Board
                </h3>
              </div>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {notices.map((notice, index) => (
                  <div key={index} className="group/item p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-4">
                      {/* Notice Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-r ${notice.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>

                      {/* Notice Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors">
                            {notice.title}
                          </h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${notice.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                            {notice.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {notice.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {notice.date}
                          </span>
                          <div className="flex space-x-2">
                            <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="w-full  bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold  transition-all duration-300 transform hover:scale-105 shadow-lg">
                  VIEW ALL NOTICES
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Choose VJSP?</h2>
          <p className="section-subtitle">
            Experience excellence in pharmaceutical education with our comprehensive facilities and expert faculty
          </p>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="card slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">
            State-of-the-art infrastructure designed for comprehensive learning
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="card slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 bg-gradient-to-r ${facility.color} rounded-full flex items-center justify-center mb-6`}>
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Hear from our students about their experience at VJSP
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="cta-section">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join V. J. Shinde Institute of Pharmacy and build a successful career in pharmacy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions/d-pharmacy" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Apply Now
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;