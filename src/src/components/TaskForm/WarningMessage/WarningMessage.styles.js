import amber from '@material-ui/core/colors/amber';

export default theme => ({
  root: {
    left: 0,
    right: 0,
    transform: 'unset',
  },
  contentRoot: {
    justifyContent: 'center',
    backgroundColor: amber[700],
  },
  contentAction: {
    [theme.breakpoints.only('xs')]: {
      margin: 0,
      padding: 0,
    },
  },
  button: {
    background: '#fff',
    color: amber[700],
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});
