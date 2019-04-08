import React, { Component } from 'react';
import api from '../../services/api';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import { Link } from 'react-router-dom';
import './main.css';

export default class Main extends Component {
  state = {
    users: [],
    links: {},
    usersPerPage: 10,
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

  loadUsers = async (page, usersPerPage) => {
    const response = await api.get(
      `/users?since=${page}&per_page=${usersPerPage}`
    );
    const { users, _links } = response.data;
    this.setState({ users: users, links: _links, page });
  };

  render() {
    const { users } = this.state;
    return (
      <div className="user-list">
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell align="left">Login</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Link to={`user/${user.login}`}>{user.login}</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow />
              <div className="actions">
                <button onClick={this.prevPage}>Previous</button>
                <button onClick={this.nextPage}>Next</button>
              </div>
            </TableFooter>
          </Table>
        </Paper>
      </div>
    );
  }
}
