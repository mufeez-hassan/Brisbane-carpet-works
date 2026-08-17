const SectionHeading = ({ eyebrow, title, description, centered = true }) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wider mb-3" style={{ color: '#28C76F' }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#2454C6' }}>
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
