import { useState } from 'react';
import { Send } from 'lucide-react';

const QuoteForm = ({ variant = 'hero' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    suburb: '',
    preferredDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // Simulate submission
    setTimeout(() => {
      alert('Thank you! We will contact you soon.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        suburb: '',
        preferredDate: '',
        message: ''
      });
    }, 1000);
  };

  const services = [
    'Carpet Patching',
    'Carpet Damage Repair',
    'Pet Damage Repair',
    'Stain Removal',
    'Carpet Stretching',
    'Rental/Bond Carpet Repairs'
  ];

  return (
    <div className={`bg-white rounded-lg shadow-xl p-6 lg:p-8 ${variant === 'hero' ? '' : 'max-w-2xl mx-auto'}`}>
      <h3 className="text-2xl font-bold mb-6" style={{ color: '#2454C6' }}>
        Request a Free Quote
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all"
              placeholder="04XX XXX XXX"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-1">
              Suburb
            </label>
            <input
              type="text"
              id="suburb"
              name="suburb"
              value={formData.suburb}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all"
              placeholder="Brisbane suburb"
            />
          </div>
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all resize-none"
            placeholder="Describe the carpet issue..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center disabled:opacity-50"
          style={{ backgroundColor: '#28C76F' }}
        >
          {isSubmitting ? 'Sending...' : 'GET A FREE QUOTE'}
          <Send className="ml-2 w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
