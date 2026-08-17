import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const CTASection = ({ 
  title, 
  description, 
  primaryButtonText = "GET A FREE QUOTE",
  primaryButtonLink = "/booking",
  secondaryButtonText = "CALL 0469 950 276",
  secondaryButtonPhone = "0469950276"
}) => {
  return (
    <section className="py-16 lg:py-20" style={{ backgroundColor: '#2454C6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryButtonLink}
            className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg hover:shadow-xl transition-all"
            style={{ backgroundColor: '#28C76F' }}
          >
            {primaryButtonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <a
            href={`tel:${secondaryButtonPhone}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2454C6] font-semibold rounded-lg hover:bg-gray-100 transition-all"
          >
            <Phone className="mr-2 w-5 h-5" />
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
