
import './App.css';
import axios from 'axios';
import BeerCard from './BeerCard';
import { useEffect, useState } from 'react';
interface BeerDetailInterface {
  _id: string;
  uid: string;
  brand: string;
  name: string;
  style: string;
  hop: string;
  yeast: string;
  malts: string;
  ibu: string;
  alcohol: string;
  blg: string;
  randomCount: number;
}

function App() {
  const [beers, setbeers] = useState<Array<BeerDetailInterface>>([]);
  const [currentDisplay, setCurrentDisplay] = useState<number>(0);
  const [loading, setloading] = useState<number>(0);
  useEffect((): any => {
    getRandomBeer()
  }, []);

  const getRandomBeer = async () => {
    const result: any = await axios.get('http://localhost:9000/api/beer/random')
    setbeers([result.data.data])
  }
  const getNextRandomBeer = async () => {
    const result: any = await axios.get('http://localhost:9000/api/beer/random')
    await setbeers([...beers, result.data.data])
    await setCurrentDisplay(currentDisplay + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        Random Beers
      </header>
      {beers.length > 0 && <BeerCard beerDetail={beers[currentDisplay]} />}
      {beers.length > 1 &&
        <button onClick={() => setCurrentDisplay(currentDisplay !== 0 ? currentDisplay - 1 : 0)}>
          Back
        </button>
      }
      <button onClick={() => getNextRandomBeer()}>Next</button>
    </div>
  );
}

export default App;
