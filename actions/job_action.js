import axios from 'axios';
const reverseGeocode = require('latlng-to-zip');
const cities = require('cities');
const qs = require('qs');

import {
    FETCH_JOBS
} from './types';


const INDEED_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const GITHUB_URL = 'https://jobs.github.com/positions.json?';

const indeed_JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'java'

};

const build_Indeed_JobsUrl = (zip) => {
    const query = qs.stringify({ ...indeed_JOB_QUERY_PARAMS, l: zip });
    console.log(query);
    return `${INDEED_ROOT_URL}${query}`;
}

const buildGitHubUrl = ( latitude, longitude ) => {
    const query =  qs.stringify({  lat: latitude , long: longitude , description: 'java' , });
        console.log(query);
        return `${GITHUB_URL}${query}`;
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
   const [latitude,longitude] = region;
    try {
        let zip = await reverseGeocode(region);
        const url = build_Indeed_JobsUrl(zip);
        let { data } = await axios.get(url)
        dispatch({ type: FETCH_JOBS, payload: data })
    } catch (e) {
        console.error(e);
    } 
} 

export const fetchGitHubJobs = (region) => async (dispatch) => {
    try {
        let cityinfo = await cities.gps_lookup(region.latitude,region.longitude);
        const url = buildGitHubUrl(region.latitude,region.longitude);
        console.log('--------------------- ',url)
         let   data   = await axios.get(url)
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