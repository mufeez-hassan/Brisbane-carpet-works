const PageHero = ({ title, description, backgroundImage }) => {
  const defaultImage = "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80";
  
  return (
    <section className="relative pt-32 pb-20 bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage || defaultImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
