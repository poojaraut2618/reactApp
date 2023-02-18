import React from "react";
export const MainComponent=(abc)=>{
    console.log(abc);
    
    return (<h1>My First React Application {abc.parentName}</h1>);
}

export class MainClassContainer extends React.Component{
    constructor(){
        super();
        this.state ={
            name: "Codemind By Itself",
            batch: "Second",
            counter: '0'
        };

    }

    static getDerivedStateFromProps(props, state){
        // console.log('am I Prop?', props);
        // console.log('am I State?', state);
        if(props.counter === state.counter)
        return {name:props.parentClassName};
        return state;
    }

    componentDidMount(){
        console.log('In ComponentDidMount');
        setTimeout(()=>{
            this.setState({
                counter: 5
            });
        },4000);
    };

    clickMe=(name1)=>{
        this.setState({name: name1});
    }

    shouldComponentUpdate(){
        console.log('In shouldComponentUpdate',this.state.counter);
        return true;
    }

    getSnapshotBeforeUpdate(props, state){
        console.log('getSnapshotBeforeUpdate', state);
    }

    componentDidUpdate(){
        console.log(this.props, 'In componentDidUpdate', this.state);
        
    }
      render(){
        console.log('In render',this.state);
        

        return (
            <>
              <button onClick={this.clickMe.bind(this,'Pooja')}> Click Me </button>
            <h1>Hi I'am {this.state.name}, This is my first class react application</h1>
            <h2>State == {this.state.name}  </h2>    
            <div>{this.state.counter}  </div>    
            <h2>Prop == {this.props.parentClassName}  </h2>  
          
        </>       
            );                                                                                                    
    }
}