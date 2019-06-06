import React, { Fragment } from "react";

// put the Original Component into a New Component
const simpleWrapper = OriginalComponent => {
  class NewComponent extends React.Component {
    render() {
      return (
        <Fragment>
          <div>Wrapped </div>
          <OriginalComponent {...this.props} />
        </Fragment>
      );
    }
  }
  return NewComponent;
};

export default simpleWrapper;
