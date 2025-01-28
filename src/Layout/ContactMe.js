import React from 'react';
import { Box, Typography} from "@mui/material";

function ContactMe({contact}){
    return (
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <Typography variant='body1'>
                {contact}
            </Typography>
        </Box>
    )
}

export default ContactMe