import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';

function HeaderBar(){
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position='static' style={{backgroundColor:'blue', color:'white'}} sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                        <Box sx={{display:'flex', justifyContent:'left'}}>
                            <Typography variant='h5'>JQ</Typography>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:"right"}}>
                            <Link href='#' underline='hover'><Typography variant='h6' sx={{mx:4, textAlign:'center'}}>Skills</Typography></Link>
                            <Link href='#' underline='hover'><Typography variant='h6' sx={{mx:4, textAlign:'center'}}>Projects</Typography></Link>
                            <Link href='#' underline='hover'><Typography variant='h6' sx={{mx:4, textAlign:'center'}}>About</Typography></Link>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:"right"}}>
                            <Switch />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default HeaderBar
