"use client";
import { CldUploadButton,CldImage } from 'next-cloudinary';
import {useState} from "react"

interface uploadImage{
  event:"success";
  info: {public_id:string}
}

export default function Home() {
// Use state to change the image

const [imageId, setImageId] = useState("cld-sample-4")

  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-between">

      {/* Upload Button */}
      <CldUploadButton uploadPreset="sdcm81xb" onUpload={(result)=>{
         let res = result as uploadImage;
         setImageId(res.info.public_id);
      }}/>

      {/* Image View */}
      <CldImage
          width="400"
          height="400"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />

    </main> 
  )
}
