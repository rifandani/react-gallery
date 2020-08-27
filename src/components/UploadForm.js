import React, { useState } from 'react';
// files
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null); // object
  const [error, setError] = useState(null); // object

  const types = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    // if valid image file
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select a valid image file');
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
