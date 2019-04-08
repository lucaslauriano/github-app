import React, { Component } from 'react';
import api from '../../../services/api';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Moment from 'react-moment';
import Typography from '@material-ui/core/Typography';

import './details.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username
    };
  }

  state = {
    details: {},
    username: ''
  };

  async componentDidMount() {
    console.log(this.props.username);
    const { username } = this.props.match.username;

    const response = await api.get(`users/${username}/details`);

    this.setState({ details: response.data });
  }

  render() {
    const { details } = this.state;
    return (
      <div className="user-list">
        <Card className="card-user">
          <CardHeader
            avatar={
              <Avatar
                aria-label="Recipe"
                src={details.avatar}
                className="avatar"
              />
            }
            title={details.name}
            subheader={details.location}
          />
          <CardContent>
            <Typography className="pos" color="textSecondary">
              ID: {details.id} - Login: {details.login}
            </Typography>
            <Typography className="title" color="textSecondary" gutterBottom>
              {details.bio}
            </Typography>

            <Typography component="p">
              <Moment format="YYYY/MM/DD">{details.created}</Moment>
              <br />
            </Typography>
          </CardContent>
        </Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell align="left">Login</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos.map(repo => (
              <TableRow key={repo.id}>
                <TableCell component="th" scope="row">
                  {repo.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {repo.login}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Link to={`${repo.url}`}>URL REPO</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Details;
