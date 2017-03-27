import React from 'react';
import UnaTarea from './UnaTarea';

class EditarUnaTarea extends React.Component {
     constructor(props){
        // Pass props to parent class
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
	}

 	handleSave(e) {
    	this.props.guardarTarea()
  	}

  	handleChange(e) {
    	 this.props.onEstadoChange(this.props.indice,this.props.name,e.target.value);
  	}

    render(){
		return (
			<input type="text" value={this.props.tarea.titulo} />
			<EstadoTarea estado={this.props.tarea.estado}/>
			<button onClick={handleSave}>guardar</button>
      	);
    }
}

export default EditarUnaTarea;