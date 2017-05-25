import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'universal-fetch';
import CircularProgress from 'material-ui/CircularProgress';
import styled from 'styled-components';

const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
`;

const base = 'https://taco-randomizer.herokuapp.com';

export default class Fetch extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
  }

  state = {
    json: null,
  }

  componentDidMount() {
    this.fetchAPI();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.fetchAPI();
    }
  }


  fetchAPI = () => {
    const { url } = this.props;
    fetch(`${base}/${url}`)
      .then(res => res.json())
      .then(json => this.setState({ json }));
  }

  render() {
    const { json } = this.state;
    return (
      <div>
        {json && this.props.children(json)}
        {!json &&
          <Loading>
            <CircularProgress />
          </Loading>
        }
      </div>
    );
  }
}
