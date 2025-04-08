# Weather Dashboard

A responsive, full-featured weather dashboard built with React, Vite, and Tailwind CSS. Displays real-time weather and a 5-day forecast using the OpenWeatherMap API.

---

## Tech Stack

- React (with Vite)
- Tailwind CSS
- OpenWeatherMap API
- Axios (for HTTP requests)
- Vercel (for deployment)

---

## Features

- Search weather by city
- Displays temperature, condition, humidity, wind speed, pressure, visibility
- Refresh current weather data
- 5-day forecast (midday weather for each day)
- Dark/Light mode toggle with localStorage persistence
- Search history with clickable quick access
- Responsive layout for desktop and mobile

---

## Getting Started

### Step 1: Clone the repository and run the project locally

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
npm install
```

### Create an `.env` file and add your OpenWeatherMap API key

### Run the app

```bash
npm run dev
```
open browser [Here](http://localhost:5173) 

## API Integration

### Current Weather API

```bash
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```
### 5-day Forecast API

```bash
https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric
```

### API Key and Rate Limits
- free API form OpenWeatherMap
- Free tier Limits:
    - 60 calls per minute
    - 1000 calls a day


## Deployment

### Deployed at Vercel

- [Weather App](https://weather-dashboard-green-six.vercel.app/)