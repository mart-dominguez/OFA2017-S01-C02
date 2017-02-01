import React from 'react';
import Page from "./page";

export default class MyBotonOperacion extends React.Component {
	 constructor(props) {
        super(props);
    }

    realizarOperacion (){          
        this.props.operacion();    
    }
    
    render {
        return (
        <div>
              <div>
                  <button type="button" className="btn btn-default btn-lg" onClick={this.realizarOperacion} >
                    {this.props.children}{this.props.etiqueta}
                  </button>
                </div>
              <div>{this.props.resultado}</div>
        </div>
        );
    }
}