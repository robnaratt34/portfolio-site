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
                    <Typography variant="h2">Project</Typography>
                    <CardMedia 
                        sx={{height:140}}
                        image={logo}
                        title="js image"
                    />
                    <Typography variant="h4">I did this</Typography>
                    <Button>Link</Button>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Projects
