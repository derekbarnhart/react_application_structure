import * as React from "react";

export default ({ post }) => (
  <div>
    <pre>
      {Object.keys(post).map((key, i) => (
        <div>
          <strong>{key}</strong>
          <span> {post[key]}</span>
        </div>
      ))}
    </pre>
  </div>
);
