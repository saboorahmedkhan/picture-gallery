"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CldImage } from "next-cloudinary";

export function TabsDemo({src}:{src:string}) {
  return (
    <Tabs defaultValue="original" className="w-full py-4 px-5">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">Gray Scale</TabsTrigger>
        <TabsTrigger value="oil">Oil Paint</TabsTrigger>
        <TabsTrigger value="improve">Improve</TabsTrigger>
      </TabsList>
      {/* Original */}
      <TabsContent value="original"> 
      <div className="flex gap-7 justify-center">
      <CldImage
          width="250"
          height="250"
          src={src}
          sizes="100vw"
          alt="Description of my image"
        />
      <CldImage
          width="250"
          height="250"
          src={src}
          sizes="100vw"
          alt="Description of my image"
        />
      </div>

      </TabsContent>
      {/* Blur */}
      <TabsContent value="blur"> 
      <div className="flex gap-7 justify-center">
      <CldImage
          width="250"
          height="250"
          src={src}
          sizes="100vw"
          alt="Description of my image"
        />
      <CldImage
          width="250"
          height="250"
          src={src}
          sizes="100vw"
          alt="Description of my image"
          blur={100}
        />
      </div>

      </TabsContent>
      {/* Gray Scale */}
      <TabsContent value="gray"> 
      <div className="flex gap-7 justify-center">
      <CldImage
          width="250"
          height="250"
          src={src}
          sizes="100vw"
          alt="Description of my image"
        />
      <CldImage
          width="250"
          height="250"
          src={src}
          sizes="100vw"
          alt="Description of my image"
          grayscale={true}
        />
      </div>

      </TabsContent>
      {/* Oil Paint */}
      <TabsContent value="oil"> 
      <div className="flex gap-7 justify-center">
      <CldImage
          width="250"
          height="250"
          src={src}
          sizes="100vw"
          alt="Description of my image"
        />
      <CldImage
          width="250"
          height="250"
          src={src}
          sizes="100vw"
          alt="Description of my image"
          oilPaint={true}
        />
      </div>

      </TabsContent>
      {/* Improve */}
      <TabsContent value="improve"> 
      <div className="flex gap-7 justify-center">
      <CldImage
          width="250"
          height="250"
          src={src}
          sizes="100vw"
          alt="Description of my image"
        />
      <CldImage
          width="250"
          height="250"
          src={src}
          sizes="100vw"
          alt="Description of my image"
          improve={true}
        />
      </div>

      </TabsContent>
      
    </Tabs>
  )
}
