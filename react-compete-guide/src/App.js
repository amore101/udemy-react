import React, { Component } from 'react';
// use uppercase to demonstrate difference between html tags
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'ruikang', age: '22'},
      {name: 'jiaxin', age: '22'}
    ],
    otherState: 'some other value'
  }

  switchName = (newName) => {
    // console.log("Clicked!");
    this.setState({
      persons: [
        {name: newName, age: '22'},
        {name: 'jiaxin', age: '22'}
      ]
    })
  }

  render () {
    return (
      <div className="App">
        <h1> HI </h1>
        {/* no '()' */}
        {/* <button onClick={this.switchName}>Switch name</button> */}
        <button onClick={() => this.switchName('Rick')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchName.bind(this, 'MaoMao')}>My hobby</Person>
      </div>
    );
  };
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'HI'));
}

export default App;



// functional component version

// import React, { useState } from 'react';
// // use uppercase to demonstrate difference between html tags
// import Person from './Person/Person';
// import './App.css';

// const App = props => {
//   // first argument refers to the current state
//   // second argument refers to the function to change the state
//   const [ personState, setPersonState ] = useState ({
//     persons: [
//       {name: 'ruikang', age: '22'},
//       {name: 'jiaxin', age: '22'}
//     ]
//   });

//   // use multiple separated state slices
//   const [ otherState, setOtherState ] = useState('some other value')

//   console.log(personState, otherState);

//   const switchName = () => {
//     // console.log("Clicked!");
//     setPersonState({
//       persons: [
//         {name: 'Rick', age: '22'},
//         {name: 'jiaxin', age: '22'}
//       ],
//     })
//   }

//   return (
//     <div className="App">
//       <h1> HI </h1>
//       {/* no '()' */}
//       <button onClick={switchName}>Switch name</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} >My hobby</Person>
//     </div>
//   );
// }

// export default App;
