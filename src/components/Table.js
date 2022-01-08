import React, { useState } from "react";
import { football } from "../variables/data";
import Pagination from "./Pagination";

const Table = () => {
  const pageLength = football.length / 5;
  const [page, setPage] = useState(1);
  const [list, setList] = useState(football.slice(page - 1, page * 5));

  const handlePage = (thePage) => {
    setPage(thePage);
    const t = football.slice((thePage - 1) * 5, thePage * 5);
    setList(t);
  };
  return (
    <div className="table-container">
      <table className="table">
        <caption>Pagination in ReactJS without a CSS Framework</caption>
        <thead>
          <tr>
            <th>Long</th>
            <th className="center">Short</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {list.map((x, i) => {
            const { long, short, country } = x;
            return (
              <tr key={i}>
                <td>{long}</td>
                <td className="center">{short}</td>
                <td>{country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        page={page}
        pages={pageLength}
        onClick={(e) => {
          handlePage(e);
        }}
      />
    </div>
  );
};

export default Table;
