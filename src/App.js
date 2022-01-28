import './App.css';
import { spies } from './spies-data';
import { people } from './people-data';
import Spy from './Spy/Spy';
import People from './People/People';
import HowAreYous from './HowAreYous/HowAreYous';
import { listOfHellos } from './hellos-data.js';
import { differentHowAreYous } from './howAreYous-data.js';
import Hellos from './Hellos/Hellos';

function App() {
  return (
    <div className="App">
      <div className='spies'>
        {
          spies.map((spy, i) =>
            <Spy key={`${spy}-${i}`} spy={spy}/>
          )
        }
      </div>
      <People people={people}/>
      <Hellos hellos={listOfHellos}/>
      <HowAreYous data={ differentHowAreYous }/>
    </div>
  );
}

export default App;
