import React from "react";
import JasperComponent from "./JasperComponent.jsx";

export default class Mouse extends React.PureComponent {
  state = {
    mouseX: 0,
    mouseY: 0
  };

  handler = event => {
    const { clientX, clientY } = event;
    this.setState({
      mouseX: clientX,
      mouseY: clientY
    });
  };

  componentDidMount() {
    document.addEventListener("mousemove", this.handler);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handler);
  }

  render() {
    // const MousePrototype = Object.getOwnPropertyDescriptors(
    //   Object.getPrototypeOf(this)
    // );
    // console.log(MousePrototype);
    const { mouseX, mouseY } = this.state;
    return (
      <div>
        <b> x: {mouseX}</b>
        <b>y: {mouseY}</b>
      </div>
    );
  }
}
