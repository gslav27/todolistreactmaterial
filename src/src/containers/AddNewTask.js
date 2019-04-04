import React from 'react';

import { useStore } from '../store/store';
import { openTaskForm } from '../store/actionCreators';

import AddNewTask from '../components/AddNewTask/AddNewTask';



const NewTask = () => {
  const [{ showTaskForm }, dispatch] = useStore();

  return (
    <AddNewTask
      showTaskForm={showTaskForm}
      onClick={() => dispatch(openTaskForm())}
    />
  );
};

export default NewTask;
