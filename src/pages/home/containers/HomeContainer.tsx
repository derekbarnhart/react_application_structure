import * as React from "react";

class HomeContainer extends React.Component {
  state = {
    initialLoad: false,
    post: {}
  };
  constructor() {
    super();
    this.state = {
      initialLoad: false,
      post: {}
    };
  }

  render() {
    return <div>You are home</div>;
  }
}

export default HomeContainer;
