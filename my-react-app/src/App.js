import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';
import { MainClassContainer} from './MainContainer';

export class App extends React.Component {
  constructor(){
    super();
    this.state={
      parentName: 'Sevenmind From Parent',
      counter: 5
    }
  }
  render(){
   
  return (
    <div className="App">
    <HeaderComponent/>
    {/* <MainComponent parentName = {parentName}/> */}
    <MainClassContainer parentClassName = {this.state.parentName}/>
    </div>
  );
}
}

// export default App;
