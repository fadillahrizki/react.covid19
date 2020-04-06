import React,{useEffect} from 'react'
import {connect,useDispatch} from 'react-redux'
import {Global,Local} from '../../redux/actions/Get'
import Header from '../layouts/Header'
import GlobalSection from '../templates/GlobalSection'
import LocalSection from '../templates/LocalSection'
import Footer from '../layouts/Footer'
import {makeStyles} from '@material-ui/core'


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
        width:'100%',
        padding:'60px',
        background:color.secondary,
        color:color.primary,
        marginTop:'60px'
    },
    textFooter:{
        fontSize:'30px',
        fontFamily:'Agency FB',
        textAlign:'center'
    }
}))

const Home = props => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(Global())
        dispatch(Local())
    },[dispatch])

    return(
        <>
            <Header classes={classes}/>
            <GlobalSection classes={classes} global={props.global}/>
            <LocalSection classes={classes} local={props.local}/>
            <Footer classes={classes}/>
        </>
    )
}

const mapStateToProps = state => ({
    global:state.Get.global,        
    local:state.Get.local,
})

export default connect(mapStateToProps)(Home)