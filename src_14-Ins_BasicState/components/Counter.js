import React from "react";

class Counter extends React.Component {
  // for state has to use keyword "state" can't be anything else
  // this state you can change values dynamically
  state = {
    count: 0
  };

  // To increase state by 1 every time user click
  // recommend to use big arrow function to use this keyword
  handleIncrement = () => {
    // you have to use this method to change state
    this.setState({ count: this.state.count + 1 });
  };

  // class has to have render and render has to return something
  render() {
    return (
      <div className='card text-center'>
        <div className='card-header bg-primary text-white'>Click Counter!</div>
        <div className='card-body'>
          <p className='card-text'>Click Count: {this.state.count}</p>
          <button className='btn btn-primary' onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

// // By extending the React.Component class, Counter inherits functionality from it
// class Counter extends React.Component {
//   // Setting the initial state of the Counter component
//   state = {
//     count: 0
//   };

//   // handleIncrement increments this.state.count by 1
//   handleIncrement = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ count: this.state.count + 1 });
//   };

//   // The render method returns the JSX that should be rendered
//   render() {
//     return (
//       <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           Click Counter!
//         </div>
//         <div className="card-body">
//           <p className="card-text">Click Count: {this.state.count}</p>
//           <button className="btn btn-primary" onClick={this.handleIncrement}>
//             Increment
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

export default Counter;
