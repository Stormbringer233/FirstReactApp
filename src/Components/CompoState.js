/**
 * @author : Michael
 * @description : A pure composant react with CSS
 */

import React, {Component} from 'react';
import './PureCompo.css';

class CompoState extends Component {
    // simple state component
    constructor(props){
        super(props);
        this.state = {
            nom : ""
        }
        this.HandleChange = this.HandleChange.bind(this);
    }

    /*HandleChange() {
        console.log("le input est en cours de modification");
        this.setState({nom : "Nouveau nom"});
    }*/
    HandleChange = (e) => {
        const targetVal = e.target.value;
        this.setState({nom : targetVal});
        console.log("nom : " + targetVal);
        this.props.OnInputVal(targetVal);
    }

    render(){
        return (
            <div>
                <h2 className="h2-style-state">Simple composant avec States</h2>
                <input type="text" value={this.state.nom} onChange={this.HandleChange}></input>
            </div>
        );
    }
}

export default CompoState;