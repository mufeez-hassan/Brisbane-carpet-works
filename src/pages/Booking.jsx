import { useState } from 'react';
import PageHero from '../components/PageHero';
import { Send, Upload } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    suburb: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    carpetIssue: '',
    additionalDetails: ''
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
    
    console.log('Booking submitted:', formData);
    
    setTimeout(() => {
      alert('Thank you for your booking request! We will contact you soon to confirm your appointment.');
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        suburb: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        carpetIssue: '',
        additionalDetails: ''
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
    <>
      <PageHero
        title="Book a Carpet Repair"
        description="Request a free quote and book your professional carpet repair service."
        backgroundImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 lg:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#2454C6' }}>
              Request Your Free Quote
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll contact you to discuss your carpet repair needs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Suburb *
                </label>
                <input
                  type="text"
                  id="suburb"
                  name="suburb"
                  value={formData.suburb}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all"
                  placeholder="Brisbane suburb"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
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
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (8am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="carpetIssue" className="block text-sm font-medium text-gray-700 mb-2">
                  Carpet Issue *
                </label>
                <textarea
                  id="carpetIssue"
                  name="carpetIssue"
                  value={formData.carpetIssue}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all resize-none"
                  placeholder="Describe the carpet damage or issue..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all resize-none"
                  placeholder="Any other information we should know..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Photos (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#2454C6] transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-600 mb-1">Click to upload photos of the carpet damage</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                  <input type="file" className="hidden" accept="image/*" multiple />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Photos help us provide a more accurate quote. Backend integration required for upload functionality.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 text-white font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center disabled:opacity-50"
                style={{ backgroundColor: '#28C76F' }}
              >
                {isSubmitting ? 'Sending Request...' : 'REQUEST A QUOTE'}
                <Send className="ml-2 w-5 h-5" />
              </button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to be contacted regarding your carpet repair enquiry.
              </p>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Prefer to call?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0469950276"
                className="inline-block px-8 py-3 bg-white border-2 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                style={{ color: '#2454C6', borderColor: '#2454C6' }}
              >
                0469 950 276
              </a>
              <a
                href="tel:0452318234"
                className="inline-block px-8 py-3 bg-white border-2 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                style={{ color: '#2454C6', borderColor: '#2454C6' }}
              >
                0452 318 234
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
