import React from 'react'
import {Box,Container,Grid,Typography} from '@material-ui/core'
import clean from '../../assets/clean.svg'
import distance from '../../assets/distance.svg'
import stay from '../../assets/stay.svg'

const HindariSection = ({classes}) =>{
    return (
        <>
            <Box className={classes.hindari}>
                <Container maxWidth='lg'>
                    <Box>
                        <Typography className={classes.textSecondary} style={{color:"#fff"}}>AYO HINDARI COVID 19</Typography>
                    </Box>
                    <Grid container className={classes.justifySB} style={{paddingBottom:'2em'}} spacing={3}>
                        <Grid item xs={3} sm={2}>
                            <img src={clean} alt="Jaga Kebersihan" width="100%"/>
                            <Typography className={classes.titleHindari}>Jaga Kebersihan</Typography>
                        </Grid>
                        <Grid item xs={3} sm={2}>
                            <img src={distance} alt="Jaga Jarak" width="100%"/>
                            <Typography className={classes.titleHindari}>Jaga Jarak</Typography>
                        </Grid>
                        <Grid item xs={3} sm={2}>
                            <img src={stay} alt="Tetap di Rumah" width="100%"/>
                            <Typography className={classes.titleHindari}>Tetap di Rumah</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}  

export default HindariSection