export default theme => ({
  appBar: {
    marginBottom: '6px',
    background: theme.palette.background.primary,
    borderBottom: `2px solid ${theme.palette.primary.light}`,
  },
  toolbar: { justifyContent: 'space-between' },
});
