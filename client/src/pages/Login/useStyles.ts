import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  form: {
    marginTop: '5%',
  },
  formBox: {
    height: '30rem',
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
    padding: 80,
    paddingTop: 60,
    height: '600px',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    justifySelf: 'center',
    fontWeight: 700,
    fontFamily: "'Arial'",
  },
}));

export default useStyles;
