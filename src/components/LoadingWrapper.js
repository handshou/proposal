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
