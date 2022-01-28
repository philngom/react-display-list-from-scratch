import React from 'react';
import './HowAreYous.css';

export default function HowAreYous({ data }) {
  return (
    <div className='container'>
      {
        data.map((obj, i) =>
          <p key={obj + i}>
            How are you in {obj.language} is {obj.how_are_you} You may response with {obj.response}
          </p>
        )
      }
    </div>
  );
}