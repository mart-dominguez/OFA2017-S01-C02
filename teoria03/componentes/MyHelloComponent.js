import React from 'react';
import Page from "./page";

export default class MyHelloComponent extends React.Component {
	 constructor(props) {
        super(props);
    }
  
    update(key,value){
        var newState = {};
        newState[key] = value;
        this.setState(newState);
    }
    
    sumar(){
        this.setState({resultado : this.state.operador1 + this.state.operador2});
    }

    render() {
            return  (
            <div>
              <MyTitulo mensaje1="Calculadora en componentes"/>
              <MyOperador etiqueta="Operador 1" update={this.update.bind(this, 'operador1')}/>
              <MyOperador etiqueta="Operador 2" update={this.update.bind(this, 'operador2')}/>
              <MyBotonOperacion  etiqueta="Sumar" operacion={this.sumar} resultado={this.state.resultado}>
                <GlyphIcon icon='plus'/>
              </MyBotonOperacion>
            </div>);
    }
  }
}