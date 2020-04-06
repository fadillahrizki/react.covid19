import React from 'react'
import {Container,Typography,Grid,Card,CardContent} from '@material-ui/core' 

const GlobalSection = ({classes,global}) => {
    return (
        <Container maxWidth="lg">
                <Typography className={classes.text}>KASUS DI DUNIA</Typography>
                <Grid container spacing={3} className={classes.content}>
                    <Grid item md={3} sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.cardText}>{global.cases}</Typography>
                                <Typography className={classes.cardDummy}>Kasus</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.cardText}>{global.todayCases}</Typography>
                                <Typography className={classes.cardDummy}>Kasus Hari Ini</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.cardText}>{global.recovered}</Typography>
                                <Typography className={classes.cardDummy}>Pulih</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.cardText}>{global.active}</Typography>
                                <Typography className={classes.cardDummy}>Aktif</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.cardText}>{global.critical}</Typography>
                                <Typography className={classes.cardDummy}>Kritis</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.cardText}>{global.deaths}</Typography>
                                <Typography className={classes.cardDummy}>Kematian</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.cardText}>{global.todayDeaths}</Typography>
                                <Typography className={classes.cardDummy}>Kematian Hari Ini</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.cardText}>{global.affectedCountries}</Typography>
                                <Typography className={classes.cardDummy}>Negara Yang Terkena Dampak</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
    )
}

export default GlobalSection