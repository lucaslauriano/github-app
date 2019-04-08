import React, { Component } from 'react';
import api from '../../services/api';

import Paper from '@material-ui/core/Paper';

export default class User extends Component {
  state = {
    user: {}
  };
  async componentDidMount() {
    this.loadUser();
  }

  loadUser = async page => {
    const { username } = this.props.match.params;
    const response = await api.get(`/users/${username}`);
    this.setState({ user: response.data });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="user-list">
        <h1>Lucas</h1>
      </div>
    );
  }
}
