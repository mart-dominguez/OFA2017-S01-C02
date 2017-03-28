import React from 'react';

class EstadoTarea extends React.Component {
	constructor(props) {
    	super(props);
    	this.handleChange = this.handleChange.bind(this);
  	}

  	handleChange(e) {

       this.props.estadoChange(this.props.indice,e.target.name,e.target.value);
  	}

    render(){
		return (
        	<select value={this.props.estado} onChange={this.handleChange} name={this.props.nombre}>
            	<option value="planificada">Para hacer</option>
				      <option value="encurso">En Curso</option>
            	<option value="finalizada">Terminada!</option>
        	</select>
      	);
    }
}

export default EstadoTarea;