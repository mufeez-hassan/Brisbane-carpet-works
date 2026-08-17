import { Star } from 'lucide-react';

const TestimonialCard = ({ name, rating, review }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 border border-gray-100">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{review}"</p>
      <p className="font-semibold text-gray-900">{name}</p>
    </div>
  );
};

export default TestimonialCard;
