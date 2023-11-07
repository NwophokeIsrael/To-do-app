import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from './Redux/Reducers/reducer';
// import AddTask from './Components/Addtask';
// import TaskList from './Components/ListTask';
import './App.css';
import rootReducer from './Reducers/reducers';
import AddTask from './Component/AddTask';
import ListTask  from './Component/ListTask'
import Task from './Component/Task';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <div>
            <h1 className="app-title">TO DO APPLICATION</h1>
            <div className="task-section">
              <AddTask />
            </div>
            <div className="task-section">
              <h2 className="section-title-one">All Tasks</h2>
              <ListTask />
            </div>
            <div className="task-section">
              <h2 className="section-title-three">Pending Tasks</h2>
              <ListTask filter="notDone" />
            </div>
            <div className="task-section">
              <h2 className="section-title-two">Completed Tasks</h2>
              <ListTask filter="done" />
            </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;