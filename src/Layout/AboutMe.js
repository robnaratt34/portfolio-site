import React from 'react';
import { Box, Typography} from "@mui/material";
import profile from "../Media/js.png"

function AboutMe({about, skills, achievements}){
  return (
    <Box sx={{display:"flex", justifyContent:"center"}}>
      <Box component="img" src={profile} />
      <Box sx={{display:"flex", flexDirection:"column"}}>
        <Typography variant="body1">
          {about}
        </Typography>
        <Box sx={{display:"flex"}}>
          {skills.map((skill) => <Typography>{skill}</Typography>)}
        </Box>
      </Box>
    </Box>
  )
}

export default AboutMe
