import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { Scissors, Wrench, PawPrint, Droplet, Sparkles, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Carpet Patching',
      description: 'Repair damaged areas using carefully matched carpet patches. We source matching carpet and blend repairs seamlessly with your existing flooring.',
      link: '/services/carpet-patching'
    },
    {
      icon: Wrench,
      title: 'Carpet Damage Repair',
      description: 'Repair tears, burns, holes and damaged carpet sections. Professional restoration for all types of carpet damage.',
      link: '/services/carpet-damage-repair'
    },
    {
      icon: PawPrint,
      title: 'Pet Damage Repair',
      description: 'Repair carpet damaged by dogs, cats and other pets. We fix scratching, chewing, and staining from pet accidents.',
      link: '/services/pet-damage-repair'
    },
    {
      icon: Droplet,
      title: 'Stain Removal',
      description: 'Remove difficult stains and restore the appearance of your carpet. Professional treatment for stubborn marks and discolouration.',
      link: '/services/stain-removal'
    },
    {
      icon: Sparkles,
      title: 'Carpet Stretching',
      description: 'Help eliminate wrinkles, loose carpet and uneven areas. Restore your carpet to a tight, professional finish.',
      link: '/services/carpet-stretching'
    },
    {
      icon: Home,
      title: 'Rental / Bond Carpet Repairs',
      description: 'Prepare damaged carpet before rental inspection and handover. Improve your chances of receiving your bond back.',
      link: '/services/rental-bond-carpet-repairs'
    }
  ];

  return (
    <>
      <PageHero
        title="Our Carpet Repair Services"
        description="Professional carpet repair solutions for homes, rentals and properties across Brisbane."
        backgroundImage="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80"
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Professional Carpet Repair?"
        description="Contact Brisbane Carpet Works for a free quote on your carpet repair needs."
      />
    </>
  );
};

export default Services;
