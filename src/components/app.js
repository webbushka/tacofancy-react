import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';

import Home from './home';
import LayerList from './layer-list';
import Recipe from './recipe';

const Container = styled.div`
  padding-top: 70px;
`;

const StyledAppBar = styled(AppBar)`
  top: 0;
  left: 0;
  right: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default class App extends Component {
  state = {
    drawer: false,
  }

  openDrawer = () => this.setState({ drawer: true })
  closeDrawer = () => this.setState({ drawer: false })

  render() {
    const { drawer } = this.state;
    return (
      <Router>
        <div>
          <StyledAppBar style={{ position: 'fixed' }} title="Tacos" onLeftIconButtonTouchTap={this.openDrawer} />
          <Drawer open={drawer} docked={false} onRequestChange={this.closeDrawer}>
            <StyledLink to="/layer/base_layers">
              <MenuItem onTouchTap={this.closeDrawer}>Base Layers</MenuItem>
            </StyledLink>
            <StyledLink to="/layer/condiments">
              <MenuItem onTouchTap={this.closeDrawer}>Condiments</MenuItem>
            </StyledLink>
            <StyledLink to="/layer/mixins">
              <MenuItem onTouchTap={this.closeDrawer}>Mixins</MenuItem>
            </StyledLink>
            <StyledLink to="/">
              <MenuItem onTouchTap={this.closeDrawer}>Random Recipe</MenuItem>
            </StyledLink>
            <StyledLink to="/layer/seasonings">
              <MenuItem onTouchTap={this.closeDrawer}>Seasonings</MenuItem>
            </StyledLink>
            <StyledLink to="/layer/shells">
              <MenuItem onTouchTap={this.closeDrawer}>Shells</MenuItem>
            </StyledLink>
          </Drawer>

          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/layer/:layer" component={LayerList} />
            <Route path="/recipes/:layer/:slug" component={Recipe} />
          </Container>
        </div>
      </Router>
    );
  }
}
