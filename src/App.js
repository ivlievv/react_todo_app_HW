import React from 'react';
import Index from './components/List';
import listSvg from "./assets/img/list.svg";
import addSvg from './assets/img/add.svg'
import List from './components/List'

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <Index items={[
            {
                icon: <img src={listSvg} alt="Index Icon"/>,
                name: 'All Tasks',
                active: true

            }
        ]}

        />
          <List items={[
              {
                  color: 'green',
                  name: 'Buy'

              },
              {
                  color: 'blue',
                  name: 'Movies'

              },
              {
                  color: 'greenLite',
                  name: 'Books'

              },
              {
                  color: 'pinkLite',
                  name: 'Private',


              }
          ]}
                isRemovable/>
          <List items={[
              {   className: 'list__add-button',
                  icon: (<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  ),
                  name: 'Add Task'

              },
          ]}
          />
      </div>
        <div className="todo__tasks">Tasks</div>
    </div>
  );
}

export default App;
