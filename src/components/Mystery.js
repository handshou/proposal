import React from "react";

class Mystery extends React.Component {
  render() {
    setTimeout(() => {
      console.log("Async hello");
    }, 2000);
    return <div>A Mystery</div>;
  }
}

export default Mystery;
