import React from 'react';

class TodoList extends React.Component {
    render(){
 	const tareas = props.tareas;
  	const paraHacer = tareas.map((unaTarea) => <UnaTarea titulo={unaTarea.titulo} estado={unaTarea.estado}></UnaTarea>);

      return (
        <div>
        	<h1>{this.props.titulo}</h1>
        	<ul>{paraHacer}</ul>
        </div>
      );
    }
}

export default TodoList;
