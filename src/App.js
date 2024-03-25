import React from 'react'

import Details from './components/Details/Details'
import Main from './components/Main/Main'
import { Grid } from '@mui/material'

import useStyles from './styles'



const App = () => {
    const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={10} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
            <Main/>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
