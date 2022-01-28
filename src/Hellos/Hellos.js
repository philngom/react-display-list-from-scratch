import React from 'react';
import './Hellos.css';

export default function People({ hellos }) {
  return (
    <div className='hellos'>
      {
        hellos.map((hello, i) =>
          <p key={hello + i}>{hello}</p>
        )
      }
    </div>
  );
}