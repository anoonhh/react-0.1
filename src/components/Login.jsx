import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div><br /><br />
<input type="text" placeholder="email" /><br /><br />
<input type="password" placeholder="pasword" /><br /><br />
<button>submit</button>
<br /><br /><br /><br /><br />
<Typography variant='h4'>Login Page</Typography>
<TextField id="standard-basic" label="Username" variant="standard" /><br /><br />
<TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <br /><br />

<button>submit</button>



    </div>
  )
}

export default Login