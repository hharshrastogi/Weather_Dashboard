import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import { fetchWeather, fetchForecast } from './api/weather';
import ForecastCard from './components/ForecastCard';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });


  const handleSearch = async () => {
    if (!city) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const data = await fetchWeather(city);
      setWeather(data);

      const forecastData = await fetchForecast(city);
      setForecast(forecastData.list);

      setHistory((prev) =>
        prev.includes(city) ? prev : [city, ...prev.slice(0, 4)]
      );      

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleHistoryClick = async (cityName) => {
        setCity(cityName);
        setLoading(true);
        setError('');
        setWeather(null);
        const forecastData = await fetchForecast(city);
        setForecast(forecastData.list);

    try {
      const data = await fetchWeather(cityName);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);
  
  const handleRefresh = async () => {
    if (!city) return;
  
    setLoading(true);
    setError('');
    setWeather(null);
  
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  
  return (
 
    <div className={`${isDark ? 'dark' : ''}`}>
    <div className="min-h-screen w-screen  bg-gradient-to-br from-blue-900 to-blue-500 dark:from-gray-900 dark:to-gray-800 text-white px-6 py-10 relative">
      {/* Top-left heading */}
      <h1 className="absolute top-6 left-6 text-3xl md:text-4xl font-bold flex items-center gap-2">
        🌤️ Weather Dashboard
      </h1>
      <button
          onClick={() => setIsDark(!isDark)}
          className="absolute top-6 right-6 px-3 py-1 rounded-md border border-white text-sm hover:bg-white hover:text-black transition"
        >
         {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row items-center justify-between h-full max-w-6xl mx-auto pt-16 md:pt-0 md:min-h-[80vh]">
        
        {/* Left Side: Search */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4">
          <SearchBar
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onSearch={handleSearch}
          />
          {history.length > 0 && (
            <div className="mt-4 text-left">
              <h2 className="text-lg font-semibold mb-2">Search History</h2>
              <ul className="space-y-1">
                {history.map((item, index) => (
               <li
                  key={index}
                  className="cursor-pointer text-blue-200 hover:text-white transition-colors"
                  onClick={() => handleHistoryClick(item)}
               >
                {item}
                  </li>
                   ))}
                </ul>
                </div>
            )}

          {loading && <Loader />}
          {error && <p className="text-red-300">{error}</p>}
        </div>
  
        {/* Right Side: Weather Card */}
        {weather && (
  <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8 mt-8 md:mt-0">

    {/* Forecast on Left */}
    {forecast.length > 0 && (
      <div className="w-full md:w-[40%]">
        <ForecastCard forecast={forecast} />
      </div>
    )}

    {/* Weather Card on Right */}
    <div className="w-full md:w-[60%] flex flex-col items-center md:items-end gap-3">
      
      <div className="mt-7 w-full">
        <WeatherCard weatherData={weather}  />
      </div>
      <button
        onClick={handleRefresh}
        className="px-4 py-1 bg-white text-black text-sm rounded-md border border-gray-300 hover:bg-gray-200 transition"
      >
        🔄 Refresh
      </button>
    </div>
  </div>
)}



      </div>
    </div>
    </div>
    
  );
  
    
}

export default App;
