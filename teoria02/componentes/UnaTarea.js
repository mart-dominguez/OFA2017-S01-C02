import React from 'react';
import UnaTarea from './UnaTarea';

class UnaTarea extends React.Component {
    render(){
		return (
        	<li>
        		<strong>{this.props.titulo}</strong>
        		<span>{this.props.estado}</span>
        	<li/>
      	);
    }
}

export default UnaTarea;