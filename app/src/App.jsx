import './App.css'

import React from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import SharedCounter from './components/SharedCounter';
import UserList from './components/UserList'

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            {/*<h1>Two Counter, Two States Example</h1>
            <Counter></Counter>
            <Counter></Counter>

            <br></br>

            <h1>Shared Counter State Example</h1>
            <SharedCounter></SharedCounter>*/}

            <h1>Fetch HTTP REST API Example</h1>

            <UserList></UserList>
                    
        </div>
    );
  }
};

export default App
