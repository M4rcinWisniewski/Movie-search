
import { Box, Typography } from '@mui/material'
import image from '../images/12469692_Wavy_Ppl-05_Single-11.jpg'
import MovieData from './MovieData'

const Landing = () => {
    return (
         <Box sx={{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection: 'column',
            gap:'1vw'
         }}>
            <Box id="Logo"sx={{display: 'flex', justifyContent:'center', alignItems: 'center', gap: '12vw'}}>
            <img src={image} alt=""  style={{
                width:'30vw',
                minWidth:'200px'
            }}/>
                            <Typography id="title"sx={{
                    fontSize:'3rem',
                    textAlign:'left',
                    width: '30vw',
                    

                }}> 
                    Search Title of the movie you want to see!
                </Typography>
                </Box>
            <Box sx={{
                width:'40vw', 
                display:'flex', 
                justifyContent:'center', 
                alignItems:'center', 
                flexDirection:'column',
                gap:'10vh'}}>

                
                <MovieData/>
                
            </Box>
         </Box>
    )
}

export default Landing

{/* <a href="https://www.freepik.com/free-vector/casting-call-abstract-concept-vector-illustration-open-call-models-commercial-shootings-photo-video-casting-modelling-agency-request-audition-brand-advertising-abstract-metaphor_12469692.htm#query=stock%20illustration%20film&position=10&from_view=search&track=ais">Image by vectorjuice</a> on Freepik */}