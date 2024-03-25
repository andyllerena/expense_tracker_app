import { makeStyles} from "@mui/styles";


export default makeStyles((theme) =>({
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },  
  income: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
      },
      expense: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
      },
}));