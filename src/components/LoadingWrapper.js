import React from "react";

// put the Original Component into a New Component
const loadingWrapper = OriginalComponent => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent />;
    }
  }
  return NewComponent;
};

export default loadingWrapper;
