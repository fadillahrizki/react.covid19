import React from 'react'
import {Box,Typography} from '@material-ui/core' 

const Footer = ({classes}) => {
    return (
        <>
            <Box className={classes.footer}>
                <Typography className={classes.textFooter}> CREATED BY FADILLAHRIZKI </Typography>
            </Box>
        </>
    )
}

export default Footer