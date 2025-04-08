export default function ForecastCard({ forecast }) {
    const daily = forecast.filter(item => item.dt_txt.includes('12:00:00'));
  
    return (
      <div className="w-full flex flex-col gap-4  p-2 ">
        <h3 className="text-lg font-semibold mb-2 text-white dark:text-white">
          5-Day Forecast
        </h3>
  
        {daily.map((day, index) => (
          <div
            key={index}
            className="bg-slate-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-md shadow flex items-center justify-between"
          >
            <div>
              <p className="font-medium">
                {new Date(day.dt_txt).toLocaleDateString(undefined, {
                  weekday: 'short',
                })}
              </p>
              <p className="text-sm">{day.weather[0].main} {Math.round(day.main.temp)}°C</p>
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
              className="w-10 h-10"
            />
          </div>
        ))}
      </div>
    );
  }
  