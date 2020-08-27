import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../services/firebase';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ref
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    // upload file to the ref (bucket storage)
    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        // on uploading, set progress
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        // on error, set error
        setError(err);
      },
      async () => {
        // on completed, set url
        const url = await storageRef.getDownloadURL();
        setUrl(url);

        // save to database
        collectionRef.add({
          url,
          createdAt: timestamp(),
        });
      },
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
