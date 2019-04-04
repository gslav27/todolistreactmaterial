import React from 'react';

import Header from './components/Header/Header';
import Tasks from './containers/Tasks';
import AddNewTask from './containers/AddNewTask';
import TaskForm from './containers/TaskForm';


const App = () => (
  < >
    <Header />
    <Tasks />
    <AddNewTask />
    <TaskForm />
  </>
);

export default App;
