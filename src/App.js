
import React from 'react';
import './App.css';
import { increaseCounter,decreaseCounter } from './actions';

class App extends React.Component {
 
  componentDidMount (){
    const { store } = this.props;
    store.subscribe(() => {   
      this.forceUpdate(); // we should not use this method as it forcefully updates the
    })
    
  }
  increasecount = (val) => {
    this.props.store.dispatch(increaseCounter(val))
  }
  decreasecount = (val) => {
    this.props.store.dispatch(decreaseCounter(val))
  }
  render(){
    const {counterValue} = this.props.store.getState();
    return (
      <div className="App">
      <h1>Count: {counterValue}</h1>
      <h2>
        <button onClick={() => this.increasecount(counterValue)}>+</button>
        <button onClick={()=> this.decreasecount(counterValue)}>-</button>
      </h2>
    </div>
    );
  }
  
}

export default App;
