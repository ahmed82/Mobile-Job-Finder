import axios from 'axios';
const reverseGeocode = require('latlng-to-zip');
const cities = require('cities');
const qs = require('qs');

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
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
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
/*  export const fetchJobs = (region) => async (dispatch) => {
   const [latitude,longitude] = region;
    console.log(  JSON.stringify(region, null, 2));
    try {
        let zip = await reverseGeocode(region);
        console.log(zip);
        const url = buildJobsUrl(zip);
        console.log(url)
        let { data } = await axios.get(url)
        dispatch({ type: FETCH_JOBS, payload: data })
        ///console.log(data);
    } catch (e) {
        console.error(e);
    } 
}*/
export const fetchJobs = (region) => async (dispatch) => {
    
    try {
        let cityinfo = await cities.gps_lookup(region.latitude,region.longitude);
        const url = buildJobsUrl(cityinfo);
        console.log('--------------------- ',url)
        let { data } = await axios.get(url)
        if (data ){
            dispatch({ type: FETCH_JOBS, payload: data })
            console.log(data);
        }
        
       // console.log(JSON.stringify(cityinfo, null, 2) );
      // return  cityinfo.city;
    } catch(err){
        console.log(err)
    }
    
        
   
      
 }