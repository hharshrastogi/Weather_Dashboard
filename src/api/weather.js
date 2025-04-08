import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeather = async (city) => {
  const query = city.trim();

  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: query,
          appid: API_KEY,
          units: 'metric', 
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('AXIOS ERROR:', error);
    if (error.response) {
      throw new Error(error.response.data.message || 'API Error');
    } else {
      throw new Error('Network Error');
    }
  }
};

export const fetchForecast = async (city) => {
  try{
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error('AXIOS ERROR:', error);
    if (error.response) {
      throw new Error(error.response.data.message || 'API Error');
    } else {
      throw new Error('Network Error');
    }
  }
};
