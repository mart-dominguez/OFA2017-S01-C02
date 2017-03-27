import React from 'react';

class UnaTarea extends React.Component {

	constructor(props) {
		super(props);
		this.state = {editar:false};
	}


    render(){
    	let tarea = undefined;
    	if(this.state.editar) {
			tarea =<EditarUnaTarea onEstadoChange={this.props.actualizar} tarea={this.props.tarea}>
    	}else{
    		 tarea = <li>
        		<strong>{this.props.tarea.titulo}</strong>
        		<span>{this.props.tarea.estado}</span>
        		<span>{this.props.tarea.estado}</span>
        		<button onClick={this.editar}>editar</button>
        	<li/>,
    	}
		return (
			tarea;
      	);
    }
}

export default UnaTarea;