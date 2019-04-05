import React, { lazy, Suspense } from 'react';

import Header from './components/Header/Header';
import Tasks from './containers/Tasks';
import AddNewTask from './containers/AddNewTask';

const taskFormPromise = import(/* webpackChunkName: 'TaskForm' */ './containers/TaskForm');
const TaskForm = lazy(() => taskFormPromise);



const App = () => (
  < >
    <Header />
    <Tasks />
    <AddNewTask />
    <Suspense fallback={null}>
      <TaskForm />
    </Suspense>
  </>
);

export default App;
