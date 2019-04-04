export default theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    minWidth: '300px',
  },
  formBody: {
    flex: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: '15px',
    overflowY: 'auto',
  },
  toolBar: { background: theme.palette.background.primary },
  topToolBar: { borderBottom: `2px solid ${theme.palette.primary.light}` },
  bottomToolBar: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottom: 'none',
    borderTop: `2px solid ${theme.palette.primary.light}`,
    boxShadow: '0px -1px 5px 0px rgba(0,0,0,0.2), 0px -2px 2px 0px rgba(0,0,0,0.14), 0px -3px 1px -2px rgba(0,0,0,0.12)',
  },
  button: { margin: theme.spacing.unit },
});
