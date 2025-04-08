import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import { fetchWeather } from './api/weather';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  

  const handleSearch = async () => {
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
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-900 to-blue-500 text-white px-6 py-10 relative">
      {/* Top-left heading */}
      <h1 className="absolute top-6 left-6 text-3xl md:text-4xl font-bold flex items-center gap-2">
        🌤️ Weather Dashboard
      </h1>
  
      {/* Main layout */}
      <div className="flex flex-col md:flex-row items-center justify-between h-full max-w-6xl mx-auto pt-16 md:pt-0 md:min-h-[80vh]">
        
        {/* Left Side: Search */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4">
          <SearchBar
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onSearch={handleSearch}
          />
          {loading && <Loader />}
          {error && <p className="text-red-300">{error}</p>}
        </div>
  
        {/* Right Side: Weather Card */}
        {weather && (
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <WeatherCard weatherData={weather} />
          </div>
        )}
      </div>
    </div>
  );
  
    
}

export default App;
