import './Cars.css';

export default function Cars({ car }) {
  console.log(car);
  return (
    <div className='car-section'>
      {car.make}
    </div>
  );
}