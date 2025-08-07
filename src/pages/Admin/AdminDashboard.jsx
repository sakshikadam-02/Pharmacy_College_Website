import { useState } from 'react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, FileText, Users, Calendar, Award, 
  Settings, LogOut, Plus, Eye, Edit, Trash2,
  Bell, BookOpen, GraduationCap, Building, 
  TrendingUp, CheckCircle, AlertCircle, Info
} from 'lucide-react';

// Import admin sub-components
import AdminOverview from './AdminOverview';
import NoticesManagement from './NoticesManagement';
import ResultsManagement from './ResultsManagement';
import FacultyManagement from './FacultyManagement';
import EventsManagement from './EventsManagement';
import CircularsManagement from './CircularsManagement';
import SettingsManagement from './SettingsManagement';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminUser');
    navigate('/');
  };

  const adminMenuItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Notices',
      icon: Bell,
      path: '/admin/notices',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Results',
      icon: Award,
      path: '/admin/results',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Circulars',
      icon: FileText,
      path: '/admin/circulars',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Events',
      icon: Calendar,
      path: '/admin/events',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Faculty',
      icon: Users,
      path: '/admin/faculty',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/admin/settings',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-6 h-1 bg-gray-600 rounded"></div>
                <div className="w-6 h-1 bg-gray-600 rounded"></div>
                <div className="w-6 h-1 bg-gray-600 rounded"></div>
              </div>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">V. J. Shinde Institute of Pharmacy</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`bg-white shadow-lg transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-16'
        }`}>
          <nav className="p-4 space-y-2">
            {adminMenuItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive 
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg` 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'}`} />
                  {sidebarOpen && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
          <div className="p-6">
            <Routes>
              <Route index element={<AdminOverview />} />
              <Route path="notices" element={<NoticesManagement />} />
              <Route path="results" element={<ResultsManagement />} />
              <Route path="circulars" element={<CircularsManagement />} />
              <Route path="events" element={<EventsManagement />} />
              <Route path="faculty" element={<FacultyManagement />} />
              <Route path="settings" element={<SettingsManagement />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard; 