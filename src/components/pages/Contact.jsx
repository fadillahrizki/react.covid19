import React from 'react'
import {Typography,Grid,Container} from '@material-ui/core'
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
            <Container maxWidth="lg" style={{padding:'3em'}}>
                <Grid container style={{textAlign:'center'}} spacing={3}>
                    <Grid item xs={12}>
                        <img alt="Rizky Fadillah" src={owner} className={classes.avatar}/>
                        <Typography className={classes.name}>Rizky Fadillah</Typography>
                        <img src={variant} className={classes.variant}  alt="Variant"/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} style={{textAlign:'center'}}>
                        <Typography className={classes.email}>fadilahrizki16@gmail.com</Typography>
                        <img src={variant} className={classes.variant}  alt="Variant"/>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{textAlign:'center'}}>
                        <Typography className={classes.phone}>(+62)823-6366-0368</Typography>
                        <img src={variant} className={classes.variant} alt="Variant"/>
                    </Grid>
                </Grid>
            </Container>
            <Footer classes={classes}/>
        </>
    )
}

export default Contact