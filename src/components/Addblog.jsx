import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Addblog = () => {
  return (
    <div>
      <div>
      <Typography variant='h3'>Add blog</Typography>
      <TextField  variant='outlined' label='title'></TextField><br/>
      <TextField  variant='outlined' label='body'></TextField><br/>
      <Button variant='contained' color='success'>submit</Button>
    </div>
    </div>
  )
}

export default Addblog
