import React from 'react'
import {connect} from 'react-redux'
import Header from '../layouts/Header'
import GlobalSection from '../templates/GlobalSection'
import LocalSection from '../templates/LocalSection'
import HindariSection from '../templates/HindariSection'
import GejalaSection from '../templates/GejalaSection'
import LawanSection from '../templates/LawanSection'
import Footer from '../layouts/Footer'
import useStyles from './useStyles'

const Home = props => {
    const classes = useStyles()

    return(
        <>
            <Header classes={classes} />
            <HindariSection classes={classes} />
            <GlobalSection classes={classes} global={props.global}/>
            <GejalaSection classes={classes} />
            <LocalSection classes={classes} local={props.local}/>
            <LawanSection classes={classes} />
            <Footer classes={classes}/>
        </>
    )
}

const mapStateToProps = state => ({
    global:state.Get.global,        
    local:state.Get.local,
})

export default connect(mapStateToProps)(Home)