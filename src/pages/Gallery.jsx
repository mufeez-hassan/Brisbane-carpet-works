import { useState } from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'patching', name: 'Carpet Patching' },
    { id: 'pet-damage', name: 'Pet Damage' },
    { id: 'stains', name: 'Stain Removal' },
    { id: 'stretching', name: 'Carpet Stretching' },
    { id: 'bond', name: 'Bond Repairs' }
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      alt: 'Carpet patching repair',
      category: 'patching'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      alt: 'Pet damage carpet repair',
      category: 'pet-damage'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
      alt: 'Stain removal service',
      category: 'stains'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      alt: 'Carpet damage repair',
      category: 'patching'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      alt: 'Carpet stretching service',
      category: 'stretching'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      alt: 'Bond return carpet repair',
      category: 'bond'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1592194996308-f265ec2b7e5d?w=800&q=80',
      alt: 'Professional carpet restoration',
      category: 'pet-damage'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1600566752314-b0e7b0b4c1d4?w=800&q=80',
      alt: 'Carpet repair technician',
      category: 'patching'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      alt: 'Rental property carpet repair',
      category: 'bond'
    }
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <>
      <PageHero
        title="Gallery"
        description="View our professional carpet repair and restoration work."
        backgroundImage="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80"
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={selectedCategory === category.id ? { backgroundColor: '#2454C6' } : {}}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-w-4 aspect-h-3 relative h-80">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Like What You See?"
        description="Contact Brisbane Carpet Works for professional carpet repair services."
      />
    </>
  );
};

export default Gallery;
