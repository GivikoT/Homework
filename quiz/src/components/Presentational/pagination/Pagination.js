/* eslint-disable react/prop-types */
import React from "react";
import "./pagination.css";

const Pagination = ({ totalPages, page, handlePageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={
              pageNumber === page
                ? "pagination-button active"
                : "pagination-button"
            }
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
