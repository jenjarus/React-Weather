import React from "react";
import {connect} from "react-redux";

const WEATHER_STATE = {
    'Snow': 'Снег',
    'Sleet' : 'Мокрый снег',
    'Hail' : 'Град',
    'Thunderstorm' : 'Гроза',
    'Heavy Rain' : 'Ливень',
    'Light Rain' : 'Легкий дождь',
    'Showers' : 'Дождь',
    'Heavy Cloud' : 'Сильная облачность',
    'Light Cloud' : 'Небольшая облачность',
    'Clear' : 'Ясно'
};

const DAY = {
    'today' : 'Сегодня',
    'yesterday': 'Вчера',
    'tomorrow': 'Завтра',
    'afterTomorrow': 'Послезавтра',
};

const WeatherItem = ({data, flag}) => {
    let classBox = "item";
    classBox += flag === 'today'? ' today' : '';
    const url_img = `https://www.metaweather.com/static/img/weather/png/64/${data.weather_state_abbr}.png`;

    const the_temp = (data.the_temp > 0 ? '+' : '') + Number(data.the_temp).toFixed(0);
    const min_temp = (data.min_temp > 0 ? '+' : '') + Number(data.min_temp).toFixed(0);
    const max_temp = (data.max_temp > 0 ? '+' : '') + Number(data.max_temp).toFixed(0);
    const wind_speed = (data.wind_speed/2.236).toFixed(1); //Конвертируется в м/с

    return (
        <div className={classBox}>
            <div className="weather_time">{DAY[flag]}</div>
            <div className="weather_img">
                <img src={url_img} alt="img_weather"/>
            </div>
            <div className="weather_state">{WEATHER_STATE[data.weather_state_name]}</div>
            <div className="weather_temp">Температура: <span className="temp">{the_temp}°C</span>
                <div className="temp_other">
                    <span>min: {min_temp}°C</span>
                    <span>max: {max_temp}°C</span>
                </div>
            </div>
            <div className="weather_wind">Ветер: {wind_speed}м/с {data.wind_direction_compass}</div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        dataToday: state.dataToday,
    }
}

export default connect(mapStateToProps)(WeatherItem)
