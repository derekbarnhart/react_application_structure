import * as React from "react";
import { Route, Switch } from "react-router-dom";

import PostDetailView from "../components/PostDetailView.tsx";

import * as axios from "axios";
import { BASE_API_PATH } from "../../../constants";

class PostDetailContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      initialLoad: false,
      posts: {}
    };
  }

  componentDidMount() {
    axios
      .get(`${BASE_API_PATH}/posts/${this.props.match.params.id}`)
      .then(data => {
        console.log(data);
        this.setState({ initialLoad: true, post: data.data });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        {this.state.initialLoad ? (
          <PostDetailView post={this.state.post} />
        ) : (
          <strong>loading</strong>
        )}
      </div>
    );
  }
}

export default PostDetailContainer;
