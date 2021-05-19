import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    color: 'rgb(0,0,0,0.7)',
    paddingLeft: '1px',
    font: '16px Helvetica',
  },
  inputs: {
    marginTop: '.3rem',
    height: '2.5rem',
    padding: '5px 5px 5px 15px',
    border: '1px solid grey',
    borderColor: 'lightgrey',
    '&::placeholder': {
      fontStyle: 'italic',
    },
  },
  forgot: {
    fontSize: '11px',
    fontWeight: 700,
    color: 'black',
    textDecoration: 'underline',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.6',
    },
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: '10px',
    width: '160px',
    height: '46px',
    borderRadius: '1px',
    marginTop: '49px',
    backgroundColor: 'black',
    font: 'lighter 12px Arial',
  },
}));

export default useStyles;
