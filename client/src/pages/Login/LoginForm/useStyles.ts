import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 16,
    color: 'rgb(0,0,0,0.7)',
    paddingLeft: '1px',
    fontFamily: 'Helvetica',
  },
  inputs: {
    marginTop: '.3rem',
    height: '2.5rem',
    padding: '5px',
    paddingLeft: '15px',
    border: '1px solid grey',
    borderColor: 'lightgrey',
    '&::placeholder': {
      fontStyle: 'italic',
    },
  },
  forgot: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'underline',
    fontWeight: 700,
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.6',
    },
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 46,
    borderRadius: '1.5px',
    marginTop: 49,
    fontSize: 13,
    backgroundColor: 'black',
    fontWeight: 'lighter',
    fontFamily: 'Arial',
  },
}));

export default useStyles;
