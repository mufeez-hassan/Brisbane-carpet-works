import PageHero from '../components/PageHero';
import PricingCard from '../components/PricingCard';
import CTASection from '../components/CTASection';

const Pricing = () => {
  const pricingOptions = [
    {
      title: 'Carpet Patching',
      features: [
        'Damaged area assessment',
        'Matching carpet sourcing',
        'Professional patch installation',
        'Seam blending',
        'Quality finish'
      ],
      featured: false
    },
    {
      title: 'Pet Damage Repair',
      features: [
        'Pet damage assessment',
        'Stain treatment',
        'Carpet patching',
        'Professional repair',
        'Rental inspection ready'
      ],
      featured: true
    },
    {
      title: 'Stain Removal',
      features: [
        'Stain assessment',
        'Professional cleaning products',
        'Deep stain treatment',
        'Carpet restoration',
        'Improved appearance'
      ],
      featured: false
    }
  ];

  return (
    <>
      <PageHero
        title="Pricing"
        description="Professional carpet repair services with clear, straightforward pricing."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#2454C6' }}>
              Request A Free Quote
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every carpet repair situation is unique. Contact us for a free, no-obligation quote 
              specific to your carpet repair needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <PricingCard key={index} {...option} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Pricing varies based on the extent of damage, carpet type, and repair complexity.
            </p>
            <p className="text-gray-600">
              Contact us at <a href="tel:0469950276" className="font-semibold" style={{ color: '#2454C6' }}>0469 950 276</a> or{' '}
              <a href="mailto:Brisbanecarpetworks@gmail.com" className="font-semibold" style={{ color: '#2454C6' }}>
                Brisbanecarpetworks@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Your Carpet Repaired?"
        description="Contact Brisbane Carpet Works for a free quote on your carpet repair project."
      />
    </>
  );
};

export default Pricing;
