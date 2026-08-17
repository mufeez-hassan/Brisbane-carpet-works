import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const PricingCard = ({ title, features, featured = false }) => {
  return (
    <div className={`rounded-lg p-8 ${featured ? 'shadow-2xl border-2' : 'bg-white shadow-lg border border-gray-100'}`}
      style={featured ? { backgroundColor: '#EEF4FF', borderColor: '#2454C6' } : {}}>
      {featured && (
        <div className="inline-block px-4 py-1 rounded-full text-white text-sm font-semibold mb-4" style={{ backgroundColor: '#28C76F' }}>
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#2454C6' }}>
        {title}
      </h3>
      <p className="text-4xl font-bold mb-6 text-gray-900">
        Request A Quote
      </p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#28C76F' }} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/booking"
        className="block w-full text-center px-6 py-4 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
        style={{ backgroundColor: '#28C76F' }}
      >
        GET A FREE QUOTE
      </Link>
    </div>
  );
};

export default PricingCard;
