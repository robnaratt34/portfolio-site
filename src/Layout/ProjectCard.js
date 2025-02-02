import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "../Media/js.png"
import { Box } from "@mui/material";

function ProjectCard(props){
    const {project} = props;
    return(
        <div>
            <Card sx={{width:345}}>
                <CardContent>
                    <Typography variant="h4" sx={{display:"flex", justifyContent:"center"}}>{project.name}</Typography>
                    <CardMedia 
                        sx={{height:140}}
                        image={logo}
                        title="js image"
                    />
                    <Typography variant="body1">{project.description}</Typography>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                        {project.link && <Button>Link</Button>}
                        <Button>Github</Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectCard
