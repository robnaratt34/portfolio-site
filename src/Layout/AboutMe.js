import React from 'react';
import { Box, Typography} from "@mui/material";
import profile from "../Media/js.png"

function AboutMe({about, skills, achievements}){
  return (
    <Box sx={{display:"flex"}}>
      <Box component="img" src={profile} />
      <Typography variant="body1">
        {about}
      </Typography>
    </Box>
  )
}

export default AboutMe
