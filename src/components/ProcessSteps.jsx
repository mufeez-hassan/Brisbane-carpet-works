const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="relative text-center">
      <div className="mb-4 mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#2454C6' }}>
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProcessSteps = () => {
  const steps = [
    {
      number: '01',
      title: 'Get In Touch',
      description: 'Tell us what has happened to your carpet.'
    },
    {
      number: '02',
      title: 'Assess The Damage',
      description: 'We determine the most suitable repair approach.'
    },
    {
      number: '03',
      title: 'Professional Repair',
      description: 'We repair, patch or treat the damaged carpet.'
    },
    {
      number: '04',
      title: 'Final Result',
      description: 'Your carpet looks cleaner, neater and more presentable.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
      {steps.map((step, index) => (
        <ProcessStep key={index} {...step} />
      ))}
    </div>
  );
};

export default ProcessSteps;
