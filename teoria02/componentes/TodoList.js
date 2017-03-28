import React from 'react'; import UnaTarea from './UnaTarea';

class TodoList extends React.Component {
	constructor(props){
        super(props);
    }
    render(){
    	console.log(this.props.tareas);
  	const paraHacer = this.props.tareas.map((unaTarea,indice) => <UnaTarea tarea={unaTarea} actualizar={this.props.actualizar} guardar={this.props.actualizar} indice={indice} key={indice}></UnaTarea>);

      return (
        <div>
        	<h1>{this.props.titulo}</h1>
        	<ul>{paraHacer}</ul>
        </div>
      );
    }
}

export default TodoList;
