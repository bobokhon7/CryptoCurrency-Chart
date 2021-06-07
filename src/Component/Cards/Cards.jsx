import React from 'react'
import { Typography, Grid ,Card} from '@material-ui/core';
import styles from "./Cards.module.css"

const Cards = ({getData:{data}}) => {
   if(!data){
      return "Loading.."
   }
   // console.log(data)
   return (
      <div className={styles.container}>
         <Grid container spacing={3} justify="center">
            <Grid className={styles.card} item component={Card}>
               <Typography  color="textSecondary" gutterBottom>{data[1].name}</Typography>
               <Typography variant="h5">${data[1].current_price}</Typography>
               <Typography color="textSecondary" >{new Date(data[1].last_updated).toDateString()}</Typography>
               <Typography variant="h5">{(data[1].price_change_percentage_24h).toFixed(2) }%</Typography>
            </Grid>
         </Grid>
      </div>
   )
}

export default Cards
