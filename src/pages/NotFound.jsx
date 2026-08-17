import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold" style={{ color: '#2454C6' }}>
            404
          </h1>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          style={{ backgroundColor: '#28C76F' }}
        >
          <Home className="w-5 h-5 mr-2" />
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
