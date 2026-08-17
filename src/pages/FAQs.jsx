import PageHero from '../components/PageHero';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const FAQs = () => {
  const faqs = [
    {
      question: 'Can you repair carpet damaged by pets?',
      answer: 'Yes, depending on the extent and location of the damage, pet-damaged carpet can often be repaired or patched. We assess each situation individually to recommend the best approach.'
    },
    {
      question: 'Can you remove carpet stains?',
      answer: 'We provide professional stain removal services for suitable carpet types and stains. The success depends on the type of stain, carpet material, and how long the stain has been present.'
    },
    {
      question: 'Do you repair carpet before rental inspections?',
      answer: 'Yes. We provide carpet repair services for customers preparing rental properties for final inspection. This is one of our primary service areas.'
    },
    {
      question: 'Can carpet holes be patched?',
      answer: 'Many carpet holes and damaged areas can be repaired using a suitable matching piece of carpet. We carefully match the carpet type, colour and texture for the best result.'
    },
    {
      question: 'How do I get a quote?',
      answer: 'Contact Brisbane Carpet Works by phone at 0469 950 276 or 0452 318 234, email us at Brisbanecarpetworks@gmail.com, or use the quote form on our website.'
    },
    {
      question: 'Do you service Brisbane?',
      answer: 'Yes, we provide carpet repair services across Brisbane and surrounding areas.'
    },
    {
      question: 'How long does carpet repair take?',
      answer: 'The time required depends on the type and extent of the damage. Many repairs can be completed within a few hours, while more extensive work may take longer.'
    },
    {
      question: 'Will carpet patching be visible?',
      answer: 'We use professional techniques to minimise visibility. Patches are carefully matched and blended with your existing carpet. While we aim for the best possible match, some variation may be visible depending on the carpet type and condition.'
    },
    {
      question: 'Can you guarantee my bond return?',
      answer: 'We provide professional carpet repair to help improve the condition of your carpet, but we cannot guarantee bond returns as this is ultimately determined by property managers and landlords based on their assessment.'
    },
    {
      question: 'What types of carpet damage can you repair?',
      answer: 'We repair various types of carpet damage including burns, holes, tears, pet damage, stains, fraying, loose carpet, and general wear and tear.'
    },
    {
      question: 'Do you provide same-day service?',
      answer: 'Availability varies depending on our schedule and the location. Contact us to discuss your timeframe and we will do our best to accommodate urgent requests.'
    },
    {
      question: 'How much does carpet repair cost?',
      answer: 'Pricing depends on the type of damage, size of the repair area, and carpet type. Contact us for a free quote specific to your situation.'
    }
  ];

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Find answers to common questions about our carpet repair services."
        backgroundImage="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80"
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Contact Brisbane Carpet Works and we'll be happy to help with your carpet repair enquiry."
      />
    </>
  );
};

export default FAQs;
