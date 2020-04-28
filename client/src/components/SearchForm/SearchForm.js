import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import BookContext from '../../utils/BookContext'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BasicTextFields() {
  
  const classes = useStyles();

  const { bookSearchInput, handleInputChange, handleInputSearch } = useContext(BookContext)

  return (
    <>
          <TextField
            id="standard-basic"
            margin="normal"
            required
            fullWidth
            label="Book Search"
            name="bookSearchInput"
            value={bookSearchInput}
            onChange={handleInputChange}
          />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleInputSearch}
      >
        Search
                </Button>
    </>
  );
}


