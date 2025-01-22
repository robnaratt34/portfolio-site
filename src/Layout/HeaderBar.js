import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

function HeaderBar(){
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position='static' style={{backgroundColor:'black', color:'blue'}} sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"center" }}>
                        <Link href='#' underline='hover'><Typography variant='h6' sx={{mx:4, textAlign:'center'}}>Skills</Typography></Link>
                        <Link href='#' underline='hover'><Typography variant='h6' sx={{mx:4, textAlign:'center'}}>Projects</Typography></Link>
                        <Link href='#' underline='hover'><Typography variant='h6' sx={{mx:4, textAlign:'center'}}>About</Typography></Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default HeaderBar