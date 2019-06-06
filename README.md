This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To start the project, use `npm start`

## Components

### Mystery

```Javascript
import React from "react";

class Mystery extends React.Component {
  render() {
    return <div>A Mystery</div>;
  }
}

export default Mystery;
```

### WrappedMystery

```Javascript
import React from "react";
import loadingWrapper from "./LoadingWrapper";

class WrappedMystery extends React.Component {
  render() {
    let { type } = this.props;
    return <div>{type} Mystery</div>;
  }
}

export default loadingWrapper(WrappedMystery);
```

### LoadingWrapper

```Javascript
import React from "react";

// put the Original Component into a New Component
const loadingWrapper = OriginalComponent => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent type="Wrapped" />;
    }
  }
  return NewComponent;
};

export default loadingWrapper;
```

### AsyncMystery

```Javascript
import React from "react";

class AsyncMystery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Loading..."
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
```

## Progress

- [x] Wrap Mystery
- [x] Async Mystery
- [ ] Wrap Async Mystery
- [ ] Mystery to return Promise

### HOC

- [x] (Watched) ReactJS Tutorial - 33 - Higher Order Components (Part 1) (Part 2) (Part 3) - Codevolution
      https://www.youtube.com/watch?v=B6aNv8nkUSw

### Promises

- [x] (Read) Master the JavaScript Interview: What is a Promise?
      https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
- [x] (Watched) Promises - Part 8 of Functional Programming in JavaScript - Fun Fun Function
      https://www.youtube.com/watch?v=2d7s3spWAzo
- [ ] (Will watch) async / await in JavaScript - What, Why and How - Fun Fun Function
      https://www.youtube.com/watch?v=568g8hxJJp4

### Closure (Hoisting)

- [x] (Read) https://www.w3schools.com/js/js_function_closures.asp
- [x] (Read) https://javascript101.netlify.com/1-4-scoping
- [x] (Test) https://codepen.io/handshou/pen/rggBxE?editors=0012
