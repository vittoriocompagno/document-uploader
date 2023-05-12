"use client"
import { useState } from 'react'
import React from 'react'
import UploadButton from './components/UploadButton'
import ConfirmButton from './components/ConfirmButton'
import {AiFillFilePdf,AiFillFileExcel,AiFillFileWord} from 'react-icons/ai'
import {BsFiletypeTxt,BsFiletypeJpg} from 'react-icons/bs'


export default function Home() {
  const [uploadedFiles, setUploadedFiles] = useState <string[]>([]);
  interface UploadButtonProps {
    onUpload: (file: File) => void; 
  }
  const handleUpload = (file:File) => {
    setUploadedFiles(prevFiles => [...prevFiles, file.name]);  
  };

  return (
    <main className=" 
                      min-h-screen 
                      p-24
                      bg-teal-800">
      <div className='flex justify-center items-center flex-col gap-4'>
        <div className='bg-white rounded-xl w-1/2'>
          <div className='flex items-center justify-center flex-col p-10'>
            <h1 className='mb-8 text-black text-4xl font-bold'>
              Upload your file
            </h1>
            <div className='flex flex-col justify-center items-center gap-4 p-8'>
              <UploadButton onUpload={handleUpload} />
              <p className='text-black text-semi-bold text-center mt-5'>
                Accepted formats
              </p>
              <div className='flex flex-row gap-5'>
                <AiFillFileExcel className='text-teal-600 text-3xl'/>
                <AiFillFileWord className='text-teal-600 text-3xl'/>
                <AiFillFilePdf className='text-teal-600 text-3xl'/>
                <BsFiletypeTxt className='text-teal-600 text-3xl'/>
                <BsFiletypeJpg className='text-teal-600 text-3xl'/>
              </div>
            </div>
          </div>
            <ConfirmButton/>
        </div>
          <div className='text-black
                          bg-white 
                          p-10
                          rounded-xl
                          w-1/2 
                          
                          gap-10
                          '>
              <h1 className='text-3xl font-bold mb-5 text-center'>Your files</h1>
              <ul>
                {uploadedFiles.map((fileName, index) => (
                  <li key={index}>{fileName}</li>
                ))}
              </ul>
          </div>
      </div>
    </main>
  )
}
