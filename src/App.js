import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PureCompo, PureCompoProps} from './Components/PureCompo'
import CompoState from './Components/CompoState'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stateApp : "",
            arrayName:[]
        }
        this.state.arrayName.push("Michael");
        this.state.arrayName.push("Onaelle");
        this.state.arrayName.push("Quentin");
        this.state.arrayName.push("Sandrine");
    }

    OnInputVal = (val) => {
        this.setState({stateApp : val});
        console.log("returned val : "+val);
    }

    render() {
        return (
        <div className="App">
            <header className="App-header">
            
            <CompoState OnInputVal={this.OnInputVal}/>
            <PureCompo label={this.state.stateApp}/>
            {this.state.stateApp === "Onaelle" ? <PureCompoProps label={this.state.stateApp} age={48}/> : <div></div>}
            
            
            {this.state.arrayName.map((name) => 
                <PureCompoProps key={name} label={name}/>
            )}

            {/*
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            */}
            </header>
        </div>
    )}
}

export default App;
