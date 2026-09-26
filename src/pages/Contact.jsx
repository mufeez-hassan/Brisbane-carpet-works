import { useState } from 'react';
import PageHero from '../components/PageHero';
import { Phone, Mail, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import { sendEmail } from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    suburb: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
    
    // Prepare email data - Send both variable formats for EmailJS compatibility
    const emailData = {
      // Original EmailJS default variables
      name: formData.name,
      email: formData.email,
      message: formData.message,
      
      // Custom template variables (matching your HTML template)
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service || 'General Enquiry',
      suburb: formData.suburb || 'Not specified',
      preferred_date: 'N/A',
      
      // Additional fields
      to_email: 'Brisbanecarpetworks@gmail.com',
      subject: `New Contact Message from ${formData.name}`
    };
    
    const result = await sendEmail(emailData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        suburb: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const services = [
    'Carpet Patching',
    'Carpet Damage Repair',
    'Pet Damage Repair',
    'Stain Removal',
    'Carpet Stretching',
    'Rental/Bond Carpet Repairs',
    'General Enquiry'
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Get in touch with Brisbane Carpet Works for your carpet repair needs."
        backgroundImage="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80"
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#2454C6' }}>
                Get In Touch
              </h2>
              <p className="text-gray-700 mb-8">
                Contact Brisbane Carpet Works for professional carpet repair services across Brisbane.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EEF4FF' }}>
                    <Phone className="w-6 h-6" style={{ color: '#2454C6' }} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:0469950276" className="text-gray-700 hover:text-[#2454C6] transition-colors block mb-1">
                      0469 950 276
                    </a>
                    <a href="tel:0452318234" className="text-gray-700 hover:text-[#2454C6] transition-colors block">
                      0452 318 234
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EEF4FF' }}>
                    <Mail className="w-6 h-6" style={{ color: '#2454C6' }} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:Brisbanecarpetworks@gmail.com" className="text-gray-700 hover:text-[#2454C6] transition-colors">
                      Brisbanecarpetworks@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EEF4FF' }}>
                    <MapPin className="w-6 h-6" style={{ color: '#2454C6' }} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Area</h3>
                    <p className="text-gray-700">
                      Brisbane, Queensland<br />
                      Servicing Brisbane and surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: '#EEF4FF' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#2454C6' }}>
                  Business Hours
                </h3>
                <p className="text-gray-700">
                  Contact us to discuss your carpet repair needs and arrange a suitable time.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#2454C6' }}>
                  Send Us A Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
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
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
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

                  <div>
                    <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-2">
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2454C6] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your carpet repair needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center disabled:opacity-50"
                    style={{ backgroundColor: '#28C76F' }}
                  >
                    {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                    <Send className="ml-2 w-5 h-5" />
                  </button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <p className="text-green-700 text-sm">
                        Thank you for contacting us! We will respond to your enquiry soon.
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
