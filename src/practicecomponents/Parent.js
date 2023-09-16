import React, { useState } from 'react'
import Baby from './Baby';

export default function Parent() {
  const [name,setName] = useState('');
  return (
    <>
    <h1>{name}</h1>
    <Baby setName={setName}></Baby>
    </>
  )
}
