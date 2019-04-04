import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';



const AppContext = createContext();

export const useStore = () => useContext(AppContext);

export const Provider = ({ reducer, initialState, children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

Provider.propTypes = {
  reducer:      PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  children:     PropTypes.node.isRequired,
};
