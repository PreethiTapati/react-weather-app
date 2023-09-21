import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loader';
import Weather from './Weather';
import './GetWeather.css'; 

const GetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    const getWeatherInfo = async () => {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=50.8503&longitude=4.3517&hourly=temperature_2m"
        );
        if (response.status === 200) {
          setWeatherInfo(response.data);
          setError('');
        } else {
          throw new Error(`Failed to fetch weather with status: ${response.status}`);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getWeatherInfo();
  }, []);

  return (
    <div className="card">
      {loading && <Loading />}
      {error && <p className="error">{error}</p>}
      {weatherInfo && <Weather weather={weatherInfo} />}
    </div>
  );
};

export default GetWeather;

