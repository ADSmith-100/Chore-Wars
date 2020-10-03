import React, { useMemo, useState, useEffect } from "react";

import Table from "./Table";

function NewChoreList() {
  const larryChores = [
    {
      larryChores: {
        "title": "Unload Dishes",
        "completed?": true,
        "comments": "Had a bad attitude!",
      },
    },
  ];

  const 

  /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
  const columns = useMemo(
    () => [
      {
        Header: "Larry's Chore List",
        // Second group columns
        columns: [
          {
            Header: "Chore Title",
            accessor: "chores.title",
          },
          {
            Header: "Completed?",
            accessor: "chores.completed",
          },
          {
            Header: "Comments",
            accessor: "chores.comments",
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default NewChoreList;
