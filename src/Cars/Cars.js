import './Cars.css';

export default function Cars({ car }) {
  return (
    <div className='car-section'>
      {car.make}
    </div>
  );
}