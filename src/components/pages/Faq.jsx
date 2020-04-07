import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import {Box,Button} from '@material-ui/core'
import FaqSection from '../templates/FaqSection'
import datas from './data.js'
import useStyles,{color} from './useStyles'

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