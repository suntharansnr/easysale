import React from 'react'

export default function Baby({setName}) {
  
  return (
    <div>
        <input type='text' className='form-control' onChange={(e) => {setName(e.target.value)}}></input>
    </div>
  )
}
