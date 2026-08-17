import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

const Projects = () => {
  const projects = [
    {
      slug: 'pet-damage-carpet-repair',
      title: 'Pet Damage Carpet Repair',
      category: 'Pet Damage',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      description: 'Professional repair of carpet damaged by pet scratching and wear.'
    },
    {
      slug: 'burn-hole-carpet-patching',
      title: 'Burn Hole Carpet Patching',
      category: 'Carpet Patching',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      description: 'Seamless patching of burn holes in residential carpet.'
    },
    {
      slug: 'rental-property-stain-removal',
      title: 'Rental Property Stain Removal',
      category: 'Stain Removal',
      image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
      description: 'Professional stain removal for rental property bond return.'
    },
    {
      slug: 'carpet-tear-repair',
      title: 'Carpet Tear Repair',
      category: 'Damage Repair',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      description: 'Expert repair of torn carpet sections.'
    },
    {
      slug: 'loose-carpet-stretching',
      title: 'Loose Carpet Stretching',
      category: 'Carpet Stretching',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      description: 'Professional carpet stretching to eliminate wrinkles.'
    },
    {
      slug: 'bond-return-carpet-restoration',
      title: 'Bond Return Carpet Restoration',
      category: 'Bond Repairs',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      description: 'Complete carpet restoration for rental bond return.'
    }
  ];

  return (
    <>
      <PageHero
        title="Our Projects"
        description="View our carpet repair and restoration work across Brisbane."
        backgroundImage="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80"
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold text-white rounded-full" style={{ backgroundColor: '#2454C6' }}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#2454C6] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Carpet Repair?"
        description="Contact Brisbane Carpet Works for professional carpet repair services."
      />
    </>
  );
};

export default Projects;
