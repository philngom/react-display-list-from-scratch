import React from 'react';
import './Spy.css';

export default function Spy({ spy }) {
  return (
    <div className='spy'>
      {
        spy.name
      }
    </div>
  );
}