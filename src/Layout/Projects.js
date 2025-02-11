import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import logo from "../Media/js.png"
import ProjectCard from "./ProjectCard"

function Projects(props){
    const {projects} = props
    return(
        <Box sx={{display:'flex', justifyContent: "center", flexGrow: 1, gap:2}}>
            {projects.map((project)=> <ProjectCard project={project}/>)}
            <Card sx={{width:345}}>
                <CardContent>
                    <Typography variant="h4" sx={{display:"flex", justifyContent:"center"}}>Portfolio Site</Typography>
                    <CardMedia 
                        sx={{height:180}}
                        image={logo}
                        title="js image"
                    />
                    <Typography variant="body1">This site was made with React and Material UI</Typography>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Button target="_blank" href="https://github.com/robnaratt34/portfolio-site.git">Link</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Projects
