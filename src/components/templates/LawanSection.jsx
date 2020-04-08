import React from 'react'
import {Box,Container,Grid,Typography} from '@material-ui/core'
import antivirus from '../../assets/antivirus.svg'
import wash from '../../assets/wash.svg'
import mask from '../../assets/mask.svg'

const LawanSection = ({classes}) =>{
    return (
        <>
            <Box className={classes.lawan}>
                <Container maxWidth='lg'>
                    <Box>
                        <Typography className={classes.text} style={{color:"#fff"}}>AYO LAWAN COVID 19</Typography>
                    </Box>
                    <Grid container className={classes.justifySB} style={{paddingBottom:'2em'}} spacing={3}>
                        <Grid item xs={3} sm={2}>
                            <img src={antivirus} alt="Antivirus" width="100%"/>
                            <Typography className={classes.titleLawan}>Menggunakan Antivirus</Typography>
                        </Grid>
                        <Grid item xs={3} sm={2}>
                            <img src={wash} alt="Cuci Tangan" width="100%"/>
                            <Typography className={classes.titleLawan}>Cuci Tangan</Typography>
                        </Grid>
                        <Grid item xs={3} sm={2}>
                            <img src={mask} alt="Memaikai Masker" width="100%"/>
                            <Typography className={classes.titleLawan}>Memaikai Masker</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}  

export default LawanSection
