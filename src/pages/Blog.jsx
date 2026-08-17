import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      slug: 'how-to-repair-carpet-before-moving-out',
      title: 'How To Repair Carpet Before Moving Out',
      category: 'Rental Tips',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      excerpt: 'Essential tips for preparing your rental carpet before the final inspection to improve your chances of bond return.',
      date: 'August 15, 2026'
    },
    {
      slug: 'can-pet-damaged-carpet-be-repaired',
      title: 'Can Pet-Damaged Carpet Be Repaired?',
      category: 'Pet Damage',
      image: 'https://images.unsplash.com/photo-1592194996308-f265ec2b7e5d?w=800&q=80',
      excerpt: 'Understanding the types of pet damage that can be professionally repaired and restoration options.',
      date: 'August 10, 2026'
    },
    {
      slug: 'how-carpet-patching-works',
      title: 'How Carpet Patching Works',
      category: 'Repair Guide',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      excerpt: 'Learn about the professional carpet patching process and what to expect from carpet patch repairs.',
      date: 'August 5, 2026'
    },
    {
      slug: 'how-to-remove-common-carpet-stains',
      title: 'How To Remove Common Carpet Stains',
      category: 'Stain Removal',
      image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
      excerpt: 'Professional tips for treating common carpet stains and when to call in expert help.',
      date: 'July 30, 2026'
    },
    {
      slug: 'carpet-damage-and-rental-inspections',
      title: 'Carpet Damage And Rental Inspections',
      category: 'Rental Tips',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      excerpt: 'What property managers look for during rental inspections and how carpet condition affects bond returns.',
      date: 'July 25, 2026'
    },
    {
      slug: 'when-should-you-replace-carpet-instead-of-repairing',
      title: 'When Should You Replace Carpet Instead Of Repairing It?',
      category: 'Carpet Care',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      excerpt: 'Understanding when carpet repair is suitable and when replacement might be necessary.',
      date: 'July 20, 2026'
    }
  ];

  return (
    <>
      <PageHero
        title="Carpet Repair Blog"
        description="Tips, guides and information about carpet repair and restoration."
        backgroundImage="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80"
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold text-white rounded-full" style={{ backgroundColor: '#2454C6' }}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#2454C6] transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold transition-colors group-hover:translate-x-1 duration-300"
                    style={{ color: '#2454C6' }}
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Professional Carpet Repair?"
        description="Contact Brisbane Carpet Works for expert carpet repair services."
      />
    </>
  );
};

export default Blog;
