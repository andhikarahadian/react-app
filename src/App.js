import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Form from './FormStudent';
class App extends Component {
  render() {
    return(
      <div className="App">
        <Header/>
        <Form/>
        
      </div>
    )
  }
}
// const numbers = [1, 3, 5, 7, 9, 11];
// const newNumber = numbers.map(elemen => elemen);
// console.log(newNumber);
// class App extends React.Component{
//   state = {
//     todo : []
//   }
//   todoRef = React.createRef();

//   _handleNewTodo = (e) =>{
//     let todoClone = [...this.state.todo];
//     let newTodo = this.todoRef.current.value;
//     todoClone.push(newTodo);
//     this.setState({todo: todoClone});

//     e.preventDefault();
//     this.todoRef.current.value =''; 
//   }
//   render(){
//     const { todo } = this.state;
//     return(
//       <div className="App App-header">
//         <div>Todo list</div>
//         <form onSubmit={this._handleNewTodo}>
//           <label>New todo<input ref={this.todoRef}/></label>
//         </form>
//         <ul>{todo.map(item => <li>{item}</li>)}</ul>
//       </div>
//     );
//   }

// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
 
// import * as React from 'react';
// import * as Redux from 'redux';
// import { Provider, connect } from 'react-redux';

// const ActionTypes = {
//     STARTED_UPDATING: 'STARTED_UPDATING',
//     UPDATED: 'UPDATED'
// };

// class AsyncApi {
//     static getFieldValue() {
//         const promise = new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(Math.floor(Math.random() * 100));
//             }, 1000);
//         });
//         return promise;
//     }
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <input value={this.props.field}/>
//                 <button disabled={this.props.isWaiting} onClick={this.props.update}>Fetch</button>
//                 {this.props.isWaiting && <div>Waiting...</div>}
//             </div>
//         );
//     }
// }
// App.propTypes = {
//     dispatch: React.PropTypes.func,
//     field: React.PropTypes.any,
//     isWaiting: React.PropTypes.bool
// };

// const reducer = (state = { field: 'No data', isWaiting: false }, action) => {
//     switch (action.type) {
//         case ActionTypes.STARTED_UPDATING:
//             return { ...state, isWaiting: true };
//         case ActionTypes.UPDATED:
//             return { ...state, isWaiting: false, field: action.payload };
//         default:
//             return state;
//     }
// };
// const store = Redux.createStore(reducer);
// const ConnectedApp = connect(
//     (state) => {
//         return { ...state };
//     },
//     (dispatch) => {
//         return {
//             update: () => {
//                 dispatch({
//                     type: ActionTypes.STARTED_UPDATING
//                 });
//                 AsyncApi.getFieldValue()
//                     .then(result => dispatch({
//                         type: ActionTypes.UPDATED,
//                         payload: result
//                     }));
//             }
//         };
//     })(App);
// export default class extends React.Component {
//     render() {
//         return <Provider store={store}><ConnectedApp/></Provider>;
//     }
// }