import React, {useContext} from 'react'
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';


import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles'
const List = () => {

    const classes = useStyles()
    const {deleteTransaction,transactions} = useContext(ExpenseTrackerContext)



   
    
    return (
        <MUIList dense={false} className={classes.list}>
          {transactions.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                    <MoneyOffIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                    <DeleteIcon/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Slide>
          ))}
        </MUIList>
      );
    };;

export default List
