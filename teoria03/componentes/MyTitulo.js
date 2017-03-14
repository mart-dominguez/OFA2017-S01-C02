import React from 'react';
import Page from "./page";

export default class MyTitulo extends React.Component {
	 constructor(props) {
        super(props);
    }

   render() {
        return <div>{this.props.mensaje1}</div>;
    }
  }
}