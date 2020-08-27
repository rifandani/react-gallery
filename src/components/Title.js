import React from 'react';
import { motion } from 'framer-motion';

const Title = () => {
  return (
    <div className="title-container">
      <div className="nav">
        <motion.h1 whileHover={{ scale: 1.3 }}>Ri-Gallery</motion.h1>
        <div className="icons">
          <motion.a href="https://rifandani-blog.netlify.app/">
            <ion-icon
              name="paper-plane-outline"
              style={{ marginRight: '10px' }}
            ></ion-icon>
          </motion.a>
          <motion.a href="https://github.com/rifandani">
            <ion-icon
              name="logo-github"
              style={{ marginRight: '10px' }}
            ></ion-icon>
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/rifandani/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </motion.a>
        </div>
      </div>

      <div className="title">
        <motion.h2
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ color: '#efb6b2', scale: 1.3 }}
        >
          Upload Your Pictures
        </motion.h2>
        <p>Built using React, Firebase, and Framer-Motion</p>
      </div>
    </div>
  );
};

export default Title;
