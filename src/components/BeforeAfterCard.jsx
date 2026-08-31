import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const BeforeAfterCard = ({ beforeImage, afterImage, title, description }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e) => {
    if (!isDragging && e.type !== 'click') return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.type.includes('mouse') ? e.clientX : e.touches[0].clientX) - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Before/After Image Comparison */}
      <div 
        className="relative h-80 overflow-hidden cursor-col-resize select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onClick={handleMove}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt={`${title} - After Repair`}
            className="w-full h-full object-cover"
            draggable="false"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-bold text-white rounded-full bg-green-500 shadow-lg">
              AFTER
            </span>
          </div>
        </div>

        {/* Before Image (Foreground with clip) */}
        <div 
          className="absolute inset-0 transition-all duration-100"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={`${title} - Before Repair`}
            className="w-full h-full object-cover"
            draggable="false"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-bold text-white rounded-full bg-red-500 shadow-lg">
              BEFORE
            </span>
          </div>
        </div>

        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize shadow-2xl"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-500">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-blue-500"></div>
              <div className="w-0.5 h-4 bg-blue-500"></div>
            </div>
          </div>
        </div>

        {/* Drag Hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="bg-black/70 text-white px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm">
            ← Drag to Compare →
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#2454C6] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center text-sm font-semibold" style={{ color: '#28C76F' }}>
          <span>View Full Details</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterCard;
