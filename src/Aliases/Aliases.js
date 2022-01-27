import React from 'react';
import './Aliases.css';

export default function Aliases({ aliases }) {
  return (
    <div className='aliases'>
      {
        aliases.map((alias, i) =>
          <p key={alias + i} className='alias'>{alias}</p>

        )
      }
    </div>
  );
}