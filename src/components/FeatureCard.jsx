const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center p-6">
      <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full" style={{ backgroundColor: '#EEF4FF' }}>
        <Icon className="w-7 h-7" style={{ color: '#2454C6' }} />
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
