import axios from 'axios';
const reverseGeocode = require('latlng-to-zip');

import {
    FETCH_JOBS
} from './types';

export const fetchJobs = (region) => {
    return  async (dispatch) => {
        reverseGeocode(region)
        .then(zipcode => zipcode)
        .catch(err => err);
    }
}