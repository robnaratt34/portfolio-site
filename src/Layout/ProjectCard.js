import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "../Media/js.png"

function ProjectCard(props){
    const {project} = props;
    return(
        <div>
            <Card sx={{width:345}}>
                <CardContent>
                    <Typography variant="h2">{project.name}</Typography>
                    <CardMedia 
                        sx={{height:140}}
                        image={logo}
                        title="js image"
                    />
                    <Typography variant="h4">{project.description}</Typography>
                    {project.link && <Button>Link</Button>}
                    <Button>Github</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectCard
