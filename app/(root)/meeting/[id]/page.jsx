'use client';
import React from 'react';
import { useParams  } from 'next/navigation';


const Meeting = () => {
    const { id } = useParams(); // Access the dynamic route parameter
  return (
  <>
    <div>
      <h1>Meeting ID: {id}</h1>
    </div>
    </>
  )
}

export default Meeting
