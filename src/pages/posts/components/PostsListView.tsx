import * as React from "react";
import { Link } from "react-router-dom";

import BootstrapTable from "react-bootstrap-table-next";

const rowEvents;
const columns = [
  {
    dataField: "id",
    text: "ID"
  },
  {
    dataField: "title",
    text: "Title"
  },
  {
    dataField: "userId",
    text: "Author"
  },
  {
    //dataField: "id",
    key: "action",
    text: "Actions",
    formatter: (data, row) => <Link to={`/posts/${row.id}`}>Details</Link>
  }
];

export default ({ posts }) => (
  <div>
    <BootstrapTable keyField="id" data={posts} columns={columns} />
  </div>
);
