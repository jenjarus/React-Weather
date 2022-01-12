import React, {useEffect, useState} from 'react';
import './styles/reset.css'
import './styles/base.scss'
import WeatherInput from "./Components/WeatherInput";
import WeatherInfo from "./Components/WearherInfo"
import {connect} from "react-redux";
import {setDataToday, setDataYesterday, setDataTomorrow, setDataAfterTomorrow} from './actions'

const App = ({idCity, errorCity, setDataToday, setDataYesterday, setDataTomorrow, setDataAfterTomorrow}) => {

  const [loading, setLoading] = useState(false);

  const api = async (idCity, date='', flag) => {
    const url = `/api/location/${idCity}${date}/`;

    const api_url = await fetch(url);
    const data = await api_url.json();

    switch(flag) {
      case 'today':
        setDataToday(data.consolidated_weather[0]);
        break;
      case 'yesterday':
        setDataYesterday(data[0]);
        break;
      case 'tomorrow':
        setDataTomorrow(data[0]);
        break;
      case 'afterTomorrow':
        setDataAfterTomorrow(data[0]);
        break;
      default:
        console.log('Упс...');
        break;
    }
    setLoading(true);
  };

  const date = (flag) => {
    let date = new Date().getTime();
    let year, month, day;

    switch(flag) {
      case 'yesterday':
        date = stringData(date - 86400000);
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate();
        break;
      case 'tomorrow':
        date = stringData(date + 86400000);
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate();
        break;
      case 'afterTomorrow':
        date = stringData(date + 172800000);
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate();
        break;
      default:
        console.log('Упс...');
        break;
    }
    return `/${year}/${month+1}/${day}`;
  };

  // Меняет миллисекунды на объект даты
  const stringData = (ms) => {
    let date = new Date(ms);
    date = new Date(date.toString());
    return date;
  };

  const abc = () => {
    if(loading) {
      if(errorCity) {
        return <>
          <div className="info_box">
            <div className="error_msg">Город не найден</div>
          </div>
        </>
      } else {
        return <>
          <WeatherInfo />
        </>
      }
    } else {
      return <div>Загрузка...</div>
    }
  };

  useEffect(() => {
    api(idCity, '', 'today');
    api(idCity, date('yesterday'), 'yesterday');
    api(idCity, date('tomorrow'), 'tomorrow');
    api(idCity, date('afterTomorrow'), 'afterTomorrow');
  }, [idCity]);

  return (
      <>
        <header>
          <div className="container">
            <div className="header">
              <div className="title">Прогноз <span className="red">погоды</span></div>
            </div>
          </div>
        </header>
        <main>
          <article className="container">
            <WeatherInput />
            {abc()}
          </article>
        </main>
        <footer>
          <div className="container">
            <div className="footer">
              <div className="copy">©Jenjarus <span className="year">2077</span></div>
            </div>
          </div>
        </footer>
      </>
  );
};

function mapStateToProps(state) {
  return {
    idCity: state.idCity,
    errorCity: state.errorCity,
  }
}

const mapDipatchToProps = {
  setDataToday,
  setDataYesterday,
  setDataTomorrow,
  setDataAfterTomorrow,
};

export default connect(mapStateToProps, mapDipatchToProps)(App)
