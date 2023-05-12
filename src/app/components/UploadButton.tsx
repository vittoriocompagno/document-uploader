"use client"
import React, { useState } from 'react';
import {
  BsFillCloudArrowUpFill
} from 'react-icons/bs'

const icon = BsFillCloudArrowUpFill;

const UploadButton = ({onUpload}) => {
  const [fileName, setFileName] = useState("");
  

  const handleFileUpload = (e) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      setFileName(file.name);
      onUpload(file);
    }
  };

  return (
    <div className='w-40'>
      <input type="file" 
      id="fileUpload" 
      onChange={handleFileUpload} 
      style={{ display: 'none' }} />
      <div className='
                      bg-blue-500  
                      text-white 
                      px-5 py-3 
                      border-none 
                      rounded-lg 
                      cursor-pointer
                      flex flex-col
                      '>
        <label htmlFor="fileUpload" className="cursor-pointer flex justify-center">
        <BsFillCloudArrowUpFill/>
        </label>
        
      </div>
      
      </div>
  );
}


export default UploadButton;
