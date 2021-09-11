import React from 'react'
import { useState } from 'react';

export default function Note() {
  const [data, setData] = useState([]);
  const [note,setNote] = useState('');
  const hanleChange=(event)=>{
    setNote(event.target.value);
  }
  const handleClick=()=>{
    setData([...data,note]);
  }
  const deletenote=(id)=>{
    setData(data.filter(data=>data.id!==id));
  }
  return (
    <>
      <input onChange={hanleChange} value={note} />
      <button onClick={() => handleClick()}>Add note</button>
      {data.map((item) => {
        return (
          <>
            <li style={{ width: '80%' }} type="text">{item}</li>
            <button onClick={() => deletenote(item.id)}>delete</button>
          </>
        );
      })}
    </>
  )
}