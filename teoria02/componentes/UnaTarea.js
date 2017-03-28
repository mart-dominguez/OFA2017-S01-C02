import React from 'react';
import EditarUnaTarea from './EditarUnaTarea';

class UnaTarea extends React.Component {

	constructor(props) {
		super(props);
		this.state = {editar:false};
        this.toggleEditar = this.toggleEditar.bind(this);
	}

    toggleEditar(){
        let aux = !this.state.editar;
        this.setState({editar: aux});
    }

    render(){
    	let tarea = undefined;
    	if(this.state.editar) {
			tarea =<EditarUnaTarea indice={this.props.indice} onTareaChange={this.props.actualizar} tarea={this.props.tarea} guardar={this.toggleEditar}></EditarUnaTarea>
    	}else{
    		 tarea = <li>
        		<strong>{this.props.tarea.titulo}</strong>
        		<span>{this.props.tarea.estado}</span>
        		<button onClick={this.toggleEditar}>editar</button>
        	</li>
    	}
		return tarea;
    }
}

export default UnaTarea;