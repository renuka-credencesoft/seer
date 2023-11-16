import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from a library like react-icons

const Circle = () => {
  const descriptions = [
    "We extract your data into your tenancy in our cloud solution using our secure API's.",
    'We annotate and enhance your data per your blueprint.',
    'Using our Rapid Application Development environment, we build your application set according to your blueprint.',
    'We release in a restricted deployment environment where you can use the solution to build confidence in Stock Seer and Seer insights.',
    'We go live.',
    'We repeat the process for new opportunities, creating a culture of innovation.',
    'We understand your requirements and the opportunities within your business that give you the greatest return.',
    'We craft and implementation blueprint that is customized to your exact needs and get your sign-off.',
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const calculateCirclePosition = (index, totalCircles) => {
    const angle = (index / totalCircles) * 2 * Math.PI;
    const radius = 240;
    const x = 200 + radius * Math.cos(angle);
    const y = 200 + radius * Math.sin(angle);
    return { x, y };
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const CircleArrow = ({ start, end, visible }) => {
    if (!visible) return null;

    const { x: startX, y: startY } = calculateCirclePosition(start, 8);
    const { x: endX, y: endY } = calculateCirclePosition(end, 8);

    return (
      <FaArrowRight
        className="arrow-icon"
        style={{
          position: 'absolute',
          top: startY - 5, // Adjust the position of the arrow icon
          left: startX - 15, // Adjust the position of the arrow icon
          transform: `rotate(${start * (360 / 8)}deg)`, // Rotate the arrow
          width: '20px', // Adjust arrow width
          height: '20px', // Adjust arrow height
        }}
      />
    );
  };

  const arrows = Array.from({ length: 8 }, (_, index) => (
    <CircleArrow key={index} start={index} end={(index + 1) % 8} visible={true} />
  ));

  const circles = Array.from({ length: 8 }, (_, index) => {
    const { x, y } = calculateCirclePosition(index, 8);
    return (
      <div
        key={index}
        className={`sub-circle ${hoveredIndex === index ? 'hovered' : ''}`}
        style={{ top: y, left: x }}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={handleLeave}
      >
          <div  key={index} className={`smallCircle  ${hoveredIndex === index ? 'hovered' : ''}`}  onMouseEnter={() => handleHover(index)}
        onMouseLeave={handleLeave}>
        
        {index == 6 ? <p className='text-white text-sm -mt-2 text-center'>1.<br /> Identify Opportunity</p> : ''}
        {index == 7 ? <p className='text-white text-sm -mt-2  text-center'>2.<br /> Create your Blueprint</p> : ''}
        {index == 0 ? <p className='text-white text-sm -mt-2  text-center'>3.<br /> Extract your Data</p> : ''}
        {index == 1 ? <p className='text-white text-sm -mt-2  text-center'>4.<br /> Enhance your Data</p> : ''}
        {index == 2 ? <p className='text-white text-sm -mt-6 text-center'>5.<br /> Implement your Algorithm</p> : ''}
        {index == 3 ? <p className='text-white text-sm -mt-2 text-center'>6.<br /> Establish Confidence</p> : ''}
        {index == 4 ? <p className='text-white text-sm  text-center'>7.<br /> Go Live</p> : ''}
        {index == 5 ? <p className='text-white text-sm -mt-2 text-center'>8.<br /> Refine and Repeat</p> : ''}
        </div>
      </div>
    );
  });

  return (
    <div className="main-circle" onMouseLeave={handleLeave}>
      {/* {arrows} */}
      {circles}
      {hoveredIndex !== null ? (
        <div className="description text-lg px-20">{descriptions[hoveredIndex]}</div>
      ) : <p className="description2 text-3xl font-bold  px-20" style={{color:"#35435F"}}>SSR Methodology</p>}
    </div>
  );
};

export default Circle;
