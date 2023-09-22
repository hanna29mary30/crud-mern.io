import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 5;
  const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

  const startPage = Math.max(1, currentPage - halfMaxVisiblePages);
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => handlePageClick(page)}>
              {page}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
