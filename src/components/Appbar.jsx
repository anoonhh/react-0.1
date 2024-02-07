import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Appbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography><b>Facebook</b></Typography>&nbsp;
                <Button variant="contained" color="error">Login</Button> &nbsp; &nbsp; 
                <Button variant="contained" color="success">signup </Button>




             </Toolbar>
        </AppBar>




    </div>
  )
}

export default Appbar