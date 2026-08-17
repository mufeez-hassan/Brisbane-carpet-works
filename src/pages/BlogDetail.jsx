import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Calendar, ArrowLeft } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();

  const blogData = {
    'how-to-repair-carpet-before-moving-out': {
      title: 'How To Repair Carpet Before Moving Out',
      category: 'Rental Tips',
      date: 'August 15, 2026',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      content: `
        <p>When preparing to move out of a rental property, the condition of your carpet can significantly affect your bond return. Professional carpet repair before your final inspection can help improve the property's appearance.</p>
        
        <h2>Assess The Damage</h2>
        <p>Start by identifying all carpet damage including stains, pet damage, burns, tears, and general wear. Document everything that needs attention.</p>
        
        <h2>Professional vs DIY Repair</h2>
        <p>While some minor cleaning can be done yourself, professional carpet repair often provides better results for significant damage. Property managers can typically tell the difference between amateur and professional work.</p>
        
        <h2>Common Issues To Address</h2>
        <p>Pet damage, stubborn stains, burn marks, and carpet holes are common issues that benefit from professional repair services.</p>
        
        <h2>Timing Is Important</h2>
        <p>Schedule carpet repairs with enough time before your final inspection. This allows for any additional work if needed.</p>
        
        <h2>Contact Professional Services</h2>
        <p>Brisbane Carpet Works provides professional carpet repair services specifically designed to help prepare rental properties for final inspection.</p>
      `
    },
    'can-pet-damaged-carpet-be-repaired': {
      title: 'Can Pet-Damaged Carpet Be Repaired?',
      category: 'Pet Damage',
      date: 'August 10, 2026',
      image: 'https://images.unsplash.com/photo-1592194996308-f265ec2b7e5d?w=1920&q=80',
      content: `
        <p>Pet damage is one of the most common carpet issues in rental properties. The good news is that many types of pet-damaged carpet can be professionally repaired.</p>
        
        <h2>Types Of Pet Damage</h2>
        <p>Common pet damage includes scratching, chewing, urine stains, and matted areas from pets lying in the same spot repeatedly.</p>
        
        <h2>Repair Options</h2>
        <p>Depending on the extent of damage, professional repair options include carpet patching, stain treatment, and restoration work.</p>
        
        <h2>Assessment Is Key</h2>
        <p>Professional assessment determines the most suitable repair approach for your specific pet damage situation.</p>
        
        <h2>Preventing Further Damage</h2>
        <p>Once repaired, consider protective measures to prevent future pet damage if you'll continue living in the property.</p>
      `
    },
    'how-carpet-patching-works': {
      title: 'How Carpet Patching Works',
      category: 'Repair Guide',
      date: 'August 5, 2026',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
      content: `
        <p>Carpet patching is a professional repair technique used to replace damaged carpet sections with matching pieces.</p>
        
        <h2>The Patching Process</h2>
        <p>Professional carpet patching involves carefully cutting out the damaged area and replacing it with a matching carpet piece. The seams are then blended using professional techniques.</p>
        
        <h2>Matching The Carpet</h2>
        <p>Finding matching carpet is crucial for the best results. This includes matching colour, texture, and pile direction.</p>
        
        <h2>When Patching Works Best</h2>
        <p>Carpet patching is ideal for localized damage such as burns, holes, and pet damage in specific areas.</p>
        
        <h2>Professional vs DIY</h2>
        <p>While DIY patching is possible, professional installation typically provides better results with less visible seams.</p>
      `
    },
    'how-to-remove-common-carpet-stains': {
      title: 'How To Remove Common Carpet Stains',
      category: 'Stain Removal',
      date: 'July 30, 2026',
      image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1920&q=80',
      content: `
        <p>Carpet stains can affect the appearance of your home or rental property. Understanding stain removal basics can help, though professional treatment often provides the best results.</p>
        
        <h2>Act Quickly</h2>
        <p>Fresh stains are easier to treat than set-in stains. Blot spills immediately without rubbing.</p>
        
        <h2>Common Stain Types</h2>
        <p>Different stains require different approaches. Food, beverage, pet stains, and ink each need specific treatment methods.</p>
        
        <h2>When To Call Professionals</h2>
        <p>Stubborn stains, large stained areas, or valuable carpets benefit from professional stain removal services.</p>
        
        <h2>Avoiding Damage</h2>
        <p>Incorrect stain removal attempts can sometimes make stains worse or damage carpet fibres.</p>
      `
    },
    'carpet-damage-and-rental-inspections': {
      title: 'Carpet Damage And Rental Inspections',
      category: 'Rental Tips',
      date: 'July 25, 2026',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80',
      content: `
        <p>Carpet condition is typically assessed during rental property inspections. Understanding what property managers look for can help you prepare appropriately.</p>
        
        <h2>What Inspectors Check</h2>
        <p>Property managers inspect for stains, damage, wear, cleanliness, and overall carpet condition.</p>
        
        <h2>Normal Wear vs Damage</h2>
        <p>Understanding the difference between acceptable wear and damage requiring repair is important.</p>
        
        <h2>Preparing For Inspection</h2>
        <p>Professional carpet repair before inspection can help address damage that might affect your bond return.</p>
        
        <h2>Documentation</h2>
        <p>Keep records of carpet condition at move-in and any professional repairs completed.</p>
      `
    },
    'when-should-you-replace-carpet-instead-of-repairing': {
      title: 'When Should You Replace Carpet Instead Of Repairing It?',
      category: 'Carpet Care',
      date: 'July 20, 2026',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80',
      content: `
        <p>While carpet repair can address many issues, some situations may warrant replacement instead.</p>
        
        <h2>Extensive Damage</h2>
        <p>When damage is widespread throughout the carpet, replacement might be more practical than multiple repairs.</p>
        
        <h2>Age And Condition</h2>
        <p>Very old carpet or carpet in poor overall condition may not benefit significantly from repair.</p>
        
        <h2>Cost Considerations</h2>
        <p>Sometimes the cost of extensive repairs approaches replacement cost, making replacement the better option.</p>
        
        <h2>Professional Assessment</h2>
        <p>A professional assessment can help determine whether repair or replacement is the most suitable option.</p>
      `
    }
  };

  const post = blogData[slug] || blogData['how-to-repair-carpet-before-moving-out'];

  return (
    <>
      <PageHero
        title={post.title}
        backgroundImage={post.image}
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-semibold mb-8 hover:text-[#2454C6] transition-colors"
            style={{ color: '#2454C6' }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 text-sm font-semibold text-white rounded-full" style={{ backgroundColor: '#2454C6' }}>
                {post.category}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: '#2454C6' }}>
              {post.title}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 space-y-6" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-12 p-8 rounded-lg text-center" style={{ backgroundColor: '#EEF4FF' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2454C6' }}>
              Need Professional Carpet Repair?
            </h3>
            <p className="text-gray-700 mb-6">
              Contact Brisbane Carpet Works for expert carpet repair services.
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

export default BlogDetail;
