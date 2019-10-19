import axios from 'axios';
const baseUrl  = 'https://rata.digitraffic.fi/api/v1/live-trains/station/HKI'

function fetch(destination) {
    return axios.get(`${ baseUrl }/${ destination }`)
}

export default fetch;