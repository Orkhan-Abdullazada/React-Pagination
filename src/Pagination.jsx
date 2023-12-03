import React from 'react';

const Pagination = ({ data, postPerPage, setcurrentPage }) => {
  const pages = [];

  for (let index = 1; index <= Math.ceil(data / postPerPage); index++) {
    pages.push(index);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => (
        <button
          className='pagebtn'
          key={index}
          onClick={() => {
            setcurrentPage(page);
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
