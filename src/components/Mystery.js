import React from "react";
import loadingWrapper from "./LoadingWrapper";

class Mystery extends React.Component {
  render() {
    return <div>A mystery</div>;
  }
}

export default loadingWrapper(Mystery);
