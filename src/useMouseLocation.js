import React from "react";

// HOC
const useMouseLocation = Component => {
  return class MouseTracker extends React.PureComponent {
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

    componentDidMount = () => {
      document.addEventListener("mousemove", this.handler);
    };

    componentWillUnmount() {
      document.removeEventListener("mousemove", this.handler);
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
};

export default useMouseLocation;
