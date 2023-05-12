"use client"
import React, { useState } from 'react';
import UploadButton from './UploadButton';

const ConfirmButton = () => {
  const [uploadConfirmation, setUploadConfirmation] = useState('');

  const handleConfirm = () => {
    setUploadConfirmation('Your file was uploaded');
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <button className='bg-teal-600 text-white px-5 py-3 border-none rounded-xl' onClick={handleConfirm}>
        Confirm
      </button>
      <p className='mt-5 text-black text-sm'>{uploadConfirmation}</p>
    </div>
  );
};

export default ConfirmButton;

