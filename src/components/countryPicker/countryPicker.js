import React, {useEffect, useState} from 'react';
import './countryPicker.css';
import axios from 'axios';

import {NativeSelect, FormControl} from '@material-ui/core'

const CountryPicker = ({changeCountryHandler}) => {
    const [fetchCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const getA = async () => {
            try{
                const {data:{countries}} = await axios.get("https://covid19.mathdro.id/api/countries");
                const count = countries.map((country) => country.name);
                setFetchCountries(count);
            }catch(err) {

            }
        } 
        getA(); 
    }, []);

    const onChangeHandler =(event) => {
        changeCountryHandler(event.target.value);
    }
    
    return ( 
        <div className="container__conpic">
            <FormControl>
                <NativeSelect defaultValue= "" onChange= {onChangeHandler} className = "conpic__select">
                    <option value="">Global</option>
                        {fetchCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default CountryPicker;