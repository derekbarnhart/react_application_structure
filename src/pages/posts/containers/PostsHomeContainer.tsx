import * as React from "react";
import { Route, Switch } from "react-router-dom";
import PostsListView from "../components/PostsListView.tsx";

import * as axios from "axios";

import { BASE_API_PATH } from "../../../constants";

class PostsHomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      initialLoad: false,
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get(`${BASE_API_PATH}/posts`)
      .then(data => {
        console.log(data);
        this.setState({
          initialLoad: true,
          posts: data.data
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        {this.state.initialLoad ? (
          <PostsListView posts={this.state.posts} />
        ) : (
          <strong>loading</strong>
        )}
      </div>
    );
  }
}

export default PostsHomeContainer;
