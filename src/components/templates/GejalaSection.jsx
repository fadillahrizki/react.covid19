import React from 'react'
import {Box,Container,Grid,Typography} from '@material-ui/core'
import cough from '../../assets/cough.svg'
import fever from '../../assets/fever.svg'
import breathing from '../../assets/breathing.svg'

const GejalaSection
 = ({classes}) =>{
    return (
        <>
            <Box className={classes.gejala}>
                <Container maxWidth='lg'>
                    <Box>
                        <Typography className={classes.text}>GEJALA COVID 19</Typography>
                    </Box>
                    <Grid container className={classes.justifySB} style={{paddingBottom:'2em'}} spacing={3}>
                        <Grid item xs={3} sm={2}>
                            <img src={cough} alt="Batuk" width="100%"/>
                            <Typography className={classes.titleGejala}>Batuk</Typography>
                        </Grid>
                        <Grid item xs={3} sm={2}>
                            <img src={fever} alt="Demam" width="100%"/>
                            <Typography className={classes.titleGejala}>Demam</Typography>
                        </Grid>
                        <Grid item xs={3} sm={2}>
                            <img src={breathing} alt="Sulit Untuk Bernafas" width="100%"/>
                            <Typography className={classes.titleGejala}>Sulit Untuk Bernafas</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}  

export default GejalaSection
