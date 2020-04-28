import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { searchedBooks, handleSaveBook } = useContext(BookContext)

  return (
  <>
    {searchedBooks.map((searchedBooks, i) =>
    <Card key={i} className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="h2">
          Title: {searchedBooks.title}
        </Typography>
        <Typography variant="body2" component="p">
          {searchedBooks.authors}
        </Typography>
      </CardContent>
      <CardActions>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSaveBook(i)}
          >
           Save
                </Button>
      </CardActions>
    </Card>
    )}
  </>
  )
}
   