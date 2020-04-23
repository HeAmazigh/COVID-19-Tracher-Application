import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './chart.css';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({data, country}) => {
    const [daily, setDaily]= useState([]);

    useEffect(() => {
        const getA = async () => {
            try {
                const {data} = await axios.get("https://covid19.mathdro.id/api/daily");
                const modData = data.map((dailyData) => ({
                    confirmed: dailyData.confirmed.total,
                    deaths: dailyData.deaths.total,
                    date: dailyData.reportDate
                }));
                setDaily(modData);
            } catch (err) {

            }
        }
        console.log(data);
        getA();
    }, [data]);

    const lineChart = daily.length && (
        <Line
            data={{
                labels: daily.map(({ date }) => date),
                datasets: [
                    {
                        data: daily.map(({ confirmed }) => confirmed),
                        label: 'Inficted',
                        borderColor: '#3333ff',
                        backgroundColor: '#002D6D',
                        fill: true,
                    },
                    {
                        data: daily.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: '#red',
                        backgroundColor: '#BC0022',
                        fill: true,
                    },
                ],
            }}
        />
    );

    const barChart = data && (
        <Bar 
            data = {{ 
                labels: ['Actifs', 'Récupérés', 'Décès'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        '#002D6D',
                        '#116315',
                        '#BC0022'
                    ],
                    data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                }]
            }}
            options= {{
                legend: {display: false},
                title: {
                    display: true,
                    text: `Corrent State in ${country}`
                }
            }}
        />
    );

    return ( 
        <div>
            <div className= "container__chart" >
                {country ? barChart :lineChart }
            </div>
        </div>
    );
}

export default Chart;