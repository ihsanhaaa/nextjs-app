'use client';
import React, { useEffect } from 'react'

const Error = ({error, reset}:{error:Error, reset:()=>void}) => {

    useEffect(() => {
        console.error(error);
    }, [error])

  return (
    <div>
        <p>Error</p>
        <button onClick={() => reset()}>Coba lagi</button>
    </div>
  )
}

export default Error