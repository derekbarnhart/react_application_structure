import * as React from "react";
import Header from "./Header";

class LayoutManager extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default LayoutManager;
