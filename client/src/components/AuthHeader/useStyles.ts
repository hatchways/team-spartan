import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  authHeader: {
    alignSelf: 'flex-start',
    width: '100%',
    paddingLeft: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  accAside: {
    fontSize: 14,
    color: '#b0b0b0',
    fontWeight: 400,
    textAlign: 'center',
    marginRight: 35,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
    letterSpacing: '7px',
  },
  link: { textDecoration: 'none' },
  accBtn: {
    width: 120,
    height: 44,
    borderRadius: 0,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: 'black',
    border: '1px solid white',
    color: 'white',
    boxShadow: 'none',
    marginRight: 35,
  },
}));

export default useStyles;
