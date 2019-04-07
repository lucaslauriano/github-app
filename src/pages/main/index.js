import React, { Component } from 'react';
import api from '../../services/api';
import { Redirect } from 'react-router';
import './main.css';

export default class Main extends Component {
  state = {
    users: [],
    links: {},
    page: 1
  };

  componentDidMount() {
    this.loadUsers();
  }

  nextPage = () => {
    const { users } = this.state;
    this.loadUsers(users[users.length - 1].id);
  };
  prevPage = () => {};

  loadUsers = async page => {
    const response = await api.get(`/users?since=${page}`);

    this.setState({ users: response.data.users, links: response.data._links });
  };

  render() {
    const { users } = this.state;
    return (
      <div className="user-list">
        {users.map(user => (
          <article key={user.id}>
            <strong>{user.login}</strong>
            <p>{user.id}</p>

            <a href=""> Acessar</a>
          </article>
        ))}
        <div className="actions">
          <button onClick={this.prevPage}>Previous</button>
          <button onClick={this.nextPage}>Next</button>
        </div>
      </div>
    );
  }
}
