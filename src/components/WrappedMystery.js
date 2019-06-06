import React from "react";
import loadingWrapper from "./LoadingWrapper";

class WrappedMystery extends React.Component {
  render() {
    let { type } = this.props;
    setTimeout(() => {
      console.log("Async hello");
    }, 2000);
    return <div>{type} Mystery</div>;
  }
}

export default loadingWrapper(WrappedMystery);
