# Proposal

This is an illustration to learn Higher order components (HOC) & Promises.

To start the project, use `npm start`. Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Components

**Current status**: Writing different Mystery components as milestones to reach the end goal.

**End goal**: Mystery is a UI component that is wrapped with HOC. API call and UI component is passed into HOC together.

### Mystery

UI component.

```Javascript
import React from "react";

class Mystery extends React.Component {
  render() {
    return <div>Mystery</div>;
  }
}

export default Mystery;
```

### SimpleWrapper

Simple wrapper has one parameter: UI component.
It wraps the UI component with 'Wrapped' text.

```Javascript
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
```

### LoadingWrapper

Loading wrapper requires two parameters. The first is a function, second is a UI component.
After the function resolves, it takes the result and passes it to the UI component.

```Javascript
import React from "react";

// put the Original Component into a New Component
const loadingWrapper = (loader, OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: null
      };
    }

    async componentDidMount() {
      try {
        const data = await loader();
        this.setState({ loading: false, data });
      } catch (err) {
        console.log(err);
        this.setState({ loading: false, data: "Error" });
      }
    }

    render() {
      if (this.state.loading) return <div>Loading</div>;
      return <OriginalComponent data={this.state.data} {...this.props} />;
    }
  }
  return NewComponent;
};

export default loadingWrapper;
```

### AsyncMystery

UI component which makes an API call through componentWillMount(), which will update _data_ in state when resolved.

```Javascript
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
```

### MysteryWithPromise

UI component.
The wrapper used here requires two parameters. The loaderAPI and this UI component.

```Javascript
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
```

## Progress

- [x] Wrap Mystery
- [x] Async Mystery
- [x] Mystery with Promise/API call

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
