import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  main: {
    background: 'green',
  },
  appBar: {
    borderRadius: 2,
    height: '7vh',

    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgb(0, 35, 131)',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}));
