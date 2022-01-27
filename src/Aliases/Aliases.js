import React from 'react';

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