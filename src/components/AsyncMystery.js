import React from "react";

class AsyncMystery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  componentWillMount() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success");
      }, 2000);
    });
    promise.then(
      result => {
        this.setState({ data: result });
      },
      function(error) {
        this.setState({ data: error });
      }
    );
  }

  render() {
    let { data } = this.state;
    return <div>Async Mystery: {data}</div>;
  }
}

export default AsyncMystery;
