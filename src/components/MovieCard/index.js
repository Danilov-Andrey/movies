import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  border-radius: 5px 5px 0px 0px;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin: 1rem;
`;

const Wrapper = styled.div`
  margin: 10px 0;
  box-shadow: 0 0px 10px #a2a2a2;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const IMAGE_API = 'https://image.tmdb.org/t/p/w342';

const MovieCard = ({ imageURL, id, title }) => {
  return (
    <div className="col-lg-3">
      <Wrapper>
        <Img src={`${IMAGE_API}${imageURL}`} alt="" />
        <Title>{title}</Title>
      </Wrapper>
    </div>
  );
};

// MovieCard.propTypes = {};

export default MovieCard;
