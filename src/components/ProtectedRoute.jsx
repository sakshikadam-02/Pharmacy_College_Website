import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AdminLogin from '../pages/Admin/AdminLogin';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = () => {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    setIsAuthenticated(adminLoggedIn);
    setIsLoading(false);
  };

  useEffect(() => {
    checkAuth();
    
    // Listen for custom admin login event
    const handleAdminLogin = () => {
      console.log('Admin login event received');
      checkAuth();
    };

    window.addEventListener('adminLogin', handleAdminLogin);
    
    return () => {
      window.removeEventListener('adminLogin', handleAdminLogin);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return children;
};

export default ProtectedRoute; 