import React, { Component } from 'react';
import api from '../../services/api';
import Paper from '@material-ui/core/Paper';

import './user.css';

export default class User extends Component {
  state = {
    details: {}
  };
  async componentDidMount() {
    const { username } = this.props.match.params;

    const response = await api.get(`users/${username}`);

    this.setState({ details: response.data });
  }

  render() {
    const { details } = this.state;

    return (
      <div className="user-list">
        <Paper>
          <div>testst</div>;
        </Paper>
      </div>
    );
  }
}
