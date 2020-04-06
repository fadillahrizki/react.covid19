import React from 'react'
import {makeStyles,Avatar,Box,Typography,Grid,Container} from '@material-ui/core'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import owner from '../../assets/owner.jpeg'
import variant from '../../assets/variant.svg'

const color = {
    primary:"#FF8177",
    secondary:"#5E5558",
    red:"#F22D2D",
}

const useStyles = makeStyles(theme=>({
    root:{
        minHeight:'100vh',
        backgroundColor:color.secondary,
        color:color.primary,
        fontFamily:'Agency FB',
        margin:'auto',
        minWidth:'100%',
        overflow:'hidden',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    right:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    left:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    centered:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width:'400px',
        height:'400px',
    },
    title:{
        fontSize:'80px',
        margin:0,
        fontFamily:'Agency FB',
    },
    btn:{
        color:color.primary,
        borderColor:color.primary,
        borderRadius:'100px',
        marginTop:'30px',
        marginLeft:'20px'
    },
    line:{
        stroke:color.primary,
        strokeWidth:2,
    },
    navs:{
        marginTop:'50px'
    },
    nav:{
        fontSize:'30px',
        color:color.primary,
        textTransform:'uppercase',
        textDecoration:'none',
    },
    text:{
        fontSize:'50px',
        color:color.primary,
        margin:'auto',
        textAlign:'center',
        padding:'60px',
        fontFamily:'Agency FB',
    },
    textIndo:{
        fontSize:'50px',
        color:color.red,
        margin:'auto',
        textAlign:'center',
        padding:'60px',
        fontFamily:'Agency FB',
    },
    card:{
        background:color.secondary,
        color:color.primary
    },
    cardRed:{
        background:color.red,
    },
    cardText:{
        fontSize:'50px',
        color:color.primary,
        fontFamily:'Agency FB',
        fontWeight:'bold',
        textAlign:'center',
    },
    cardDummy:{
        fontSize:'30px',
        textAlign:'center',
    },
    cardTextRed:{
        fontSize:'50px',
        color:color.red,
        fontFamily:'Agency FB',
        fontWeight:'bold',
        textAlign:'center',
    },
    cardDummyRed:{
        fontSize:'30px',
        textAlign:'center',
        color:color.red,
    },
    cardTextWhite:{
        fontSize:'50px',
        color:"#fff",
        fontFamily:'Agency FB',
        fontWeight:'bold',
        textAlign:'center',
    },
    cardDummyWhite:{
        fontSize:'30px',
        textAlign:'center',
        color:"#fff",
    },
    footer:{
        padding:'60px',
        background:color.secondary,
        color:color.primary,
    },
    textFooter:{
        fontSize:'30px',
        fontFamily:'Agency FB',
        textAlign:'center'
    },
    boxWhite:{
        color:color.secondary,
        padding:theme.spacing(5)
    },
    boxPrimary:{
        background:color.primary,
        color:color.secondary,
        padding:theme.spacing(5)
    },
    boxSecondary:{
        background:color.secondary,
        color:'#fff',
        padding:theme.spacing(5)
    },
    content:{
        fontSize:'30px',
        fontFamily:'Agency FB',
        textAlign:'center'
    },
    from:{
        fontWeight:"bold",
        padding:theme.spacing(5),
    },
    avatar:{
        width:'300px',
        height:'300px',
        margin:'auto',
    },
    contact:{
        padding:theme.spacing(5),
        textAlign:'center',
    },
    name:{
        fontSize:'50px',
        fontFamily:'Agency FB',
        textTransform:'uppercase',
        color:color.primary,
        margin:'30px 0'
    },
    email:{
        fontSize:'30px',
        fontFamily:'Agency FB',
        textTransform:'uppercase',
        color:color.primary,
    },
    phone:{
        fontSize:'30px',
        fontFamily:'Agency FB',
        textTransform:'uppercase',
        color:color.primary,
    },
}))

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

                    <Grid container style={{margin:'30px 0'}}>
                        <Grid item md={6}>
                            <Typography className={classes.email}>fadilahrizki16@gmail.com</Typography>
                            <img src={variant} alt="Variant"/>
                        </Grid>
                        <Grid item md={6}>
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