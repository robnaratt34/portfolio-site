import React from 'react';
import { Box, Typography, Chip} from "@mui/material";
import profile from "../Media/js.png"

function AboutMe({about, skills, achievements}){
  return (
    <Box sx={{display:"flex", justifyContent:"center"}}>
      <Box component="img" src={profile} />
      <Box sx={{display:"flex", flexDirection:"column"}}>
        <Typography variant="body1">
          {about}
        </Typography>
        <br>
        <Typography variant="body1">Skills:</Typography>
        <Box sx={{display:"flex"}}>
          {skills.map((skill) => <Chip label={skill} />)}
        </Box>
      </Box>
    </Box>
  )
}

export default AboutMe
