import React from 'react';
import Index from './components/List';
import listSvg from "./assets/img/list.svg";
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
        ]}/>
          <Index items={[
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
          ]}/>
      </div>
        <div className="todo__tasks">Tasks</div>
    </div>
  );
}

export default App;
