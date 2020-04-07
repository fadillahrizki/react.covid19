import React from 'react'
import {connect} from 'react-redux'
import Header from '../layouts/Header'
import GlobalSection from '../templates/GlobalSection'
import LocalSection from '../templates/LocalSection'
import Footer from '../layouts/Footer'
import useStyles from './useStyles'

const Home = props => {
    const classes = useStyles()

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