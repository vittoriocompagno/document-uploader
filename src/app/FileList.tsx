"use client"
import React from 'react';

const FileList = () => {
  const files = Object.keys(localStorage);

  return (
    <div>
      <h2>Uploaded files:</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
