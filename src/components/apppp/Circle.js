import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from a library like react-icons

const Circle = () => {
  const descriptions = [
    'Description 1',
    'Description 2',
    'Description 3',
    'Description 4',
    'Description 5',
    'Description 6',
    'Description 7',
    'Description 8',
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
        {index == 6 ? <p className='text-white'>wsderftgy</p> : 'sdfg'}
        
      </div>
    );
  });

  return (
    <div className="main-circle" onMouseLeave={handleLeave}>
      {/* {arrows} */}
      {circles}
      {hoveredIndex !== null && (
        <div className="description">{descriptions[hoveredIndex]}</div>
      )}
    </div>
  );
};

export default Circle;
