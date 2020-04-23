import React from 'react';
import CountUp from 'react-countup';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import './card.css';


const Cards = props => {

    if (!props.data) {
        return(
            <div>
                <h1>Now data</h1>
            </div>
        );
    }else {
        return ( 
            <div className="container">
                <Grid container justify="center" className="card__color">
                    <Grid item component= {Card} md={3} className="card card__color infected">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom> Actifs </Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end= {props.data.confirmed.value}
                                    duration={2.5}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textSecondary"> {new Date(props.data.lastUpdate).toDateString()} </Typography>
                            < Typography variant = "body2">Nombre de cas Actifs de COVID-19 </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} md={3} className="card card__color recovered">
                        <CardContent>
                            <Typography color = "textSecondary" gutterBottom> Récupérés </Typography>
                            <Typography variant= "h5">
                                <CountUp
                                    start = {0}
                                    end= {props.data.recovered.value}
                                    duration= {2.5}
                                    separator= "," 
                                />
                            </Typography> 
                            <Typography color = "textSecondary"> {new Date(props.data.lastUpdate).toDateString()} </Typography> 
                            < Typography variant = "body2"> Nombre de cas récupérés de COVID-19 </Typography> 
                        </CardContent> 
                    </Grid>
                    <Grid item component = {Card} md={3} className="card card__color deaths">
                        <CardContent>
                            <Typography color = "textSecondary" gutterBottom > Décès </Typography> 
                            <Typography variant = "h5" >
                                <CountUp
                                    start= {0}
                                    end= {props.data.deaths.value}
                                    duration= {2.5}
                                    separator = "," 
                                />
                            </Typography> 
                            <Typography color = "textSecondary" > {new Date(props.data.lastUpdate).toDateString()} </Typography> 
                            <Typography variant = "body2"> Nombre de Décès liés à COVID-19 </Typography> 
                        </CardContent> 
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Cards;