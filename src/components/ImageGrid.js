import React from 'react';
import { motion } from 'framer-motion';
// files
import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            onClick={() => {
              setSelectedImg(doc.url);
            }}
            whileHover={{
              opacity: 1,
              scale: 1.1,
            }}
            layout
          >
            <motion.img
              src={doc.url}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
