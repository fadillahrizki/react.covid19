import React from 'react'
import {Typography,Grid,Container,Box,Avatar} from '@material-ui/core'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import owner from '../../assets/owner.jpeg'
import variant from '../../assets/variant.svg'
import useStyles from './useStyles'

const Contact = () => {
    const classes = useStyles()
    return(
        <>
            <Header classes={classes}/>
            <Container maxWidth="lg">
                <Box className={classes.contact}>
                    <Avatar alt="Rizky Fadillah" src={owner} className={classes.avatar}/>
                    <Typography className={classes.name}>Rizky Fadillah</Typography>
                    <img src={variant} alt="Variant"/>

                    <Grid container style={{margin:'30px 0'}} spacing={3}>
                        <Grid item sm={6}>
                            <Typography className={classes.email}>fadilahrizki16@gmail.com</Typography>
                            <img src={variant} alt="Variant"/>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography className={classes.phone}>(+62)823-6366-0368</Typography>
                            <img src={variant} alt="Variant"/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer classes={classes}/>
        </>
    )
}

export default Contact