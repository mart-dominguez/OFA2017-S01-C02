import React from "react";
import TodoList from "./componentes/TodoList";
import ReactDOM from 'react-dom';

class App extends React.Component {
     constructor(props){
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            tareas: [ 
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
        var newObject = this.state.tareas[indice];
        newObject[key] = value;
        this.state.tareas.splice(indice,1,newObject);
        this.setState({tareas:this.state.tareas});
    }

    nueva(tareaNueva){
        this.setState({tareas: this.state.tareas.concat([tareaNueva])});
    }


    render(){
        console.log(this.state.tareas);
      return (
        <div>
        <h2>SDAJKSD</h2>
        <TodoList titulo={this.props.titulo} 
                tareas={this.state.tareas} 
                crear={this.nueva} 
                actualizar={this.update}>
        </TodoList>
        </div>
      );
    }
}

ReactDOM.render(<App titulo="Tareas de Martinds"/>, document.getElementById('app'));
