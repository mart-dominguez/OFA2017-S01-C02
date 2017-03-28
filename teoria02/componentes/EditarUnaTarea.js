import React from 'react';
import EstadoTarea from './EstadoTarea';

class EditarUnaTarea extends React.Component {

  constructor(props){
        // Pass props to parent class
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
	 }

 	  handleSave(e) {
    	this.props.guardar();
  	}

  	handleChange(e) {
    	 this.props.onTareaChange(this.props.indice,e.target.name,e.target.value);
  	}

    render(){
		return (
			<form>
      <input type="text" name="titulo" value={this.props.tarea.titulo} onChange={this.handleChange}/>
			<EstadoTarea indice={this.props.indice}  estado={this.props.tarea.estado} nombre="estado" estadoChange={this.props.onTareaChange}>
      </EstadoTarea>
			<button onClick={this.handleSave}>Terminar</button>
      </form>
    	);
    }
}

export default EditarUnaTarea;