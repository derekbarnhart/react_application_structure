import * as React from "react";
import { Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

export default withRouter(({}) => (
  <Nav>
    <Nav.Item>
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/posts">
        Posts
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/posts/1">
        Posts 1
      </Nav.Link>
    </Nav.Item>
  </Nav>
));
