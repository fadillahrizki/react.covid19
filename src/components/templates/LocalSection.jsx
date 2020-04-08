import React from 'react'
import {Container,Typography,Grid,Card,CardContent} from '@material-ui/core' 

const GlobalSection = ({classes,local}) => {
    return (
        <Container maxWidth="lg">
                <Typography className={classes.textIndo}>KASUS DI INDONESIA</Typography>
                <Grid container spacing={3} className={classes.content} style={{paddingBottom:'3em'}}>
                    <Grid item md={3} xs={6}>
                        <Card className={classes.cardRed}>
                            <CardContent>
                                <Typography className={classes.cardTextWhite}>{local.cases}</Typography>
                                <Typography className={classes.cardDummyWhite}>Kasus</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Card className={classes.cardRed}>
                            <CardContent>
                                <Typography className={classes.cardTextWhite}>{local.todayCases}</Typography>
                                <Typography className={classes.cardDummyWhite}>Kasus Hari Ini</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Card className={classes.cardRed}>
                            <CardContent>
                                <Typography className={classes.cardTextWhite}>{local.recovered}</Typography>
                                <Typography className={classes.cardDummyWhite}>Pulih</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Card className={classes.cardRed}>
                            <CardContent>
                                <Typography className={classes.cardTextWhite}>{local.active}</Typography>
                                <Typography className={classes.cardDummyWhite}>Aktif</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Card className={classes.cardWhite}>
                            <CardContent>
                                <Typography className={classes.cardTextRed}>{local.critical}</Typography>
                                <Typography className={classes.cardDummyRed}>Kritis</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Card className={classes.cardWhite}>
                            <CardContent>
                                <Typography className={classes.cardTextRed}>{local.deaths}</Typography>
                                <Typography className={classes.cardDummyRed}>Kematian</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Card className={classes.cardWhite}>
                            <CardContent>
                                <Typography className={classes.cardTextRed}>{local.todayDeaths}</Typography>
                                <Typography className={classes.cardDummyRed}>Kematian Hari Ini</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Card className={classes.cardWhite}>
                            <CardContent>
                                <Typography className={classes.cardTextRed}>{local.deathsPerOneMillion}</Typography>
                                <Typography className={classes.cardDummyRed}>Kematian Per Satu Juta</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
    )
}

export default GlobalSection