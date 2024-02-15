"use client";
import React, { useState, useEffect } from 'react'
import View from './view'
import { MyImage } from './page'

const Favouritelist = ({resources}:{resources:MyImage[]}) => {
  const [initialState, setInitialState] = useState(resources);
  useEffect(()=>{
    setInitialState(resources);

  },[resources])
  return (
    <div className="columns-4 gap-4 space-y-4 mx-auto p-5">
        {initialState.map((items, i)=>{
          return (
          <div key={i} className="break-inside-avoid">
            <View 
            src={items.public_id} 
            tag={items.tags} 
            fun={(publicId:string)=>{
              setInitialState((current) => current.filter((val) => val.public_id !== publicId)
              );
            }}/>
          </div>
          );
        })}
    </div>
  )
}

export default Favouritelist