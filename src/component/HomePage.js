import React from "react";

export default function HomePage({ tableData }) {
  return (
    <div className="container">
      <h2>Users Api Table</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Job Id</div>
          <div className="col col-2">Customer Name</div>
          <div className="col col-3">Amount Due</div>
          <div className="col col-4">Payment Status</div>
        </li>
        {tableData &&
          tableData.map((item, index) => {
            return (
              <a href={`/posts/${item.id}`}>
                <li className="table-row" key={index}>
                  <div className="col col-1">{item.id}</div>
                  <div className="col col-2">{item.name}</div>
                  <div className="col col-3">{item.email}</div>
                  <div className="col col-4">{item.phone}</div>
                </li>
              </a>
            );
          })}
      </ul>
    </div>
  );
}
