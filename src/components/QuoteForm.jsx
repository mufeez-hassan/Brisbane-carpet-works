import { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import { sendEmail } from '../services/emailService';

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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Prepare email data to business owner
    const businessEmailData = {
      // Original EmailJS default variables
      name: formData.name,
      email: formData.email,
      message: formData.message || 'No additional message',
      
      // Custom template variables (matching your HTML template)
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      suburb: formData.suburb,
      preferred_date: formData.preferredDate || 'Not specified',
      
      // Additional fields
      to_email: 'Brisbanecarpetworks@gmail.com',
      subject: `New Quote Request from ${formData.name}`
    };
    
    // Prepare confirmation email data to customer
    const customerEmailData = {
      name: formData.name,
      email: formData.email,
      from_name: formData.name,
      from_email: formData.email,
      to_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      suburb: formData.suburb,
      preferred_date: formData.preferredDate || 'Not specified',
      message: formData.message || 'No additional message',
      subject: 'Thank You - Brisbane Carpet Works Quote Request Received'
    };
    
    // Send email to business owner
    const result = await sendEmail(businessEmailData);
    
    // If business email successful, send confirmation to customer
    if (result.success) {
      // Send customer confirmation email (using customer template)
      await sendEmail(customerEmailData, 'customer');
    }
    
    setIsSubmitting(false);
    
    if (result.success) {
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        suburb: '',
        preferredDate: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus('error');
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
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

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <p className="text-green-700 text-sm">
              Thank you! Your quote request has been sent successfully. We'll contact you soon.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-red-700 text-sm">
              Sorry, something went wrong. Please try again or call us directly at{' '}
              <a href="tel:0469950276" className="font-semibold underline">0469 950 276</a>
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuoteForm;
