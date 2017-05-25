import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import Fetch from './fetch';

const RecipeContainer = styled.div`
  padding: 0 2em;
`;

const Recipe = ({ match }) => (
  <Fetch url={`${match.params.layer}/${match.params.slug}/`}>
    {json => (
      <RecipeContainer>
        <Markdown source={json.recipe} />
      </RecipeContainer>
    )}
  </Fetch>
);

Recipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      layer: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Recipe;
