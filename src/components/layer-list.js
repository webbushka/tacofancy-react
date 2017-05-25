import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import styled from 'styled-components';
import Fetch from './fetch';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LayerList = ({ match }) => (
  <Fetch url={`${match.params.layer}/`}>
    {json => (
      <div>
        <List>
          {json.map(item => (
            <StyledLink to={`/recipes/${match.params.layer}/${item.slug}`} key={item.slug + item.name}>
              <ListItem>
                {item.name}
              </ListItem>
            </StyledLink>
          ))}
        </List>
      </div>
    )}
  </Fetch>
);

LayerList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      layer: PropTypes.string,
    }),
  }).isRequired,
};

export default LayerList;
