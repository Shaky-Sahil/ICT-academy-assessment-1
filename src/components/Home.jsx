import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './style.global.css'


const Home = () => {
    const [value,setValue] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response)
            setValue(response.data)
            console.log(value)
        }
        )
    })
  return (
    <div  className='home'>
      <Grid container spacing={2}>
        {value.map((v)=>(
            
            <Grid  item xs={3}>
             <Card className='cards' variant="filled">
             <CardContent>
                <Typography>{v.id}</Typography>
                {v.title}
             </CardContent> 
             </Card>
             </Grid>
             
        ))}
        </Grid>
    </div>
  )
}

export default Home
