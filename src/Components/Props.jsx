import { Component } from "react";

class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Hola mi nombre es {this.props.nombre}</h1>
      </>
    );
  }
}

export default Props;
