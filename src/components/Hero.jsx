import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import QuoteForm from './QuoteForm';

const Hero = () => {
  return (
    <section className="relative pt-20 bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
          alt="Professional carpet repair service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/75"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Hero Text */}
          <div className="text-white">
            <p className="text-sm font-semibold tracking-wider mb-4" style={{ color: '#28C76F' }}>
              PROFESSIONAL CARPET REPAIR
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Carpet Repairs That Help You Get Your Bond Back
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Professional carpet patching, pet damage repair and stain removal across Brisbane. 
              We repair damaged carpets and restore them to a clean, presentable condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: '#28C76F' }}
              >
                GET A FREE QUOTE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:0469950276"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                <Phone className="mr-2 w-5 h-5" />
                CALL NOW
              </a>
            </div>
            <p className="mt-6 text-gray-400 text-sm">
              Phone: <a href="tel:0469950276" className="text-white hover:text-[#28C76F] transition-colors">0469 950 276</a>
            </p>
          </div>

          {/* Right: Quote Form */}
          <div className="lg:mt-0">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
