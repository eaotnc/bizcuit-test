
import './App.css';
import axios from 'axios';
import BeerCard from './BeerCard';
import { useEffect, useState } from 'react';
import beerIcon from './assets/beer-icon.png'

const API_GET_RANDOM_BEER = 'http://localhost:9000/api/beer/random'
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
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, seterrorMessage] = useState<string>('');
  const [appTheme, setAppTheme] = useState<string>('dark-mode');
  useEffect((): any => {
    getRandomBeer()
  }, []);

  const getRandomBeer = async () => {
    //INFO: fetch first random beer
    setLoading(true)
    try {
      const result: any = await axios.get(API_GET_RANDOM_BEER)
      setbeers([result.data.data])
    } catch (error: any) {
      seterrorMessage(error.message)
      console.error(error)
    } finally {
      setLoading(false)
    }

  }
  const getNextRandomBeer = async () => {
    //INFO: fetch new beer and keep old beer in array 
    setLoading(true)
    try {
      // INFO: check display position if it not last position then don't fetch new beer
      if (currentDisplay === beers.length - 1) {
        const result: any = await axios.get(API_GET_RANDOM_BEER)
        setbeers([...beers, result.data.data])
        setCurrentDisplay(currentDisplay + 1)
      } else {
        // INFO: if click next and display position not last position then only move the current position +1
        setCurrentDisplay(currentDisplay + 1)
      }
    } catch (error: any) {
      seterrorMessage(error.message)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  const toggleThemeMode = () => {
    console.log("🚀 ~ toggleThemeMode ~ appTheme", appTheme)

    if (appTheme === 'dark-mode') {
      setAppTheme('light-mode')
    } else {
      setAppTheme('dark-mode')
    }

  }
  return (
    <div className={`App ${appTheme}`}>
      <header className="App-header">
        Random Beers
      </header>


      <section >
        <label htmlFor="toggle-2" className="toggle-2">
          <input type="checkbox" name="toggle-2" id="toggle-2" className="toggle-2__input" onClick={() => toggleThemeMode()} />
          <span className="toggle-2__button">
            <img src="https://raw.githubusercontent.com/nueymoo/toggle-switch-css/master/sun.png" alt="sun" className="toggle-2__button--icon" />
            <img src="https://raw.githubusercontent.com/nueymoo/toggle-switch-css/master/moon.png" alt="moon" className="toggle-2__button--icon" />
          </span>
        </label>
      </section>

      {errorMessage &&
        <header className="App-header">
          {errorMessage}
        </header>
      }

      {loading && <img className="beer-loading" src={beerIcon} alt="beer-icon" />}
      {/* INFO: display loading */}

      {beers.length > 0 && !loading && <BeerCard beerDetail={beers[currentDisplay]} />}
      {/* INFO: display beerDetail */}

      {beers.length > 1 && currentDisplay !== 0 &&
        <button onClick={() => setCurrentDisplay(currentDisplay - 1)}>
          Back
        </button>
      }
      {/* INFO: display back button only if have beer and currentDisplay not 0 */}

      <button onClick={() => getNextRandomBeer()}>Next</button>

    </div>
  );
}

export default App;
