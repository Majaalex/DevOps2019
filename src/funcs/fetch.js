import axios from 'axios';
const base = 'https://rata.digitraffic.fi/api/v1/live-trains/station/HKI/';

// GET REQUEST
function fetch(value) {
    return axios.get(base + value)
}

export {
    base,
    fetch
}