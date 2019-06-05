import React from "react";

const LoadingWrapper = OriginalComponent => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent />;
    }
  }
  return NewComponent;
};

export default LoadingWrapper;
