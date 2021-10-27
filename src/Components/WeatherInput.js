import React, {useState} from "react";
import {connect} from "react-redux";
import {setIdCity, setCityName, setErrorCity} from "../actions";

const WeatherInput = ({setIdCity, setCityName, setErrorCity}) => {
    const [city, setCity] = useState("Moscow");
    const [showSearch, setShowSearch] = useState(false);
    const [searchList, setSearchList] = useState([]);

    const api = async (city) => {
        const proxy_url = "https://cors-anywhere.herokuapp.com/";
        const url = `https://www.metaweather.com/api/location/search/?query=${city}`;

        const api_url = await fetch(proxy_url + url);
        const data = await api_url.json();
        setSearchList(data);
    };

    const apiSubmit = async (city) => {
        const proxy_url = "https://cors-anywhere.herokuapp.com/";
        const url = `https://www.metaweather.com/api/location/search/?query=${city}`;

        try {
            const api_url = await fetch(proxy_url + url);
            const data = await api_url.json();
            setIdCity(data[0].woeid);
            setCityName(data[0].title);
            setErrorCity();
        } catch(err) {
            console.log(err);
            setErrorCity(true);
        }
    };

    const select_result = (city, id) => {
        setCity(city);
        setCityName(city);
        setIdCity(id);
        setSearchList([]);
    };

    const search_result = () => {
        return searchList.map((el, i) =>
        <li
        key={i}
        onClick={() => select_result(el.title, el.woeid)}>
            {el.title}
        </li>);
    };

    const searchBox = (flag) => {
        if(flag && searchList.length) {
            return <div className="search_list">
                <ul>{search_result()}</ul>
            </div>
        }
    };

    const handleInput = (e) => {
        setCity(e.target.value);
        api(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        apiSubmit(city);
        setSearchList([]);
    };

    return (
        <div className="line line_col">
            <form className="form_box" onSubmit={handleSubmit}>
                <div className="line">
                    <input
                        type="text"
                        placeholder="Введите город"
                        value={city}
                        onChange={handleInput}
                        onFocus={() => setShowSearch(true)}
                        onBlur={() => setTimeout(setShowSearch, 500, false)}
                    />
                    <button className="btn">Применить</button>
                </div>
                {searchBox(showSearch)}
            </form>
        </div>
    );
};

const mapDipatchToProps = {
    setIdCity,
    setCityName,
    setErrorCity,
};

export default connect(null, mapDipatchToProps)(WeatherInput)
