import React from "react";
import {connect} from "react-redux";
import WearherItem from "./WearherItem";

const WeatherInfo = ({cityName, dataYesterday, dataToday, dataTomorrow, dataAfterTomorrow}) => {
    return (
        <div className="info_box">
            <div className="title_city">{cityName}</div>
            <div className="items">
                <WearherItem data={dataYesterday} flag="yesterday" />
                <WearherItem data={dataToday} flag="today" />
                <WearherItem data={dataTomorrow} flag="tomorrow" />
                <WearherItem data={dataAfterTomorrow} flag="afterTomorrow" />
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        cityName: state.cityName,
        dataYesterday: state.dataYesterday,
        dataToday: state.dataToday,
        dataTomorrow: state.dataTomorrow,
        dataAfterTomorrow: state.dataAfterTomorrow,
    }
}

export default connect(mapStateToProps)(WeatherInfo)
