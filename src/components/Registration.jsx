import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'


const Registration = () => {
  return (
    <div><br /><br />
    
    <Typography variant='h3'> Registration form</Typography>
    <br /><br />
    <TextField id="standard-basic" label="name" variant="standard" /><br /><br />
    <TextField id="standard-basic" label="number" variant="standard" type='number'/>
        <br /><br />
        <TextField
          id="standard-textarea"
          label="address"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
      <br /><br />
      <TextField id="standard-basic" label="email" variant="standard" /><br /><br /><br />


      <Button variant="contained" color="success">
  register
</Button>






   </div>
  )
}

export default Registration