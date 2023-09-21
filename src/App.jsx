import './App.css';
import Header from './components/Header';
import GetWeather from './components/GetWeather';
import { UilRainbow } from '@iconscout/react-unicons'

function App() {
  return (
    <div>
      <Header title="BrusselsWeather" icon={<UilRainbow  />} />
      
      <GetWeather />
    </div>
  );
}

export default App;
