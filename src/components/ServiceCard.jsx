import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-lg" style={{ backgroundColor: '#EEF4FF' }}>
        <Icon className="w-8 h-8" style={{ color: '#2454C6' }} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>
      {link && (
        <Link
          to={link}
          className="inline-flex items-center text-sm font-semibold transition-colors group-hover:translate-x-1 duration-300"
          style={{ color: '#2454C6' }}
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
