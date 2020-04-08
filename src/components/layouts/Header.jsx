import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import covid19 from '../../assets/covid19.svg'
import {Container,Box,Grid,Button,Typography,Hidden} from '@material-ui/core'
import iconmouse from '../../assets/iconmouse.svg'


const Header = ({classes}) => {
    const location = useLocation()
    const more = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }
    return(
        <Box className={classes.root}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12} className={classes.header} >
                            {

                                location.pathname === '' || location.pathname === '/' ? (
                                    <Box>
                                        <Typography className={classes.title}>CORONA VIRUS DISEASE 19</Typography>
                                        <Box>
                                            <Hidden smDown>
                                                <svg width="200" height="1" style={{ marginBottom:'-10px',}}> 
                                                    <line x2="200" className={classes.line}/>
                                                </svg>
                                            </Hidden>
                                            <Button variant="outlined" className={classes.btn} size="large" onClick={more}>Pelajari Lebih Lanjut</Button>
                                        </Box>
                                    </Box>
                                ) : ''

                            }

                            {

                                location.pathname === '/faq' ? (
                                    <Box>
                                        <Typography className={classes.title}>FAQ</Typography>
                                    </Box>
                                ) : ''
                                
                            }

                            {

                                location.pathname === '/contact' ? (
                                    <Box>
                                        <Typography className={classes.title}>CONTACT</Typography>
                                    </Box>
                                ) : ''

                            }
                            

                        </Grid>
                        <Hidden smDown>
                            <Grid item md={6} className={classes.right}>
                                <img src={covid19} className={classes.img} alt="covid19"/>
                            </Grid>
                        </Hidden>
                    </Grid>

                    <Grid container spacing={3} className={classes.navs}>

                        <Grid item xs={4} className={classes.left}>
                            {

                                location.pathname === '/' || location.pathname === '' ? (
                                    <Link to="/faq" className={classes.nav}> FAQ </Link>
                                ) : ''

                            }
                            {

                                location.pathname === '/faq' ? (
                                    <Link to="/" className={classes.nav}> HOME </Link>
                                ) : ''

                            }
                            {

                                location.pathname === '/contact' ? (
                                    <Link to="/" className={classes.nav}> HOME </Link>
                                ) : ''

                            }
                            
                        </Grid>
                        
                        <Grid item xs={4} className={classes.centered}>
                            <img src={iconmouse} alt="Icon Mouse" id="mouse"/>
                        </Grid>

                        <Grid item xs={4} className={classes.right}>
                            {

                                location.pathname === '/' || location.pathname === '' ? (
                                    <Link to="/contact" className={classes.nav}> CONTACT </Link>
                                ) : ''

                            }
                            {

                                location.pathname === '/faq' ? (
                                    <Link to="/contact" className={classes.nav}> CONTACT </Link>
                                ) : ''

                            }
                            {

                                location.pathname === '/contact' ? (
                                    <Link to="/faq" className={classes.nav}> FAQ </Link>
                                ) : ''

                            }
                        </Grid>

                    </Grid>
                </Container>
            </Box>
    )
}

export default Header