import { useState, useEffect } from 'react';
import { projectFirestore } from '../services/firebase';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        // fires everytime change occurs in collection
        let documents = [];

        // loop inside documents
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id }); // get all document field data + id dari document tsb
        });

        setDocs(documents); // save to state
      });

    // cleanup
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
