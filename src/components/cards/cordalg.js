import React from 'react';
import CountUp from 'react-countup';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import './card.css';


const CardAlg = props => {

    if (!props.data) {
        return(
            <div>
                <h1>Now data</h1>
            </div>
        );
    }else {
        return ( 
            <React.Fragment>
            <div>
                <h1> Statistique pour L 'Algerie</h1>
            </div>
            <div className="container">
                <Grid container justify="center" className="card__color">
                    <Grid item component= {Card} md={2} className="card card__color infected">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom> Actifs </Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end= {props.data.infected}
                                    duration={2.5}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textSecondary"> {new Date(props.data.lastUpdate).toDateString()} </Typography>
                            < Typography variant = "body2">Nombre de cas Actifs de COVID-19 </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} md={2} className="card card__color hosp">
                        <CardContent>
                            <Typography color = "textSecondary" gutterBottom> Hospitaliser </Typography>
                            <Typography variant= "h5">
                                <CountUp
                                    start = {0}
                                    end={props.data.hospitalized}
                                    duration= {2.5}
                                    separator= "," 
                                />
                            </Typography> 
                            <Typography color = "textSecondary"> {new Date(props.data.lastUpdate).toDateString()} </Typography> 
                            < Typography variant = "body2"> Nombre de cas récupérés de COVID-19 </Typography> 
                        </CardContent> 
                    </Grid>
                    <Grid item component = {Card} md={2} className="card card__color recovered">
                        <CardContent>
                            <Typography color = "textSecondary" gutterBottom > Récupére </Typography> 
                            <Typography variant = "h5" >
                                <CountUp
                                    start= {0}
                                    end = {
                                        props.data.recovered
                                    }
                                    duration= {2.5}
                                    separator = "," 
                                />
                            </Typography> 
                            <Typography color = "textSecondary" > {new Date(props.data.lastUpdate).toDateString()} </Typography> 
                            <Typography variant = "body2"> Nombre de Décès liés à COVID-19 </Typography> 
                        </CardContent> 
                    </Grid>
                    <Grid item component= {Card} md= {2} className = "card card__color deaths">
                        <CardContent>
                            <Typography color= "textSecondary" gutterBottom > Décès </Typography>  
                            <Typography variant= "h5" >
                                <CountUp
                                    start= {0}
                                    end= {props.data.deceased}
                                    duration= {2.5}
                                    separator = "," 
                                />
                            </Typography>  
                            <Typography color= "textSecondary"> { new Date(props.data.lastUpdate).toDateString()} </Typography>
                            <Typography variant= "body2" > Nombre de Décès liés à COVID - 19 </Typography>  
                        </CardContent> 
                    </Grid>
                </Grid>
            </div>
            </React.Fragment>
        );
    }
}

export default CardAlg;