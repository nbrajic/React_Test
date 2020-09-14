import axios from 'axios';

export const getAll = () => {
    return axios.get('https://restcountries.eu/rest/v2/all')
};

export const getByRegion = (region) => {
    return axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
};

