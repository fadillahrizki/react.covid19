
import {makeStyles} from '@material-ui/core'
// #FF8177
export const color = () => ({
    primary:"#F22D2D",
    secondary:"#eee",
    dark:"#5E5558"
})

const useStyles = makeStyles(theme=> {
    return {
        root:{
            minHeight:'100vh',
            backgroundColor:color().secondary,
            color:color().primary,
            fontFamily:'Agency FB',
            margin:'auto',
            minWidth:'100%',
            overflow:'hidden',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',

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
        justifySB:{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
        },
        img:{
            width:'400px',
            height:'400px',
        },
        header:{
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-start',
            [theme.breakpoints.down('sm')]: {
                justifyContent:'center',
                alignContent:'space-around',
            },
        },
        title:{
            fontSize:'80px',
            margin:0,
            fontFamily:'Agency FB',
            [theme.breakpoints.down('sm')]:{
                fontSize:'50px'
            }
        },
        btn:{
            color:color().primary,
            borderColor:color().primary,
            borderRadius:'100px',
            marginTop:'30px',
            marginLeft:'20px'
        },
        line:{
            stroke:color().primary,
            strokeWidth:2,
        },
        navs:{
            marginTop:'20vh',
        },
        nav:{
            fontSize:'30px',
            color:color().primary,
            textTransform:'uppercase',
            textDecoration:'none',
        },
        text:{
            fontSize:'50px',
            color:color().primary,
            margin:'auto',
            textAlign:'center',
            padding:theme.spacing(3),
            fontFamily:'Agency FB',
            [theme.breakpoints.down('sm')]:{
                fontSize:'30px'
            }
        },
        textSecondary:{
            fontSize:'50px',
            color:color().secondary,
            margin:'auto',
            textAlign:'center',
            padding:theme.spacing(3),
            fontFamily:'Agency FB',
            [theme.breakpoints.down('sm')]:{
                fontSize:'30px'
            }
        },
        textIndo:{
            fontSize:'50px',
            color:color().primary,
            margin:'auto',
            textAlign:'center',
            padding:'60px',
            fontFamily:'Agency FB',
            [theme.breakpoints.down('sm')]:{
                fontSize:'30px'
            }
        },
        card:{
            background:color().secondary,
            color:color().primary
        },
        cardRed:{
            background:color().primary,
        },
        cardText:{
            fontSize:'50px',
            color:color().primary,
            fontFamily:'Agency FB',
            fontWeight:'bold',
            textAlign:'center',
            [theme.breakpoints.down('sm')]:{
                fontSize:'30px'
            }
        },
        cardDummy:{
            fontSize:'30px',
            textAlign:'center',
            [theme.breakpoints.down('sm')]:{
                fontSize:'16px'
            }
        },
        cardTextRed:{
            fontSize:'50px',
            color:color().primary,
            fontFamily:'Agency FB',
            fontWeight:'bold',
            textAlign:'center',
            [theme.breakpoints.down('sm')]:{
                fontSize:'30px'
            }
        },
        cardDummyRed:{
            fontSize:'30px',
            textAlign:'center',
            color:color().primary,
            [theme.breakpoints.down('sm')]:{
                fontSize:'16px'
            }
        },
        cardTextWhite:{
            fontSize:'50px',
            color:"#fff",
            fontFamily:'Agency FB',
            fontWeight:'bold',
            textAlign:'center',
            [theme.breakpoints.down('sm')]:{
                fontSize:'30px'
            }
        },
        cardDummyWhite:{
            fontSize:'30px',
            textAlign:'center',
            color:"#fff",
            [theme.breakpoints.down('sm')]:{
                fontSize:'16px'
            }
        },
        footer:{
            padding:'60px',
            background:color().secondary,
            color:color().primary,
        },
        textFooter:{
            fontSize:'30px',
            fontFamily:'Agency FB',
            textAlign:'center'
        },
        boxWhite:{
            color:color().primary,
            paddingBottom:theme.spacing(5)
        },
        boxPrimary:{
            background:color().primary,
            color:"#fff",
            paddingBottom:theme.spacing(5)
        },
        boxSecondary:{
            background:color().secondary,
            color:color().primary,
            paddingBottom:theme.spacing(5)
        },
        content:{
            fontSize:'30px',
            fontFamily:'Agency FB',
            textAlign:'justify',
            [theme.breakpoints.down('sm')]:{
                fontSize:'20px'
            }
        },
        from:{
            fontWeight:"bold",  
        },
        avatar:{
            width:'300px !important',
            height:'300px !important',
            margin:'auto',
            borderRadius:'50%',
            [theme.breakpoints.down('sm')]:{
                width:'200px !important',
                height:'200px !important'
            }
        },
        name:{
            fontSize:'50px',
            fontFamily:'Agency FB',
            textTransform:'uppercase',
            color:color().primary,
            [theme.breakpoints.down('sm')]:{
                fontSize:'30px'
            }
        },
        email:{
            fontSize:'30px',
            fontFamily:'Agency FB',
            textTransform:'uppercase',
            color:color().primary,
            [theme.breakpoints.down('sm')]:{
                fontSize:'16px'
            }
        },
        phone:{
            fontSize:'30px',
            fontFamily:'Agency FB',
            textTransform:'uppercase',
            color:color().primary,
            [theme.breakpoints.down('sm')]:{
                fontSize:'16px'
            }
        },
        variant:{
            [theme.breakpoints.down('sm')]:{
                width:'50px',
            }
        },
        hindari:{
            width:'100%',
            background:color().primary
        },
        titleHindari:{
            fontSize:'30px',
            fontFamily:'Agency FB',
            textTransform:'uppercase',
            color:color().secondary,
            [theme.breakpoints.down('sm')]:{
                fontSize:'16px',
            }
        },
        gejala:{
            width:'100%',
            background:color().secondary
        },
        titleGejala:{
            fontSize:'30px',
            fontFamily:'Agency FB',
            textTransform:'uppercase',
            color:color().primary,
            [theme.breakpoints.down('sm')]:{
                fontSize:'16px',
            }
        },
        lawan:{
            width:'100%',
            background:color().primary
        },
        titleLawan:{
            fontSize:'30px',
            fontFamily:'Agency FB',
            textTransform:'uppercase',
            color:"#fff",
            [theme.breakpoints.down('sm')]:{
                fontSize:'16px',
            }
        }
    }
})

export default useStyles