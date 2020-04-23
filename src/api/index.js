import axios from 'axios';

const url= 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeUrl = url;

    if (country) {
        changeUrl= `${url}/countries/${country}`
    }
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}}= await axios.get(changeUrl);
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };
    } catch (error) {
        
    }
};

export const fetchConf = async () => {
    try {
        const {data} = await axios.get(`${url}/confirmed`);
        const modData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        })); 
        return modData;
    } catch (error) {

    }
};

export const fetchDailyData = async () => {
    try {
        const {
            data
        } = await axios.get(`https://covid19.mathdro.id/api/daily`);
        const modData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modData;
    } catch (error) {

    }
};

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`https://covid19.mathdro.id/api/countries`);
        return countries.map((country) => country.name);
    } catch (error) {

    }
};

export const fetchAlg = async () => {
    try {
        const {
            data: {
                infected,
                hospitalized,
                recovered,
                deceased,
                infectedByRegion
            }
        } = await axios.get(`https://api.apify.com/v2/key-value-stores/pp4Wo2slUJ78ZnaAi/records/LATEST?disableRedirect=true`);
        return {
            infected,
            hospitalized,
            recovered,
            deceased,
            infectedByRegion
        };
    } catch (error) {

    }
};