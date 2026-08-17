import PageHero from '../components/PageHero';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import { Award, Shield, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Professional Service',
      description: 'We deliver high-quality carpet repair with attention to detail and professional workmanship.'
    },
    {
      icon: Shield,
      title: 'Quality Results',
      description: 'Every repair is carefully executed to restore your carpet to a presentable condition.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'We understand the importance of rental inspections and work to help you achieve the best results.'
    },
    {
      icon: Target,
      title: 'Honest Approach',
      description: 'Clear communication and straightforward pricing without unnecessary surprises.'
    }
  ];

  return (
    <>
      <PageHero
        title="About Brisbane Carpet Works"
        description="Professional carpet repair and restoration services across Brisbane."
        backgroundImage="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1920&q=80"
      />

      {/* Introduction */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#2454C6' }}>
                Professional Carpet Repair With A Focus On Quality Results
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Brisbane Carpet Works provides professional carpet repair and restoration services 
                  for homes and rental properties across Brisbane.
                </p>
                <p>
                  We specialise in carpet patching, pet damage repair, stain removal and carpet 
                  restoration to help prepare properties for rental inspections.
                </p>
                <p>
                  Our goal is to restore damaged carpet to a clean, presentable condition, helping 
                  customers improve their chances of receiving their rental bond back.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
                alt="Professional carpet repair service"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" style={{ color: '#2454C6' }}>
            Why Choose Brisbane Carpet Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FeatureCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Carpet Repair Expertise */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#2454C6' }}>
            Carpet Repair Expertise
          </h2>
          <div className="space-y-6 text-gray-700">
            <p>
              We understand that damaged carpet can affect rental bond returns. Pet damage, 
              stains, burns, and general wear can make an otherwise well-maintained property 
              appear neglected during inspections.
            </p>
            <p>
              Our carpet repair services are designed to address these issues professionally, 
              using appropriate techniques to restore carpet to a more presentable condition.
            </p>
            <p>
              Whether you're a tenant preparing to move out, a landlord maintaining a rental 
              property, or a homeowner dealing with carpet damage, we provide straightforward 
              carpet repair solutions.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Repair Your Carpet?"
        description="Contact Brisbane Carpet Works for a free quote on professional carpet repair services."
      />
    </>
  );
};

export default About;
