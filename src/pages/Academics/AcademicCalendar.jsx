import { Link } from 'react-router-dom';
import { Calendar, Clock, BookOpen } from 'lucide-react';

const AcademicCalendar = () => {
  const academicEvents = [
    {
      month: "July 2025",
      events: [
        { date: "15-20 July", title: "Orientation Program", type: "Academic" },
        { date: "22 July", title: "Classes Begin", type: "Academic" },
        { date: "25 July", title: "First Faculty Meeting", type: "Administrative" }
      ]
    },
    {
      month: "August 2025",
      events: [
        { date: "5 August", title: "Independence Day Celebration", type: "Cultural" },
        { date: "15 August", title: "First Internal Assessment", type: "Academic" },
        { date: "20 August", title: "Industrial Visit", type: "Academic" }
      ]
    },
    {
      month: "September 2025",
      events: [
        { date: "5 September", title: "Teachers' Day Celebration", type: "Cultural" },
        { date: "15 September", title: "Second Internal Assessment", type: "Academic" },
        { date: "25 September", title: "Seminar on Pharmaceutical Technology", type: "Academic" }
      ]
    },
    {
      month: "October 2025",
      events: [
        { date: "2 October", title: "Gandhi Jayanti", type: "Holiday" },
        { date: "15 October", title: "Third Internal Assessment", type: "Academic" },
        { date: "20 October", title: "Workshop on Drug Analysis", type: "Academic" }
      ]
    },
    {
      month: "November 2025",
      events: [
        { date: "5 November", title: "Fourth Internal Assessment", type: "Academic" },
        { date: "15 November", title: "Children's Day Celebration", type: "Cultural" },
        { date: "25 November", title: "Guest Lecture Series", type: "Academic" }
      ]
    },
    {
      month: "December 2025",
      events: [
        { date: "10 December", title: "Fifth Internal Assessment", type: "Academic" },
        { date: "20 December", title: "Winter Break Begins", type: "Holiday" },
        { date: "31 December", title: "New Year Celebration", type: "Cultural" }
      ]
    }
  ];

  const holidays = [
    { date: "15 August", title: "Independence Day", type: "National Holiday" },
    { date: "2 October", title: "Gandhi Jayanti", type: "National Holiday" },
    { date: "26 January", title: "Republic Day", type: "National Holiday" },
    { date: "15 June", title: "Ramzan Eid", type: "Religious Holiday" },
    { date: "25 December", title: "Christmas", type: "Religious Holiday" }
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
            <Link to="/academics/calendar" className="text-primary-600 hover:text-primary-700">Academics</Link>
            <span className="text-gray-500">{'>'}</span>
            <span className="text-primary-600">Academic Calendar</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Academic Calendar 2025-26</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Important dates and events for the academic year 2025-26. Stay updated with all academic activities, 
            examinations, holidays, and cultural events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Academic Events */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Academic Events</h2>
              <div className="space-y-6">
                {academicEvents.map((month, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">{month.month}</h3>
                    <div className="space-y-3">
                      {month.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                          <div className="w-16 text-sm font-medium text-gray-600">{event.date}</div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{event.title}</h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              event.type === 'Academic' ? 'bg-blue-100 text-blue-800' :
                              event.type === 'Cultural' ? 'bg-green-100 text-green-800' :
                              event.type === 'Administrative' ? 'bg-purple-100 text-purple-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {event.type}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Holidays */}
            <div className="card mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Holidays</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {holidays.map((holiday, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-16 text-sm font-medium text-gray-600">{holiday.date}</div>
                    <div>
                      <h4 className="font-medium text-gray-800">{holiday.title}</h4>
                      <span className="text-xs text-gray-600">{holiday.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Info */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Year Info</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Academic Year</h4>
                  <p className="text-gray-600 text-sm">2025-26</p>
                </div>
                <div className="border-l-4 border-secondary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Semester 1</h4>
                  <p className="text-gray-600 text-sm">July - December 2025</p>
                </div>
                <div className="border-l-4 border-accent-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Semester 2</h4>
                  <p className="text-gray-600 text-sm">January - June 2026</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Total Working Days</h4>
                  <p className="text-gray-600 text-sm">180 Days</p>
                </div>
              </div>
            </div>

            {/* Important Dates */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Important Dates</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Classes Begin</h4>
                  <p className="text-gray-600 text-sm">22 July 2025</p>
                </div>
                <div className="border-l-4 border-secondary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">First Assessment</h4>
                  <p className="text-gray-600 text-sm">15 August 2025</p>
                </div>
                <div className="border-l-4 border-accent-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Winter Break</h4>
                  <p className="text-gray-600 text-sm">20 Dec - 5 Jan</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Summer Break</h4>
                  <p className="text-gray-600 text-sm">15 May - 30 June</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/academics/exam-timetable" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Exam Time Table
                </Link>
                <Link to="/academics/syllabus" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Syllabus
                </Link>
                <Link to="/academics/results" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Results
                </Link>
                <Link to="/academics/rankers" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 border-b border-dotted border-gray-300 pb-1">
                  Rankers
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Office</h3>
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

export default AcademicCalendar; 