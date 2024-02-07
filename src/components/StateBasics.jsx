import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {

    // var fname='hanoona'
    var [fname,setfname] = useState("hanoona")
    const changename = () =>{
        console.log("clicked")
        setfname("mufeedha")
    }
  return (
    <div style={{paddingTop:"80px"}}>
        <Typography variant="h4">Welcome {fname}</Typography>
        <Button varient="contained" onClick={changename}>Change</Button>

    </div>
  )
}

export default StateBasics