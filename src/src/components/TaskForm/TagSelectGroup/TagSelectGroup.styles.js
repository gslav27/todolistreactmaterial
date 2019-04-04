export default theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  noOptionsMessage: { padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px` },
  singleValue: { fontSize: 16 },
  placeholder: {
    position: 'absolute',
    left: 32,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  divider: { height: theme.spacing.unit * 2 },
});
