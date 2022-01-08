import React from "react";

const Pagination = ({ page, pages, onClick }) => {
  return (
    <div>
      <ul className="pages-container">
        {[...Array(Math.ceil(pages)).keys()].map((x, i) => {
          return (
            <li
              key={i}
              className={page - 1 === i ? "active page-item" : "page-item"}
              onClick={(e) => onClick(e.target.innerText)}
            >
              {x + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
