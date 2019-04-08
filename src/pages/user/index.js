import React, { Component } from 'react';
import api from '../../services/api';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Moment from 'react-moment';
import Typography from '@material-ui/core/Typography';
import './user.css';

export default class User extends Component {
  state = {
    details: {},
    repos: [],
    username: ''
  };
  async componentDidMount() {
    const { username } = this.props.match.params;

    const responseDetails = await api.getDetails(username);
    const responseRepos = await api.getRepos(username);
    this.setState({
      details: responseDetails.data,
      repos: responseRepos.data,
      username: username
    });
  }
  goToUrl = url => {
    window.open(url, '_blank');
  };

  render() {
    const { details, repos } = this.state;
    console.log(repos);
    return (
      <div className="user-list">
        <Paper>
          <Grid container justify="center" alignItems="center">
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
                <Typography
                  className="title"
                  color="textSecondary"
                  gutterBottom
                >
                  {details.bio}
                </Typography>
                <Typography component="p">
                  <Moment format="YYYY/MM/DD">{details.created}</Moment>
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Repo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repos.map(repo => (
                <TableRow key={repo.id} number={repo.id}>
                  <TableCell component="th" scope="row">
                    {repo.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {repo.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={repo.url}
                    >
                      {repo.url}
                    </a>
                    {/* <button onClick={() => this.goToUrl(repo.url)}>URL</button> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
