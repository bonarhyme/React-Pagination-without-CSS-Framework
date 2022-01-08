import React, { useState } from "react";
import { football } from "../variables/data";
import Pagination from "./Pagination";

const Table = () => {
  const pageSize = 5;
  const pageLength = football.length / pageSize;
  const [page, setPage] = useState(1);
  const [list, setList] = useState(football.slice(page - 1, page * pageSize));

  const handlePage = (thePage) => {
    setPage(thePage);
    const t = football.slice((thePage - 1) * pageSize, thePage * pageSize);
    setList(t);
  };

  const prevHandler = (thePage) => {
    if (thePage === 1) {
      handlePage(1);
    } else {
      handlePage(Number(thePage) - 1);
    }
  };

  const nextHandler = (thePage, thePageLength) => {
    if (thePage < thePageLength) {
      handlePage(Number(thePage) + 1);
    }
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
        onClick={(pageEvent) => {
          handlePage(pageEvent);
        }}
        prevHandler={() => prevHandler(page)}
        nextHandler={() => nextHandler(page, pageLength)}
      />
    </div>
  );
};

export default Table;
