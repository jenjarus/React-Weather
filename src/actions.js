export function setIdCity(data) {
    return {
        type: 'SET_ID_CITY',
        idCity: data,
    }
}
export function setCityName(data) {
    return {
        type: 'SET_CITY',
        city: data,
    }
}
export function setDataToday(data) {
    return {
        type: 'SET_DATA_TODAY',
        dataToday: data,
    }
}
export function setDataYesterday(data) {
    return {
        type: 'SET_DATA_YESTERDAY',
        dataYesterday: data,
    }
}
export function setDataTomorrow(data) {
    return {
        type: 'SET_DATA_TOMORROW',
        dataTomorrow: data,
    }
}
export function setDataAfterTomorrow(data) {
    return {
        type: 'SET_DATA_AFTER_TOMORROW',
        dataAfterTomorrow: data,
    }
}
export function setErrorCity(data) {
    return {
        type: 'SET_ERROR_CITY',
        errorCity: data,
    }
}

