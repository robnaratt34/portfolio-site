import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "../Media/js.png"

function ProjectCard(){
    return(
        <div>
            <Card sx={{maxWidth:345}}>
                <CardContent>
                    <Typography variant="h2">Project</Typography>
                    <CardMedia 
                        sx={{height:140}}
                        image={logo}
                        title="js image"
                    />
                    <Typography variant="h4">I did this</Typography>
                    <button>Link</button>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectCard
