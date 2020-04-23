import React, {useEffect, useState} from 'react';
import styles from './App.css';

import {Cards, Chart, CountryPicker, Header, Algeria} from './components';
import { fetchData } from './api';

const App = () => {
  const [data, setData] = useState();
  const [country, setCountry] = useState();

  useEffect(()=> {
    const datat = async () => {
      try {
        const res = await fetchData();
        setData(res);
      } catch (error) {
      }
    }
    datat();
  }, []);

  const changeCountryHandler = async (country) => {
    try {
      const data = await fetchData(country);
      setData(data);
      setCountry(country)
    } catch (error) {}
  }

  return (
    <React.Fragment>
      <div className={styles.container} md={3}>
        <Header country={country}/>
        <Cards data={data}/>
        <div className={styles.con__alg}>
          <Algeria/>
        </div>
        <CountryPicker changeCountryHandler= {changeCountryHandler} />
        <Chart data={data} country={country} />
      </div>
    </React.Fragment>
  );
}

export default App;
