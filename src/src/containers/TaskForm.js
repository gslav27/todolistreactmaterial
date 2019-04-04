import React, { useState, useEffect, useReducer } from 'react';
import uniqid from 'uniqid';

import { useStore } from '../store/store';
import {
  closeTaskForm,
  addTask,
  updateTask,
} from '../store/actionCreators';

import { taskFormOptions } from '_Utils_/constants/constants';
import { taskDefaultData } from '_Utils_/types/defaultData';
import { getFormattedDate } from '_Utils_/getters/getFormattedDate';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Loader from '_Ui_/Loader/Loader';
import TaskFormLayout from '../components/TaskForm/TaskFormLayout/TaskFormLayout';
import PriorityRadioGroup from '../components/TaskForm/PriorityRadioGroup';
import StatusSelectGroup from '../components/TaskForm/StatusSelectGroup';
import TagSelectGroup from '../components/TaskForm/TagSelectGroup/TagSelectGroup';
import WarningMessage from '../components/TaskForm/WarningMessage/WarningMessage';




const actionTypes = {
  SET_ALL_DATA:     'SET_ALL_DATA',
  SET_STATUS:       'SET_STATUS',
  SET_NAME:         'SET_NAME',
  SET_DESCRIPTION:  'SET_DESCRIPTION',
  SET_DATE:         'SET_DATE',
  SET_PRIORITY:     'SET_PRIORITY',
  SET_TAG:          'SET_TAG',
};


const taskFormReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ALL_DATA:
      return { ...payload };
    case actionTypes.SET_STATUS:
      return {
        ...state,
        status: payload,
      };
    case actionTypes.SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case actionTypes.SET_DESCRIPTION:
      return {
        ...state,
        description: payload,
      };
    case actionTypes.SET_DATE:
      return {
        ...state,
        date: payload,
      };
    case actionTypes.SET_PRIORITY:
      return {
        ...state,
        priority: payload,
      };
    case actionTypes.SET_TAG:
      return {
        ...state,
        tag: payload,
      };
    default:
      return state;
  }
};


const tagsSuggestions = taskFormOptions.tag.map(tag => ({
  value: tag,
  label: tag,
}));



const TaskForm = () => {
  const [{ showTaskForm, currentTask }, dispatchGlobal] = useStore();
  
  const [
    { status, name, description, date, priority, tag },
    dispatchLocal,
  ] = useReducer(taskFormReducer, taskDefaultData);

  const [showWarning, setShowWarning] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    currentTask.id && dispatchLocal({
      type: actionTypes.SET_ALL_DATA,
      payload: currentTask,
    });
  }, [currentTask]);

  function handleSubmit(e) {
    e.preventDefault();
    setShowLoader(true);
    showWarning && setShowWarning(false);
    setTimeout(() => {
      setShowLoader(false);
      const newData = {
        status,
        name,
        description,
        date,
        priority,
        tag,
      };
      currentTask.id
        ? dispatchGlobal(updateTask(currentTask.id, newData))
        : dispatchGlobal(addTask({ id: uniqid(), ...newData }));
      clearForm();
    }, 2000);
  }

  function clearForm() {
    dispatchLocal({
      type: actionTypes.SET_ALL_DATA,
      payload: taskDefaultData,
    });
  }

  function closeForm() {
    dispatchGlobal(closeTaskForm());
    clearForm();
  }

  function handleClose() {
    (name || description || date || tag) && !currentTask.id
      ? setShowWarning(true)
      : closeForm();
  }

  function handleCloseWarning() {
    setShowWarning(false);
    closeForm();
  }

  return (
    < >
      <TaskFormLayout
        showForm={showTaskForm}
        label={currentTask.id ? 'Редактирование' : 'Новая задача'}
        onClose={handleClose}
        onSubmit={handleSubmit}
      >
        {showLoader && <Loader />}
        <TextField
          label='Название задачи'
          value={name}
          onChange={e => dispatchLocal({ type: actionTypes.SET_NAME, payload: e.target.value })}
          margin='normal'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <TitleIcon color='action' />
              </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          label='Описание задачи'
          value={description}
          onChange={e => dispatchLocal({ type: actionTypes.SET_DESCRIPTION, payload: e.target.value })}
          margin='normal'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <DescriptionIcon color='action' />
              </InputAdornment>
            ),
          }}
          multiline
        />
        <TextField
          label='Дата выполнения'
          type='date'
          value={date}
          onChange={e => dispatchLocal({ type: actionTypes.SET_DATE, payload: e.target.value })}
          min={getFormattedDate()}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <DateRangeIcon color='action' />
              </InputAdornment>
            ),
          }}
        />
        {
          date && (
            <PriorityRadioGroup
              value={priority}
              options={taskFormOptions.priority}
              onChange={value => dispatchLocal({ type: actionTypes.SET_PRIORITY, payload: value })}
            />
          )
        }
        <StatusSelectGroup
          value={status}
          options={taskFormOptions.status}
          onChange={value => dispatchLocal({ type: actionTypes.SET_STATUS, payload: value })}
        />
        <TagSelectGroup
          value={tag}
          options={tagsSuggestions}
          onChange={({ value }) => dispatchLocal({ type: actionTypes.SET_TAG, payload: value })}
        />
      </TaskFormLayout>
      {
        showTaskForm && (
          <WarningMessage
            open={showWarning}
            onClose={handleCloseWarning}
          />
        )
      }
    </>
  );
};


export default TaskForm;
