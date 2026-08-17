import PageHero from '../components/PageHero';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const Reviews = () => {
  const testimonials = [
    {
      name: 'Customer testimonials will be added here',
      rating: 5,
      review: 'This section will display actual customer reviews once available.'
    },
    {
      name: 'Customer testimonials will be added here',
      rating: 5,
      review: 'This section will display actual customer reviews once available.'
    },
    {
      name: 'Customer testimonials will be added here',
      rating: 5,
      review: 'This section will display actual customer reviews once available.'
    }
  ];

  return (
    <>
      <PageHero
        title="Customer Reviews"
        description="See what our customers say about Brisbane Carpet Works."
        backgroundImage="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1920&q=80"
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg">
              Customer testimonials will be added here once actual reviews are provided.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-lg" style={{ backgroundColor: '#EEF4FF' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2454C6' }}>
              Had a Great Experience?
            </h3>
            <p className="text-gray-700 mb-6">
              We'd love to hear about your experience with Brisbane Carpet Works.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              style={{ backgroundColor: '#28C76F' }}
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Experience Professional Carpet Repair?"
        description="Contact Brisbane Carpet Works for your carpet repair needs."
      />
    </>
  );
};

export default Reviews;
