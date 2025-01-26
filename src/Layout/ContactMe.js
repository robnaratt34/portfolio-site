import React from 'react';
import { Box, Typography} from "@mui/material";

function ContactMe({contact}){
    return (
        <Box>
            <Typography variant='body1'>
                {contact}
            </Typography>
        </Box>
    )
}