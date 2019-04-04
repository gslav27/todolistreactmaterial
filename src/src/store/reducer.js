import * as types from './actionTypes';



export const initialState = {
  tasks: [],
  showTaskForm: false,
  currentTask: {},
};


export const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
        showTaskForm: false,
        currentTask: state.currentTask.id ? {} : state.currentTask,
      };
    case types.UPDATE_TASK: {
      const taskPosition = state.tasks.findIndex(({ id }) => id === payload.id);
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, taskPosition),
          {
            ...state.tasks[taskPosition],
            ...payload.newData,
          },
          ...state.tasks.slice(taskPosition + 1),
        ],
        showTaskForm: false,
        currentTask: state.currentTask.id ? {} : state.currentTask,
      };
    }
    case types.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(({ id }) => id !== payload),
      };
    case types.OPEN_TASK_FORM:
      return {
        ...state,
        showTaskForm: true,
        currentTask: (
          payload
            ? state.tasks.find(({ id }) => id === payload)
            : state.currentTask
        ),
      };
    case types.CLOSE_TASK_FORM:
      return {
        ...state,
        showTaskForm: false,
        currentTask: state.currentTask.id ? {} : state.currentTask,
      };
    default:
      return state;
  }
};
