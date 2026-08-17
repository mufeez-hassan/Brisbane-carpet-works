import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams();

  const projectData = {
    'pet-damage-carpet-repair': {
      title: 'Pet Damage Carpet Repair',
      category: 'Pet Damage',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
      description: 'Professional repair of carpet damaged by pet scratching and wear in a rental property.',
      challenge: 'The carpet had significant pet damage including scratching, matting, and visible wear in high-traffic areas. The tenant needed the carpet repaired before the final rental inspection.',
      solution: 'We assessed the damaged areas and provided professional carpet patching and repair. Matching carpet was sourced and installed to blend seamlessly with the existing flooring.',
      result: 'The carpet was restored to a presentable condition, helping improve the property\'s appearance for the final inspection.'
    },
    'burn-hole-carpet-patching': {
      title: 'Burn Hole Carpet Patching',
      category: 'Carpet Patching',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80',
      description: 'Professional patching of burn holes in residential carpet.',
      challenge: 'Multiple burn holes from cigarettes and hot items needed to be repaired before property handover.',
      solution: 'We carefully cut out the damaged sections and replaced them with matching carpet patches, blending the seams professionally.',
      result: 'The burn holes were successfully repaired with minimal visibility, restoring the carpet\'s appearance.'
    },
    'rental-property-stain-removal': {
      title: 'Rental Property Stain Removal',
      category: 'Stain Removal',
      image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1920&q=80',
      description: 'Professional stain removal for rental property bond return.',
      challenge: 'Stubborn stains throughout the property needed professional treatment before the final inspection.',
      solution: 'We applied professional cleaning products and techniques suitable for the carpet type to treat the stained areas.',
      result: 'The carpet\'s appearance was significantly improved, helping prepare the property for inspection.'
    },
    'carpet-tear-repair': {
      title: 'Carpet Tear Repair',
      category: 'Damage Repair',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80',
      description: 'Expert repair of torn carpet sections.',
      challenge: 'Carpet tears from moving furniture needed professional repair.',
      solution: 'We repaired the torn sections using professional techniques to restore the carpet\'s integrity.',
      result: 'The tears were successfully repaired, restoring the carpet to a more presentable condition.'
    },
    'loose-carpet-stretching': {
      title: 'Loose Carpet Stretching',
      category: 'Carpet Stretching',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80',
      description: 'Professional carpet stretching to eliminate wrinkles.',
      challenge: 'Loose carpet with visible wrinkles and ripples needed stretching.',
      solution: 'We used professional carpet stretching equipment to restore the carpet to a tight, smooth finish.',
      result: 'The carpet was successfully stretched, eliminating wrinkles and improving the overall appearance.'
    },
    'bond-return-carpet-restoration': {
      title: 'Bond Return Carpet Restoration',
      category: 'Bond Repairs',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      description: 'Complete carpet restoration for rental bond return.',
      challenge: 'Multiple carpet issues including stains, pet damage, and wear needed addressing before rental handover.',
      solution: 'We provided comprehensive carpet repair including patching, stain treatment, and restoration work.',
      result: 'The carpet was restored to a presentable condition, helping prepare the property for the final inspection.'
    }
  };

  const project = projectData[slug] || projectData['pet-damage-carpet-repair'];

  return (
    <>
      <PageHero
        title={project.title}
        description={project.description}
        backgroundImage={project.image}
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-sm font-semibold mb-8 hover:text-[#2454C6] transition-colors"
            style={{ color: '#2454C6' }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <div className="mb-8">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full mb-4" style={{ backgroundColor: '#2454C6' }}>
              {project.category}
            </span>
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#2454C6' }}>
              {project.title}
            </h1>
            <p className="text-xl text-gray-700">
              {project.description}
            </p>
          </div>

          <div className="mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2454C6' }}>
                The Challenge
              </h2>
              <p className="text-gray-700">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2454C6' }}>
                Our Solution
              </h2>
              <p className="text-gray-700">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2454C6' }}>
                The Result
              </h2>
              <p className="text-gray-700">
                {project.result}
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-lg text-center" style={{ backgroundColor: '#EEF4FF' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2454C6' }}>
              Need Similar Repairs?
            </h3>
            <p className="text-gray-700 mb-6">
              Contact Brisbane Carpet Works for professional carpet repair services.
            </p>
            <Link
              to="/booking"
              className="inline-block px-8 py-4 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              style={{ backgroundColor: '#28C76F' }}
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="More Questions About Carpet Repair?"
        description="We're here to help with your carpet repair needs."
      />
    </>
  );
};

export default ProjectDetail;
