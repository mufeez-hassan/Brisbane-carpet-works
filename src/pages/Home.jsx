import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import ServiceCard from '../components/ServiceCard';
import ProcessSteps from '../components/ProcessSteps';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import { Award, Shield, DollarSign, Home, Scissors, Droplet, Wrench, Sparkles, PawPrint, KeyRound } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Award,
      title: 'Experienced Service',
      description: 'Professional carpet repair with attention to detail.'
    },
    {
      icon: Shield,
      title: 'Quality Repairs',
      description: 'Carefully matched repairs designed to blend with your existing carpet.'
    },
    {
      icon: DollarSign,
      title: 'Honest Pricing',
      description: 'Clear, straightforward quotes without unnecessary surprises.'
    },
    {
      icon: KeyRound,
      title: 'Rental & Bond Focused',
      description: 'Repairs designed to help rental properties look their best before inspection.'
    }
  ];

  const services = [
    {
      icon: Scissors,
      title: 'Carpet Patching',
      description: 'Repair damaged areas using carefully matched carpet patches.',
      link: '/services/carpet-patching'
    },
    {
      icon: Wrench,
      title: 'Carpet Damage Repair',
      description: 'Repair tears, burns, holes and damaged carpet sections.',
      link: '/services/carpet-damage-repair'
    },
    {
      icon: PawPrint,
      title: 'Pet Damage Repair',
      description: 'Repair carpet damaged by dogs, cats and other pets.',
      link: '/services/pet-damage-repair'
    },
    {
      icon: Droplet,
      title: 'Stain Removal',
      description: 'Remove difficult stains and restore the appearance of your carpet.',
      link: '/services/stain-removal'
    },
    {
      icon: Sparkles,
      title: 'Carpet Stretching',
      description: 'Help eliminate wrinkles, loose carpet and uneven areas.',
      link: '/services/carpet-stretching'
    },
    {
      icon: Home,
      title: 'Rental / Bond Carpet Repairs',
      description: 'Prepare damaged carpet before rental inspection and handover.',
      link: '/services/rental-bond-carpet-repairs'
    }
  ];

  const testimonials = [
    {
      name: 'Customer testimonials will be added here',
      rating: 5,
      review: 'This section will display actual customer reviews once available.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Brisbane Carpet Works?"
            description="Professional carpet repair and restoration services you can trust."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                alt="Professional carpet repair"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#2454C6' }}>
                Professional Carpet Repairs You Can Rely On
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Damaged carpet can make a property look neglected and affect your chances of receiving your rental bond back.
                </p>
                <p>
                  Pet damage can leave holes, fraying and visible wear. Stains can make carpets appear permanently damaged.
                </p>
                <p>
                  Professional patching and repair can significantly improve appearance, particularly useful before rental inspections.
                </p>
              </div>
              <a
                href="/booking"
                className="inline-block mt-6 px-8 py-4 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                style={{ backgroundColor: '#28C76F' }}
              >
                GET A FREE QUOTE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Our Carpet Repair Services"
            description="Professional carpet repair solutions for homes, rentals and properties across Brisbane."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Simple Repair Process"
            description="We make carpet repair straightforward and stress-free."
          />
          <ProcessSteps />
        </div>
      </section>

      {/* Bond Section */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#2454C6' }}>
            Need Your Bond Back? Let's Get Your Carpet Looking Its Best.
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Carpet damage, pet damage and stubborn stains can become a problem when you're preparing to leave a rental property. 
            Brisbane Carpet Works provides professional carpet repair solutions to help restore damaged areas before your final inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="inline-block px-8 py-4 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              style={{ backgroundColor: '#28C76F' }}
            >
              BOOK A CARPET REPAIR
            </a>
            <a
              href="tel:0469950276"
              className="inline-block px-8 py-4 bg-white font-semibold rounded-lg hover:bg-gray-50 transition-all border-2"
              style={{ color: '#2454C6', borderColor: '#2454C6' }}
            >
              CALL 0469 950 276
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Customers Say"
            description="Customer testimonials will be added here."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Repair Your Carpet?"
        description="Professional carpet repairs to help you get your rental property inspection-ready and improve your chances of getting your bond back."
      />
    </>
  );
};

export default HomePage;
