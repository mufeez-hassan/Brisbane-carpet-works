import BeforeAfterCard from './BeforeAfterCard';
import SectionHeading from './SectionHeading';

// Import images
import petDamageBefore from '../assets/projects/before-after/pet-damage-repair-before.jpeg';
import petDamageAfter from '../assets/projects/before-after/pet-damage-repair-after.jpeg';
import carpetPatchingBefore from '../assets/projects/before-after/carpet-patching-before.jpeg';
import carpetPatchingAfter from '../assets/projects/before-after/carpet-patching-after.jpeg';
import edgeDamageBefore from '../assets/projects/before-after/carpet-edge-damage-before.jpeg';
import edgeDamageAfter from '../assets/projects/before-after/carpet-edge-damage-after.jpeg';
import generalRepairBefore from '../assets/projects/before-after/general-repair-before.jpeg';
import generalRepairAfter from '../assets/projects/before-after/general-repair-after.jpeg';

const BeforeAfterShowcase = () => {
  const projects = [
    {
      id: 1,
      title: 'Pet Damage Carpet Repair',
      description: 'Professional repair of carpet damaged near baseboards. Our expert patching restored the carpet to like-new condition, perfect for rental bond inspections.',
      beforeImage: petDamageBefore,
      afterImage: petDamageAfter,
    },
    {
      id: 2,
      title: 'Carpet Patching & Tear Repair',
      description: 'Seamless carpet patching using matched material. The damaged section was carefully removed and replaced with perfectly blended carpet patch.',
      beforeImage: carpetPatchingBefore,
      afterImage: carpetPatchingAfter,
    },
    {
      id: 3,
      title: 'Carpet Edge Damage Repair',
      description: 'Complete restoration of frayed and damaged carpet edges. Professional repair eliminated loose fibers and restored a clean, finished appearance.',
      beforeImage: edgeDamageBefore,
      afterImage: edgeDamageAfter,
    },
    {
      id: 4,
      title: 'General Carpet Restoration',
      description: 'Comprehensive carpet repair addressing multiple damage areas. Our skilled technicians restored the carpet to excellent condition for bond return.',
      beforeImage: generalRepairBefore,
      afterImage: generalRepairAfter,
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR WORK"
          title="See the Transformation"
          description="Real before and after photos of our professional carpet repair work. Drag the slider to see the amazing results."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <BeforeAfterCard
              key={project.id}
              title={project.title}
              description={project.description}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
            />
          ))}
        </div>

        {/* CTA Below Showcase */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Get professional carpet repair results like these for your property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="inline-block px-8 py-4 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              style={{ backgroundColor: '#28C76F' }}
            >
              GET YOUR FREE QUOTE
            </a>
            <a
              href="/projects"
              className="inline-block px-8 py-4 bg-white font-semibold rounded-lg hover:bg-gray-50 transition-all border-2"
              style={{ color: '#2454C6', borderColor: '#2454C6' }}
            >
              VIEW ALL PROJECTS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;
