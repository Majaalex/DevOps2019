import axios from 'axios'
const baseUrl  = 'https://rata.digitraffic.fi/api/v1/live-trains/station/HKI'

const getData = (dest) => {
    const request = axios.get(`${ baseUrl }/${dest}`)
    return request.then(response => response)
}

export default { getData }