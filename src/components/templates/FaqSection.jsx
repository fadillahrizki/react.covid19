import React from 'react'
import {Container,Typography,Box} from '@material-ui/core'
const FaqSection = ({datas,classes,color}) => {
    return(
        <>
        {
            datas.map((data,i)=>(
                    <Box key={i}>
                        {
                            data.map((d,ind)=>{
                                if(ind === 0){
                                    return(
                                        <Box key={ind} className={classes.boxWhite}>
                                            <Container maxWidth="lg">
                                                <Typography className={classes.text} style={{color:color.secondary}}>{d.q}</Typography>
                                                <Typography className={classes.content}>{d.a}</Typography>
                                                <Typography className={classes.from}>
                                                    Sumber : <a href={d.f}>{d.f}</a>
                                                </Typography>
                                            </Container>
                                        </Box>
                                    )
                                }else if(ind === 1){
                                    return(
                                        <Box key={ind} className={classes.boxPrimary}>
                                            <Container maxWidth="lg">
                                                <Typography className={classes.text} style={{color:color.secondary}}>{d.q}</Typography>
                                                <Typography className={classes.content}>{d.a}</Typography>
                                                <Typography className={classes.from}>
                                                    Sumber : <a href={d.f}>{d.f}</a>
                                                </Typography>
                                            </Container>
                                        </Box>
                                    )
                                }else{
                                    return(
                                        <Box key={ind} className={classes.boxSecondary}>
                                            <Container maxWidth="lg">
                                                <Typography className={classes.text} style={{color:"#fff"}}>{d.q}</Typography>
                                                <Typography className={classes.content}>{d.a}</Typography>
                                                <Typography className={classes.from}>
                                                    Sumber : <a href={d.f}>{d.f}</a>
                                                </Typography>
                                            </Container>
                                        </Box>
                                    )
                                }
                            })
                        }
                    </Box>
                
            ))
        }
        </>
    )
}

export default FaqSection