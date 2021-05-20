import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  form: {
    marginTop: '5%',
  },
  formBox: {
    height: '555px',
  },
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    justifyItems: 'center',
    flexDirection: 'column',
  },
  titleWrapper: {
    padding: '60px 80px 80px 80px',
    height: '600px',
  },
  welcome: {
    paddingBottom: '20px',
    color: '#000000',
    justifySelf: 'center',
    font: 'bold 26px Arial',
  },
}));

export default useStyles;
