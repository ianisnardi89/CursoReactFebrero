import { Component } from "react";

class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Tengo que comprar {this.props.frutas}</h1>
      </>
    );
  }
}

export default Props;
