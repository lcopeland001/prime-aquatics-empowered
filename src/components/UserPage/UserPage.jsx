import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Pool } from '@mui/icons-material';
import axios from 'axios';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const pools = useSelector((store) => store.pool);
  const pool = [
    { id: '1', facility_id: '1', name: 'Main Pool', type_id: '1', volume: '800'},
    { id: '2', facility_id: '1', name: 'Hot Tub', type_id: '4', volume: '200'},
    { id: '3', facility_id: '2', name: 'TR Pool 1', type_id: '2', volume: '400'},
    { id: '4', facility_id: '2', name: 'TR Pool 2', type_id: '2', volume: '400'},
  ]

  useEffect(() => {
    dispatch({ type: 'FETCH_POOLS' });
    dispatch({ type: "FETCH_USER_POOL", payload: { id: user.id } });
  }, []);

  const waterTest = () => {
    history.push('/test');
}

const TestHistory = () => {
  history.push('/history/:id');
}
  
  
  return (
    <div className="container">

      <h2>Welcome, {user.first_name}!</h2>

            <h2>Your Pools:</h2>
            <pre>{JSON.stringify(pools)}</pre>

        <section className="pools">
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {pool.map(pool => {
                  return (
                    <>
                      <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={pool.name}
                        secondary={
                          <React.Fragment  >
                            Volume: {pool.volume}
                          </React.Fragment>
                        }
                      />
                      &nbsp;
                      &nbsp;

                      <Button
                        type="button"
                        variant="contained"
                        // endIcon={<EditOutlinedIcon />}
                        onClick={TestHistory}>
                        View Test History
                      </Button>
                      &nbsp;
                      <Button
                        type="button"
                        variant="contained"
                        // endIcon={<EditOutlinedIcon />}
                        onClick={waterTest}>
                        Perform Water Test
                      </Button>

                    </ListItem>
                    <Divider variant="inset" component="li" />
                    </>
                  );
              })}
          </List>   
        </section>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
