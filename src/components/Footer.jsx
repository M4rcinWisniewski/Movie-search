import { Typography } from "@mui/material"
const Footer = () => {
    return (
        <>
            <footer style={{
                display:"flex",
                flexDirection:'column-reverse',
                alignItems:'center'

            }}>
                <Typography><a href="https://www.freepik.com/free-vector/casting-call-abstract-concept-vector-illustration-open-call-models-commercial-shootings-photo-video-casting-modelling-agency-request-audition-brand-advertising-abstract-metaphor_12469692.htm#query=stock%20illustration%20film&position=10&from_view=search&track=ais">Image by vectorjuice</a> on Freepik</Typography>
                <Typography>2023 &copy; Marcin Wiśniewski Development</Typography>
            </footer>
        </>


    )
}
export default Footer