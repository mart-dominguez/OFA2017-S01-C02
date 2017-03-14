import React from "react";
import TodoList from "./componentes/TodoList";

class App extends React.Component {
    render(){
      return (
        <TodoList titulo="this.props.titulo" tareas={this.props.tareas}>
        </TodoList>
      );
    }
}

export default App;