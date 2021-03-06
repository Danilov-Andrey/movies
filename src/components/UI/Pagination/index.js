import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled(NavLink)`
  padding: 10px 30px;
  background-color: #fff;
  border-radius: 25px;
  border: 2px solid #5fb8ff;
  text-decoration: none;
  margin: 0px 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  .selected {
    border: 2px dashed #5fb8ff;
  }
`;

const Pagination = ({ totalPages, currentPage, location, match }) => {
  const nextPage = +currentPage + 1;
  const prevPage = +currentPage - 1;
  const { url } = match;
  let pagination;
  const parsedSearch = queryString.parse(location.search);
  const id = parsedSearch.id ? `&id=${parsedSearch.id}` : '';
  const clientWidth = document.documentElement.clientWidth > 500;

  if (!clientWidth && totalPages > 1) {
    pagination = (
      <>
        {prevPage === 0 ? null : <Link to={`${url}?page=${prevPage}${id}`}>{prevPage}</Link>}
        <Link activeClassName="selected" to={`${url}?page=${currentPage}${id}`}>
          {currentPage}
        </Link>
        <Link to={`${url}?page=${nextPage}${id}`}>{nextPage}</Link>
      </>
    );
  } else if (prevPage === 0 && clientWidth && totalPages > 1) {
    pagination = (
      <>
        <Link to={`${url}?page=1${id}`}>Start</Link>
        <Link activeClassName="selected" to={`${url}?page=${currentPage}${id}`}>
          {currentPage}
        </Link>
        <Link to={`${url}?page=${nextPage}${id}`}>{nextPage}</Link>
        <Link to={`${url}?page=${totalPages}${id}`}>End</Link>
      </>
    );
  } else if (nextPage > totalPages && clientWidth && totalPages > 1) {
    pagination = (
      <>
        <Link to={`${url}?page=1${id}`}>Start</Link>
        <Link to={`${url}?page=${prevPage}${id}`}>{prevPage}</Link>
        <Link activeClassName="selected" to={`${url}?page=${currentPage}${id}`}>
          {currentPage}
        </Link>
      </>
    );
  } else if (prevPage !== 0 && clientWidth && totalPages > 1) {
    pagination = (
      <>
        <Link to={`${url}?page=1${id}`}>Start</Link>
        <Link to={`${url}?page=${prevPage}${id}`}>{prevPage}</Link>
        <Link activeClassName="selected" to={`${url}?page=${currentPage}${id}`}>
          {currentPage}
        </Link>
        <Link to={`${url}?page=${nextPage}${id}`}>{nextPage}</Link>
        <Link to={`${url}?page=${totalPages}${id}`}>End</Link>
      </>
    );
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <Wrapper>{pagination}</Wrapper>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withRouter(Pagination);
