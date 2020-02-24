import React from 'react';
import listSvg from './assets/img/list.svg'



function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
          <ul className="todo__list">
              <li className="active">
                  <i>
                      <img src={listSvg} alt="List Icon"/>
                  </i>
                  <span>All tasks</span>
              </li>
              <li>
                  <i>
                      <img src={listSvg} alt="List Icon"/>
                  </i>
                  <span>All tasks</span>
              </li>
          </ul>
      </div>
        <div className="todo__tasks">Tasks</div>
    </div>
  );
}

export default App;
