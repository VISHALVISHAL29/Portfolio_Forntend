import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ToDoList from '@/assets/ToDo-List.jpg';
import Foodie from '@/assets/Foodie.jpg';
import BusinessApp from '@/assets/Business-App.jpg';
import Narad from '@/assets/Narad.jpg';
import Password_Gen from '@/assets/Password_Gen.jpg';

function Slider() {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndex((prevIndexes) =>
        prevIndexes.map((index) => (index + 1) % 5)
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const images = [
    ToDoList,
    Foodie,
    BusinessApp,
    Narad,
    Password_Gen,
  ];

  const positions = [
    'centre',
    'left1',
    'left',
    'right',
    'right1',
  ];

  const ImageVariants = {
    centre: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 2 },
    left: { x: '-90%', scale: 0.5, zIndex: 1 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 2 },
  };

  const handleDragEnd = (event, info) => {
    const dragOffset = info.offset.x; // Drag offset on x-axis
    const threshold = 50; // Minimum drag distance to trigger a change

    if (dragOffset > threshold) {
      // Dragged right
      setPositionIndex((prevIndexes) =>
        prevIndexes.map((index) => (index - 1 + 5) % 5)
      );
    } else if (dragOffset < -threshold) {
      // Dragged left
      setPositionIndex((prevIndexes) =>
        prevIndexes.map((index) => (index + 1) % 5)
      );
    }
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen relative overflow-hidden">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className="rounded-3xl h-3/5"
          initial="centre"
          animate={positions[positionIndex[index]]}
          variants={ImageVariants}
          transition={{ duration: 0.8 }}
          drag="x" // Enable horizontal drag
          dragConstraints={{ left: 0, right: 0 }} // Restrict drag to horizontal
          onDragEnd={handleDragEnd} // Handle drag end
          style={{
            width: '30%',
            position: 'absolute',
          }}
        />
      ))}
    </div>
  );
}

export default Slider;
