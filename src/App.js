import logo from './logo.svg';
import './App.css';
import { spies } from './data';
import Spy from './Spy/Spy';

function App() {
  return (
    <div className="App">
      {/* <div className='spies'> */}
      {
        spies.map((spy, i) =>
          <Spy key={`${spy}-${i}`} spy={spy}/>
        )
      }
      {/* </div> */}
    </div>
  );
}

export default App;
