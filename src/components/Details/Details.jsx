import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

import useTransactions from '../../useTransactions';

import useStyles from './styles'
Chart.register(ArcElement, Tooltip, Legend);
const Details = ({title}) => {

    const classes = useStyles()
    const {total,chartData} = useTransactions(title)

  return (
   <Card className={title === 'Income' ? classes.income : classes.expense}>
     <CardHeader title ={title} />
     <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data ={chartData} ></Doughnut>
     </CardContent>
   </Card>
  )
}

export default Details
