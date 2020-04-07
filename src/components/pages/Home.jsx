import React,{useEffect} from 'react'
import {connect,useDispatch} from 'react-redux'
import {Global,Local} from '../../redux/actions/Get'
import Header from '../layouts/Header'
import GlobalSection from '../templates/GlobalSection'
import LocalSection from '../templates/LocalSection'
import Footer from '../layouts/Footer'
import useStyles from './useStyles'

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