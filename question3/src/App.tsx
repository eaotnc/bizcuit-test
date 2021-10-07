import logo from './logo.svg';
import './App.css';
import BeerCard from './BeerCard';
import { useState } from 'react';
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
  const [beers, setbeers] = useState<Array<BeerDetailInterface>>([{
    _id: "802",
    uid: "e491d0a0-d27e-4afc-af1b-41685c65c04e",
    brand: "Tsingtao",
    name: "Oaked Arrogant Bastard Ale",
    style: "Smoke-flavored",
    hop: "Columbus",
    yeast: "2035 - American Lager",
    malts: "Roasted barley",
    ibu: "21 IBU",
    alcohol: "3.4%",
    blg: "19.8°Blg",
    randomCount: 3,
  }
  ]);

  const renderBeer = () => {
    return beers.map((beer, index) => {
      return <BeerCard beerDetail={beer} />
    })

  }
  return (
    <div className="App">
      <header className="App-header">
        Random Beers
      </header>
      {
        renderBeer()
      }

    </div>
  );
}

export default App;
