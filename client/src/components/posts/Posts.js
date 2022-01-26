import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress, Container, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';
import { useGlobalContext } from '../../context';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Posts = ({ setCurrentId }) => {
  const theme = useTheme();

  const { category } = useGlobalContext();
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  let management = posts.filter((post) => post.tags[0] === 'Management');
  let production = posts.filter((post) => post.tags[0] === 'Production');
  let support = posts.filter((post) => post.tags[0] === 'Support');

  return !posts.length ? (
    <CircularProgress color={'#0288d1'} />
  ) : (
    <>
      {category === 'Management' ? (
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={3}
          style={{
            background: 'rgba(255, 255, 255,0.4)',
            borderRadius: '3px',
          }}
        >
          {management.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={4} lg={3} item>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      ) : null}

      {category === 'Production' ? (
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={3}
          style={{ background: 'rgba(255, 255, 255,0.4)', borderRadius: '3px' }}
        >
          {production.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={4} lg={3} item>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      ) : null}

      {category == 'Support' ? (
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={3}
          style={{ background: 'rgba(255, 255, 255,0.4)', borderRadius: '3px' }}
        >
          {support.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={4} lg={3} item>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      ) : null}
    </>
  );
};

export default Posts;
