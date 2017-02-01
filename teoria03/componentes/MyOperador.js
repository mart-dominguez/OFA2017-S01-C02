import React from 'react';
import Page from "./page";

export default class MyOperador extends React.Component {
	 constructor(props) {
        super(props);
    }

    updateOperador() {          
        this.props.update(Number.parseInt(this.refs.operadorInput.value));       
    }
    
    render() {
        return (
          <div>
                <span>{this.props.etiqueta}</span>
                <input onChange={this.updateOperador} ref='operadorInput' />
                <strong>{this.props.operador1}</strong>
          </div>              
        );
    }
}