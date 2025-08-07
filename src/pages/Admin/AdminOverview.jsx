import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, FileText, Calendar, Award, Bell, 
  TrendingUp, CheckCircle, AlertCircle, Plus,
  Eye, Edit, Trash2, Download, Upload
} from 'lucide-react';

const AdminOverview = () => {
  const [recentActivities] = useState([
    {
      id: 1,
      type: 'notice',
      title: 'New Notice Added',
      description: 'Admissions Open for D.Pharmacy 2025-26',
      time: '2 hours ago',
      icon: Bell,
      color: 'text-red-500'
    },
    {
      id: 2,
      type: 'result',
      title: 'Result Published',
      description: 'First Year D.Pharmacy Results',
      time: '1 day ago',
      icon: Award,
      color: 'text-green-500'
    },
    {
      id: 3,
      type: 'event',
      title: 'Event Created',
      description: 'Annual Sports Meet 2025',
      time: '2 days ago',
      icon: Calendar,
      color: 'text-blue-500'
    },
    {
      id: 4,
      type: 'circular',
      title: 'Circular Updated',
      description: 'Academic Calendar 2024-25',
      time: '3 days ago',
      icon: FileText,
      color: 'text-purple-500'
    }
  ]);

  const stats = [
    {
      title: 'Total Notices',
      value: '24',
      change: '+12%',
      icon: Bell,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Active Results',
      value: '8',
      change: '+5%',
      icon: Award,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Upcoming Events',
      value: '6',
      change: '+2',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Faculty Members',
      value: '15',
      change: '+1',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const quickActions = [
    {
      title: 'Add Notice',
      description: 'Create new notice or announcement',
      icon: Plus,
      path: '/admin/notices',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Publish Result',
      description: 'Upload and publish exam results',
      icon: Award,
      path: '/admin/results',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Create Event',
      description: 'Schedule new events or activities',
      icon: Calendar,
      path: '/admin/events',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Add Circular',
      description: 'Upload circulars and documents',
      icon: FileText,
      path: '/admin/circulars',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="text-blue-100">Manage your college website content and stay updated with the latest activities.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Link
                key={index}
                to={action.path}
                className="group p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Recent Activities</h2>
          <Link to="/admin/activities" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </Link>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm`}>
                  <IconComponent className={`w-5 h-5 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Website Status</span>
              <span className="flex items-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                Online
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Database</span>
              <span className="flex items-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Storage</span>
              <span className="flex items-center text-orange-600">
                <AlertCircle className="w-4 h-4 mr-1" />
                75% Used
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Last Backup</span>
              <span className="text-gray-600">2 hours ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Students</span>
              <span className="font-semibold text-gray-800">120</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Faculty Members</span>
              <span className="font-semibold text-gray-800">15</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Active Courses</span>
              <span className="font-semibold text-gray-800">2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">This Month Visitors</span>
              <span className="font-semibold text-gray-800">1,250</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview; 