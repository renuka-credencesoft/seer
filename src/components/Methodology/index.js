import React, { useState, useRef, useEffect } from 'react';

const originalAreas = [
  { coords: "950,150,47" },
  { coords: "1150,225,47" },
  { coords: "1250,390,47" },
  { coords: "1170,570,47" },
  { coords: "950,670,47" },
  { coords: "800,550,47" },
  { coords: "755,400,47" },
  { coords: "825,225,47" },
];

const Methodology = () => {
  const [activeArea, setActiveArea] = useState(null);
  const [areas, setAreas] = useState(originalAreas);
  const imageRef = useRef(null);

  useEffect(() => {
    const updateAreas = () => {
      if (imageRef.current) {
        const { width, height } = imageRef.current.getBoundingClientRect();
        const widthRatio = width / 1448;
        const heightRatio = height / 840;

        const newAreas = originalAreas.map(area => {
          const [x, y, r] = area.coords.split(',').map(Number);
          return {
            coords: `${x * widthRatio},${y * heightRatio},${r * widthRatio}`
          };
        });

        setAreas(newAreas);
      }
    };

    updateAreas();
    window.addEventListener('resize', updateAreas);
    return () => window.removeEventListener('resize', updateAreas);
  }, []);

  const handleMouseEnter = (index) => {
    setActiveArea(index);
  };

  const handleMouseLeave = () => {
    setActiveArea(null);
  };

  const handleClick = (index) => {
    setActiveArea(index);
  };

  return (
    <div className="w-full mx-auto relative">
      <div className="w-full mx-auto max-w-screen-3xl relative">
        <div className="flex justify-center text-center relative">
          <div className="relative">
            <img
              ref={imageRef}
              id="seer"
              src="/images/uploads/Seer_Cycle-01.svg"
              height={840}
              width={1448}
              alt="seer methodology"
              useMap="#methodology"
              className="block"
            />
            <map name="methodology">
              {areas.map((area, index) => (
                <area
                  key={index}
                  shape="circle"
                  coords={area.coords}
                  alt={`area-${index + 1}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(index)}
                />
              ))}
            </map>
            {activeArea !== null && (
              <img
                src={`/images/uploads/Seer_Cycle-0${activeArea + 2}.svg`}
                height={840}
                width={1448}
                alt={`highlighted area ${activeArea + 1}`}
                className={`absolute top-0 left-0 transition-opacity duration-300`}
                style={{
                  opacity: 1,
                  pointerEvents: 'none',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
