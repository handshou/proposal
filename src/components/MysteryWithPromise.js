import React from "react";
import loadingWrapper from "./LoadingWrapper";

class MysteryWithPromise extends React.Component {
  render() {
    let { data } = this.props;
    return <div>Mystery with Promise: {data}</div>;
  }
}

let loaderAPI = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 4000);
  });

export default loadingWrapper(loaderAPI, MysteryWithPromise);
