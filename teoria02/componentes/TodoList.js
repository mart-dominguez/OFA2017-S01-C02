import React from 'react';

class TodoList extends React.Component {
    render(){
 	const tareas = props.tareas;
  	const paraHacer = tareas.map((unaTarea,indice) => <UnaTarea tarea={unaTarea} actualizar={this.props.actualizar} key={indice}></UnaTarea>);

      return (
        <div>
        	<h1>{this.props.titulo}</h1>
        	<ul>{paraHacer}</ul>
        </div>
      );
    }
}

export default TodoList;
