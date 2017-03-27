import React from "react";
import TodoList from "./componentes/TodoList";
import {render} from 'react-dom';

class App extends React.Component {
     constructor(props){
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            data: [ 
                    {id:1,titulo:"ALgo",estado: "planificada"},
                    {id:2,titulo:"poco",estado: "en curso"},
                    {id:3,titulo:"mucho",estado: "terminada"}
                ]
        };
        this.update = this.update.bind(this);
      }

    update(indice,key,value){
        console.log(indice);
        console.log(key);
        console.log(value);
        var newObject = this.data[indice];
        newObject[key] = value;
        this.data.splice(indice,1,newObject);
        this.setState({list: this.state.data.concat([newObject])});
    }

    render(){
      return (
        <TodoList titulo={this.props.titulo} 
                tareas={this.state.tareas} 
                actualizar={this.update}>
        </TodoList>
      );
    }
}

render(<App titulo="Tareas de Martin"/>, document.getElementById('app'));
