import * as types from './actionTypes';



export const addTask = newTask => ({
  type: types.ADD_TASK,
  payload: newTask,
});

export const updateTask = (id, newData) => ({
  type: types.UPDATE_TASK,
  payload: {
    id,
    newData,
  },
});

export const deleteTask = id => ({
  type: types.DELETE_TASK,
  payload: id,
});

export const openTaskForm = id => ({
  type: types.OPEN_TASK_FORM,
  payload: id,
});

export const closeTaskForm = () => ({ type: types.CLOSE_TASK_FORM });
