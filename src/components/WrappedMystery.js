import React from "react";
import simpleWrapper from "./SimpleWrapper";

class WrappedMystery extends React.Component {
  render() {
    return <div>Mystery</div>;
  }
}

export default simpleWrapper(WrappedMystery);
