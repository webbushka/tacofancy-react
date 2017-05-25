import React from 'react';
import Divider from 'material-ui/Divider';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import Fetch from './fetch';

const RecipeContainer = styled.div`
  padding: 0 2em;
`;

const Home = () => {
  return (
    <Fetch url="random/">
      {json => (
        <div>
          {Object.keys(json).map((key) => {
            const recipe = json[key];
            return (
              <RecipeContainer key={recipe.slug}>
                <Markdown source={recipe.recipe} />
                <Divider />
              </RecipeContainer>
            );
          })}
        </div>
      )}
    </Fetch>
  );
};

export default Home;
