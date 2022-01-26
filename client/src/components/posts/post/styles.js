import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: '0px',
    size: 'cover',
    paddingTop: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    backgroundBlendMode: 'darken',
    backgroundPosition: '0px -14px',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '255px',
    right: '15px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  whiteText: {
    color: 'white',
    margin: '14px',
  },
  modalClass: {
    borderRadius: '10px',
    width: '70%',
    ['@media (min-width:780px)']: {
      width: '40%',
    },
    ['@media (min-width:1400px)']: {
      width: '30%',
    },
  },
});
