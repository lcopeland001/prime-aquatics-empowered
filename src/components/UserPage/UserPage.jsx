import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Pool } from '@mui/icons-material';

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const pool = useSelector((store) => store.pool)

  useEffect(() => {
    dispatch({ type: 'FETCH_POOLS' });
  }, []);
  
  return (
    <div className="container">
      <h2>Welcome, {user.first_name}!</h2>

      <section className='pool-list'>
        {pool.map(pool => {
          return (
            <>
            {pool.name} 
            </>
          );
        })}
      </section>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
