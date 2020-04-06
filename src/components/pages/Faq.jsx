import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import {makeStyles,Box,Button} from '@material-ui/core'
import FaqSection from '../templates/FaqSection'

const datas = require("./faq.json")

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
    btnMore:{
        color:"#fff"
    }
}))

const Faq = () => {
    const classes = useStyles()
    return(
        <>
            <Header classes={classes}/>
            <FaqSection datas={datas} classes={classes} color={color}/>
            <Box style={{textAlign:'center',padding:'50px'}}>
                <Button variant="contained" color="primary" size="large">
                    <a className={classes.btnMore} href="https://www.who.int/indonesia/news/novel-coronavirus/qa-for-public">Lihat Lebih Banyak</a>
                </Button>
            </Box>
            <Footer classes={classes}/>
        </>
    )
}

export default Faq