import React from 'react';
// import Cars from './Cars/Cars';
import Aliases from '../Aliases/Aliases';
import Cars from '../Cars/Cars';
import './Spy.css';

export default function Spy({ spy }) {
  return (
    <div className='spy'>
      <div className="spy-name">
        { `${spy.first} ${spy.last}` }
      </div>
      <div className='middle-section'>
        <div>
          <img src={`./images/${spy.first.toLowerCase()}.jpg`}></img>
        </div>
        <Aliases aliases={spy.aliases}/>
      </div>
      <div className='bottom-section'>
        <Cars car={spy.car}/>
        <div>
          <img className="" src={`./images/${spy.car.make.toLowerCase()}.jpg`}></img>
        </div>
      </div>

    </div>
  );
}