import { useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import ProcessSteps from '../components/ProcessSteps';
import { Check } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceData = {
    'carpet-patching': {
      title: 'Carpet Patching',
      description: 'Professional carpet patching services to repair damaged areas with carefully matched carpet.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
      intro: 'Carpet patching is an effective way to repair damaged areas without replacing the entire carpet. We carefully match your existing carpet and blend the patch seamlessly.',
      benefits: [
        'Cost-effective alternative to full carpet replacement',
        'Carefully matched carpet patches',
        'Professional blending techniques',
        'Quick turnaround time',
        'Suitable for rental properties'
      ],
      whatWeRepair: [
        'Burn marks and cigarette burns',
        'Water damage',
        'Pet damage',
        'Holes and tears',
        'Worn high-traffic areas'
      ],
      faqs: [
        {
          question: 'How does carpet patching work?',
          answer: 'We cut out the damaged section and replace it with a carefully matched piece of carpet, blending the seams professionally.'
        },
        {
          question: 'Will the patch be visible?',
          answer: 'Our professional techniques minimise visibility. The patch is carefully matched and blended with your existing carpet.'
        }
      ]
    },
    'carpet-damage-repair': {
      title: 'Carpet Damage Repair',
      description: 'Expert repair services for all types of carpet damage including tears, burns, and holes.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80',
      intro: 'We provide comprehensive carpet damage repair services to restore your carpet to a presentable condition.',
      benefits: [
        'Repair instead of replace',
        'Professional assessment',
        'Suitable for various damage types',
        'Bond-friendly repairs',
        'Quick service'
      ],
      whatWeRepair: [
        'Tears and rips',
        'Burns and scorch marks',
        'Holes and punctures',
        'Frayed edges',
        'General wear damage'
      ],
      faqs: [
        {
          question: 'Can all carpet damage be repaired?',
          answer: 'Most carpet damage can be repaired professionally. We assess each situation and recommend the best approach.'
        },
        {
          question: 'How long does repair take?',
          answer: 'Most repairs can be completed within a few hours, depending on the extent of the damage.'
        }
      ]
    },
    'pet-damage-repair': {
      title: 'Pet Damage Repair',
      description: 'Specialised repair services for carpet damaged by pets including scratching and staining.',
      image: 'https://images.unsplash.com/photo-1592194996308-f265ec2b7e5d?w=1920&q=80',
      intro: 'Pet damage is one of the most common carpet issues in rental properties. We specialise in repairing pet-related carpet damage.',
      benefits: [
        'Specialist pet damage repair',
        'Stain and odour treatment',
        'Patch damaged sections',
        'Rental inspection ready',
        'Affordable solutions'
      ],
      whatWeRepair: [
        'Pet scratching and clawing',
        'Chewing damage',
        'Urine stains',
        'Pet odours',
        'Matted and damaged areas'
      ],
      faqs: [
        {
          question: 'Can you repair carpet damaged by pets?',
          answer: 'Yes, depending on the extent and location of the damage, pet-damaged carpet can often be repaired or patched.'
        },
        {
          question: 'Do you remove pet odours?',
          answer: 'We provide professional treatment services suitable for various types of pet-related issues.'
        }
      ]
    },
    'stain-removal': {
      title: 'Stain Removal',
      description: 'Professional stain removal services to restore your carpet\'s appearance.',
      image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1920&q=80',
      intro: 'Professional stain removal can significantly improve your carpet\'s appearance before rental inspections.',
      benefits: [
        'Professional cleaning products',
        'Safe for various carpet types',
        'Stubborn stain treatment',
        'Improves carpet appearance',
        'Rental-ready results'
      ],
      whatWeRepair: [
        'Food and beverage stains',
        'Pet stains',
        'Ink and dye stains',
        'Dirt and mud',
        'General discolouration'
      ],
      faqs: [
        {
          question: 'Can you remove carpet stains?',
          answer: 'We provide professional stain removal services for suitable carpet types and stains.'
        },
        {
          question: 'Will stain removal damage my carpet?',
          answer: 'We use appropriate cleaning methods suitable for your carpet type.'
        }
      ]
    },
    'carpet-stretching': {
      title: 'Carpet Stretching',
      description: 'Professional carpet stretching to eliminate wrinkles and loose areas.',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80',
      intro: 'Carpet stretching restores your carpet to a tight, professional finish by removing wrinkles and loose sections.',
      benefits: [
        'Eliminates trip hazards',
        'Professional finish',
        'Extends carpet life',
        'Improves appearance',
        'Prevents further damage'
      ],
      whatWeRepair: [
        'Loose carpet',
        'Wrinkles and ripples',
        'Buckling',
        'Uneven areas',
        'Poor installation'
      ],
      faqs: [
        {
          question: 'Why does carpet become loose?',
          answer: 'Carpet can become loose due to poor installation, age, humidity changes, or heavy traffic.'
        },
        {
          question: 'How long does stretching last?',
          answer: 'Professional carpet stretching should last for many years when done correctly.'
        }
      ]
    },
    'rental-bond-carpet-repairs': {
      title: 'Rental / Bond Carpet Repairs',
      description: 'Specialised carpet repair services to help you prepare for rental inspections.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      intro: 'Carpet damage is a common reason for bond deductions. We help prepare your rental property\'s carpet for final inspection.',
      benefits: [
        'Rental inspection focused',
        'Quick turnaround',
        'Affordable repairs',
        'Professional results',
        'Improve bond return chances'
      ],
      whatWeRepair: [
        'Pet damage',
        'Stains and marks',
        'Burns and holes',
        'Frayed areas',
        'General wear'
      ],
      faqs: [
        {
          question: 'Do you repair carpet before rental inspections?',
          answer: 'Yes. We provide carpet repair services for customers preparing rental properties for final inspection.'
        },
        {
          question: 'Can you guarantee my bond return?',
          answer: 'We provide professional carpet repair to help improve your chances, but cannot guarantee bond returns as this is determined by property managers.'
        }
      ]
    }
  };

  const service = serviceData[slug] || serviceData['carpet-patching'];

  return (
    <>
      <PageHero
        title={service.title}
        description={service.description}
        backgroundImage={service.image}
      />

      {/* Introduction */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#2454C6' }}>
                Professional {service.title}
              </h2>
              <p className="text-gray-700 text-lg mb-6">{service.intro}</p>
              <a
                href="/booking"
                className="inline-block px-8 py-4 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                style={{ backgroundColor: '#28C76F' }}
              >
                GET A FREE QUOTE
              </a>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#2454C6' }}>
                Benefits
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#28C76F' }} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#2454C6' }}>
                What We Repair
              </h3>
              <ul className="space-y-3">
                {service.whatWeRepair.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#28C76F' }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2454C6' }}>
            Our Repair Process
          </h2>
          <ProcessSteps />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2454C6' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <FAQAccordion key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Contact Brisbane Carpet Works for a free quote on your carpet repair."
      />
    </>
  );
};

export default ServiceDetail;
