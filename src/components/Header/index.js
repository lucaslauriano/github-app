import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './header.css';

function Header(props) {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            GitHub API
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
