const initialState = {
    idCity: 2122265,
    cityName: "Moscow",
    dataToday: {},
    dataYesterday: {},
    dataTomorrow: {},
    dataAfterTomorrow: {},
    errorCity: false,
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_ID_CITY':
            return {
                ...state,
                idCity: action.idCity,
            };
        case 'SET_CITY':
            return {
                ...state,
                cityName: action.city,
            };
        case 'SET_DATA_TODAY':
            return {
                ...state,
                dataToday: action.dataToday,
            };
        case 'SET_DATA_YESTERDAY':
            return {
                ...state,
                dataYesterday: action.dataYesterday,
            };
        case 'SET_DATA_TOMORROW':
            return {
                ...state,
                dataTomorrow: action.dataTomorrow,
            };
        case 'SET_DATA_AFTER_TOMORROW':
            return {
                ...state,
                dataAfterTomorrow: action.dataAfterTomorrow,
            };
        case 'SET_ERROR_CITY':
            return {
                ...state,
                errorCity: action.errorCity,
            };
        default:
            return state;
    }
}
