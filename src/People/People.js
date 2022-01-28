import React from 'react';
import './People.css';

export default function People({ people }) {
  return (
    <div className='people-list'>
      {
        people.map((person, i) =>
          <p key={person + i}>This persons name is {person.name}, he is {person.age} years old. His favorite food is {person.favoriteFood}.</p>
        )
      }
    </div>
  );
}