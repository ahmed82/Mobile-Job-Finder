import axios from 'axios';
const reverseGeocode = require('latlng-to-zip');

import {
    FETCH_JOBS
} from './types';


const JOP_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'java'

};

const buildJobsUrl = (zip) => {
    const query = JSON.stringify({ ...JOB_QUERY_PARAMS, l: zip });
    console.log(query);
    return `${JOP_ROOT_URL}${query}`;
}

/* export const fetchJobs = (region) => {
    return  (dispatch) => {
        // reverseGeocode({longitude : latitude: }) // we will pass the region object contain the long/latit
        reverseGeocode(region)
        .then(zipcode => zipcode)
        .catch(err => err);
    } */
// OR use 
export const fetchJobs = (region) => async (dispatch) => {
    try {
        let zip = await reverseGeocode(region);
        const url = buildJobsUrl(zip);
        let { data } = await axios.get(url)
        dispatch({ type: FETCH_JOBS, payload: data })
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}