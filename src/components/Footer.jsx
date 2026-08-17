import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Carpet Patching', path: '/services/carpet-patching' },
    { name: 'Carpet Damage Repair', path: '/services/carpet-damage-repair' },
    { name: 'Pet Damage Repair', path: '/services/pet-damage-repair' },
    { name: 'Stain Removal', path: '/services/stain-removal' },
    { name: 'Carpet Stretching', path: '/services/carpet-stretching' },
    { name: 'Rental/Bond Repairs', path: '/services/rental-bond-carpet-repairs' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Brisbane Carpet Works</h3>
            <p className="text-sm mb-4">
              Professional carpet repair and restoration services across Brisbane.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:Brisbanecarpetworks@gmail.com"
                  className="flex items-start text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  Brisbanecarpetworks@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:0469950276"
                  className="flex items-center text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  0469 950 276
                </a>
              </li>
              <li>
                <a
                  href="tel:0452318234"
                  className="flex items-center text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  0452 318 234
                </a>
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                Brisbane, Queensland
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Brisbane Carpet Works. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
