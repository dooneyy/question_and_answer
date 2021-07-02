import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=> setShowInfo(!showInfo)}>
          {
            showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </header>
      {
        showInfo && <p>{info}</p>
      }
      
    </article>




    // <>
    //  {questions.map((question) => {
    //   const {id, title, info} = question;
    //   return <article key={id}>
    //     <h4>{title}</h4>
    //     <p>{info}</p>
    //   </article>
    // })}
    // </h2>
   
  );
};

export default Question;
