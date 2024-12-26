import React, { useEffect, useState } from 'react'
import { motion, motionValue } from 'framer-motion';
import ToDoList from '@/assets/ToDo-List.jpg'
import Foodie from '@/assets/Foodie.jpg'
import BusinessApp from '@/assets/Business-App.jpg'
import Narad from '@/assets/Narad.jpg'
import Password_Gen from '@/assets/Password_Gen.jpg'

function Slider() {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4])

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndex((prevIndexes) => 
        prevIndexes.map((index) => (index + 1) % 5)
      );
    }, 5000); // Change every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const images = [
    ToDoList,
    Foodie,
    BusinessApp,
    Narad,
    Password_Gen
  ]

  const positions = [
    'centre',
    'left1',
    'left',
    'right',
    'right1'
  ]

  const ImageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 2 },
    left: { x: '-90%', scale: 0.5, zIndex: 1 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 2 },
  }
  return (
    <div className='flex items-center flex-col justify-center h-screen'>
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-3xl h-3/5 mt-48"
          initial="center"
          animate={positions[positionIndex[index]]}
          variants={ImageVariants}
          transition={{ duration: 2 }}
          style={{ width: '30%', position: 'absolute', }}
        />
      ))}
    </div>
  );
}

export default Slider;
