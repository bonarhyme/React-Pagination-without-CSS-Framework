import React, { useState } from "react";
import { football } from "../variables/data";
import Pagination from "./Pagination";

const Table = () => {
  const [page, setPage] = useState(1);
  const handleClick = (e) => {
    setPage(e);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Long</th>
            <th>Short</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {football.map((x, i) => {
            if (i < 5) {
              const { long, short, country } = x;
              return (
                <tr key={i}>
                  <td>{long}</td>
                  <td>{short}</td>
                  <td>{country}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <Pagination
        page={page}
        pages={football.length / 5}
        onClick={handleClick}
      />
    </div>
  );
};

export default Table;
